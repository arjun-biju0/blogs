const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const { User } = require('./models/UserModel');
const { Blog } = require('./models/BlogModel');

const app=express();

app.use(cors());
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    console.log("mongodb connected");
    
}).catch(err=>{
    console.log(err);
    
})


app.post('/register',async (req,res)=>{
    const {name,username,email,password}=req.body;
    console.log(name,email,password);
    try {
        const user= new User({
            fullname: name,
            username:username,
            email:email,
            password:password
        })
        await user.save()
        res.json({message:"Data saved successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,error:error.message})
    }
})


app.post('/login',async(req,res)=>{
    const {username,password}=req.body
    const user=await User.findOne({username});
    if(!user){
        return res.status(400).send({message:"user does not exist"})
    }
    if(user.password===password){
        return res.status(200).json({message:"login successful"})
    }    
    res.send(400).json({message:"wrong password"})
    
})

app.post('/addBlog',async (req,res)=>{
    console.log(req.body);
    const {title,content}=req.body

    try {
        const blog= new Blog({
            title:title,
            content:content
        })
        await blog.save()
        res.json({message:"Data saved successfully"})
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,error:error.message})
    }
    
})

app.get('/getAllBlogs', async(req,res)=>{
    try {
        const result= await Blog.find();
        res.status(200).json({blogs:result})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,error:error.message})
    }
})

app.post('/editBlog', async(req,res)=>{

})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})