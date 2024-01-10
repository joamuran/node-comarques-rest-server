import express from 'express';
import cors from 'cors';
import comarquesController from './APIExemples/comarques/controllers/comarquesController.js';

import bodyParser from 'body-parser';
const { urlencoded, json } = bodyParser;

const app = express();

// Habilitem CORS
app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(json());

let defaultPort = 8000;
app.listen(defaultPort, () => {
    console.log('Escoltant pel port ' + defaultPort);
});

function DefaultController(req, res) {
    res.status(404).send('Not found');
}

// Definició del Router
const comarquesRouter = express.Router();

comarquesRouter.get('/provincies', comarquesController.ObtenirProvincies);
comarquesRouter.get('/', comarquesController.ObtenirProvincies);
comarquesRouter.get('/:provincia', comarquesController.ObtenirComarques);
comarquesRouter.get('/comarquesAmbImatge/:provincia', comarquesController.ObtenirComarquesAmbImatge);
comarquesRouter.get('/infoComarca/:comarca', comarquesController.ObtenirInfoComarca);


app.use("/api/comarques", comarquesRouter);
app.use('*', DefaultController);