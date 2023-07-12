import mongoose, { Schema } from "mongoose";

interface iStudent{
    name : string;
    studentClass: string;
    dob : string;
}

interface iSchoolStudent extends iStudent, mongoose.Document {}

const studentModel = new Schema({
            name : {
                type : String,
                require: true
            },
            studentClass : {
                type : String,
            },
            dob : {
                type : String,
            },
})

export default mongoose.model<iSchoolStudent>("students", studentModel)