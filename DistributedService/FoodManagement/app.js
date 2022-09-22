const express = require('express');
const app = express();
const PORT =3002;

app.use(express.json())




app.get('/management', (req,res)=>{

    res.status(200).send({

        donor: 'Star Kabab',
        receiver: 'Biriyani',
        item: '90',
        delivery: 'pathao'
    })
})




app.listen(PORT, ()=>{

})