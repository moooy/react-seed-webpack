var React = require('react');
var CommentList = require('./CommentList.js');
var CommentForm = require('./CommentForm.js');
var Comment = React.createClass({
  getInitialState:function(){
    return {
      data: []
    }
  },
  componentDidMount:function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }

});

module.exports = Comment;
