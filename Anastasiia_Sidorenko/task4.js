function reverseSentence(sentence) {
    var array = sentence.split(' ');

    var changedArray = array.map(function (item) {
        var arr = [];

        for (var char of item) {
            arr.unshift(char);
            item = arr.join('');
        }
        return item;
    });

    return changedArray.join(' ');
}
