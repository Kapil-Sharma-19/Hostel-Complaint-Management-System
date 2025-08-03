import mysql from 'mysql2/promise';

const connection = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    console.log('Database connected successfully');
    return db;
  } catch (error) {
    console.log('Error while connecting with the database',error);
    throw error;
  }
};

export default connection;