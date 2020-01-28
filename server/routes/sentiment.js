const express = require('express');
const router = express.Router();
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const sentiment = require('multilang-sentiment');
const languages = require('../languages.json');

function getLanguageCode(text) {
  const detectedLang = lngDetector.detect(text)[0][0];
  const lang = languages.filter(lang =>
    lang.name.toLowerCase().includes(detectedLang),
  );
  return lang[0].code;
}

router.post('/getLanguage', (req, res) => {
  const { text } = req.body;
  const langCode = getLanguageCode(text);

  res.json({
    language: langCode,
  });
});

router.post('/getSentiment', (req, res) => {
  const { text } = req.body;
  const langCode = getLanguageCode(text);
  const result = sentiment(text, langCode);
  if (result.words.length === 0) {
    res.json({
      error: 'Aucun mot détecté',
    });
  } else {
    console.log('langCode :', langCode);
    console.log('result :', result);
    res.json({
      sentiment: result.score,
    });
  }
});

module.exports = router;
