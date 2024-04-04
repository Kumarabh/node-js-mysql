import mysql from 'mysql2';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

let connection: Connection;
const connectDB = async() => {
  const credentials = {host: 'localhost', user: 'admin', password: 'admin', database: 'db1'};
  try {
    connection = await mysql.createConnection(credentials)
    connection.connect( (error: any) =>{ 
      if(error) throw Error('connection failed.'+ error.message)
      console.log('==> Database connected');
      getAllCustomers();
    })
  } catch (error: any) {
    throw Error(error);
  }
}

const getAllCustomers = async() => {
  const queryString = `SELECT * from customer`;
      connection.query(queryString, (err: any, result: mysql.QueryResult)=> {
        console.log(result);
      })
}
export {connectDB, connection};