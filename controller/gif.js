const gif = require('../lib/gif.js');

module.exports = async (req, res) => {
  try {
    if (!req.body.url || !req.body.start || !req.body.duration) {
      throw new Error(`params error`)
    }
    const match = req.body.start.match(/:/);
    if (match === null) {
      throw new Error(`there is no ':' `)
    }
    if (match.length > 2) {
      throw new Error(`invalid time`)
    }

    // 00:00 to seconds
    const seconds = req.body.start.split(':').map(time => parseInt(time, 10)).reduceRight((accumulator, currentValue, index, array) => {
      const sec = index === array.length - 2 ? currentValue * 60 : currentValue * 60 * 60;
      accumulator += sec;
      return accumulator;
    });
    console.log(`seconds : ${seconds}`)
    const start = new Date(seconds * 1000).toISOString().substr(11, 8);
    const duration = parseInt(req.body.duration, 10);
    
    const video = {
      url: req.body.url,
      start,
      duration,
    };
    const filename = await gif.generate(video);
    res.render('gif', {
      filename,
    });
  } catch (e) {
    console.error(`error : ${e.message}`)
    res.render('search')
  }
};
