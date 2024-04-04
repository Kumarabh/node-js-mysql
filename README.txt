// ---------------------------------------------- Mysql configuration on docker
> docker pull mysql/mysql-server:latest

> docker run -d --name=mysql-container -p 3306:3306 mysql/mysql-server

// Copy password 
> docker logs mysql-container 

// For EMPTY PASSWORD CONTAINER -> 
> docker logs mysql-container 2>&1 | grep GENERATED

> docker exec -it mysql-container sh

// login to mysql
> cd var/lib
> mysql -u root -p 

// Change root password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '[newpassword]';

----------------------------------------------- NODE JS connection

// For node JS connection, We can create new user 'admin' password 'admin'
mysql> select host, user from user;
mysql> CREATE USER 'admin'@'%' IDENTIFIED BY 'admin';   // Create a new user account with a desired username and password:
mysql> GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';   // Grant appropriate privileges to the new user account:
mysql> FLUSH PRIVILEGES;   // to apply all changes


// app.ts
import mysql from 'mysql2';

const connectDB = async() => {
  const credentials = {host: 'localhost', user: 'admin', password: 'admin'};
  try {
    const connection = await mysql.createConnection(credentials)
    connection.connect((error: any) => { 
      if(error) throw Error('connection failed.'+ error.message)
      console.log('==> Database connected');
    })
  } catch (error: any) {
    throw Error(error);
  }
}

export {connectDB};