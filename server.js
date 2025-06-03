import express from 'express';
const app = express();
const PORT = process.env.PORT || 8383;

app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>")
})
app.get('/test',(req,res) => {
    res.json({message:"Hello World this is file"});
})
app.listen(PORT,() => {console.log("Server started with PORT:" + PORT)});