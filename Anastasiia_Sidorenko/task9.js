function countDown(number) {
    var i = 1;
    while (number >= 0) {
        setTimeout(function (number) {
            console.log(number);
        }, 1000 * i, number);
        number--;
        i++;
    }
}
