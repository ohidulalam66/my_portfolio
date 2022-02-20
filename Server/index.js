const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;
const { ObjectID } = require("bson");

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.5qzra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("my-portfolio");
    const projectsCollection = database.collection("projects");

    app.post("/projectBuild", async (req, res) => {
      const project = req.body;
      const result = await projectsCollection.insertOne(project);
      res.json(result);
    });

    app.get("/getProjects", async (req, res) => {
      const cursor = projectsCollection.find({});
      const projects = await cursor.toArray();
      res.send(projects);
    });

    //   app.get('/getPizza/:id', async (req, res) => {
    //     const id = req.params.id
    //     const query = { _id: ObjectId(id) }
    //     const pizza = await pizzaCollection.findOne(query)
    //     res.send(pizza)
    //   })

    //   app.put('/updatePizza/:id', async (req, res) => {
    //     const id = req.params.id
    //     const updatedPizza = req.body
    //     const filter = { _id: ObjectId(id) }
    //     const options = { upsert: true }
    //     const updateDoc = {
    //       $set: {
    //         name: updatedPizza.name,
    //         image: updatedPizza.image,
    //         price: updatedPizza.price,
    //         star: updatedPizza.star,
    //         description: updatedPizza.description,
    //       },
    //     }
    //     const result = await pizzaCollection.updateOne(filter, updateDoc, options)
    //     res.json(result)
    //   })

    //   app.delete('/deletePizzas/:id', async (req, res) => {
    //     const id = req.params.id
    //     const query = { _id: ObjectId(id) }
    //     const result = await pizzaCollection.deleteOne(query)
    //     res.json(result)
    //   })
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("my portfolio server Running");
});

app.listen(port, () => {
  console.log(`my portfolio server Running:${port}`);
});
