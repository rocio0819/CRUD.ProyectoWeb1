const router = require('express').Router();
const {Camion,Camionero,Paquete}=require('../database/models')


router.get("/:dni", (req, res) => {
    Camionero.findByPk(req.params.dni).then(obj => {
        res.json(obj)
    })
})

router.get("/",(req, res)=>{
    Camionero.findAll({
       
      
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Camionero.create({
        dni: req.body.dni,
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion : req.body.direccion,
        salario: req.body.salario,
        poblacion: req.body.poblacion
    }).then(camionero=>{
        res.json(camionero)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:dni',(req,res)=>{
    Camionero.update({
        dni: req.body.dni,
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion : req.body.direccion,
        salario: req.body.salario,
        poblacion: req.body.poblacion
    },
    {
        where:{
            dni:req.params.dni
        }
    }).then( data=>{
        res.json(data)
    }).catch(error =>{
    res.json(error)
})
})

router.delete('/delete/:dni',(req,res)=>{
    Camionero.destroy({
        where:{
            dni:req.params.dni
        }
    }).then( data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})




module.exports=router;