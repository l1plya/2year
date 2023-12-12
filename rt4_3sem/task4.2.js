const getNext = (x) => {
    return x + Number.EPSILON
}

main = (data) => {
    data = data.toString().trim();
    data = parseFloat(data);
    console.log(`Следующее число: ${getNext(data)}`)
    return "";
};
  
let cnt, res;
process.stdin.on('data', (data) => {
    res = main(data);
    process.stdout.write(res + '');
    process.exit();
});