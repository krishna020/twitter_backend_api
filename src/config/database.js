const mongoose=require('mongoose')
const URL='mongodb://127.0.0.1:27017/Twitter_dev'
mongoose.connect(URL)
.then(()=>{
    console.log(`database is connected to :  ${URL}`)
})
.catch((err)=>
{
    console.log(err.message)
})