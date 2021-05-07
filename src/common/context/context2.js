
//祖孙组件之间传值
import React from 'react';
//const ThemeContext = React.createContext('light');


class ThemedButton extends React.Component {
  //static contextType = ThemeContext;
  render() {
    console.log(this.context,'this.contextthis.context');
    return <input theme={this.context} />;
  }
}


export default ThemedButton;