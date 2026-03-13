const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({

  campaignName: String,

  attacks: [String], 

  departments: [String],

  template: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Campaign", CampaignSchema);
