
//祖孙组件之间传值
import React from 'react';
import ThemedButton from './context2'
const ThemeContext = React.createContext('light');


class Context extends React.Component {
    render() {
        let jsons = {
            name:1,
            age:2
        }
        return (
            <ThemeContext.Provider value={jsons} >
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
  return (
    <div>
        <ThemedButton />
    </div>
  );
}

// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   static contextType2 = ThemeContext2;
    
//   render() {
//     console.log(this.context,'this.contextthis.context');
//     return <input theme={this.context} />;
//   }
// }


export default Context;