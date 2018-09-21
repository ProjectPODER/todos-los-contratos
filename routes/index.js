var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


console.log(process.env);

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
        host: process.env.EMAIL_SERVER || "",
        port: process.env.EMAIL_PORT || "587",
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER || "", // generated ethereal user
            pass: process.env.EMAIL_PASS || "" // generated ethereal password
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
