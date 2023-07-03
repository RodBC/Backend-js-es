const { Router } = require('express');
const User = require('./models/User')


const routes = Router();

routes.post('/users', async (req,res) => {

    const {name, description, district} = req.body;


    await User.create({
        name,
        description,
        district
    });


    return res.json({"User created": User})
})

//add try catch here due to:
//     const {name, description, district} = req.body;
//            ^
// TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.

//test on nest if the problem was in the request way

module.exports = routes