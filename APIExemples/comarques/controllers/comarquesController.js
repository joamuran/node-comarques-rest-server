// Importem el model
import ComarquesModel from '../models/comarques.js';
const { provincies, comarques } = ComarquesModel;


export default class comarquesController {

    static ObtenirComarques(req, res) {
        let llista = [];
        if (Object.keys(comarques).includes(req.params.provincia))
            for (let comarca of comarques[req.params.provincia])
                llista.push(comarca["comarca"]);

        if (llista.length != 0) res.json(llista);
        else res.status(404).send('Not found');

    }

    static ObtenirProvincies(req, res) {
        console.log(Object.keys(comarques));
        res.json(Object.keys(comarques));
    }

    static ObtenirInfoComarca(req, res) {

        let response = {};
        for (let provincia in comarques) {
            for (let comarca of comarques[provincia]) {
                if (req.params.comarca == comarca.comarca) {
                    response = comarca;
                };
            }
        }
        if (Object.keys(response).length !== 0) res.json(response);
        else res.status(404).send('Not found');

    }


}