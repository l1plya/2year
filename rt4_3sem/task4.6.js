main = (data) => {
    let result = "";
    const imgRegex = /<img[^>]*?src=["']([^"']+)["']/g;
    const matches = data.toString().match(imgRegex);

    if (matches) {
        result = matches.map(match => match.replace(/<img[^>]*?src=["']([^"']+)["']/, "$1")).join("\n");
    }

    return result;
}

let cnt, res;
process.stdin.on('data', (data) => {
    res = main(data);
    process.stdout.write(res + '');
    process.exit();
});

/* ВХОДНЫЕ ДАННЫЕ
<img src="image1.jpg" alt="Изображение 1"><img src="image2.jpg" alt="Изображение 2"><div><img src="image3.jpg" alt="Изображение 3"></div><img src="image4.jpg" alt="Изображение 4"><img src="image5.jpg" alt="Изображение 5">
*/