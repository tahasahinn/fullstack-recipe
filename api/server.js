import express from "express";
import cors from "cors";
import recipeRouter from "./routes/recipeRoutes.js"; // Tariflerle ilgili yönlendirmeleri içeren router'ı içe aktarma

// Express uygulamasını oluştur
const app = express();
// Sunucu dinleyecek port numarası
const port = 4004;

// CORS hatalarını önlemek için middleware ekleme
app.use(cors());

// HTTP isteklerinde gelen JSON formatındaki veri gövdesini (body) otomatik olarak ayrıştırma
app.use(express.json());

// Tarif yönlendirme router'ını uygulamaya ekle
app.use(recipeRouter);

// Belirtilen portta sunucuyu başlat ve çalıştığını konsola yazdır
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı`); // Sunucunun çalıştığını bildiren mesaj
});
