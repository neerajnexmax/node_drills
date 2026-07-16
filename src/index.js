import 'dotenv/config';
import app from './app.js';


const PORT = process.env.PORT || 3000;

const serverStart = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started successfully at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Server not start, found error: ${error.message}`);
        process.exit(1);
    }
}
serverStart();