
# The Mission for Hanzai Watchers

The Hanzai Watchers is a Full Stack MERN application that we decided on for our final project to display what we've learned throughout the bootcamp:

The purpose of this application is to report and alert others to crime in your area in hopes of providing awareness in your community. We would like our society to be safer and with the more crime tips reported the more points you earn. With enough points you'll become your community's #1 Samurai! 

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/JFh1QWmjrGI/0.jpg)](http://www.youtube.com/watch?v=JFh1QWmjrGI)

## Table of Contents

- [Installation](#installation)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
  <a name="installation"></a>

# Weapons Used

<ul>
  <li>FrontEnd: <b> React.JS, Redux Library, Bootstrap, Tailwind CSS, Animate.css, and Swup </b></li>
  <li>Backend:  <b> Node.JS, Express.JS </b> </li>
  <li>Database: <b> MongoDB, Mongoose </b> </li>
</ul>

## Installation

You will need `node` and `npm` to install and run this project.

1.  `git clone https://github.com/DonL44/anime_crime-watchers.git cde && cd cde`
2.  `npm install`

### Running the app locally

The application expects a few environment variables to interact with the API:

* `CDE_API` - this should be the URL for the API. To use the public API, set this to `https://api.usa.gov/crime/fbi/sapi`
* `API_KEY` - this should match the key used by the API. If you are using the public API, sign up for an API key at [https://api.data.gov/signup/](https://api.data.gov/signup/)

You can copy the `env.sample` file (`cp env.sample .env`), fill in your own values, and then make sure to `source .env` before running the build process.

Use `npm run watch` to start the continuous `webpack` processes and a webserver.

### Tests

You can lint the code with `npm run lint` and run tests with `npm run test`.
![RunTest](anime_crime-watchers/src/assets/images/backdrop.gif)

## License

This project is covered under the following license:

[MIT](https://www.mit.edu/~amini/LICENSE.md)

<a name="contributing"></a>

## Questions

If you have any questions, please contact us here: [Tanya's GitHub](https://github.com/tanyaleepr), [Ashley's GitHub](https://github.com/ashleyhodge), [Don-EL GitHub](https://github.com/DonL44), and [Paul's GitHub](https://github.com/pshertzi).
