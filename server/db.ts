const mysql = require('mysql2');

// export const ConnectDb = async () => {
//   try {
//     const db = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "hxhunter",
//       database: "tournage"
//     });
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// }

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hxhunter",
  database: "tournages"
});
