var a = Number(prompt('Enter A'));
var b = Number(prompt('Enter B'));
var c = Number(prompt('Enter C'));

if (a == 0) {
    document.write('cannot be 0');
}
else {
    var result = square(a, b, c);
    document.write(result);
}

function square(a, b, c) {
    var d = b * b - 4 * a * c;
    var result;
   
    if (d > 0) {
        result = 'x1 = ' + (-b - Math.sqrt(d)) / (2 * a);
        result = 'x2 = ' + (-b + Math.sqrt(d)) / (2 * a);
    }

    else if (d < 0) {
        result = 'no roots';
    }
    
    return result;
}