const express = require('express');

let dataToDo = require('./data.js');
const shortid = require("shortid");
const router = express.Router();
router.use(express.json());


router.use((req,res,next) => {
    console.log('TODO Router Working');
    next();
})

router.get('/', (req,res) => {
    //res.status(200).json({message: 'api working'})
   
    res.status(200).json(dataToDo);
})

router.get('/:id', validateID,(req,res) => {
    //res.status(200).json({message: 'api working'})
    try{
        res.status(200).json(req.todo);
    }catch{
        res.status(500).json({errorMessage: "Server Error"})
    }
    
})
router.post('/',(req,res) => {
    //res.status(200).json({message: 'api working'})
    const content = req.body.todo;
   
    if(content){
       
        try{
            const newContent = {id:shortid.generate() , todo: content}
            console.log(newContent);
        dataToDo.push(newContent);
        res.status(201).json(newContent)
         }catch{
             res.status(500).json({errorMessage: "Server Error"})
         }


 


    }else{
        res.status(404).json({errorMessage: "Todo is empty"})
    }
    
    
})


router.delete('/:id',validateID,(req,res) => {
   

        try {
          
            dataToDo = dataToDo.filter(item => item.id !== req.id);
            res.status(200).json(req.todo)
          }
          catch(err) {
             console.log(err)
            res.status(500).json({errorMessage: "The todo could not be removed" })
          }
       
   
})


function validateID(req,res,next){

    const {id} = req.params;
    let found = dataToDo.find(item => item.id === id)
try{
    if(found){
            req.id = id;
            req.todo = found;
            next();
    }else{
        res.status(404).json({errorMessage: "todo is not exist for the ID"})
    }

}catch{
            res.status(500).json({errorMessage: "Server Error"})
}
    

}









  module.exports = router;