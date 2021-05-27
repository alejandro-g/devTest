/*Definition of student model that'll be stored within mongoDB
Items can now be stored within studentsDB */
import { Schema, model } from "mongoose";

const studentSchema = new Schema ({
    firstName: {
        type: String,
        required: true,
        trim: true
    }, 
    lastName: {
        type: String,
        required: true,
        trim: true
    }, 
    birthday: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true, //updated and created at
})

export default model('student', studentSchema); 