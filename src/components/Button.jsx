import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
      }
    }
  }
  handelClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>
          Manzanas:
          {count}
        </h1>
        <button type='button' onClick={this.handelClick}>Agregar</button>
      </div>
    );
  }
}

export default Button;
