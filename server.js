const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/ads.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html", "ads.txt"));
});

const PORT = 3000;
// Phục vụ file ads.txt từ thư mục gốc
app.get('/ads.txt', (req, res) => {
    res.sendFile(path.join(__dirname, 'ads.txt'));
});
app.listen(PORT, () => {
  console.log(`Server chạy tại: http://localhost:${PORT}`);

});
