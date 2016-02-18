var React = require('react');
var calc = React.createClass({
    render : function(){
       return (
         <div className="col-sm-3">
          <button className="btn btn-primary" onClick={this.props.onClick} >
          {this.props.children}
          </button>
        </div>
       );
    }
});
module.exports = calc;
