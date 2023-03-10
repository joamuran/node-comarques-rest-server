// Importem el model
import ComarquesModel from '../models/comarques.js';
const { provincies, comarques } = ComarquesModel;


export default class comarquesController {

    static ObtenirComarques(req, res) {
        let llista = [];
        if (Object.keys(comarques).includes(req.params.provincia))
            for (let comarca of comarques[req.params.provincia])
                llista.push(comarca["comarca"]);

        res.json(llista);

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
        res.json(response);

    }


}