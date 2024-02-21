import express from 'express';
import cors from 'cors';
import comarquesController from './APIExemples/comarques/controllers/comarquesController.js';
import fs from 'fs';

import bodyParser from 'body-parser';
const { urlencoded, json } = bodyParser;

const app = express();

// Habilitem CORS
app.use(cors());

// CArreguem regions i paisos
const regions =  JSON.parse(fs.readFileSync('./data/regions.json'));
const paisos =  JSON.parse(fs.readFileSync('./data/paisos.json'));


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


const paisosRouter = express.Router();

/*Configurem el router de paisos a lo bruto */

paisosRouter.get('/regions', (req, res) => {
  res.json(regions.regions);
});

paisosRouter.get('/paisos/:regio', (req, res) => {
  const regioNom = req.params.regio;
  let llista = [];
  for (let regio of paisos.paisos_europeus) {
    if (regio.nom == regioNom) {
      for (let pais of regio.paisos) {
        llista.push(pais.nom);
      }
    }
  }

  res.send(llista);
});

paisosRouter.get('/paisos/info/:pais', (req, res) => {
  try {
    for (let regio of paisos.paisos_europeus) {
      for (let pais of regio.paisos) {
        if (pais.nom == req.params.pais)
          res.send(pais);
      }
    }
  } catch (err) {
    console.log(err.message);
  }
});




app.use("/api/comarques", comarquesRouter);

app.use("/api/europa", paisosRouter);

app.use('*', DefaultController);

