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

   /* const f = require('./BSSE.txt');*/

 var file = fs.createWriteStream('BSSE.txt');

  // var file = require('./BSSE.txt')
    
 /* fs.writeFileSync("BSSE.txt", drive_data, function(err){
   // if(err) throw err;
    console.log('Done')
  })
*/
file.open('error',function(error){});

    data.forEach(function(v){
        file.write(v+'\n')

    });
        file.end();


res.status(200).send({
message: "Successful"
});


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