
//父组件能直接访问子组件中的方法
//forwardRef 
        //通过 React.forwardRef 将父组件的 ref 透传过来，通过 useImperativeHandle 方法来自定义开放给父组件的 current
//useImperativeHandle:
        //第一个参数是定义 current 对象的 ref，
        //第二个参数是一个函数，返回值是一个对象，即这个 ref 的 current 对象，这样可以像上面的案例一样，通过自定义父组件的 ref 来使用子组件 ref 的某些方法

import React, { useRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} type="text" />
});

const App = props => {
  const fancyInputRef = useRef();

  return (
    <div>
      <FancyInput ref={fancyInputRef} />
      <button
        onClick={() => fancyInputRef.current.focus()}
      >父组件调用子组件的 focus</button>
    </div>
  )
}