# Vite Yu-Gi-Oh

Creare un nuovo progetto utilizzando Vite e Vue 3 e definire i componenti necessari per strutturare il layout come da screenshot.
Al caricamento della pagina, effettuare una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampare una card per ogni carta.

## Bonus

Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.

# Milestone 2

Aggiungere una select per filtrare i risultati in base all’archetipo della carta.
Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
https://db.ygoprodeck.com/api/v7/archetypes.php
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato

## Bonus milestone 2

Creare un componente che mostri il numero totale di risultati ottenuti.
