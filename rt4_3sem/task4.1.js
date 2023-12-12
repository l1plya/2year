/*
ПЕРВЫЙ ВАРИАНТ:
1472 = 1,1472 * 10^3 => 3

ВТОРОЙ ВАРИАНТ:
0,01 => 10^-2 => -2


7_10 = 111_2 = 1,11 * 2^2

1473 = 1,473 
3 | 473

147365482
8 | 473

*/

const dexp = (x) => {
    let count = 0
    if (x === 0) {
        return 0;
    }
    while (x > 10) {
        count += 1
        x /= 10
    }

    while (x < 1) {
        count -= 1
        x *= 10
    }
    return count
}

main = (data) => {
    console.log(`${parseFloat(data)}: ${dexp(parseFloat(data))}`)
    
    //console.log(`8: ${dexp(8)}`)
    //console.log(`0.001: ${dexp(0.001)}`)

    return ""
};

let res;
process.stdin.on('data', (data) => {
    res = main(data);
    process.stdout.write(res + '');
    process.exit();
});
