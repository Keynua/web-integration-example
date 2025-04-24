const Keynua = require("./keynua");
const fs = require("fs");
const path = require("path");

require('dotenv').config();
const CONTRATOS_FILE = path.join(__dirname, "_contratos.json");
const IDENTIFICACIONES_FILE = path.join(__dirname, "_identificaciones.json");

// Función para leer los contratos existentes
function leerContratos() {
	try {
		const data = fs.readFileSync(CONTRATOS_FILE, "utf8");
		return JSON.parse(data);
	} catch (error) {
		// Si el archivo no existe o está vacío, retornar un array vacío
		return [];
	}
}

// Función para guardar los contratos
function guardarContratos(contratos) {
	fs.writeFileSync(CONTRATOS_FILE, JSON.stringify(contratos, null, "\t"), "utf8");
}

// Función para leer las identificaciones existentes
function leerIdentificaciones() {
	try {
		const data = fs.readFileSync(IDENTIFICACIONES_FILE, "utf8");
		return JSON.parse(data);
	} catch (error) {
		// Si el archivo no existe o está vacío, retornar un array vacío
		return [];
	}
}

// Función para guardar las identificaciones
function guardarIdentificaciones(identificaciones) {
	fs.writeFileSync(IDENTIFICACIONES_FILE, JSON.stringify(identificaciones, null, "\t"), "utf8");
}

module.exports.crearContrato = async function crearContrato(req, res) {
	try {
		const { titulo, nombreUsuario, correoUsuario } = req.body;
		const contrato = await Keynua.crearContrato(titulo, nombreUsuario, correoUsuario);
		
		// Leer contratos existentes
		const contratos = leerContratos();
		
		// Agregar nuevo contrato
		contratos.unshift(contrato);
		
		// Guardar contratos actualizados
		guardarContratos(contratos);
		
		res.json(contrato);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.obtenerContratos = function obtenerContratos(req, res) {
	try {
		const contratos = leerContratos();
		res.json(contratos);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.crearIdentificacion = async function crearIdentificacion(req, res) {
	try {
		const { titulo, nombreUsuario, correoUsuario, documentoUsuario } = req.body;
		const identificacion = await Keynua.crearIdentificacion(titulo, nombreUsuario, correoUsuario, documentoUsuario);
		
		// Leer identificaciones existentes
		const identificaciones = leerIdentificaciones();
		
		// Agregar nueva identificación
		identificaciones.unshift(identificacion);
		
		// Guardar identificaciones actualizadas
		guardarIdentificaciones(identificaciones);
		
		res.json(identificacion);
	} catch (error) {
		res.status(500).json({ error });
	}
};

module.exports.obtenerIdentificaciones = function obtenerIdentificaciones(req, res) {
	try {
		const identificaciones = leerIdentificaciones();
		res.json(identificaciones);
	} catch (error) {
		res.status(500).json({ error });
	}
};