// Importem el model
import ComarquesModel from '../models/comarques.js';
const { provincies, comarques } = ComarquesModel;


export default class comarquesController {

    static ObtenirComarques(req, res) {
        let llista = [];
        if (Object.keys(comarques).includes(req.params.provincia))
            for (let comarca of comarques[req.params.provincia]["comarques"])
                llista.push(comarca["comarca"]);

        if (llista.length != 0) res.json(llista);
        else res.status(404).send('Not found');

    }

    static ObtenirProvincies(req, res) {
        //        console.log(Object.keys(comarques));
        //res.json(Object.keys(comarques));
        let llista = [];
        //for (let provincia in Object.keys(comarques)) {
        for (let provincia in comarques) {
            llista.push({ "provincia": provincia, "img": comarques[provincia]["img"] });
            //llista.push({ "provincia": provincia });
        }
        res.json(llista);
    }

    static ObtenirInfoComarca(req, res) {

        let response = {};
        for (let provincia in comarques) {
            for (let comarca of comarques[provincia]["comarques"]) {
                if (req.params.comarca == comarca.comarca) {
                    response = comarca;
                };
            }
        }
        if (Object.keys(response).length !== 0) res.json(response);
        else res.status(404).send('Not found');

    }


}