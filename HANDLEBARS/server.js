import express from 'express'
import handlebars from 'express-handlebars'

/* Declarar nuestras constantes */
const app = express()

// Establecemos la configuración de handlebars
app.engine(
    "hbs",
    handlebars({
        extname: "*.hbs",
        defaultLayout: "index.hbs",
    })
);

app.set('view engine', "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("datos", {
        nombre: 'Tomate',
            precio: '2.5',
            imagen: '#',
    })
})

/* Configuración del servidor */

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log('Tu servidor esta funcionando en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor', error));