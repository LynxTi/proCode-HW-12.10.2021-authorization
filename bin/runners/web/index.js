const httpRunner = require('./httpServ');
// const wsRunner =  require('./wsRunner');
const dbMongoRunner = require('./mongoDB')

//  const WebSocketServer = require('ws');



 const run = () => {
    const server = httpRunner();
    // const ws = wsRunner(server);

    const dbMongo = dbMongoRunner();
    
   
}



module.exports = run;