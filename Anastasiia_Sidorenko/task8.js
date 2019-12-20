function sum() {
    var array = [].slice.call(arguments);

    if (array.length === 0) {
        return 0;
    } else {
        return array.pop() + sum.apply(null, array);
    }
}
