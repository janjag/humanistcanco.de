var express = require('express'),
    app = express();

app.use(express.static(__dirname));
app.get('/', function (req, res){
    res.redirect(req.path + 'index/');
});
app.listen(8888);