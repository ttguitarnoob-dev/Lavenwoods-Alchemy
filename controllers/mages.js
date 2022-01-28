const express = require('express')
const router = express.Router()
const Mage = require('../models/Mage')
const mageQuote = require('../Public/Script/script')
let wisdom = mageQuote
//ROUTES

//seed
router.get('/3548magecreate6548', (req, res) => {


    Mage.deleteMany({}).then((response) => {
        Mage.insertMany([
            {
                mageName: "Mage O' Flame",
                element: "Fire",
                image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
                _id: "61f330c3d78647941020d715",
            },
            {
                mageName: "Mage O' Bolt",
                element: "Lightning",
                image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
                _id: "61f330c3d78647941020d716",
            },
            {
                mageName: "Mage O' Frost",
                element: "Ice",
                image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
                _id: "61f330c3d78647941020d717",
            },
            {
                mageName: "Mage O' Enigma",
                element: "Mystery",
                image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
                _id: "61f330c3d78647941020d718",
            }
        ]).then((response) => {
            console.log(`made ${response} mages`)
        })
    })
    setTimeout(() => {
        res.redirect('/mages')
    }, 1000);

})

//index
router.get('/', (req, res) => {

    Mage.find({}, (err, allMages) => {
        if (err) {
            res.send(err)
        } else {
            res.render('mages/mages.ejs', { mage: allMages })
        }
    })
})

//New Potion

router.get('/newpotion/:id', (req, res) => {
    Mage.findById(req.params.id, (err, foundMage) => {
        if (err) {
            res.send(err)
        } else {
            res.render('potions/new.ejs', { mage: foundMage })
        }
    })
})

//show
router.get('/:id', (req, res) => {
    Mage.findById(req.params.id, (err, foundMage) => {
        if (err) {
            res.send(err)

        } else {
            res.render('mages/show.ejs', { mage: foundMage, mageQuote: wisdom })
        }
    })
})

//create
router.post('/', (req, res) => {
    Mage.create(req.body, (err, newMage) => {
        if (err) {
            res.send(err)
        } else {
            console.log(`mage created here: ${newMage}`)
            res.redirect('/mages')
        }
    })
})

//delete
router.delete('/:id', (req, res) => {
    Mage.findByIdAndDelete(req.params.id, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/mages')
        }
    })
})

//update

router.put('/:id', (req, res) => {
    res.send(`mage update: ${req.params.id}`)
})

module.exports = router