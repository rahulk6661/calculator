const userr1=
{
    key1:"value1",
    key2:"value2"
}

const user2=Object.create(userr1);
user2.key3="value3";
user2.key1="val1";
console.log(user2.key1);
console.log(user2.key2);
console.log(user2.key3);
console.log(user2.__proto__);


const usermethod=
{
    about:function()
    {
        return `${this.firstname} is name ${this.age} is year old`;
    },
    is18:function()
    {
        return this.age>=18;
    },
    song:function()
    {
        return 'tu hi mera';
    }
}
function createuser(firstname,age,email,address,pincode)
{
    const user=Object.create(usermethod);
    user.firstname=firstname;
    user.age=age;
    user.email=email;
    user.address=address;
    user.pincode=pincode;
    return user;
}
class animal
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    
    }
    eat()
    {
        console.log(this.name+" is eating");
    }
    iscute()
    {
        if(this.age<=1)
        {
            console.log("cute hai");
        }
        else{
            console.log("cute nahi hai");
        }
    }
    static classinfo()
    {
        console.log(this.name);
    }
    
}
class dog extends animal{
    constructor(name,age,speed)
    {
        super(name,age);
        this.speed=speed;
    }
    run()
    {
        console.log(this.name + " is running at speed "+this.speed);
    }
   get run1()//it is getter
    {
        console.log(this.name + " is running at speed "+this.speed);
    }
    setspeed(speed)//it is a setter
    {
        this.speed=speed; 
     }
}
const tommy=new dog("tommy",5,43);
tommy.run();
tommy.run1;
dog.classinfo();
tommy.setspeed(50);
tommy.run();
tommy.run1;
const a1=new animal("cat",1);
animal.classinfo();
const a2=new animal("dog",2);
animal.classinfo();
animal.classinfo();
console.log(a1.name);
console.log(a1.eat());
console.log(a2.iscute());
console.log(a1.iscute());



function createusr1(firstname,age,email,address,pincode)
{
    const user=Object.create(createusr1.prototype);
    user.firstname=firstname;
    user.age=age;
    user.email=email;
    user.address=address;
    user.pincode=pincode;
    return user;
}
function createusr(firstname,age,email,address,pincode)
{
    
    this.firstname=firstname;
    this.age=age;
    this.email=email;
    this.address=address;
    this.pincode=pincode;
   
}
createusr1.prototype.about1=function()
{
    return `${this.firstname} is name ${this.age} is year old`;
},
createusr1.prototype.is181=function()
{
    return this.age>=18;
},
createusr1.prototype.song=function()
{
    return 'tu hi mera';
}
const people12= new createusr("rahul",25,"rahulk6661@gmail.com","orai",285001);
console.log(people12);
const people1=createuser("rahul",25,"rahulk6661@gmail.com","orai",285001);
const people11=createusr1("rahul",25,"rahulk6661@gmail.com","orai",285001);
const people2=createuser("shivendra",23,"prince61@gmail.com","neoriya",210506);
const ab=people1.about();
const ab1=people11.about1();
console.log(ab);
console.log(ab1);
const etc=people2.is18();
if(etc)
{
    console.log("eligible");
}
else{
    console.log('not eligible');
}





const arrmap=new Map();
const arrmap1=new Map([["name","rahul"],["age",7]]);
arrmap.set('name','rahul');
arrmap.set([1,2,3],'onetwothree')
arrmap.set(2,'two')
arrmap.set('age',9);
console.log(arrmap.get(1));
for(let key of arrmap.keys())
{
    console.log(key,typeof key);
}
for(let i of arrmap)
{
    console.log(i);
}
for(let key of arrmap1.keys())
{
    console.log(key,typeof key);
}

const person1obj={'id':1,"name":"rahul"}
const objmap=new Map();
objmap.set(person1obj,{age:19,gender:"male"});
console.log(objmap);




const setarr=new Set([1,2,4]);
console.log(setarr);
setarr.add(5);
setarr.add(3);
console.log(setarr);
setarr.add('rahul');
console.log(setarr);
setarr.add(["item1",'item2']);
setarr.add(["item1",'item2']);
console.log(setarr);

const splicearr=['item1','item2','item3','item4'];
const spilces=splicearr.splice(1,1);//delete
console.log(splicearr);
console.log(spilces);
splicearr.splice(2,0,'item5');//insert
console.log(splicearr);
splicearr.splice(2,1,'item6','item7');
console.log(splicearr);












const finalarr=[2,4,6,8,10];
const finalarr1=[2,4,6,8,9];
const submit=finalarr.every((num)=>num%2===0);
const submit1=finalarr1.every((num)=>num%2===0);
console.log(submit);
console.log(submit1);
const submit2=finalarr1.some((num)=>num%2===0);
const submit3=finalarr.some((p)=>p%2===1);
console.log(submit2,submit3);
const arrfill=new Array(6).fill(8);
console.log(arrfill);
arrfill.fill(19,2,5);
console.log(arrfill);



const myanimal=["rat","cat","dog","mouse","cow"];

function islength5(string)
{
    return string.length===3;
}
const final=myanimal.find(islength5);
console.log(final);




const sortval=[2,1300,4,1,1600,6];
sortval.sort();
console.log(sortval);
sortval.sort((a,b)=>
{
return a-b;});
console.log(sortval);

sortval.sort((a,b)=>
{
return b-a;});
console.log(sortval);

const sortname=["rahul","piyush","rajesh","ajay","akash"];
sortname.sort();
console.log(sortname);




const usercart=
[
    {pid:1,pname:"mobile",price:13000},
    {pid:2,pname:"laptop",price:40000},
    {pid:3,pname:"toys",price:8000},
    {pid:4,pname:"smartwatch",price:3000},

];
const totalprice=usercart.reduce((currentprice,currproduct)=>{
    return currentprice+currproduct.price},0);
    console.log(totalprice);
    const totalname=usercart.reduce((currentname,currproduct)=>{
        return currentname+" "+currproduct.pname},"");
        console.log(totalname);
    
        const lowtohigh=usercart.slice(0).sort((a,b)=>
        {
            return a.price-b.price;
        });
        console.log(lowtohigh);
        const hightolow=usercart.slice(0).sort((a,b)=>
        {
            return b.price-a.price;
        });
        console.log(hightolow);

const useridcheck=usercart.find((user)=>user.pid===2);
console.log(useridcheck);
const usercheck1=usercart.every((p)=>p.price>2999);
const usercheck2=usercart.every((p)=>p.price<40000);
console.log(usercheck1,usercheck2);
const usercheck3=usercart.some((p)=>p.price>10000);
const usercheck4=usercart.some((p)=>p.price<2999);
console.log(usercheck3,usercheck4);








let num=[1,6,8,9,5];

let root=function(num)
{
    return num*num;
}
const rootarr=num.map(root);
console.log(rootarr);

const detail=
[
    {name:"rahul",age:19},
    {name:"naman",age:9}
]
let namedetail=function(detail)
{
return detail.name;
}
const finaldetails=detail.map(namedetail);
console.log(finaldetails);
const iseven=function(num)
{
    return num%2===0;
}
const isodd=function(num)
{
    return num%2;
}
const finaleven=num.filter(iseven);
const finalodd=num.filter(isodd);
console.log(finaleven);
console.log(finalodd);

const finalans=num.reduce((acc,curr)=>
{
    return acc+curr;
});
console.log(finalans);

let print=function (a,b,...c)
{
  console.log(a);
  console.log(b);
  console.log(c);
}
print(4,5,6,7,8,9,2,3,4,55);

function fun1(age){
    console.log(age);
}
function myfun(a)
{
    a(19);//callback function
}
myfun(fun1);

function myfun1()
{
    function fun2(a){
        return a;
    }
    return fun2;
}
const ans=myfun1();
console.log(ans(20));

const funarr=[2,3,4,5,6,7,8];
function multiplyby5(num,i)
{
    console.log("index is ",i);
    console.log(`${num}*5=${num*5}`);
}
for(let i=0;i<funarr.length;i++)
{
    multiplyby5(funarr[i],i);
}
funarr.forEach(multiplyby5);
funarr.forEach(function multiplyby2(num,i)
{
    console.log("index is ",i);
    console.log(`${num}*2=${num*2}`);
})

let na="rahul";
//let na="jaya";
let p=na.slice(0,4);
console.log(p);
//console.error(p);
//console.warning(p);
console.log(typeof(p));
let pi=3.14;
console.log(typeof(pi));
console.log(typeof(null));
console.log(typeof(undefined));
let z;
console.log(typeof(z));
//change in number to string
pi=pi+"";
console.log(pi);
console.log(typeof(pi));
pi=+pi;
console.log(typeof(pi));
let s1="rahul";
let s2=" gupta";
let s=s1+s2;
console.log(s);
let aboutme="my first name is "+s1+" "+"my last name is "+s2;
console.log(aboutme);
let aboutme1=`my first name is ${s1} and my last name is ${s2}`;
console.log(aboutme1);
let num1=7;
let num2=7;
console.log(num1==num2);
console.log(num1===num2);
let num3="7";
console.log(num1==num3);
console.log(num1===num3);
const data=["apple","rahul","h",10,10.6];
let j=data.length;
for(let i=0;i<j;i++)
{
    console.log(data[i]);
}
const fruit=[];
fruit.push("hey");
//fruit.shift("hello");
fruit.unshift(10);
fruit.unshift(25);
const [var1,var2,var3]=fruit;
console.log(var1,var2,var3);
;
for(let i of fruit)
{
    console.log(i);
}
console.log(fruit);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf(10));
console.log(fruit.indexOf("hey"));
console.log(typeof fruit);
let winningnumber=20;
let number=prompt();
number=+number;
if(number===winningnumber)
{
    console.log("you are winner");
}
else if(number<winningnumber)
{
console.log("too low");
}
else if(number>winningnumber)
{
    console.log("too high");
}

let day=prompt();
day=+day;
switch(day)
{
    case 1:console.log("sunday");
    break;
    case 2:console.log("monday");
    break;
    case 3:console.log("tuesday");
    break;
    case 4:console.log("wenesday");
    break;
    case 5:console.log("thursday");
    break;
    case 6:console.log("friday");
    break;
    case 7:console.log("saturday");
    break;
    default:console.log("invalid day");
}
let day2=day;
console.log(day,day2);
day2++;
console.log(day,day2);

let person={name:"rahul",age:20,from:"orai"};
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
let person1=
{name:"rahul",
age:20,
hobbies:["sing","music","writing","playing"] 
};
const person2={...person,...person1};
for(let key in person)
{
    console.log(key);
}
for(let key in person1)
{
    console.log(`$(key) : $(person[key])`);
}

console.log(person2);
console.log(person);
console.log(typeof person1);
console.log(person1.name);
console.log(person1.hobbies);
console.log(Object.keys(person1));
const key1="value1";
const key2="value2";
const key3="value3";
const myvalue1=6;
const myvalue2=8;
const myvalue3=9;

const arr=[];
arr[key1]=myvalue1;
arr[key2]=myvalue2;
arr[key3]=myvalue3;
console.log(arr);

const user=[
{userid:1,fname:"rahul",age:20,gender:"male"},
{userid:2,fname:"jaya",age:20,gender:"female"},
{userid:3,fname:"raj",age:20,gender:"male"},
{userid:4,fname:"uma",age:20,gender:"female"}
];
console.log(user);

function birthdaywish()
{
    let val=prompt();
    console.log("happy birthday "+val);
}
birthdaywish();
sum(8,9);
function sum(val1,val2)
{
    let sum=val1+val2;
    console.log(sum);
}
sum(4,6);

let wishes=function()
{
    let val=prompt();
    console.log("happy birthday "+val);
}
wishes();
let wishme=()=>
{
    let val=prompt();
    console.log("happy birthday "+val);
}
wishme();
const sum1=(val1,val2)=>
{
    let sum=val1+val2;
    console.log(sum);
}
sum(4,6);
