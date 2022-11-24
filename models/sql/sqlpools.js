const pool = require("./mysql");

const getall = () => {
  return pool.execute(`SELECT * FROM works `);
};

const getbycat = (category) => {
  return pool.execute(`SELECT * FROM works where category = ? `,[category]);
};

const cheakUserEmail = (email) => {
  return pool.execute(
    `SELECT * FROM users WHERE email = ? `,
    [email]
  );
};

const cheakUserName = (name) => {
  return pool.execute(
    `SELECT * FROM users WHERE name = ? `,
    [name]
  );
};


const deletework = (number) => {
  return pool.execute(
    `DELETE  FROM works WHERE number = ? `,
    [number]
  );
};


// to Restore my password

// const cheakUserEmailAndName = (name,email) => {
//   return pool.execute(
//     `SELECT * FROM users WHERE name = ? AND email = ? `,
//     [name,email]
//   );
// };

const getbynameandpath = (name,path) => {
  return pool.execute(
    `SELECT * FROM works WHERE name = ? AND path = ? `,
    [name,path]
  );
};


 

const insertimage = 
(name,path, category,  date ,size  ) => {
  return pool.execute(
    `INSERT INTO works 
    (name,path, category, date,size ) 
    VALUES 
    (?, ?,?, ?,?)`,
    [name,path ,category, date,size]
  );
};






const updateUser = (password, userName, email, phon, view, userID) => {
  return pool.execute(
    `UPDATE alma 
    SET password = ?,
    name =?,email =?,
    phon=?,view=?
    WHERE number = ? `,
    [password, userName, email, phon, view, userID]
  );
};











module.exports.getall = getall;
module.exports.cheakUserEmail = cheakUserEmail;
module.exports.cheakUserName = cheakUserName;
module.exports.updateUser = updateUser;
module.exports.getbynameandpath = getbynameandpath;
module.exports.insertimage = insertimage;

module.exports.getbycat = getbycat;
module.exports.deletework = deletework;

