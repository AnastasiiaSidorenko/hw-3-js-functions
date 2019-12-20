function convert(object) {
    var result = [];

    for (var key in object) {
        var array = [];
        array.push(key);
        array.push(object[key]);
        result.push(array);
    }

    return result;
}
