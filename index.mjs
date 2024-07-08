import server from "./src/app.mjs";
import con from "./src/db.mjs";
import { subir } from "./src/routes/itemsRoute.mjs";



const { conn } = con;
conn.sync({ force: true }).then(() => {
  server.listen(1000, () => {
    subir();
    console.log("Shoes subidas");
    console.log('Server running at http://localhost:1000/');
  });
});
