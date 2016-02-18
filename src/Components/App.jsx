var React = require('react');
var calc = require('./calc.jsx');
var clear = require('./clear.jsx');
var NumberField = require('./NumberField.jsx');

var App = React.createClass({
   getInitialState :function(){
     return {value:""}
   },
   Add : function(e)
   {
     var val = e.target.value;
     e.target.value = parseInt(this.refs.fieldNumber1.state.value,10) + parseInt(this.refs.fieldNumber2.state.value,10);
     this.setState({value:e.target.value});
   },
   Substract : function(e)
   {
     var val = e.target.value;
     e.target.value = this.refs.fieldNumber1.state.value - this.refs.fieldNumber2.state.value;
     this.setState({value:e.target.value});
   },
   Divide : function(e)
   {
     var val = e.target.value;
     e.target.value = this.refs.fieldNumber1.state.value / this.refs.fieldNumber2.state.value;
     this.setState({value:e.target.value});
   },
   Multiply : function(e)
   {
     var val = e.target.value;
     e.target.value = this.refs.fieldNumber1.state.value * this.refs.fieldNumber2.state.value;
     this.setState({value:e.target.value});
   },
   clear :function(){
     this.setState({value:""});
     this.refs.fieldNumber1.clear();
     this.refs.fieldNumber2.clear();

   },
   render : function(){
     var divStyle ={
       marginTop : 20,
       background :'pink'
     }
     var bodyStyle ={
       background :'silver'
     }
       return (
           <div style={divStyle} className="col-md-4 col-md-offset-4 ">
              <div   className="panel panel-default">
                  <div style={bodyStyle} className="panel-body">
                   <h1> <center> <b>Simple Calculator</b> </center> </h1>
                       <div className="col-sm-6">
                          <NumberField  num="1337" ref="fieldNumber1"/>
                       </div>
                       <div className="col-sm-6">
                         <NumberField  num="2108" ref="fieldNumber2"/>
                       </div>
                           <br/>
                           <br/>
                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.Add} > Add </button>
                        </div>

                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.Substract} > Substract </button>
                        </div>

                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.Divide} > Divide </button>
                        </div>

                        <div className="col-sm-3">
                            <button className="btn btn-primary" onClick={this.Multiply} > Multiply </button>
                        </div>

                          <br />
                          <br />


                       <div className="col-lg-9">
                          <input type="text" placeholder="Resualt" className="form-control" value={this.state.value} disabled/>
                       </div>
                      <div className="col-lg-3">
                        <button className="btn btn-primary" onClick={this.clear} > Clear </button>
                     </div>
                 </div>
              </div>
          </div>
       );
   }
});
module.exports = App;
