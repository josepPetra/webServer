const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// app
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Yegia',
            email: 'c11200037@john.petra.ac.id'
        },
        {
            nama: 'Joehan',
            email: 'c11200037@john.petra.ac.id'
        },
        {
            nama: 'Eltan',
            email: 'c11200037@john.petra.ac.id'
        },
    ];
    res.render('index', { 
        layout: 'layouts/main-layout',
        nama: 'Yegia',
        title: 'Home',
        mahasiswa,
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        layout: 'layouts/main-layout',
        title: 'About',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        layout: 'layouts/main-layout',
        title: 'Contact',
    });
});

app.get('/product/:id', (req, res) => {
    res.send(`product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
