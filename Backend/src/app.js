const express =require('express');
const multer =require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');




const app = express();
app.use(cors());

app.use(express.json()); //if the data is comming in the form of raw formate then we use this 


const upload = multer({storage:multer.memoryStorage()}); //this is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store the image in the memory of the server. It is not stored in the database. It is stored in the memory of the server. It is used to store


app.post('/create-post', upload.single("image"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const result = await uploadFile(req.file.buffer);
    console.log(result);
    const post =await postModel.create({
        image: result.url,
        caption: req.body.caption
    
})
return res.status(201).json({
    message: "Post created successfully",
    post: post
})
})

app.get('/get-posts', async (req, res) => {
    const posts= await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    })
})




module.exports = app;
