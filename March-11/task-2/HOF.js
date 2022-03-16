const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for(i=0; i<companies.length; i++)
//   {
//       console.log(companies[i]);
//   }

// companies.forEach(function(company){
//     console.log(company.name);
// })



//separating ages of people who can vote
// let vote=[];
// for (let i=0; i<ages.length; i++)
// {
//     if (ages[i]>= 18)
//     {
//         vote.push(ages[i])
//     }
// }
// console.log(vote)



//filter takes each value of age as an input, sends it to the function as a parameter
//if true is returned, it appends the item to the list it creates

// const vote = ages.filter(function (age){
//     if(age>=18)
//     {
//         return true
//     }
// })
// console.log(vote)

// const vote = ages.filter(age => age>=18)
// console.log(vote)



//map

//company name [0000 - 0000]
// const test = companies.map(function(comp){
//     return `${comp.name} [${comp.start} - ${comp.end}]`
// })
// console.log(test)

// const test = companies.map(comp => `${comp.name} [${comp.start} - ${comp.end}]`)
// console.log(test)


//sort

// const sortedcomp = companies.sort(function(c1,c2){
//   if (c1.start > c2.start)
//   {
//     return 1
//   }
//   else{
//     return -1
//   }
// })
//console.log(sortedcomp);

// const scomp = companies.sort((a,b)=> (a.start> b.start ? 1: -1))
// console.log(scomp);



//reduce

//let sum=0;
// for (i=0;i<ages.length; i++)
// {
//   sum+=ages[i];
// }
// console.log(sum);

const sum= ages.reduce((age,tot)=> tot+age)
console.log(sum);
