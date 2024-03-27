const functions = require('@google-cloud/functions-framework');

functions.http('add', (req, res) => {

  res.status(200).send({
    x: req.body.x, 
    y:req.body.y, 
    result: req.body.x + req.body.y
});
});
