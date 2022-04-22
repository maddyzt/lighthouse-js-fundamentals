const smartGarbage = function (trash, bins) {
  if(trash === "waste"){
    bins.waste += 1
  }
  else if(trash === "recycling"){
    bins.recycling += 1
  } 
  else if(trash === "compost"){
    bins.compost += 1
  }
  return bins
}


const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1.firstname);
// expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(person2['lastname']);
// expected output: "Doe"