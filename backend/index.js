import express from "express";
import productRoutes from "./routes/productRoutes.js"

const app = express();

app.use("/api/v1/products", productRoutes);

const PORT = 4000 || env.process.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})