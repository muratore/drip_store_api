import mongoose from "mongoose";
//https://www.npmjs.com/package/dotenv#how-do-i-use-dotenv-with-import
import "dotenv/config";

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

console.log(USER, PASS);

const u = `angelolustosa`
const p = `pUE9G7iE6g01hnZx`

export default mongoose.connect(
  `mongodb+srv://${USER}:${PASS}@cluster0.vkfipzx.mongodb.net/dripstore?retryWrites=true&w=majority`
)
  .then(() => console.log('BD conectado com sucesso!'))
  .catch(error => console.log(`Erro ao conectar ao banco: ${error}`))
