const express = require("express");
const cors = require("cors");

const { initializeDatabase } = require("./models/database");

const sensorRoutes = require("./routes/sensorRoutes");
const alertRoutes = require("./routes/alertRoutes");
const deviceRoutes = require("./routes/deviceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sensors", sensorRoutes);
app.use("/api/alerts", alertRoutes);
app.use("/api/device", deviceRoutes);

const PORT = process.env.PORT || 5000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
});