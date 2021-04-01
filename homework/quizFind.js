const array1 = [1, 4, 20, 45];

const quizFind = array1.find(element => element > 2);

console.log(quizFind);
// expected output: 4

/*
The findIndex() method returns 
the index of the first element in the array
that satisfies the provided testing function.
Otherwise, it returns -1, indicating that no element passed the test.
*/
const array2 = [5, 12, 8, 1, 4];

const isLargeNumber = element => element > 13;

console.log(array2.findIndex(isLargeNumber));
// expected output: -1

var quizLotto = [];
while (quizLotto.length < 6) {
  var r = Math.floor(Math.random() * 49) + 1;
  if (quizLotto.indexOf(r) === -1) quizLotto.push(r);
}
console.log(quizLotto);
