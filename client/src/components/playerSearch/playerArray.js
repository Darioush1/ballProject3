import React from "react";

router.get('https://localhost:3001/api', function(req, res, next) {
    res.locals.connection.query('select * from nbastats', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});
