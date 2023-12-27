const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://${process.env.CREDENTIAL_EMAIL}:${process.env.CREDENTIAL_PASSWORD}@${process.env.DB_IDENTIFICATION}.mongodb.net/`,
    );
    console.log(`MongoDB connected ${connection.connection.host}`);
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = connectDb;
