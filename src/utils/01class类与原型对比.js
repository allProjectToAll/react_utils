//1 原型
function Person(name,age){
    //实例属性，通过实例点出来的是实例属性
    this.name = name;
    this.age = age;
}
const p1 = new Person("狗",3);
console.log(p1);
//1.1静态属性，在实例new之后是获取不到的.通过构造函数点出来的是静态属性
Person.info = "aaa";
console.log(p1.info);// undefined
//1.2 如果想被调用，就用实例方法
Person.prototype.say=function(){
    console.log("bbbbbb")
}
p1.say();//bbbbbb
// 1.3 静态方法
Person.show = function(){
    console.log("showshow")
}
p1.show();//is not defined 实例获取不到
Person.show();//showshow




//2 class类
class Animal{
    //作用：每当new一个实例的时候，首先进入构造器
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //在class内部通过static修饰的九四静态属性
    static info = "aaa";
    //动物的实例方法
    say(){
        console.log('bbb');
    }
    //静态方法
    static show(){
        console.log('showshow')
    }
}

const a1 = new Animal('大黄',3);
console.log(a1.name);//大黄  //实例属性
// 2.1 //静态属性不能用实例获取
console.log(a1.info);//undefined 
console.log(Animal.info);//aaa //静态属性
// 2.2 实例方法
a1.say();
//2.3 静态方法
Animal.show();//showshow
a1.show();//is not defined //获取不到

