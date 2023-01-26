# API per a consulta de les comarques del País Valencià

Aquest repositori és un derivat del repositori [expressTest](https://github.com/joamuran/expressTests), amb un servidor Express en nodejs preparat per al seu desplegament en [Railway.app](https://node-comarques-rest-server-production.up.railway.app). 

Aquest presenta una API REST amb les comarques del País Valencià ordenades per províncies. També podrem obtenir informació addicional, com la població, una descripció o una imatge representativa.

El servidor Railway està ubicat a l'adreça [https://node-comarques-rest-server-production.up.railway.app/](https://node-comarques-rest-server-production.up.railway.app/), i presenta els següents endpoints:

* `api/provincies`, que ens retorna un JSON amb les tres províncies (*Exemple:[https://node-comarques-rest-server-production.up.railway.app/api/provincies](https://node-comarques-rest-server-production.up.railway.app/api/provincies)*)
* `api/comarques/:provincia`, que ens retorna un JSON amb les comarques de la província indicada i les seues capitals (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/comarques/València](https://node-comarques-rest-server-production.up.railway.app/api/comarques/València)).
* `/api/capitals/:comarca`, que ens retorna un text amb la capital de la comarca indicada. Es tracta d'informació redundant, ja que amb `api/comarques/:provincia` obtenim un vector de parells *comarca-capital*, però ens pot ser d'utilitat tindre-la sola. (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/capitals/Els%20Serrans](https://node-comarques-rest-server-production.up.railway.app/api/capitals/Els%20Serrans))
* `api/poblacio/:comarca`, que ens retorna un text amb la població de la comarca indicada. Si necessitem utilitzar-la com a número, haurem d'eliminar els "." que hi aparéixer i fer la corresponent conversió. (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/poblacio/La%20Safor](https://node-comarques-rest-server-production.up.railway.app/api/poblacio/La%20Safor))
* `api/img/:comarca`, que ens retorna una URL de la Wikipèdia amb una imatge a Internet representativa de la comarca (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/img/La%20Ribera%20Alta](https://node-comarques-rest-server-production.up.railway.app/api/img/La%20Ribera%20Alta)).
* `api/descripcio/:comarca`, que ens retorna la descripció que fa la wikipèdia sobre cada comarca. (Exemple: [/api/descripcio/La%20Marina%20Baixa](/api/descripcio/La%20Marina%20Baixa))

A més dels mètodes anteriors, disposeu també de les seues versions *amb retard*, que afigen un xicotet retard aleatori per tal de donar resposta, i que utilitzarem amb alguns exercicis per treballar la sincronització:

* `api/provDelay`, versió amb retard de `api/provincies`.
* `api/comDelay/:provincia`, versió amb retard de `api/comarques/:provincia`.
* `/api/capDelay/:comarca`, versió amb retard de  `/api/capitals/:comarca`
* `api/pobDelay/:comarca`, versió amb retard de  `api/poblacio/:comarca`.
* `api/imgDelay/:comarca`, versió amb retard de `api/img/:comarca`.
* `api/descDelay/:comarca`, versió amb retard de `api/descripcio/:comarca`.
