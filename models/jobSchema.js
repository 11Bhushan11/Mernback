import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type : String,
        required: [true, "Please provide job title"],
        minLength: [3,"Must contain 3 characters!"],
        maxLength: [50, "Not exceed 50 characters!"],
    },
    description : {
        type : String ,
        required: [true,'Provide Description'],
        minLength: [3,"Contains at least 50 Characters!"],
        maxLength: [350, "Not exceed 350 characters!"],
    },
    category:{
        type: String,
        required: [true ,"Job Catagory is required"],
    }, 
    country:{
        type: String,
        required: [true ,"Job Country is required"],
    }, 
    city: {
        type : String,
        required : [true, "Job City is required"],
    },
    location: {
        type : String , 
        required : [true,"Please provide exact location"],
        minLength: [20,'At least 20 characters!'],
    },
    fixedSalary:{
        type : Number,
        minLength: [4, "Must contain at least 4 digit"],
        maxLength: [9,"Not exceed 9 digit"],
    },
    salaryFrom:{
        type : Number,
        minLength: [4, "Must contain at least 4 digit"],
        maxLength: [9,"Not exceed 9 digit"],
    },
    salaryTo:{
        type : Number,
        minLength: [4, "Must contain at least 4 digit"],
        maxLength: [9,"Not exceed 9 digit"],
    }, 
    expired: {
        type : Boolean,
        default : false,
    },
    jobPostedOn: {
        type : Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema);