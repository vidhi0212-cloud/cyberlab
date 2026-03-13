const templates = {

  "Credential Phishing": {
    subject: "Password Reset Required",
    body: "Your account password has expired. Please login immediately to reset your password."
  },

  "Malware Attachment": {
    subject: "Important Document",
    body: "Please review the attached document and confirm."
  },

  "Fake Login Page": {
    subject: "System Login Verification",
    body: "Your account needs verification. Login to confirm your identity."
  },

  "Payment Fraud": {
    subject: "Invoice Payment Pending",
    body: "An urgent payment request has been generated. Please verify immediately."
  },

  "Link Manipulation": {
    subject: "Shared Document",
    body: "A document has been shared with you. Click the link to access it."
  },

  "CEO Fraud": {
    subject: "Urgent Request from CEO",
    body: "I need you to handle an urgent task. Reply immediately."
  }

};

module.exports = templates;
