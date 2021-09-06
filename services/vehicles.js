const db = require('./db');
const helper = require('../helper');

async function getMultiple(){
  const rows = await db.query(
    `SELECT currentCoordsX, currentCoordsY, plate FROM owned_vehicles`, 
    []
  );
  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getMultiple,
}