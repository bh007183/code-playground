app.get("url/rout", async function(req, res){
    const data = await db.Modul.findAll({

    }).catch(e => { 
        if(e){throw error}
    }).then(
        res.json(data)
    )

})