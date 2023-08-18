import express from "express";

const app = express();



const PORT = 4000 || env.process.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})