const fs = require('fs');
const path = require('path');
require("dotenv").config();

// Validar variables de entorno
if (!process.env.API_KEY) {
	throw new Error("Falta configurar API_KEY en tu archivo .env");
}

if (!process.env.AUTH_TOKEN) {
	throw new Error("Falta configurar AUTH_TOKEN en tu archivo .env");
}

if (!process.env.KEYNUA_API_URL) {
	throw new Error("Falta configurar KEYNUA_API_URL en tu archivo .env");
}

// Validar archivos SSL
const SSL_CERT_LOCATION = path.join(__dirname, "cert.pem");
const SSL_KEY_LOCATION = path.join(__dirname, "key.pem");

if (!fs.existsSync(SSL_CERT_LOCATION)) {
	throw new Error(`El archivo cert.pem no existe en ${SSL_CERT_LOCATION}`);
}

if (!fs.existsSync(SSL_KEY_LOCATION)) {
	throw new Error(`El archivo key.pem no existe en ${SSL_KEY_LOCATION}`);
}

module.exports = {
	API_KEY: process.env.API_KEY,
	AUTH_TOKEN: process.env.AUTH_TOKEN,
	KEYNUA_API_URL: process.env.KEYNUA_API_URL,
	SSL_CERT_LOCATION,
	SSL_KEY_LOCATION,
};
