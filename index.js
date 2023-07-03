
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rbc6:123@cluster-es.x3jxl36.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const app = express();
const routes = require('./src/routes')

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.json());
app.use(routes)

app.listen(3333);

