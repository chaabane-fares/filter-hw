tab=[1,2,3,4,5,6,7,8,9,10]
//*****************************EX1*********************************
result=tab.filter(cb);
function cb(value){
    return value>=5;
}
console.log("EX1  "+result);



//*****************************EX2*********************************
newArr=tab.filter(even);
function even (value){
    return value % 2 != 0;
}
console.log("EX2  " +newArr);



//*****************************EX3*********************************
string=["bonjour","hello world","css","js","Fares"];
result2=string.filter(longueur);
function longueur(value){
    return value.length<=5;
}
console.log("EX3  "+result2);




//*****************************EX4*********************************
people1 ={
    id:1,
    In_The_Club : true,
    Age: 15 ,
};

people2 ={
    id:2,
    In_The_Club : true,
    Age: 19 ,
};

people3 ={
    id:3,
    In_The_Club : false,
    Age: 25 ,
};

people4 ={
    id:4,
    In_The_Club : true,
    Age: 18 ,
};

people5 ={
    id:5,
    In_The_Club : false,
    Age: 20 ,
};

people=[people1,people2,people3,people4,people5];
result3=people.filter(InTheClub);
function InTheClub(value){
    return value.In_The_Club==true;

}
console.log("IDs of peoples whos are in the club");
for(let i=0;i<result3.length;i++)
    console.log("EX4.1  "+ result3[i].id);


result4=people.filter(old);
function old(value){
    return value.Age>=18;
}

console.log("IDs of peoples whos are older than 18");
for(let i=0;i<result3.length;i++)
    console.log("EX4.2  "+ result4[i].id);
