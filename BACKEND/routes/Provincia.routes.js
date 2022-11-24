const router = require('express').Router()
const {Camion,Camionero,Provincia,Paquete}=require('../database/models')



router.get("/:codigoProvincia", (req, res) => {
    Provincia.findOne({
        where: {
            codigoProvincia: req.params.codigoProvincia,
        }
        }).then(obj => {
        res.json(obj)
    })
})

router.get("/",(req, res)=>{
    Provincia.findAll({
        attributes:['codigoProvincia','nombre'],
      
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Provincia.create({
        codigoProvincia: req.body.codigoProvincia,
        nombre:req.body.nombre,

    }).then(provincia=>{
        res.json(provincia)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:codigoProvincia',(req,res)=>{
    Provincia.update({
        codigoProvincia: req.body.codigoProvincia,
        nombre:req.body.nombre,

    },
    {
        where:{
        codigoProvincia:req.params.codigoProvincia
        }
    }).then( data=>{
        res.json(data)
    }).catch(error =>{
    res.json(error)
})
})

router.delete('/delete/:codigoProvincia',(req,res)=>{
    Provincia.destroy({
        where:{
            codigoProvincia:req.params.codigoProvincia
        }
    }).then( data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})




module.exports=router;