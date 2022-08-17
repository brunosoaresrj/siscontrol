(async () =>{

    const database = require('./controller/db');
    const Notebooks = require('./model/notebooks');
    await database.sync();

})();