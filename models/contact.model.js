import mongoose from 'mongoose';

const contactSchema =new mongoose.Schema({
    Name:{
        type: String,
        required:[true, "name is required"]
    },
    email:{
        type: String,
        required:[true, "Email is required"]
    },
    Subject: {
        type: String,
        required: false
    },
    Message: {
        type: String,
        required: false
    }
},{
    timestamps:true
});

const contactModel = mongoose.model('contact',contactSchema);

export default contactModel;
