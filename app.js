import express from 'express'

const app=express();
const port=5000;
//using the ejs and view engine
app.set('view engine','ejs');
app.set('views','./views')


app.get('/',(req,res)=>{
    const tasks=[
        {
            id: 1, 
            title: 'feed the dog',
            completed: false
        },
        {
            id: 2, 
            title: 'feed myself',
            completed: true
        },
        {   
            id: 3, 
            title: 'feed her',
            completed: true
        }
    ]
    res.render('tasks',{tasks});
})


app.listen(port,()=>{
    console.log(`Server  is running on http://localhost:${port}`);
});