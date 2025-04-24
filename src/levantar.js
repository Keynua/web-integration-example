const express = require("express");
const path = require("path");
const https = require("https");
const fs = require("fs");
const rutas = require("./servidor/rutas");
const { SSL_CERT_LOCATION, SSL_KEY_LOCATION } = require("./_env/variables");

const app = express();
const port = 443;

// Middleware para parsear JSON
app.use(express.json());

// Serve static files from the cliente directory
app.use(express.static(path.join(__dirname, "cliente")));

// Manejar rutas - solo se usara POST
app.post("/crear-contrato", rutas.crearContrato);
app.post("/obtener-contratos", rutas.obtenerContratos);
app.post("/crear-identificacion", rutas.crearIdentificacion);
app.post("/obtener-identificaciones", rutas.obtenerIdentificaciones);

// Create HTTPS server
const httpsServer = https.createServer({
	key: fs.readFileSync(SSL_KEY_LOCATION),
	cert: fs.readFileSync(SSL_CERT_LOCATION),
}, app);

// Start the server
httpsServer.listen(port, () => {
	console.log(`Servidor HTTPS corriendo en https://localhost:${port}`);
});
