var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(express.static('public'));
var PORT = 3000;


var contact = [
    {
        name: "Charlotte Henneger",
        email: "chenneger@gmail.com",
        phone: "385-365-8791",
        question: "Hey, I was looking at your list of truffels and I noticed that there isn't a price for your royal black truffels from New York. What are those prices? Thanks for your help. "
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/all", function (req, res) {
    contact.map(function (x) {
        res.json(x);
    });
});


function Contact(name, email, phone, question) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.question = question;
}

app.post("/api/new", function (req, res) {
    var name = $("#nameInput").val().trim();
    var email = $("#emailInput").val().trim();
    var phone = $("#phoneInput").val().trim();
    var question = $("#question").val().trim();

    var newContact = req.body;
    var newPerson = new Contact(naem, email, phone, question);
    console.log(newPerson);

    contact.push(newPerson);

    res.json(contact);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});