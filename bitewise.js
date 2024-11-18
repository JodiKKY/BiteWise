// import mysql from 'mysql';
// import express from 'express';
// import cors from 'cors';
// import bcrypt from 'bcryptjs';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// app.use(cors())

// function setCorsHeaders(req, res, next) {
//   const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']; // List allowed origins
//   const origin = req.headers.origin;

//   // Set Access-Control-Allow-Origin dynamically based on allowed origins
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin); 
//   } else {
//     res.setHeader('Access-Control-Allow-Origin', '*'); 
//   }

//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true'); // If you need cookies or auth headers

//   // Handle preflight OPTIONS requests
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   next();
// }

// app.use(setCorsHeaders); // Apply the CORS headers middleware
// app.use(express.json()); // Parse JSON requests

// // Create MySQL connection
// const con = mysql.createConnection({
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_NAME || 'bitewise',
// });

// con.connect(function (err) {
//   if (err) {
//     console.error('Error connecting to Db:', err);
//     return;
//   }
//   console.log('Connection established');
// });

// // POST route to insert data into the database
// app.post('/bitewise', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);

//     const sql = "INSERT INTO user_table (email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
//     const values = [
//       req.body.email,
//       req.body.firstName,
//       req.body.lastName,
//       hashedPassword
//     ];

//     // Insert the user data into the database
//     con.query(sql, values, (err, result) => {
//       if (err) {
//         console.error('Error inserting data:', err);
//         return res.status(500).json({ error: 'Error inserting data', details: err });
//       }
//       return res.status(200).json({ message: 'User data inserted successfully', result });
//     });
//   } catch (err) {
//     console.error('Error hashing password:', err);
//     return res.status(500).json({ error: 'Error processing request', details: err });
//   }
// });

// // Start the server
// const port = process.env.PORT || 3000; // Ensure this matches the port you're using for Node.js
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

import mysql from 'mysql';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

const con = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bitewise',
});

// Route to handle form submission
app.post('/Signup', async (req, res) => {
  try {
    const {password} = req.body;
    const pass= password.join('');
    const pas = await bcrypt.hash(pass,10);

    console.error( pas); 
        //const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
       /*  const sql = "INSERT INTO user_table (email, firstName, lastName, password) VALUES (?, ?, ?, ?)";
        const values = [
          req.body.email,
          req.body.firstName,
          req.body.lastName,
          hashedPassword
        ];
    
        // Insert the user data into the database
        con.query(sql, values, (err, result) => {
          if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Error inserting data', details: err });
          }
          return res.status(200).json({ message: 'User data inserted successfully', result });
        }); */
      } catch (err) {
        console.error('pkb:', err);
        return res.status(500).json({ error: 'Error processing request', details: err });
      }
    });
  console.log('Received form data:');
  // You can process the data here, like saving it to a database.
  // console.log('Received form data:', { name, email });

  // res.json({
  //   message: 'Form submitted successfully!',
  //   data: { },
  // });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
