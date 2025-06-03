import express from 'express';
const app = express();
const PORT = process.env.PORT || 8383;
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Cho phép tất cả các miền
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/',(req,res) => {
    res.send("<h1>Hello World</h1>")
})
app.post('/sign',(req,res) => {
    const {username,password} = req.body;
    if(username.length <= 6) res.json({message:"username it too short"});
    if(password.length <= 6) res.json({message:"password it too short"});
    res.json({message:`Success sign in`,username:username,password:password});
})
app.listen(PORT,() => {console.log("Server started with PORT:" + PORT)});