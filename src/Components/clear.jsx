var React = require('react');
var clear = React.createClass({
    render : function(){
       return (
         <div className="col-sm-3">
          <button className="btn btn-primary" onClick={this.props.onClick} > Clear
          </button>
        </div>
       );
    }
});
module.exports = clear;
