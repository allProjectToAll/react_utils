
<!-- 函数组件： -->
useCallback： 是函数组件，类似于userEffect,第一个参数是函数，第二个参数是数组，监听的值变化的时候才会执行当前的函数
useEffect是： componentDidMount,componentDidUpdate,componentWillUnmount这几个生命周期函数的统一
    <!-- // 用法如下
    // useEffect(()=>{
    //     //副作用逻辑
    //     // xxxxx
    //     return ()=>{//return一个函数，用于组件卸载前执行的代码
    //     }
    // },[])
            //1.空数组表示只执行一次，相当于componentDidMount。
            //2.非空数组，useEffect会在数组发生改变后执行。
            //3.不填这个数组，useEffect每次渲染都会执行，每次数据变化的时候都会执行,相当于componentDidUpdate -->
useMemo:  第一个参数是函数，第二个参数是监听的值是否变化，如果变化才会执行useMemo里面的函数
mome   :  和PureComponent一样的功能，只是mome用在函数组件中（只有当state里面的值变化了才会执行render函数）



<!-- class组件： -->
PureComponent（只有当state里面的值变化了才会执行render函数）



<!-- 其他 -->
usestate   : const [count, setCount] = useState(0);//count类似于state内的值，setCount就是一个自定义的方法，可以改变count的方法
useRef  ：  绑定到input上面，可以直接获取到input的所有属性和方法值等等
useContext  ： 组件传值，一般不用，类似于props传值。。。
useReducer: 等号前面是形参，后面是实参。 const [state,dispatch] = useReducer(reducer,initState);
                //1.state是状态值，这里是初始化定义的变量
                //2.dispatch是更新state的方法，接受action作为参数
                //3.reducer是一个函数，定义在外面，
                //4.initState是初始化的state的值，当前文件是上面定义的变量initState