const express = require('express');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())


const categories = require('./data/categories.json')

const news  = require('./data/news.json')

app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

// for getting categories
app.get('/categories', (req, res)=>{
    res.send(categories);
})

// for getting all the news
app.get('/news', (req, res)=>{
    res.send(news)
})

// for getting partuclar news by news id
app.get('/news/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=>(n._id === id))
    // console.log(id)
    res.send(selectedNews)
})

// for getting news by category
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id == 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n=>(parseInt(n.category_id) === id))
        res.send(categoryNews)

    }
})

app.listen(port, ()=> {
    console.log(`Dragon API is running on port: ${port}`)
});