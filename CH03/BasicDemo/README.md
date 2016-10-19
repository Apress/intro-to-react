$ npm install -g browserify watchify babel
$ npm install react browserify watchify babelify --save-dev

$ watchify -t babelify ./src/app.jsx -o ./dist/bundle.js -v

or just 
$ npm install
$ npm watch