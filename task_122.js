//input a.b.c.d.e

// output:{
//     a:{
//         b:{
//             c:{
//                 d:e
//             }
//         }
//     }
// }

let str = "a.b.c.d.e";

let newStr = str.split(".").reduceRight(function (acc, next) {
  return { [next]: acc };
});
console.log(JSON.stringify(newStr));
