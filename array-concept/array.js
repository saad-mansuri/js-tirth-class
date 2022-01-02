// var arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8]
// ]
// var x = 1;
// for (var i = 0; i < arr.length; i++) {
//     // var xx = arr[i]
//     // console.log(xx)
//     // console.log(arr[i])
//     for (var j = 0; j < arr[i].length; j++) {

//         x *= arr[i][j]
//         // console.log(arr[i][j])
//     }
// }
// console.log(x)

var multiArr = [
    1,
    [3, 4, 5, 6, 7],
    2,
    8,
    9,
    [10, 11, 12]
]

// var sum = 0
// // var storeMultiarr = multiArr.length
// for(var i=0; i < multiArr.length; i++){
//     // console.log(typeof multiArr[i])
//     // if (typeof multiArr[i] == "object") 
//     if (Array.isArray(multiArr[i])) {
//         for(var j=0; j < multiArr[i].length; j++){
//             sum += multiArr[i][j]
//         }
//     }
// }
// console.log(sum)
// var sum = 0
// multiArr.forEach(function(i_val, index){
//     // console.log(index,i_val)
//     if (Array.isArray(i_val)) {
//         i_val.forEach(function(j_val){
//             sum += j_val
//         })
//     }
// })
// console.log(sum)

// var a = [1,2,3]
// for(var i = a.length-1; i>= 0; i--){
//     console.log(a[i])
// }

// factorial 
// prime number
// table 5 * 1 = 5 

var aa = [1, 2, 3, 4, 5, 6]



var bb = [1, 4, 5, 7, 9, 8]
var xyz = []
for (var i = 0; i < bb.length; i++) {
    console.log(aa.indexOf(bb[i]))
    // aa.indexOf(bb[i])
    if (aa.indexOf(bb[i]) > -1) { // return index value of arrays
        xyz.push(bb[i])
    }
    // for (var j = 0; j < aa.length; j++) {
    //     if (aa[j] == bb[i]) {
    //         xyz.push(aa[j])
    //     } else {
    //         console.log("not match")
    //     }
    // }
}
console.log(xyz)

// console.log(aa,bb)



// indexOf :-- Finding tha array of the index.
// Array.isArray :-- Find the array is array or not.
// splice :-- Remove value as index wise from array and also can add values as index wise.
// Object.values :-- return value form dictionery and converts as array.
// Object.keys :-- return keys form dictionery and converts as array.
// push :-- used for insert an array.
// pop :-- remove last index of value from array.


var dict = {
    fname: "saad",
    lname: "tirth",
    mname: "parth"
}

var dictArray = Object.keys(dict)
console.log(dictArray)

