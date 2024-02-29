const { Router }= require('express')
const router= Router()

router.get('/', (req,res)=>{
    res.json({'Tittle':'Padel League'})
})

module.exports= router