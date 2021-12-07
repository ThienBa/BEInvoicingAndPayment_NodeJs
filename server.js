const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { rootRouter } = require('./routers/rootRouters');
const port = process.env.PORT || 4000;

app.use(express.json());

const pathPublicDirectory = path.join(__dirname, './public');
app.use("/public", express.static(pathPublicDirectory));

app.use(cors());

app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})