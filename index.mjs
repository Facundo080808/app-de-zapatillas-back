import server from "./src/app.mjs";
import con from "./src/db.mjs";
import { subir } from "./src/routes/itemsRoute.mjs";
import { createAdmin } from "./src/routes/usersRoute.mjs";


const port = process.env.PORT || "1000"
const { conn } = con;
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    subir();
    createAdmin();
    console.log('Server running at http://localhost:1000/');
  });
});
