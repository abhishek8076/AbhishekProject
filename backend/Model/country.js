const mongoose = require("mongoose");
const CountryModel = new mongoose.Schema({
    name: String,
    code: String,
    states: [{
      name: String,
      code: String,
      cities: [{ name: String }]
    }]
  });
// lkhjkj
  module.exports = mongoose.model("Country", CountryModel);