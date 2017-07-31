
<p align="center">
    <h1>Divorce Negotiations Website</h1>
</p>

This is my simple website created with ReactJS compiled with webpack.

It contains some frameworks as Material Design, Jquery, TypedJS and others.

Live demo: http://jonlov.github.io/DivorceNegotiations

# Installation
To run this project local you must have NodeJS installed.
1. Clone the repository
`git clone https://github.com/jonlov/jonlov.github.io.git`

2. Install npm dependecies
`npm install`

3. Run project
`npm start`

# Basic Usage
Edit the JSON in with your information in `/src/json/index.js`

Change de images with yours and edit title of the website in `/assets/index.ejs` and `/assets/404.ejs`

Add your PDF resume to `/assets/[name in JSON file] Resume.ejs`

# Production
To prepare for production you need to compile with webpack before upload.

1. Compile with webpack
`npm run build`

2. Commit to git
`git add .
git commit -am "SOME DESCRIPTION"
git push origin master`

Done!

# License

This project is licensed under [MIT](https://github.com/jonlov/jonlov.github.io/blob/master/LICENSE).
