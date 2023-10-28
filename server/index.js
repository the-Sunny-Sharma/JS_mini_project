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
    un: req.body.un,
    prodId: req.body.prodId,
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

app.get("/getProdDataFarm", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("addedProds");
  const un = req.query.username;
  coll
    .find({ un: un })
    .toArray()
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
  const data = { prodId: req.body.prodId };
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
      {
        prodId: req.body.prodId,
      },
      {
        $set: {
          productname: req.body.productname,
          un: req.body.un,
          description: req.body.description,
          mobile: req.body.mobile,
          amt: req.body.amt,
          perQty: req.body.perQty,
          perQtyUnit: req.body.perQtyUnit,
          totQty: req.body.totQty,
          totQtyUnit: req.body.totQtyUnit,
          imgLink: req.body.imgLink,
        },
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
  const prodId = req.body.prodId;

  // Check if a document with the given prodId exists in the collection
  coll
    .findOne({ prodId: prodId })
    .then((existingProduct) => {
      if (existingProduct) {
        // If the product already exists, increment totQtyAdd
        const updatedQty = existingProduct.totQtyAdd + 1;
        const temp = parseFloat(existingProduct.amt)
        const updatedPrice = temp * updatedQty;
        // Update the existing document
        return coll.updateOne(
          { prodId: prodId },
          { $set: { totQtyAdd: updatedQty, totPrice: updatedPrice } }
        );
      } else {
        // If the product doesn't exist, insert a new document
        const record = {
          prodId: prodId,
          title: req.body.title,
          description: req.body.description,
          mobile: req.body.mobile,
          imgSrc: req.body.imgSrc,
          qty: req.body.qty,
          amt: req.body.amt,
          totQtyAdd: 1, // Set initial totQtyAdd to 1 for a new product
          totPrice: parseFloat(req.body.amt), // You can calculate total price based on totQtyAdd and amt
        };
        return coll.insertOne(record);
      }
    })
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

app.delete("/delProdFromCart", (req, res) => {
  const url = "mongodb://0.0.0.0:27017";
  const client = new MongoClient(url);
  const db = client.db("webharvester");
  const coll = db.collection("ProdInCart");
  const data = { prodId: req.body.prodId };
  coll
    .deleteOne(data)
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.listen(9000, () => {
  console.log("ready to serve @ 9000");
});
