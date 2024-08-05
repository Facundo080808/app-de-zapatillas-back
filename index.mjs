import server from "./src/app.mjs";
import con from "./src/db.mjs";
import { subir } from "./src/routes/itemsRoute.mjs";
import { createAdmin } from "./src/routes/usersRoute.mjs";


const {PORT} = process.env;
const { conn } = con;
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    subir();
    createAdmin();
    console.log('Server running at http://localhost:1000/');
  });
});
