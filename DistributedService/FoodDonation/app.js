const express = require('express');
const app = express();
const PORT =4040;

app.use(express.json())

app.get('/donor', (req,res)=>{

    res.status(200).send({

        name: 'Burger King',
        food: 'Burger',
        item: '200',
        date: '22 Sept, 2022'
    })
})




app.get('/receiver', (req,res)=>{

    res.status(200).send({

        name: 'Our Home',
        food: 'Rice',
        item: '500',
        date: '21 Sept, 2022'
    })
})


app.get('/transaction', (req,res)=>{

    res.status(200).send({

        donor: 'Star Kabab',
        receiver: 'Biriyani',
        item: '90',
        delivery: 'pathao'
    })
})



app.post('/donor/:id', (req,res)=>{

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