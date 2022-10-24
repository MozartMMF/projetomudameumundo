const express = require('express')
const app = express()
const port = 8383

const fs = require('fs')

app.use(express.static('public'))
app.use(express.json())

// teste rota 1 = '/info'
app.get('/info/:dynamic', (req, res) => {
    const { dynamic } = req.params
    const { key } = req.query
    console.log(dynamic, key) 
    res.status(200).json({informa: 'Texto presente!'})
})

// teste rota 2 = '/'
app.post('/', (req, res) => {
    const { parcel } = req.body //req.body passando como um pacote
    console.log(parcel)
    if (!parcel) {
        return res.status(400).send({ status: 'failed' })
    }
    res.status(200).send({ status: 'received'})
})

// rota 3 = '/usuario'
app.get('/usuario', (req, res) => {
    fs.readFile("bd/usuario.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            retur
        } else {
            res.status(200).json(data) //data
        }
    })    
})

// rota 4 = '/produto'
app.get('/produto', (req, res) => {
    fs.readFile("bd/produto.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
            retur
        } else {
            // const produtos = JSON.parse(data) // transforma texto em Object
            // console.log(typeof produtos)
            // console.log(produtos.descricao)
            res.status(200).json(data) //data
        }
    })    
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`))