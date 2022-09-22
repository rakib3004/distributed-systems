const app = require('express')();
const PORT =2000;


app.get('/tshirt', (req,res)=>{

    res.status(200).send({

        tshirt: 'T-Shirt',
        size: 'large'
    })
})


app.post('/tshirt/:id', (req,res)=>{

    const {id} = req.params;
    const {logo} = req.body;

    if(!logo){

        res.status(418).send({message: 'We need a logo'})
    }


    res.send({

        tshirt: `T-Shirt with your ${logo} and item_id: ${id}`,
    })
})

app.listen(PORT, ()=>{

})