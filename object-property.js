 const students=[
    {id:001, name:"Amirul Islam"},
    {id:002, name:"Monirul Islam"},
    {id:003, name:"Riad Hassan"},
    {id:004, name:"Sumaiya Sopna"}
 ]

//  const name =[];
//  for(let i = 0; i < students.length; i++){
//      let element = students[i].name;
//      name.push(element);
//  }

const name = students.map(x => x.name)
const name1 = students.filter(x => x.id > 2)
console.log(name);
console.log(name1)