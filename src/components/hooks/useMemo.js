//useMemo,第一个参数是函数，第二个参数是监听的值是否变化，如果变化才会执行useMemo里面的函数

function App() {
    const [name, setName] = useState('名称')
    const [content,setContent] = useState('内容')
    return (
        <>
          <button onClick={() => setName(new Date().getTime())}>name</button>
          <button onClick={() => setContent(new Date().getTime())}>content</button>
          <Button name={name}>{content}</Button>
        </>
    )
  }

  function Button({ name, children }) {
    function changeName(name) {
      console.log('11')
      return name + '改变name的方法'
    }
  
  const otherName =  useMemo(()=>changeName(name),[name]);//useMemo,第一个参数是函数，第二个参数是监听的值是否变化，如果变化才会执行useMemo里面的函数
    return (
        <>
          <div>{otherName}</div>
          <div>{children}</div>
        </>
  
    )
  }
  
  export default Button