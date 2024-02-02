const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
app.use(express.json());

const Posts=[
     {
        title:"About Scrum",
        image:"https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=sph",
        content:"Scrum is an Agile framework in which small, self-organized teams deliver high-quality software quickly. Scrum development values simplicity, creating adaptable teams that make deliveries based on stakeholder input. To make this work, Scrum devs break large projects into small steps. "
     }

]


app.get("/getPosts",function(req,res){
    res.json({
        message:"Success",
        data:Posts
    })

})

app.post("/createPost",function(req,res){
    // We will parse the data from the frontend
    let data=req.body;

    Posts.push(data);

    res.json({
        message:"successfully Added"
    })

    //

})


app.listen(8070,function(){
    console.log("Server running on port 8070")
})



