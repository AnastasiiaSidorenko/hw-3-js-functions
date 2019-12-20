function stringExpansion(string) {
    var newString = '';

    for (var char of string) {

        var n;

        if (!isNaN(char)) {
            n = +char;
            continue;
        } else if (n === undefined) {
            newString = string;
        } else {
            newString = newString + char.repeat(n);
        }

    }
    return newString;
}
