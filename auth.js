var key = 'qweasdzxc';
var jwt = require('jsonwebtoken');

function signIn(username, password, myQueue) {

}

function getToken(username, groups) {
    var token = jwt.sign({
        username: username,
        group: groups
    }, key);
    return token
}

function verify(token) {
    var data = jwt.verify(token, key);
    return data;
}

function signUp() {

}