const dotenv = require('dotenv').config();
const dbConnect = require('./config/db');
const app = require('./app');


const PORT = process.env.PORT || 3000;

const serverStart = async () => {
    try {
        await dbConnect();   //db connect first call.
        app.listen(PORT, () => {
            console.log(`Server started successfully at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Server not start, found error: ${error.message}`);
        process.exit(1);
    }
}
serverStart();