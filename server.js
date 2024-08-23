import app from './app.js'
import cloudinary from "cloudinary"
import { dbConnection } from './database/dbConnection.js';
dbConnection();

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    cloud_name: process.env.CLOUDINARY_CLIENT_API,
    cloud_name: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT , () => {
    console.log(`Server running on port${process.env.PORT}`)
})