const express = require( 'express');
const dotenv = require( 'dotenv');
const { notFound,errorHandler } = require( './middleware/errorMiddleware.js');
dotenv.config();
const port = process.env.PORT || 5001;
const cors = require('cors');
const connectDB = require("./config/db")

//nodemon backend/server.js
//npm install mongoose
//nodemon server.js
//cd backend
//cd frontend
//cd ../


connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('api/items', require("./routes/itemRoutes"))
//app.use('/payment', cors(), require("./routes/payment"))
//app.get('/',(req,res) => res.send('server ready'));
//cd backend
//cd frontend
//node server.js
//nodemon server.js
//

app.use(notFound);
app.use(errorHandler);


app.listen(port, console.log("Server is running on port ", port))

