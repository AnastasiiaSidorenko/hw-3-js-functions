function splitAndMerge(str, sp) {
    var arr = str.split(' ');

    var result = arr.map(function (item) {
        var splitedItem = item.split('');
        return splitedItem.join(sp);
    });

    return result.join(' ');
}
