function toCamelCase(sentence) {
    var separator;

    if (sentence.indexOf('-') > -1) {
        separator = '-';
    } else if (sentence.indexOf('_') > -1) {
        separator = '_';
    } else {
        console.log('Separator is not found');
        return;
    }

    var array = sentence.split(separator);

    var result = array.map(function (item, index) {
        return index === 0 ? item : item[0].toUpperCase() + item.slice(1);
    });

    return result.join('');
}
