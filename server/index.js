const accountSid = "AC6bce9e132332738048f1aee0c827d7fe";
const authToken = "[AuthToken]";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Socorro, por favor",
    from: "+19894743295",
    to: "+5585987305363",
  })
  .then((message) => console.log(message.sid))
  .done();
