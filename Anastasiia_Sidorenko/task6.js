function largest() {
    var array = [].slice.call(arguments);

    array.sort(function (a, b) {
        return b - a;
    });

    return array[0];
}

function smallest() {
    var array = [].slice.call(arguments);

    array.sort(function (a, b) {
        return a - b;
    });

    return array[0];
}
