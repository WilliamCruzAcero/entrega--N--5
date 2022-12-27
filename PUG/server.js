/* Importar Dependencias */
import express from 'express'

/* Declarar constantes y arrays */

let productos = []
const app = express();

// Funcionalidades del servidor
app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('nivel', {productos});
});

app.post('/datos', (req, res) => {
    productos.push(req.body)
    console.log(productos)
    res.redirect('/')
});

/* Configurar servidor */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT);
})
server.on('error', error => console.log('Error en el servidor: ', error)) 