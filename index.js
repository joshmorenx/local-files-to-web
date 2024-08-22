const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');

const app = express();
const port = 4000;
require('dotenv').config();

const directoryPathFotoTablet = path.join(process.env.SELECTED_PATH, '1FotoTablet');
const directoryPathFotoAcce = path.join(process.env.SELECTED_PATH, '1FotoAcce');

const routeTablet = '/1FotoTablet';
const routeAcce = '/1FotoAcce';

// Servidor estatico
app.use(routeTablet, express.static(directoryPathFotoTablet));
app.use(routeAcce, express.static(directoryPathFotoAcce));

// app.use('/', serveIndex(directoryPathFotoTablet, { icons: true, view: 'details'}));

app.use(routeTablet, serveIndex(directoryPathFotoTablet, { icons: true, view: 'details' }));
app.use(routeAcce, serveIndex(directoryPathFotoAcce, { icons: true, view: 'details' }));


app.use('/', (req, res) => {
    res.send('<h1>FotoProduServ</h1><div style=" font-family: Arial, Helvetica, sans-serif; text-align: center; margin-top: 10px;"> <ol> <li style="margin-bottom: 5vh;"><a style="font-size: 5vw;" href="/1FotoTablet">1FotoTablet</a></li>  <li><a style="font-size: 5vw;" href="/1FotoAcce">1FotoAcce</a> </ol> </li> </div>');
});

app.listen(port, () => {
    console.log('Es necesario cersiorarse de que .env está configurado');
    console.log(`Servidor escuchando en http://localhost:${port}`);
});