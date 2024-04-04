import { connection } from "../config/db";

const getAllCustomers = async() => {
  const queryString = `SELECT * from customer`;
      connection.query(queryString, (err: any, result: any)=> {
        console.log(result);
      })
}

export { getAllCustomers }