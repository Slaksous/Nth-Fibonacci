// N'th Fibonacci
//0,1,1,2,3,5,8,13,21,34,55,89,144,...
// F(n) = F(n-1) + F(n-2)

var nth = 12; // determine the nth fibonacci
var valueOf;

if( nth === 0 ) {
    valueOf = 0;
} else if( nth === 1 || nth === 2) {
    valueOf = 1;
} else if( nth > 2) {
    valueOf = fibonacci( nth );
}

function fibonacci(nth) {
    var seq = [0,1,1];
    for(var i = 3; i <= nth; i++) {
        var newNumber = seq[i-1] + seq[i-2];
        seq.push(newNumber);
    }
    return seq[seq.length - 1];
}

console.log("The " + nth + " Fibonacci is " + valueOf);