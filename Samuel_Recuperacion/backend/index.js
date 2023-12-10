//importo el express y el cors
import express, { json, urlencoded } from 'express';
import cors from 'cors';
//importo el fichero login.js que está en la carpeta services
import { getUserData } from './services/login.js';
import { insertData, insertUser, getData, getUser, deleteData } from './services/item.js';

//Definimos el puerto por que va a escuchar nuestra API las peticiones
const port = 3030;

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());


//Ejemplo para ver cómo funciona un endpoint:
//este endpoint es / y devuelve un mensaje
app.get('/', (req, res) => {
 	res.json({ message: 'Hola Mundo!' });
});

//Creación del endpoint /login
//llama al fichero login.js usando el método getUserData pasándole
//el login (user) y la contraseña (password)
app.get('/login', async(req, res, next) => {
	console.log(req.query)
	try {
		res.json(await getUserData(req.query.user, req.query.password));
	} catch (err) {
		console.error(`Error while getting data `, err.message);
		next(err);
	}
});

app.get('/addItem', async(req, res, next) => {
	try {
		res.json(await insertData(req))
		console.log('Se envia el req al addItem')
	} catch (err) {
		console.error(`Error while inserting items `, err.message);
		next(err);
	}
	//En el frontend llamar al backend con la función fetch() cuando se pique el botón de
});

app.get('/adduser', async(req, res, next) => {
	try {
		res.json(await insertUser(req))
		console.log('Se envia el req al addprueba');
	} catch (err) {
		console.error(`Error while inserting items `, err.message);
		next(err);
	}
	//En el frontend llamar al backend con la función fetch() cuando se pique el botón de
});

app.get('/getItems', async(req, res, next) => {
	try {
		res.json(await getData());
	} catch (err) {
		console.error(`Error while getting items `, err.message);
		next(err);
	}
	//En el frontend llamar al backend con la función fetch() cuando se pique el botón de
});
app.get('/getuser', async(req, res, next) => {
	try {
		res.json(await getUser())
	} catch (err) {
		console.error(`Error while getting items `, err.message);
		next(err);
	}
	//En el frontend llamar al backend con la función fetch() cuando se pique el botón de
});

app.get('/deleteItem', async(req, res, next) => {
	try {
		res.json(await deleteData(req));
	} catch (err) {
		console.error(`Error while deleting items `, err.message);
		next(err);
	}
	//En el frontend llamar al backend con la función fetch() cuando se pique el botón de
});

//Iniciamos la API
app.listen(port, () => 'API escuchando en el puerto: ', port);
