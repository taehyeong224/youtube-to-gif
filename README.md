<div align="center">
  <a href="https://github.com/uttpal/tube2gif">
    <img width="200" heigth="200" src="https://cloud.githubusercontent.com/assets/8591801/22406988/b486c34a-e683-11e6-824a-909dd63c61d8.png">
  </a>
  <br>
  <br>
	<a href="https://img.shields.io/magnumci/ci/96ffb83fa700f069024921b0702e76ff.svg">
		<img src="https://img.shields.io/magnumci/ci/96ffb83fa700f069024921b0702e76ff.svg">
	</a>
	<a href="https://img.shields.io/npm/v/npm.svg">
		<img src="https://img.shields.io/npm/v/npm.svg">
	</a>
	<a href="https://img.shields.io/npm/l/express.svg">
		<img src="https://img.shields.io/npm/l/express.svg">
	</a>
	<a href="https://img.shields.io/david/strongloop/express.svg">
		<img src="https://img.shields.io/david/strongloop/express.svg">
	</a>
  <h1>tube2gif</h1>
  <p>
    tube2gif is a web-based Youtube to GIF creator built using Node.Js and FFMPEG, using which you can search any Youtube video and create GIFs of desired duration.
</div>
<h2 align="center">In Action</h2>
<div align="center">
<img src="https://cloud.githubusercontent.com/assets/8591801/22407995/50075f2e-e697-11e6-8691-1b768661f507.gif">
</div>
<h2 align="center">Install</h2>

####Pre-requisites

- Node.Js 6+
- FFMPEG installed
  `brew install ffmpeg`

####Installation

1. Clone Repository
2. cd into dir && `npm install`
3. Obtain Youtube Api key ([Instructions](https://www.slickremix.com/docs/get-api-key-for-youtube/))
4. Add obtained Youtube key to config/local.js or `export YOUTUBE_API_KEY=key`
5. config/local.js format is
   `module.exports = { PORT: process.env.PORT || 3000, YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY || 'your key', };`
6. `npm start` && visit localhost:3000
