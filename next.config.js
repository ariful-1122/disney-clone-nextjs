const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require("next/constants");

module.exports = () => {
  if (PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGO_URI:
          "mongodb+srv://admin:admin@cluster0.qbmgm.mongodb.net/disney-dev?retryWrites=true&w=majority",
        BASE_URL: "http://localhost:3000",
      },
    };
  }
  if (PHASE_PRODUCTION_SERVER) {
    return {
      env: {
        MONGO_URI:
          "mongodb+srv://admin:admin@cluster0.qbmgm.mongodb.net/disney-dev?retryWrites=true&w=majority",
        BASE_URL: "",
      },
    };
  }
};
