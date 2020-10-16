const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  const orphanage = {
    opening_hours: "Das 07 às 17 horas",
  };

  const updateDb = async (db, { opening_hours }) => {
    return await db.run(`
      UPDATE orphanages SET opening_hours = "${opening_hours}" WHERE id = "1"
  `);
  };

  await updateDb(db, orphanage);
  const selection = await db.all(`SELECT * FROM orphanages`)
  console.log(selection);
});
