const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.confirmPwd = !isEmpty(data.confirmPwd) ? data.confirmPwd : "";
    data.phone = !isEmpty(data.phone) ? data.phone : "";
    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    //phone number check 
    if (Validator.isEmpty(data.phone)) {
        errors.phone = "Phone field is required"
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.confirmPwd)) {
        errors.confirmPwd = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.confirmPwd)) {
        errors.confirmPwd = "Passwords must match";
    }

    if (data.phone.match("^[a-zA-Z]+$")) {
        errors.phone = "invalid phone number"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};