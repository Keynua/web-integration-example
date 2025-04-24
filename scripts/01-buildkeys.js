const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

// Directorio donde se guardarán los certificados
const certDir = path.join(__dirname, "..", "src", "_env");

// Comando para generar el certificado autofirmado
const cmd = `openssl req -x509 -newkey rsa:2048 -keyout ${path.join(certDir, "key.pem")} -out ${path.join(certDir, "cert.pem")} -days 365 -nodes -subj "/C=PE/ST=Lima/L=Lima/O=Test/OU=Development/CN=localhost" -addext "subjectAltName=DNS:localhost,DNS:127.0.0.1,IP:127.0.0.1"`;

try {
	// Ejecutar el comando openssl
	console.log("Se ejecutara el comando:");
	console.log(cmd);
	execSync(cmd, { stdio: "ignore" });
	console.log("\nCertificados generados exitosamente en:", certDir);
} catch (error) {
	console.log("Error al generar los certificados:", error.message);
	console.log("\nSe utilizarán los certificados por defecto");

	// Crear PEM
	fs.writeFileSync(path.join(certDir, "cert.pem"), [
		"-----BEGIN CERTIFICATE-----",
		"MIID0DCCArigAwIBAgIUHbIijj+KW+T3wSDNa/+8tnY81NMwDQYJKoZIhvcNAQEL",
		"BQAwZDELMAkGA1UEBhMCUEUxDTALBgNVBAgMBExpbWExDTALBgNVBAcMBExpbWEx",
		"DTALBgNVBAoMBFRlc3QxFDASBgNVBAsMC0RldmVsb3BtZW50MRIwEAYDVQQDDAls",
		"b2NhbGhvc3QwHhcNMjUwNDI0MjE1MTA3WhcNMjYwNDI0MjE1MTA3WjBkMQswCQYD",
		"VQQGEwJQRTENMAsGA1UECAwETGltYTENMAsGA1UEBwwETGltYTENMAsGA1UECgwE",
		"VGVzdDEUMBIGA1UECwwLRGV2ZWxvcG1lbnQxEjAQBgNVBAMMCWxvY2FsaG9zdDCC",
		"ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALfSBY+7FZLnVnyUOwD2YWyB",
		"1nl78/gJKIUv8h75xgANvd/78V7gGXiRpl7kbNrFgvmEAseCCR1/e9JH0iAsl3n5",
		"zXa0JXioMfV6Um4njkBZeH5c0Gfp3dhQ77mCoTpCjmfUwKcqOskoo7t7rUuLzdnS",
		"WLflCcVt3VAF0qeP05m/4Qx6yf8oEWxw9k7mJmK2U4wKWJ5QlASK0fMXPXv/UA8G",
		"MkgkpQ/EqysDSW8c3XeHBk+VWefc/a/k4O7SzSN2F0qWuhnTD+qVyPQomKQfOOop",
		"FpMLNXZKv6YPBb1u9MAMXfQ4WRoGIi4oEZWV0azooPXpmrxHJxk5S10t7aVAOL8C",
		"AwEAAaN6MHgwHQYDVR0OBBYEFMPxnnUahVXycBt/iL4f3itov0yBMB8GA1UdIwQY",
		"MBaAFMPxnnUahVXycBt/iL4f3itov0yBMA8GA1UdEwEB/wQFMAMBAf8wJQYDVR0R",
		"BB4wHIIJbG9jYWxob3N0ggkxMjcuMC4wLjGHBH8AAAEwDQYJKoZIhvcNAQELBQAD",
		"ggEBAAMPSrBPaYEPS0D3ttN789Q4Jy2dXTq9Ffb2WGRPBA2Dwgmm3zsSsR7miKim",
		"zH3ZwvqU4EtlrYrx66YFwblYzS6f57dh8PrCJzgM5iMd0ZVTMjCtOQ39V3DuOOSz",
		"P1o87e3ZpcQABx+PDM/x0hrP1vg9NHtzGOYa4K9VsIsacQAPo2q58qYp59BrySd2",
		"x0V1PGHKtk3FtHSn7UkksuugciVYk+vhxZitpwh4wdUhz+inDz/F1gxU0/remoDa",
		"+cfu76Je9eYfFL821o+zY5mfcSoAeI0iGzy61G9OjexexKP1hIDLVCG5V0e48qTS",
		"0gX/kH4Qi9vRbVzIia2Zabmj2Xc=",
		"-----END CERTIFICATE-----",
		"",
	].join("\n"));

	// Crear KEY
	fs.writeFileSync(path.join(certDir, "key.pem"), [
		"-----BEGIN PRIVATE KEY-----",
		"MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC30gWPuxWS51Z8",
		"lDsA9mFsgdZ5e/P4CSiFL/Ie+cYADb3f+/Fe4Bl4kaZe5GzaxYL5hALHggkdf3vS",
		"R9IgLJd5+c12tCV4qDH1elJuJ45AWXh+XNBn6d3YUO+5gqE6Qo5n1MCnKjrJKKO7",
		"e61Li83Z0li35QnFbd1QBdKnj9OZv+EMesn/KBFscPZO5iZitlOMClieUJQEitHz",
		"Fz17/1APBjJIJKUPxKsrA0lvHN13hwZPlVnn3P2v5ODu0s0jdhdKlroZ0w/qlcj0",
		"KJikHzjqKRaTCzV2Sr+mDwW9bvTADF30OFkaBiIuKBGVldGs6KD16Zq8RycZOUtd",
		"Le2lQDi/AgMBAAECggEABVMxswy13sgR0tEOdoQspVKLjoBfPGezg0w0xN3ydOzw",
		"+6yWPOvcAQijG6udVacUGLtQw0vKjM61HQ3UkfcIulFYuOAWF80ziUtuWN+PeOC+",
		"o1Z3+RKmyQ3rK+ITXpcv/eUFYbJQ+qPRPmyiRAZ8Q5ua01TwuAXrO9a3WABMHm+K",
		"dbQLggNQWkWRxo5xGpEUSUrbsfBFWYOabWhK5wESQ/6cUD/W3jF+poHpwtmMqu1O",
		"EANzwg00RW9ZnJQbWmxib7ucs+e4srZZ5D3Ifq6VIu1L3W97hS3rnuxdJ/LYEFuw",
		"29I7LD1WVRTNOPcbFkrmFW/GtA/KyU/6A5lsnFHyzQKBgQDjoIY0rZ4VBx4cIr8s",
		"CHWsvGkALjjJ2l490jzs0L6Z3jWG6zDZW9L/R9TZ6GWuNklk0lholax5d8Vhj6Tb",
		"C4pGQyqSR5mrvo6psH/Zz6RZWN9P4X8Pgy2FU69vT8f/ZjfvO4V+945EQn0UA9VH",
		"bu54a+NQ0f/3bVE7HUztDyEEOwKBgQDOu6Wr5Z744NnBrnLwxwvhWbC4IveXORSm",
		"3r/6mVJ5gJd0TGnVz87EoYEO8WbzUfcKsQQR0VoSdcwoeZRNCookNiOeWJsSQ3vh",
		"5etkwmaJVX6HJq3utaI101pirH05A9U2Wvhumd7goOEW0QRKrVwSPqqCTS+tMk9P",
		"NgsuECWpTQKBgBuROE+u6yM+zm2345EwoRe/ZbQI5QXFNX6lNI21pi+6Up85Ypwg",
		"W8hg6a1OUOotVuwn8V8RKWc4kyYCoIOKvT9PKRu4IitDk8GHR6SYWh4b/keNVrcJ",
		"Ov0Xqnp/nggXWBTYD43V61vm9YD0CeNx0t2wq0IBfM95ZMoU/VkEaQo7AoGBAMF8",
		"yxBZtzJEcEpgFd/Yy/u8UDPnNkfo+rU7of7P5WsmuZn1stCU0HckmX/83Fg7jLYK",
		"+z4Z7O1+Jvhy4iRBCw3dRfT8BRdQ5e+Fm40QjZtX0zZ3My9J/GnYSK41tnXYaoOX",
		"HRGXHgyrRkBunE+wdY317OxLhaXagnQmpswT/Mu5AoGAeUJ7t5SrZdFFhhfHscp6",
		"+nqFr15KEnQbm4ik+bBL9/eWQ226Mt8FuCtS+Ieola2XjAakPDJIbOE62wuXHZ+M",
		"Rt4rjB4/8PtcxIKki5FAoosZt2a3gTqzNWvxuscxoNzdm50JdNJlZGPVAHDijCfM",
		"VfN7LY0aZkZIofS45f806bo=",
		"-----END PRIVATE KEY-----",
		"",
	].join("\n"));

	console.log("Certificados generados exitosamente en:", certDir);
	console.error("\nNOTA: Es preferible que cree los certificados manualmente");
}
