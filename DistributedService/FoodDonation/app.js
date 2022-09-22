const app = require('express')();
const PORT =4040;


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



app.post('/receiver/:id', (req,res)=>{

    const {id} = req.params;
    const {name} = req.body.name;
    const {food} = req.body.food;
    const {item} = req.body.item;
    const {date} = req.body.date;


    if(!name){

        res.status(418).send({message: 'We need a name'})
    }


    res.send({

        foodDetails: `name: ${name}, food: ${food}, item: ${item}, date:  `,
    })
})


app.listen(PORT, ()=>{

})