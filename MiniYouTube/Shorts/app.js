const express = require('express');
const app = express();
const PORT =2030;

app.use(express.json())

app.get('/shorts', (req,res)=>{

    res.status(200).send({

        name: 'SQL Injection Attack Tutorial',
        tag: 'Security',
        date: '25 Sept, 2022'
    })
})



app.post('/shorts/:id', (req,res)=>{

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