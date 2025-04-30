# Instalación

Para instalarlo es necesario utilizar NodeJS 20 y ejecutar:

```shell
npm ci
```

# Configuración

**PASO 1:** Genera el archivo `.env` utilizando el `sample.env` como guía:

```env
API_KEY=TU_API_KEY
AUTH_TOKEN=TU_AUTH_TOKEN
KEYNUA_API_URL=https://api.stg.keynua.com
```

**PASO 2:** Genera el certificado para tu servidor HTTPS y colócalo en `src/_env/cert.pem` y `src/_env/key.pem`. Puedes utilizar el siguiente comando:

```shell
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=PE/ST=Lima/L=Lima/O=Test/OU=Development/CN=localhost" -addext "subjectAltName=DNS:localhost,DNS:127.0.0.1,IP:127.0.0.1"
```

También puedes utilizar NodeJS para generarlos y moverlos automáticamente. En caso de fallos, se utilizarán unos por defecto:

```shell
npm run rebuildkeys
```

# Ejecutar el servidor

Para correr el proyecto:

```shell
npm run start
```

# Abrir el navegador

Ingresa en `https://localhost/`.

# Notas

**NOTA 1:** Mientras vayas creando los contratos o identificaciones, se irán almacenando en `src/servidor/_contratos.json` o `src/servidor/_identificaciones.json` con el fin de preservarlos históricamente y que se muestren en la web cuando refresques.

Si deseas, puedes borrarlos para limpiar el "historial".

**NOTA 2:** Te saldrá una advertencia de que el sitio no es seguro ya que se está utilizando un certificado autofirmado. Puedes continuar mientras solo lo uses en entornos locales. Es necesario utilizar el certificado para poder ingresar mediante HTTPS ya que algunos navegadores bloquean el uso de la cámara para sitios HTTP.
