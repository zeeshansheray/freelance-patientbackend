const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const db = require("./db/patientDetail");

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.get('/patients', async(req,res)=>{
    const results = await db.getAllPatient();
    console.log('result ', results);
    res.status(200).json({sucess : true, data : results})
})

app.post('/patients', async(req,res)=>{
    const results = await db.createPatient(req.body);
    console.log('result is ', results);
    res.status(200).json({sucess : true, message : 'Patient have been added sucessfully.'})
})

app.patch('/patients/:id', async(req, res)=>{
    const result = await db.updatePatient(req.params.id, req.body);
    res.status(200).json({sucess : true, data : result})
})

app.delete('/patients/:id', async(req, res)=>{
    const id = await db.deletePatient(req.params.id);
    res.status(200).json({sucess: true, message : 'Patient have been deleted sucessfully!'})
})


app.listen(1337, ()=>{console.log('*--------* Server is connected on Port : 1337 *--------*')})

