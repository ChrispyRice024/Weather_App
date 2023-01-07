const express = require('express')

const router = express.Router()

// read route
router.route('/favorites').get(async function (req, res){
    const dbConnect = dbo.getDb()

    dbConnect
        // tells the GET request which collection it is GETing
        .collection('favorites')
        // finds the objects in the database but only the first 5
        .find({}).limit(6)
        // puts the response into an array and throws an error if there is one
        .toArray(function (err, result) {
            if(err){
                res.status(400).send("error fetching list")
            }else{
                res.json(result)
            }
        })
})

// POST request
router.route('/favorites').post(function (req, res) {
    const dbConnect = dbo.getDb()
    const matchDocument = {
        id: req.body.id,
        city: req.body.city,
        state: req.body.state,
        lon: req.body.lon,
        lat: req.body.lat,
        path: req.body.path
    }


    dbConnect
    //tells the POST which collection to use
        .collection('/favorites')
        // uses the matchDocument variable to sort the data before POSTing it to the req.body
        .insertOne(matchDocument, function (err, result){
            if(err){
                res.status(400).send('error inserting matches')
            }else{
                res.status(204).send()
            }
        })
})

// PUT request(not needed for this app)
// router.route('/favorites/update').post(function(req, res){
//     const dbConnect =dbo.getDb()
//     const favoritesQuery = {_id: req.body.id}

//     dbConnect
//         .collection('favoritesAndReview')
//         .updateOne(favoritesQuery, function (err, res){
//             if (err){
//                 res.status(400).send('error updating')
//             }else{
//                 console.log('update successful')
//             }
//         })
// })

// Delete
router.route('favorites/delete/:id').delete(function (req,res){
    const dbConnect = dbo.getDb()
    const favoritesQuery = {id: req.body.iq}

    dbConnect
        .collection('favorites')
        .deleteOne(favoritesQuery, function (err, res) {
            if(err){
                res.status(400).send('error deleting')
            }else{
                console.log('Deleted')
            }
        })
})

module.exports = router