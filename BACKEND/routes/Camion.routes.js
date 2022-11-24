const router = require('express').Router()
const {Camion,Camionero}=require('../database/models')

router.get("/:matricula", (req, res) => {
    Camion.findByPk(req.params.matricula).then(obj => {
        res.json(obj)
    })
})

router.get("/",(req, res)=>{
    Camion.findAll({
        attributes:['matricula','modelo','tipo','potencia',],
    
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Camion.create({
        matricula: req.body.matricula,
        modelo:req.body.modelo,
        tipo:req.body.tipo,
        potencia : req.body.potencia,
    }).then(camion=>{
        res.json(camion)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:matricula',(req,res)=>{
    Camion.update({
        modelo:req.body.modelo,
        tipo:req.body.tipo,
        potencia : req.body.potencia,

    },
    {
        where:{
            matricula:req.params.matricula
        }
    }).then( data=>{
        res.json(data)
    }).catch(error =>{
    res.json(error)
})
})

router.delete('/delete/:id',(req,res)=>{
    Camion.destroy({
        where:{
            matricula:req.params.matricula
        }
    }).then( data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})




module.exports=router;