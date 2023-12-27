const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDb = require('./Utils/database');
const {User} = require('./Models/user.model');
const {Track} = require('./Models/track.model');
const {userExisted, invalidPassword} = require('./Utils/validations');
const jwt = require('jsonwebtoken');
const auth = require('./Middleware/validateToken');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
connectDb();

app.post('/signup', async (req, res) => {
  const {email, password} = req.body;

  try {
    // Validations
    const existingUser = await userExisted(email);
    if (existingUser) {
      return res.send({
        message: 'Email is already in used',
        code: 'email_in_use',
      });
    }

    const invalid = invalidPassword(password);
    if (invalid) {
      return res.send({
        message: 'Password must be longer than 8 characters',
        code: 'password_length_invalid',
      });
    }

    // Create hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save a new user into User database
    const newUser = new User({email, password: hashedPassword});
    const user = await newUser.save();

    return res.status(200).send({
      message: 'Register a user successfully',
      code: 'success',
      response: {
        id: user._id,
        email: email,
      },
    });
  } catch (error) {
    console.error(error);
  }
});

app.post('/login', async (req, res) => {
  const {email, password} = req.body;
  try {
    const existingUser = await User.findOne({email});
    if (!existingUser) {
      return res.send({
        message: 'User has not been registered yet',
        code: 'not_yet_register',
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordCorrect) {
      return res.send({
        message: 'Password is not correct',
        code: 'invalid_password',
      });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
        email: existingUser.email,
      },
      process.env.ACCESS_TOKEN,
    );

    return res.status(200).send({
      message: 'Successfully login',
      code: 'success',
      response: {
        user: {
          id: existingUser._id,
          email: existingUser.email,
        },
        token: token,
      },
    });
  } catch (error) {
    console.log('error', error);
  }
});

app.get('/tracks', auth, async (req, res) => {
  try {
    const tracks = await Track.find({userId: req.user._id});

    return res.status(200).send({
      message: 'Success',
      code: 'success',
      response: tracks,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      message: 'Unauthorized',
      code: 'failed_unauthentication',
    });
  }
});

app.post('/track', auth, async (req, res) => {
  try {
    const {name, locations} = req.body;

    if (!name || !locations) {
      return res.status(422).send({
        message: 'You must provide a name and locations',
        code: 'missing_payload',
      });
    }

    const track = new Track({name, locations, userId: req.user._id});
    await track.save();
    return res.status(201).send({
      message: 'Successfully create a track',
      code: 'success',
      response: track,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
