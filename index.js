require('dotenv').config();

const app = require('./server.js');
console.log("MOTD:", process.env.MOTD);

 PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n//-->  SERVER RUNNING ON ${PORT}`);
});
