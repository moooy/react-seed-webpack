var React = require('react');
var ReactDOM = require('react-dom');

// var AppComponent = require('./components/productBox.js');
var AppComponent = require('./components/CommentBox.js');

ReactDOM.render(<AppComponent url="./test/comments.json" />, document.getElementById('content'));
