const path = require('path');

const path_for_src = path.join(__dirname, '../src')

class Controller {
    // Главная страница
    static indexPage(req, res) {
        const filePath = 'main.html';
        res.sendFile(filePath, { root: path_for_src });
        return res.status(200);
    }
    // Страница с отзывами
    static FeedbackPage(req, res) {
        const filePath = 'main2.html';
        res.sendFile(filePath, { root: path_for_src });
    }
    static ContactPage(req, res) {
        const filePath = 'main3.html';
        res.sendFile(filePath, { root: path_for_src });
    }
}

module.exports = Controller;