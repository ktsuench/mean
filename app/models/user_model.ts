// modules ========================================================================================
var mongoose = require('mongoose');

// model definition ===============================================================================
// define string setter
function lowerCase(str:String):String {
    return str.toLowerCase();
}

// define user schema
let userSchema = mongoose.Schema({
    firstname: {type: String, set: lowerCase},
    lastname: {type: String, set: lowerCase},
    email: {type: String, set: lowerCase},
    gender: {type: String},
    dateJoined: {type: Date, default: Date.now}
});

// define user model by compiling user schema
let userModel = mongoose.model('User', userSchema);

// node export allows us to pass model to other files when it is called
module.exports = userModel;

// export for mocha tests
export function UserModel(obj) {
    return new userModel(obj);
}
export default UserModel({});