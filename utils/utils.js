var add = (a, b) => a + b;
var square = (a) => a * a;

var setName = (user, fullName) => {
    var nameParts = fullName.split(", ");
    user.firstName = nameParts[1];
    user.lastName = nameParts[0];
    return user;
};

module.exports = {
    add: add,
    square: square,
    setName : setName
};


