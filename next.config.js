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
        // BASE_URL: "http://localhost:3000",
        BASE_URL: "https://disney-nextjs.herokuapp.com",
        GOOGLE_CLIENT_ID:
          "580352229470-20fke8ubv0eqg4c35635j2aph8rbubpd.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "95NafQv-zDw2eoKtFhTZKVdp",
      },
    };
  } else if (PHASE_PRODUCTION_SERVER) {
    return {
      env: {
        MONGO_URI:
          "mongodb+srv://admin:admin@cluster0.qbmgm.mongodb.net/disney-dev?retryWrites=true&w=majority",
        BASE_URL: "https://disney-nextjs.herokuapp.com",
        GOOGLE_CLIENT_ID:
          "580352229470-20fke8ubv0eqg4c35635j2aph8rbubpd.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET: "95NafQv-zDw2eoKtFhTZKVdp",
      },
    };
  }
};
