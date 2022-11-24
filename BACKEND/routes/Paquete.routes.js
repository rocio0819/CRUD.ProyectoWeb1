const router = require('express').Router()
const {Camion,Camionero,Paquete,Provincia}=require('../database/models')

router.get("/:codigoPaquete", (req, res) => {
    Paquete.findOne({
        where: {
            codigoPaquete: req.params.codigoPaquete
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})


router.get("/",(req, res)=>{
    Paquete.findAll({
        attributes:['codigoPaquete','descripcion','destinatario','direccionDestinatario',],
      
    }).then(list=>{
        res.json(list)
    })
})

router.post("/create",(req,res)=>{
    Paquete.create({
        codigoPaquete: req.body.codigoPaquete,
        descripcion:req.body.descripcion,
        destinatario:req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario,
        codigoProvincia: req.body.codigoProvincia
    }).then(paquete=>{
        res.json(paquete)
    }).catch(error=>{
        res.json(error)
    })
})



router.put('/update/:codigoPaquete',(req,res)=>{
    Paquete.update({
        codigoPaquete: req.body.codigoPaquete,
        descripcion:req.body.descripcion,
        destinatario:req.body.destinatario,
        direccionDestinatario: req.body.direccionDestinatario,
        codigoProvincia: req.body.codigoProvincia

    },
    {
        where:{
            codigoPaquete:req.params.codigoPaquete
        }
    }).then( data=>{
        res.json(data)
    }).catch(error =>{
    res.json(error)
})
})

router.delete('/delete/:codigoPaquete',(req,res)=>{
    Paquete.destroy({
        where:{
            codigoPaquete:req.params.codigoPaquete
        }
    }).then( data=>{
        res.json(data)
    }).catch(error=>{
        res.json(error)
    })
})




module.exports=router;