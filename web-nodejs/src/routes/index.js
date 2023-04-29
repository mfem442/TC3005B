const express = require('express');
const axios = require('axios');
const router = express.Router()
const { isLoggedIn } = require('../lib/auth');

router.get('/', async (req, res) => {

    const END_POINT = "https://rickandmortyapi.com/api/character"

    axios.get(END_POINT)
        .then(function (response) {
            console.log(response.data.results)
            res.render('index.hbs', {
                data: response.data.results, 
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('index.hbs', {
                error,
                data: [], 
            })
        });
})

router.get('/locations', async (req, res) => {
    const Locations = "https://rickandmortyapi.com/api/location"
    axios.get(Locations)
        .then(function (response) {
            console.log(response.data.results)
            res.render('index.hbs', {
                data: response.data.results, 
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('index.hbs', {
                error,
                data: [], 
            })
        });
})

router.get('/episodes', async (req, res) => {
    const Episodes = "https://rickandmortyapi.com/api/episode"
    axios.get(Episodes)
        .then(function (response) {
            console.log(response.data.results)
            res.render('index.hbs', {
                data: response.data.results,
            })
        })
        .catch(function (error) {
            console.log(error);
            res.render('index.hbs', {
                error,
                data: [],
            })
        });
})



module.exports = router
