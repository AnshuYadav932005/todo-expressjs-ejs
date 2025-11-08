import express from 'express'

const app=express();
const port=5000;
//using the ejs and view engine
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./views')

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

app.get('/',(req,res)=>{
    
    res.render('tasks',{tasks});
});

app.post('/tasks/:id',(req,res)=>{
    const taskId=parseInt(req.params.id);
    const taskIndex=tasks.findIndex(task => task.id===taskId);
    if(taskIndex===-1){
        return res.status(404).send('Task not found');
    }
    console.log(req.body);
    //res.redirect('/');

});


app.listen(port,()=>{
    console.log(`Server  is running on http://localhost:${port}`);
});