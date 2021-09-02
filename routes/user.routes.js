const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  res.render('logged', {
    username: req.user.displayName,
    photo: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', (req, res) => {
  res.render('profileSettings');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;