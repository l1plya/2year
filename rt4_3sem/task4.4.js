const main = (data) => {
    let result = "";
    
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    
    const emailMatches = data.toString().match(emailRegex);
    if (emailMatches) {
        result += "Адреса электронных почт: " + emailMatches.join(', ') + "\n";
    }
    
    // Находим все URL-адреса в тексте
    const urlMatches = data.toString().match(urlRegex);
    if (urlMatches) {
      result += "URL-адреса: " + urlMatches.join(', ');
    }
    
    return result;
};
  
let cnt, res;
process.stdin.on('data', (data) => {
    res = main(data);
    process.stdout.write(res + '');
    process.exit();
});
