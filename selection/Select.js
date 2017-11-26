import React from 'react';
import Mysql from 'mysql';

export default class Select extends React.Component {

  const connection = mysql.createConnection({
    host: 'localhost',
      user: 'root',
        password: 'Insecure',
          database: 'igotocollege'
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
        return;
   }
    console.log("connected as id " + connection.threadId);
  });
};
