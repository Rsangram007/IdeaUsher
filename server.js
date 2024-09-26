const mongoose = require('mongoose');
const app = require('./app');

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,  );

    console.log('Database connected successfully'); // Success message

    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  } catch (error) {
    console.log('Failed to connect to the database:', error); // Error message
  }
};

start();
