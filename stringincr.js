// String incrementer
// Your job is to write a function which increments a string, to create a new string.
// •	If the string already ends with a number, the number should be incremented by 1.
// •	If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (input) {
if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
  return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}


//   function incrementString(input) {
//   return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
//       return +d + 1 + ns.replace(/9/g, '0');
//     });
// }
