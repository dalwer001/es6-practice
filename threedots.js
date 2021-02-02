const ages =[12,14,16,17];

const ages2 = [15,25,14];

const ages3 =[35,18,19];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
//spread operator
const allAges2 =[...ages, ...ages2,...ages3]; 
console.log(allAges2);


const business = 650;
const minister = 450;
const sochib =250;

const takaPoisa =[650,450,250,850];
//const maximun = Math.max(business, minister, sochib);

const maximum = Math.max(...takaPoisa);

console.log(maximum);