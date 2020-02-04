const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["Walk the dog", "Eat food"];
const workList = [];

app.get("/", function(req, res){
  //day = date.getDateFn();
  day = date.getDayFn();

  res.render('list', {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  const item = req.body.newItem;

  if( req.body.list === "Work" ){
    workList.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work", newListItems: workList});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
