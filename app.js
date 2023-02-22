const express = require('express')

const app = express()

app.set('view engine','ejs')

app.use('/contact', function (request, response) {
    response.render('contact', {
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['непишисюда@gmail.com', 'zhandosloxвквадрате@gmail.com'],
        phone: '88005553535',
    })
})
app.use('/fio', function (request, response) {
    response.render('fio', {
        f: 'Биадилов',
        i: 'Дамир',
        p: '87762716635',
        m: 'Я считаю что эта работа достойна всех баллов в мире но мне хватит и 90 :)',
        s: 'Играть в компуктер и мобаил телефон ',
        l: 'Русский,Казахский,Английский и Монгольский',
    })
})
app.use('/homePage', function (request, response) {
    response.render('homePage')
})
app.listen(5000)   