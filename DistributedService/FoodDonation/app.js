const express = require('express');
const app = express();
const PORT =1001;

app.use(express.json())

app.get('/donation', (req,res)=>{

    res.status(200).send({

        name: 'Burger Furger',
        food: 'Burger',
        item: '200',
        date: '22 Sept, 2022'
    })
})



app.post('/donation/:id', (req,res)=>{

    const id = req.params.id;
    const name = req.body.name;
   


    if(!name){

        res.status(418).send({message: 'We need a name'})
    }


    res.status(400).send({

        name: `${name}`,
    })
})


app.listen(PORT, ()=>{

})