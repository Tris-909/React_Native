const {CREDENTIAL_EMAIL, CREDENTIAL_PASSWORD, DB_IDENTIFICATION} = process.env;

const uri = `mongodb+srv://${CREDENTIAL_EMAIL}:${CREDENTIAL_PASSWORD}@${DB_IDENTIFICATION}.mongodb.net/`;

module.exports = {
  uri,
};
