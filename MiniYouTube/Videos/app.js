const express = require('express');
const app = express();
const PORT =1129;

app.use(express.json())

let data = ["Rakib","Muktar","Rahat","Siam","Inzamam"]

app.get('/students', (req,res)=>{

    res.json(data);
})


app.get('/backupStudents', (req,res)=>{

    var drive_data = JSON.stringify(data);

    var fs = require('fs')

    var file = fs.createWriteStream('BSSE.txt');

    file.on('error',function(error){
        res.status(418).send({message: 'Failed to backup'})
    });

    data.forEach(function(v){
        file.write(v)

        file.end();

    })



})


/*app.post('/videos/:id', (req,res)=>{

    const id = req.params.id;
    const name = req.body.name;
    const playlist = req.body.playlist;
   


    if(!name){

        res.status(418).send({message: 'We need a name'})
    }
    if(!playlist){

        res.status(418).send({message: 'We need a playlist'})
    }


    data.push(req.body);
    res.json(data);
})
*/

app.listen(PORT, ()=>{

})