let listA = ['a', 'b', 'c'];
let listB = [1, 2, 3];

function zipList(list1, list2) {
  let result = [];
  for(let x = 0; x < list1.length && x < list2.length; x++){
    result.push(list1[x]);
    result.push(list2[x]);
  }
  return result;
}
console.log(zipList(listA, listB));

function zipListTheSimpleWay(list1, list2){
  let zipped = _.zip(list1, list2);
  return _.reduceRight(zipped);
}
console.log(zipListTheSimpleWay(listA, listB));
