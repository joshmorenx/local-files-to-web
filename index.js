const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');

const app = express();
const port = 4000; // deberia estar en un process.env pero por simplicidad lo dejamos en el puerto 4000

// es necesario hacer establecer la ruta de acceso antes 
const directoryPathFotoTablet = path.join('Z:','1FotoTablet');
const directoryPathFotoAcce = path.join('Z:','1FotoAcce');

const routeTablet = '/1FotoTablet';
const routeAcce = '/1FotoAcce';

// Servidor estatico
app.use(routeTablet, express.static(directoryPathFotoTablet));
app.use(routeAcce, express.static(directoryPathFotoAcce));

app.use(routeTablet, serveIndex(directoryPathFotoTablet, { icons: true, view: 'details'}));
app.use(routeAcce, serveIndex(directoryPathFotoAcce, { icons: true, view: 'details'}));


app.get('/', (req, res) => {
    res.send('Ruta raíz accesible');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});