const person = {
    name:'jack william', age:17,
    job:"facebook", 
     address: 'Matikata' ,
    phone: '01782924569',
    friends:['Tom cruise', 'Justin Timberlake','Rahim']
}

const object2 = {
    name:'halim',
    info:{
        address:'khulna',
        leader:'safiqul islam'
    }
}
const {leader} = object2.info;
const {phone,job, age, address} = person;
// jodi variable er declare left side kono object er moto second bracket moddhe kichu take r rght side kono objective or object k mean kore kichu thake tahole amra left er obj onushare output pabo.

// const address = person.address;
// const phone = person.phone;
// console.log(address, phone, age,job);
console.log(leader);
friends = ['sakib','amir','salman','saruk'];
const [first,nextfriend, ...olderF] = friends;
console.log(first, nextfriend,olderF);

// kono ekta object theke kono ekta proprty er value ta oi variable name e declare kore felte pari destructuring kore.