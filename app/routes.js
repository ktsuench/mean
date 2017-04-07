// constants ======================================================================================
var ENV_DEV = "DEVELOPMENT";

// modules ========================================================================================
var User = require('./models/user_model.js');
var assert = require('assert');

// routing ========================================================================================
module.exports = function(app) {
    // route set up
    app.set('views', 'public/views');
    app.set('view engine', 'pug');

    /**
     * route to handle all requests
     * @param req Request object
     * @param res Response onject
     * @param next Callback function (next action to take)
     */
    app.all('/*', function(req, res, next) {
        let passURLs = [];

        // only allow debug routes to process if environment is development
        if(process.env.ENVIRONMENT == ENV_DEV){
            passURLs.push('debug');
        }

        /**
         * if url contains any of the above words
         * go to next route
         */
        if (passURLs.indexOf(req.url.split('/')[1]) > -1) {
            next();
        } else {
            res.render('index');
        }
    });

    // debugging routes ===========================================================================
    // Only works if environment is development
    if(process.env.ENVIRONMENT == ENV_DEV){
        app.get('/debug/usermodel', function(req, res) {
            let fn = "John";
            let ln = "Doe";
            let email = "JohnDoe@hisNeighbors.Place";
            let gender = "Male";
            
            let john = new User({
                firstname: fn,
                lastname: ln,
                email: email,
                gender: gender
            });
            
            assert.strictEqual(john.firstname, fn.toLowerCase());
            assert.strictEqual(john.lastname, ln.toLowerCase());
            assert.strictEqual(john.email, email.toLowerCase());
            assert.strictEqual(john.gender, gender);

            res.send({user: john, result: "assertions passed"});
        });
    }

    // server routes ==============================================================================
    // handle things like api calls
}
