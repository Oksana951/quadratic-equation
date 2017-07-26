function calcDiscr(a, b, c) {
    return b - a * c;
}

function solveQuadratic(a, b, c) {
    let x1, x2;
    let discr = calcDiscr(a, b, c);
    if (discr < 0) {
        return 'No roots';
    }
    
    return 'x1 = ' + x1 + ', x2= ' + x2;
}

var a = parseFloat(prompt('Enter A'));
var b = parseFloat(prompt('Enter B'));
var c = parseFloat(prompt('Enter C'));

var d = b * b - 4 * a * c;
document.write(d);

var x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
document.write(x1);

var x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
document.write(x2);


    
