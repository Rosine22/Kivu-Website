import { body } from "express-validator";

export const userValidations = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "Invalid email").isEmail(),
    body("password", "Password is required").not().isEmpty(),
    body("password", "Password should contain at least 9 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword()
];