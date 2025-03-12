const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db',{
});

//create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a Photo
/*Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});*/

// read a Photo
/*async function getPhotos() {
  try {
    const photos = await Photo.find({});
    console.log(photos);
  } catch (err) {
    console.error(err);
  }
}
getPhotos();*/

//update Photo
/* async function updatePhoto(id) {
  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(
      id, 
      {
        title: "Photo Title 1 updated",
        description: "Photo description 1 updated",
      },
      { new: true } // Ensures the updated document is returned
    );
    console.log(updatedPhoto);
  } catch (err) {
    console.error(err);
  }
}

const id = "67cea53c8413a9c9bd4da543";
updatePhoto(id); */

//delete photo
/* async function deletePhoto(id) {
  try {
    const deletePhoto = await Photo.findByIdAndDelete(id);
    console.log("Photo is removed...");
  } catch (err) {
    console.error(err);
  }
}
const id = "67cea6cfb0e89799e1fc4e79";
deletePhoto(id);  */