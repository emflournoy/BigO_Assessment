// PART TWO: In a new file, write examples of algorithms/functions for each of the Big O complexities below.
//   Upload your file to your repository when complete and submit in Learn --> Exercises.
//
//   1. O(1)
//
//   2. O(n)
//
//   3. O(n^2)

// for O(1)
function makePirate(arr){
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " - arrrr matey!")
  }
}
makePirate(['I like fuzzy puppies', 'fruit loops are gross', 'pass the cheese'])


// for O(n)
function addfour(arr){
  const array2 = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    array2[i] = arr[i]+4;
  }
  return array2;
}
addfour([3,6,9])


// for O(n^2)
function sumValues(arr) {
  let i = 0;
  let newArr = new Array(arr.length);

  while (i < arr.length) {
    let sum = 0;
    let j = i;

    while (j < arr.length) {
      sum += arr[j];
      j += 1;
    }

    newArr[i] = sum;
    i += 1;
  }

  return newArr;
}
