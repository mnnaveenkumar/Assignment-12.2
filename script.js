var Arr = [10, 8, 12, 36];

// Return Double values of the values in Arr Array.
var doubleArr = Arr.map( function(x){
    return x * 2;
} );

// Filter all values Greater Than 20.
var filtered = doubleArr.filter( (x) => {
    return x > 20;
});

// Find the Sum of all filtered values.
var sum = filtered.reduce( (s,v) => { return s + v; });

console.log("Values in \'Arr' Array : ", Arr);
console.log("Double Values : ", doubleArr);
console.log("Filtering Values > 20 : ", filtered);
console.log("Sum of all Filtered Values : ", sum);