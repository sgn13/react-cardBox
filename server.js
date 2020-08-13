const express = require('express');
const path =require('path');

const app = express();

app.get('/api/members',(req,res)=>{
    const members =[
        {id:1,
        name:'krijan1',
        email:'123@gmail.com'
        }
    ];
    res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));