const express = require('express');
const router= express.Router();

const MenuItems = require("./../models/MenuItems");


//Menu
router.post('/', async(req,res) =>{
    try{
      const data = req.body
      const newMenu = new MenuItems(data);
      const response = await newMenu.save();
      console.log("data saved");
      res.status(201).json(response);
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
  
  router.get ('/', async(req, res) =>{
    try{
      const data = await MenuItems.find();
      console.log('data fetched');
      res.status(200).json(data);
      }catch(err){
        console.log(err);
        res.status(500).json({error: 'Error fetching data'});
    }
  })

  module.exports = router;