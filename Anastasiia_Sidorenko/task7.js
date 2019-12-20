function transform(array) {
    return array.map(function (item) {
        return function () { return item; }
    });
}
