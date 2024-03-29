# API per a consulta de les comarques del País Valencià

Aquest repositori és un derivat del repositori [expressTest](https://github.com/joamuran/expressTests), amb un servidor Express en nodejs preparat per al seu desplegament en [Railway.app](https://node-comarques-rest-server-production.up.railway.app). 

Aquest presenta una API REST amb les comarques del País Valencià ordenades per províncies. També podrem obtenir informació addicional, com la població, una descripció o una imatge representativa.

El servidor Railway està ubicat a l'adreça [https://node-comarques-rest-server-production.up.railway.app/](https://node-comarques-rest-server-production.up.railway.app/), i presenta els següents endpoints:

* `api/comarques/provincies`, que ens retorna un JSON amb les tres províncies (*Exemple:[https://node-comarques-rest-server-production.up.railway.app/api/comarques/provincies](https://node-comarques-rest-server-production.up.railway.app/api/comarques/provincies)*)
* `api/comarques/:provincia`, que ens retorna una llista amb les comarques de la província indicada. (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/comarques/València](https://node-comarques-rest-server-production.up.railway.app/api/comarques/València)).
* `api/comarques/infoComarca/:comarca`, que ens informació detallada sobre la comarca en qüestió, com la població, una descripció, la capital, entre d'altres. (Exemple: [https://node-comarques-rest-server-production.up.railway.app/api/comarques/infoComarca/València](https://node-comarques-rest-server-production.up.railway.app/api/comarques/infoComarca/València))
