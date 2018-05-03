# Bienvenue sur l'application OpenodeCLI
## Introduction

Cette application est le résultat d'un travail proposé durant un cours de **NodeJS**.
Le but est de récupérer des données d'une **API** (openweather) et de les utiliser sur un **CLI**
(Command Line interface). Ce projet n'est pas un projet fini et nécéssite des améliorations.

## Installation

> git clone https://github.com/adrihack/CliNodeJS
> cd CliNodeJS &&  npm init && npm install -g

## Utilisation

**snippet** est le nom de la commande qui va éxecuter le code situé dans index.js
on retrouvera les paramètres suivants au sein de cette application :


* -c --city     | Après cet argument entrer le nom de la ville choisie
* -w --wind     | Cet argument va vous permettre d'afficher la puissance du vent de la ville choisie
* -t --temp     | Cet argument va dire à notre application d'afficher la température de la ville séléctionné
* -p --pressure | L'utilisation de cet argument nous proposera la pression atmosphérique.
* -H --Humidity | Si l'on séléctionne -H, on aura en plus le taux d'humidité dans l'air.
