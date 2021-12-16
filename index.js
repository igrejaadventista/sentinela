const express = require("express");
const app = express();
const theme = require("./api/theme");

app.use(express.json({ extended: false }));

app.use("/api/theme", theme);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
