const Photo = require('../models/Photo');
const fs = require('fs');
const path = require('path');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add');
};

exports.getEditPage = async (req, res) => {
  //burada sadece edit sayfası çağrılıyor(get request) edit işlemi updatePhoto ile yapılıyor(put request)
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
