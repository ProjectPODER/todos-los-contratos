var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET Metodología. */
router.get('/metodologia', function(req, res, next) {
  res.render('metodologia');
});

/* GET Unidades Compradoras. */
router.get('/unidades-compradoras', function(req, res, next) {
  res.render('unidades-compradoras');
});

/* GET Proveedores. */
router.get('/proveedores', function(req, res, next) {
  res.render('proveedores');
});

router.post('/send', function (req, res) {

    var mailOptions = {
        to: "info@quienesquien.wiki",
        subject: 'Mensaje desde TodosLosContratos.mx',
        from: "TodosLosContratos.mx <contacto@todosloscontratos.mx>",
        html:  "From: " + req.param("name") + "<br>" +
               "User's email: " + req.param("email") + "<br>" +     "Message: " + req.param("text")
    }

	let smtpTransport = nodemailer.createTransport({
        host: 'mail.mayfirst.org',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "", // generated ethereal user
            pass: "" // generated ethereal password
        }
    });


    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (err, response) {
        if (err) {
            console.log(err);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });

});

module.exports = router;
