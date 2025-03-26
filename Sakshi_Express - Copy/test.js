const express = require('express')
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Server is running!'); 
});
app.get("/home",(req,res) => {
    res.send("HElLO")
});


app.listen(3000);