const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String
})

const postModel = mongoose.model('Post', postSchema);
// this post and postschema is used to create a post in the database. It has two fields, image and caption. The image field is a string that contains the URL of the image. The caption field is a string that contains the caption of the image.
// posts can be visible in mongodb compass


// future 
/*
user={
name:string,
email:string,
password:string,
profileImage:string,
}
*/
// post name collection is used to store the posts of the users. Each post has an image and a caption. The image is a string that contains the URL of the image. The caption is a string that contains the caption of the image. The post collection is used to store the posts of the users. Each post has an image and a caption. The image is a string that contains the URL of the image. The caption is a string that contains the caption of the image.
// use nmae collection is used to store the users of the application. Each user has a name, email, password and profile image. The name is a string that contains the name of the user. The email is a string that contains the email of the user. The password is a string that contains the password of the user. The profile image is a string that contains the URL of the profile image of the user.
// user will be in future
module.exports = postModel;