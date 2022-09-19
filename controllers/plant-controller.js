const express = require('express')
const router = express.Router()
const {Plants}= require('../models')
//ROUTES

//INDEX ROUTE
router.get("/", async (req, res) => {
	try{
        res.json(await Plants.find({}))
    }catch(err){
        res.status(400).json(err)
    }
})

//CREATE ROUTE
router.post("/", async (req, res) =>  {
	try{
        res.json(await Plants.create(req.body))
    }catch(err){
        res.status(400).json(err)
    }
});

// SHOW ROUTE
router.get("/:id", async (req, res) => {
	try{
        res.json(await Plants.findById(req.params.id))
    }catch(err){
        res.status(400).json(err)
    }
});

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
	try{
        res.json(await Plants.findByIdAndRemove(req.params.id));
    }catch(err){
        res.status(400).json(err)
    }
});

// UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	try{
        await Plants.findByIdAndUpdate(req.params.id, req.body, {new:true})
    }catch(err){
        res.status(400).json(err)
    }
});

module.exports = router
