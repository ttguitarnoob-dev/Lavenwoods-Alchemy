const express = require('express')
const router = express.Router()

const Mages = [
    mageFlame = {
        _id: 1,
        name: "Mage O' Flame",
        element: "Fire",
        quote: "",
        image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
    },
    mageBolt = {
        _id: 2,
        name: "Mage O' Bolt",
        element: "Lightning",
        quote: "",
        image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
    },
    mageFrost = {
        _id: 3,
        name: "Mage O' Frost",
        element: "Ice",
        quote: "",
        image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
    },
    mageEnigma = {
        _id: 4,
        name: "Mage O' Enigma",
        element: "Mystery",
        quote: "",
        image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
    }
]

//ROUTES

//index
router.get('/', (req, res) => {
    res.render('mages/mages.ejs', { mage: Mages })
    Mages.find({}, (err, allMages) => {
        if (err) {
            res.send(err)
        } else {
            res.render('mages/mages.ejs', { mage: allMages })
        }
    })
})

//show
router.get('/:id', (req, res) => {
    Mages.findById(req.params.id, (err, foundMage) => {
        if (err) {
            res.send(err)
        } else {
            res.render('mages/show.ejs', { mage: foundMage })
        }
    })
})

module.exports = router