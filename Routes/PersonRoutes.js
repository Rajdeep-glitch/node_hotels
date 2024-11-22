const express = require('express');
const router = express.Router();

const person = require ("./../models/Person");

//post
router.post('/', async(req,res) =>{
  try{
    const data = req.body
    const newPerson = new person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(201).json(response);

  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})
// get
router.get ('/', async(req, res) =>{
  try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Error fetching data'});
  }
})

router.get('/:WorkType', async (req,res) =>{
  try{
    const WorkType = req.params.WorkType;
    if(WorkType == 'chef' || WorkType == 'manager' || WorkType == 'waiter'){
      const response = await person.find({WorkType:WorkType});
      console.log('data fetched');
      res.status(200).json(response);

    }
    else{
      res.status(404).json({error: 'Invalid WorkType'});
    }
  }
  catch{
    console.log(err);
    res.status(500).json({error: 'Error fetching data'});
  }
})

router.put('/:id', async (req,res) =>{
  try{
    const id = req.params.id;
    const data = req.body;
    const response = await person.findByIdAndUpdate(id, data, {new: true, runvalidator: true,
    })
    if (!response){
      res.status(404).json({error: 'Invalid id'});
    }
    console.log('data updated');
    res.status(200).json(response);

  }
  catch{
    console.log(err);
    res.status(500),json({error:'internal server error'})
  }
})

router.delete('/:id', (req,res)=>{
  try{
    const id = req.params.id;
    const response = person.findByIdAndRemove(id);
    if (!response){
      res.status(404).json({error: 'Invalid id'});
      }
      console.log('data deleted');
      res.status(404).json({response: 'person deleted'});
  }
  catch{
    console.log(err);
    res.status(500).json({error: 'Error deleting data'});
  }
})
module.exports= router;
