
// useCallback是函数组件，类似于userEffect,第一个参数是函数，第二个参数是数组，监听的值变化的时候才会执行当前的函数

function Form() {
    const [text, updateText] = useState('');
  
    const handleSubmit = useCallback(() => {
      console.log(text);
    }, [text]); // 每次 text 变化时 handleSubmit 都会变
  
    return (
      <>
        <input value={text} onChange={(e) => updateText(e.target.value)} />
        <ExpensiveTree onSubmit={handleSubmit} /> 
      </>
    );
  }