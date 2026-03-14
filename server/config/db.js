const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/centennial');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        console.log('Server will continue to run, but data storage will not work until MongoDB is connected.');
    }
};

module.exports = connectDB;
