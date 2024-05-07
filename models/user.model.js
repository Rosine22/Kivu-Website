import mongoose from 'mongoose';

const UserSchema =new mongoose.Schema({
    firstName:{
        type: String,
        required:[true, "firstname is required"]
    },
    lastName:{
        type: String,
        required:[true, "lastname is required"]
    },
    email:{
        type: String,
        required:[true, "email is required"]
    },
    password:{
        type: String,
        required:[true, "Password is required"]
    },
    
},{
    timestamps:true
});

const Usermodel = mongoose.model('user',UserSchema);

export default Usermodel;
