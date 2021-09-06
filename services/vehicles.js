const db = require('./db');
const helper = require('../helper');

async function getMultiple(){
  const rows = await db.query(
    `SELECT currentCoordsX, currentCoordsY, plate FROM owned_vehicles WHERE garage IS NULL AND currentCoordsX IS NOT NULL`, 
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