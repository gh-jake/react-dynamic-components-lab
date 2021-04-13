import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const handleColorBox = () => {
      if (this.props.opacity >= 0.2) {
        let newValue = this.props.opacity - 0.1;
        return <ColorBox opacity={newValue}/>
      }
      else {
        return null;
      }
    }
    
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {handleColorBox()}
      </div>
      
    )
  }

}

