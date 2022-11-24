
const express = require('express')
const cors = require('cors')
const { Camion,Paquete,Camionero,Provincia}=require('./database/models')
const app = express()
const sequelize=require ('./database/sequelize')
const router =require('./routes')
require('./database/associations')
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())
app.use('/',router)

//app.get("/camioneros", (req, res) => {
 //   Camionero.findAll({
 //       attributes: ['dni', 'nombre'],
 //       include: {
 //           model:Camion,
 //           attributes: ['matricula', 'modelo']
 //       }
  //  }).then(list => {
  //      res.json(list)
 //   })
//})
//app.post("/camioneros", (req, res) => {
 //   Camionero.create({
 //       dni: req.body.dni,
 //       nombre: req.body.nombre,
 //   }).then(camionero => {
 //       res.json(camionero)
  //  })
//})
//app.get("/camion", (req, res) => {
 //   Camion.findAll({
 //       attributes: ['matricula', 'modelo'],
 //       include: {
 //           model: Camionero,
 //           attributes: ['nombre', 'dni'],
 //       }
//    }).then(list => {
 //       res.json(list)
 //   })
//})



app.listen(port, () => {
    console.log(`Server en puerto ${port}`)

    sequelize.sync({ force: false }).then(() => {
        console.log('Sincronizado')
    }).catch((error)=>{
        console.log(`Ocurrio el siguiente error ${error}`)
    })
})

