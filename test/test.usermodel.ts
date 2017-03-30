// modules ========================================================================================
import {} from 'mocha';
import {} from 'chai';
import UserModel from '../app/models/user_model';

// test ===========================================================================================
describe('User', function() {
    it('should create a new user', function() {
        let fn:String = "John";
        let ln:String = "Doe";
        let email:String = "JohnDoe@hisNeighbors.Place";
        let gender:String = "Male";
        
        let john = new UserModel({
            firstname: fn,
            lastname: ln,
            email: email,
            gender: gender
        });
        
        // look at chai documentation 
        chai.expect(john.firstname).to.equal(fn.toLowerCase());
        chai.expect(john.lastname).to.equal(ln.toLowerCase());
        chai.expect(john.email).to.equal(email.toLowerCase());
        chai.expect(john.gender).to.equal(gender.toLowerCase());
    });
});