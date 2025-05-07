// C9VGXVJWjsJMi1Pr
//mongodb+srv://sonupandey17001:<password>@cluster0.yxni570.mongodb.net/Cars

const express = require('express')
const mongoose = require ('mongoose')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sonupandey17001:<password>@cluster0.yxni570.mongodb.net/Cars')

console.log("Database Connected")

const VehicleSchema = new mongoose.Schema({
    name : String,
    price : Number,
    color : String
})

const Vehicle = mongoose.model('Vehicle',VehicleSchema)

app.get('/' , (req,res) =>{
    res.send("Welcome to Cars Collection !!!")
})

 app.get('/coll',async(req,res)=>{
     const coll = await Vehicle.find();
     res.send(coll);
})

app.post('/add-vehicle',async(req,res)=>{
    const{name,price,color} = req.body

    const newColl = new Vehicle({name,price,color});

    await newColl.save();
})

app.delete('/delete-vehicle/:name',async(req,res)=>{
    const{name} = req.params

    const vehicle = await Vehicle.findOneAndDelete({name});
})

app.put('/update-vehicle',async(req,res)=>{
    
    const{name,color} = req.body
    const vehicle = await Vehicle.findOneAndUpdate({name,color});

    
})

app.listen(PORT);
