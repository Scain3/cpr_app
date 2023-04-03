const router = require('express');

router.post('/test', function(req, res){
    res.json({ requestBody: req.body });
});

module.exports = router;
