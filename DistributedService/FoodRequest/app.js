const express = require('express');
const app = express();
const PORT =1003;

app.use(express.json())
app.get('/request', (req,res)=>{

    res.status(200).send({

        name: 'Our Home',
        food: 'Rice',
        item: '500',
        date: '21 Sept, 2022'
    })
})


app.listen(PORT, ()=>{

})