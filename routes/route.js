
const path = require('path');
const express = require('express');



const router = express.Router();

router.get('/',(req,res,next)=>{
    
    res.render('home',{name: false});
});

router.get('/user/:name',(req,res,next)=>{
    const name = req.params.name;
    res.render('home',{name: name});
});


const MonthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]; 

let date = new Date();

router.get('/date', (req, res,next) => {
    res.json({
        day: date.getDate(),
        month: MonthNames[date.getMonth()],
        year: date.getFullYear()
    });
});

module.exports = router;