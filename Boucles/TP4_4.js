function takePlus1(array) {
  let i = 0;
  let tableau2 = [];
  let elementCourant;
  while (i < (array.length)) {
    let elementCourant = array[i];
    tableau2.push(elementCourant + 1);
    i++;
  }
  return tableau2;
}

let test = [2, 5.2, -1.3, 0, -2.5, 9.7, 8.143];
takePlus1(test);
let tableau2 = takePlus1(test);
console.log(tableau2);
