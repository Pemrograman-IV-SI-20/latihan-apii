const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost:27017/tokogitar'
const cors = require('cors')
const path = require('path')

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log ('Berhasil Connect Ke Database')
}).catch((e)=>{
    console.log(e)
    console.log ('Gagal Connect Ke Database')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const directory = path.join(__dirname, '/static/')
app.use(express.static(directory))

app.use('/user', require('./routes/user'))
app.use('/gitar', require('./routes/gitar'))
app.use('/transaksi', require('./routes/transaksi'))


app.get('/test',(req,res)=>{
    const nama = 'anisa' 
    let prodi = ''
    if (nama==='anisa'){
        prodi = 'sistem informasi'
    }else{
        prodi = 'informatika'
    }

    const mahasiswa = {
        nama:'anisa',
        npm:20411016,
        prodi:'sistem informasi',
        hobi:'tidur',
        keluarga:{
            adik:1
        }
    }

    res.json({
        test:'Berhasil',
        nama:nama,
        prodi:prodi,
        coba:mahasiswa.keluarga.adik,
        biodata:mahasiswa
        
    })
})

app.get ('/mahasiswa/:npm',(req,res)=>{
    res.json({
        npm:req.params.npm
    })
})

app.listen(5000,()=>{
    console.log ('Berhasil Jalan')
})