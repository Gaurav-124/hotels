const express = require('express');
const router = express.Router();
const Person = require('./../Models/Person1')


//post route to and a person
router.post('/',async (req,res)=>{

    try{
        const data = req.body

        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})

router.get('/', async (req,res)=>{
    try{
        const data = await Person.find();
        console.log('data feteched');
        res.status(200).json(data); 
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
    }
})


router.get('/:worktype', async(req,res)=>{
    try{
        const worktype =req.params.worktype;
        if(worktype=='chef' || worktype=='manager' || worktype=='waiter'){
            const response = await Person.find({work:worktype});
            console.log('reponse feteched');
            res.status(200).json(response); 
        }else{
            res.status(500).json({error: 'invalid server error'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'}); 
    }
})

router.put('/:id', async (req,res)=>{
    try{
        const personid = req.params.id;
        const updatePerson = req.body;

        const response = await Person.findByIdAndUpdate(personid,updatePerson,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }
        console.log('data update');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'}); 
    }
})
module.exports = router;
