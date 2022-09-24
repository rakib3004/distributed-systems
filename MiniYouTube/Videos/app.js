const express = require('express');
const app = express();
const PORT =2040;

app.use(express.json())

app.get('/videos', (req,res)=>{

    res.status(200).send({


        name: 'IT Park Tour',
        playlist: 'Tech Tour',
        date: '25 Sept, 2022'
    })
})



app.post('/videos/:id', (req,res)=>{

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