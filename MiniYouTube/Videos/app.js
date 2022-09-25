const express = require('express');
const app = express();
const PORT =2040;

app.use(express.json())

let data = [
    {
        name: "Introduction to Docker",
        playlist: "Distributed Tutorial"
    },
    {
        name: "Docker Swarm in 200 secs",
        playlist: "Crash Turorial"
    }
]

app.get('/videos', (req,res)=>{

    res.json(data);
})



app.post('/videos/:id', (req,res)=>{

    const id = req.params.id;
    const name = req.body.name;
    const playlist = req.body.playlist;
   


    if(!name){

        res.status(418).send({message: 'We need a name'})
    }


    res.status(400).send({

        name: `${name}`,
        playlist: `${playlist}`
    })
})


app.listen(PORT, ()=>{

})