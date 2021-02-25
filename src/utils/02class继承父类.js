class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHellow(){
        console.log("大家好")
    }
}


//1.继承了父类的方法属性，子类就不需要多写一遍父类的constructor
class American extends Person{
    constructor(name,age){
        super(name,age);//用extends调用父级，需要在constructor内写super，super代表父类构造器
    }
}
const a1 = new American("name",18);
a1.sayHellow();



// 2.同上,多一个特殊类的参数
class Chinese extends Person{
    constructor(name,age,IDNumber){
        super(name,age);
        this.IDNumber = IDNumber;
    }
}
const c1 = new Chinese("name2",20);
c1.sayHellow();
