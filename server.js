import express from 'express';
const app = express();
const PORT = process.env.PORT || 8383;

app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>")
})
app.listen(PORT,() => {console.log("Server started with PORT:" + PORT)});