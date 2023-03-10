const router = require('express').Router()
const transaksiController = require('../controllers/transaksiController')
const uploadConfig = require('../uploadConfig')
const fields = uploadConfig.upload.fields([
    {
        name: 'buktiPembayaran',
        maxCount: 1
    }
])

router.post('/create', fields,(req,res) => {
    req.body.buktiPembayaran = req.files.buktiPembayaran[0].filename

    transaksiController.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getall', (req,res) => {

    transaksiController.getall()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/getbyiduser/:id', (req,res) => {

    transaksiController.getByIdUser(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

module.exports = router