// "use strict"

const arr = [11, 67, 82, 01, 43, 64, 35, 77, -1, -50]

var largest = 0
var counter = 0
for(var i=0; i< arr.length; i++){
    // console.log(arr[i])
    if (arr[i] > largest) {
        largest = arr[i]
    }
}
console.log(largest)