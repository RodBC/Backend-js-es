const { Router } = require('express');
const User = require('./models/User')


const routes = Router();

routes.post('/users', async (req,res) => {

    const {name, description, district} = req.body();


    await User.create({
        name,
        description,
        district
    });


    return res.json({"User created": User})
})





module.exports = routes