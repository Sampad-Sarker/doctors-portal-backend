const express = require('express')
const app = express()
const port = process.env.PORT || 5000 ||3001 ||4200;





const MongoClient = require('mongodb').MongoClient;
let uri = process.env.DB_PATH;;
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   //const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   //client.close();
// });




app.get('/', (req, res) => {
    res.send('Doctors portal backend!');
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))