import React, { Component } from 'react';
import './FancyButton.css'

class FancyButton extends Component {
  mouseenter(e){
    var parentOffset = this.offset(),
      relX = e.pageX + parentOffset.left,
      relY = e.pageY - parentOffset.top;
      this.find('span').css({top:relY, left:relX})
  }

  mouseout(e){
  var parentOffset = this.offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
      this.find('span').css({top:relY, left:relX})
  }
  render(){
  return(
    <div className="centerer">
    <a className="btn-6" href="#">Position Aware<span></span></a>
    </div>
  );
  }
}
export default FancyButton;
