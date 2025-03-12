const Photo = require('../models/Photo');
const fs = require('fs');
const path = require('path');

exports.getAllPhotos = async (req, res) => {
  const page = req.query.page || 1;
  const photosPerPage = 3;

  const totalPhotos = await Photo.find().countDocuments();
  const photos = await Photo.find({})
  .sort('-dateCreated')
  .skip((page - 1) * photosPerPage)//ikinci sayfadayız (2-1)*2=2 ilk iki fotoyu geç 3 ve 4'ü getir
  .limit(photosPerPage);

  res.render('index', {
    photos,
    current: page,
    total: Math.ceil(totalPhotos / photosPerPage),// 5/2=2.5 yani 3 sayfa
  });


  /* const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  }); */
};

exports.getPhoto = async (req, res) => {
  //:parametre bu yoldaki parametreyi yakalamak için
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

exports.createPhoto = async (req, res) => {
  const uploadDir = path.join(__dirname, '../public/uploads');

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let photo = await Photo.create({
    ...req.body,
  });

  let fileExtension = path.extname(uploadedImage.name);
  let newFileName = photo._id + fileExtension;
  let uploadPath = path.join(__dirname, '/../public/uploads', newFileName);

  uploadedImage.mv(uploadPath, async () => {
    photo.image = '/uploads/' + newFileName;
    await photo.save();
    res.redirect('/');
  });
};

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  await photo.save();
  res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
