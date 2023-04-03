
const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  
});

const FormData = mongoose.model("FormData", formDataSchema);

module.exports = FormData;