// Perimeter of squares in a rectangle
// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 
// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing


// function perimeter(n) {
//     const arr = [1];
    
//       for(let i = 0; i < n; i++) {
//         if(arr.length === 1) {
//           arr.push(1);
//         }
//         else {
//           arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//         }
//       }
    
//       return arr.reduce((acc, n) => acc + n, 0) * 4;
//     }
    
    
    
    function fib(n) {
      var a = 1, b = 1, tmp;
      while (n-- > 0) {
        tmp = a;
        a = b;
        b += tmp;
      }
      return a;
    }

    function perimeter(n) {
        return 4 * (fib(n + 2) -1)
    }
    
    
    // function perimeter(n) {
    //   var fib = [0,1];
    //   for(var i = 0; i < n; i++){
    //     fib.push(fib[fib.length-1]+fib[fib.length-2]);
    //   }
    //   return fib.reduce((a,b)=>a+b)*4;
    // }
    