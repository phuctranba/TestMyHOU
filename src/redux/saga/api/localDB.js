let SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({
  name: 'dbmyhou',
  createFromLocation: '~/www/dbmyhou.db',
});

async function getUserInDbExec() {
  return await new Promise((resolve, reject) => {
    db.transaction(async tx => {
      // await new Promise((resolve, reject) => {
      await tx.executeSql(
        'SELECT * FROM user LIMIT 1 OFFSET 0',
        [],
        (tx, results) => {
          // console.log("Query completed");
          // Get rows with Web SQL Database spec compliance.
          let res = {
            len: 0,
            username: '',
            access_token: '',
          };

          let len = results.rows.length;
          if (len === 0) {
            res.len = 0;
          } else {
            res.len = len;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              res.username = row.username;
              res.access_token = row.access_token;
              console.log(
                `username: ${row.username} access_token: ${row.access_token}`,
              );
            }
          }
          resolve(res);
          // console.log("len in query: " + res.len);
        },
      );
      // })
    });
  });
}

function* getUserInDB() {
  var res = {
    len: 0,
    username: '',
    access_token: '',
  };
  console.log('Start get current user in db');
  yield getUserInDbExec().then(resolve => {
    res = resolve;
    // console.log("function then: " + resolve.len);
  });
  console.log('Start get current user in db: ' + res.len);
  return res;
}

function* deleteUserInDB() {
  db.transaction(async tx => {
    let sql = 'delete from  user where id = 1';
    tx.executeSql(sql, [], (tx, results) => {
      console.log('delete current user to db success');
    });
    // })
  });
}

function* saveUserToDB(user) {
  db.transaction(async tx => {
    // await new Promise((resolve, reject) => {
    let sql =
      "insert or replace into  user(id, username, access_token) values(1,'" +
      user.username +
      "','" +
      user.access_token +
      "')";
    tx.executeSql(sql, [], (tx, results) => {
      console.log('insert current user to db success');
      console.log('insertId: ' + results.insertId);
      console.log('rowsAffected: ' + results.rowsAffected);
    });
    // })
  });
}

export const localDB = {
  getUserInDB,
  saveUserToDB,
  deleteUserInDB,
};
