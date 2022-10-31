const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.get("/test", function (req, res) {
  res.send("Testing the Site on deployment");
});

const options = {
  url: '/upload',
  json: true,
  body: {
      name: 'John Doe',
      job: 'Content Writer'
  }
};
// post the image direclty to the s3 bucket
app.post(options, (error, response, body)=> {
  if (!error && response.statusCode == 200) {
      console.log(body);
      console.log(response.statusCode);
  }
})

app.listen(process.env.PORT || 5000);
module.exports = app;
