const router =require('express').Router()
const camionRouter=require('./Camion.routes')
const camioneroRouter=require('./Camionero.routes')
const paqueteRouter=require('./Paquete.routes')
const provinciaRouter =require('./Provincia.routes')
//const camionXcamioneroRouter=require('./Camionxcamionero.routes')


router.use('/camiones',camionRouter)
router.use('/camioneros',camioneroRouter)
router.use('/paquetes',paqueteRouter)
router.use('/provincias',provinciaRouter)
//router.use('/camionxcamioneros',camionXcamioneroRouter)


module.exports=router;
