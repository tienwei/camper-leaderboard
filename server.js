const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 4000;
const app = express();

const router = express.Router();

const sortCampersBy = field => campers =>
  campers.sort((a, b) => b[field] - a[field]);

const sortCampersByAllTime = sortCampersBy('allTime');
const sortCampersByRecent = sortCampersBy('recent');

// All time campers endpoints
router.get('/campers/alltime', (req, res) => {
  fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err) throw err;
    const campers = JSON.parse(data);
    res.json({campers: sortCampersByAllTime(campers)});
  });
});

// Recent campers endpoints
router.get('/campers/recent', (req, res) => {
  fs.readFile('MOCK_DATA.json', (err, data) => {
    if (err) throw err;
    const campers = JSON.parse(data);
    res.json({campers: sortCampersByRecent(campers)});
  });
});

app.use('/api', router);

app.use('*', (req, res) => {
  res.status(400).send('404 Not Found.');
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:4000');
});
