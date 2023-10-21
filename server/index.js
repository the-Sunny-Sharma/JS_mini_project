const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/saveProdInfo", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("addedProds");
  const record = {
    productname: req.body.productname,
    description: req.body.description,
    mobile: req.body.mobile,
    amt: req.body.amt,
    perQty: req.body.perQty,
    perQtyUnit: req.body.perQtyUnit,
    totQty: req.body.totQty,
    totQtyUnit: req.body.totQtyUnit,
    imgLink: req.body.imgLink,
  };
  coll
    .insertOne(record)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.get("/getProdData", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("addedProds");
  coll
    .find({})
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.delete("/rmProdData", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("addedProds");
  const data = { productname: req.body.productname };
  coll
    .deleteOne(data)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.put("/modifyProdInfo", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("addedProds");
  coll
    .updateOne(
      { "productname": req.body.productname },
      {
        "$set": {
          "description": req.body.description,
          "mobile": req.body.mobile,
          "amt": req.body.amt,
          "perQty": req.body.perQty,
          "perQtyUnit": req.body.perQtyUnit,
          "totQty": req.body.totQty,
          "totQtyUnit": req.body.totQtyUnit,
          "imgLink": req.body.imgLink,
        }
      }
    )
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.post("/addProdToCart", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("ProdInCart");
  const record = {
    imgSrc: req.body.imgSrc,
    title: req.body.title, 
    qty: req.body.qty, 
    amt: req.body.amt,
  };
  coll
    .insertOne(record)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.get("/getProdToCart", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("ProdInCart");
  coll
    .find({})
    .toArray()
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.listen(9000, () => {
  console.log("ready to serve @ 9000");
});
