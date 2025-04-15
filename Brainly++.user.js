// ==UserScript==
// @name Brainly++
// @namespace https://github.com/sirmonteiro
// @version 1.0.1
// @description Remove the limitation of viewing answers in Brainly
// @description:pt-BR Remove a limitação de ver respostas no Brainly
// @author SirMonteiro
// @icon https://i.imgur.com/RnMZuyj.png
// @match *://*brainly.in/*
// @match *://*brainly.com/*
// @match *://*brainly.it/*
// @match *://*brainly.co.id/*
// @match *://*brainly.ro/*
// @match *://*brainly.ph/*
// @match *://*brainly.lat/*
// @match *://*brainly.pl/*
// @match *://*brainly.com.br/*
// @grant GM.addStyle
// ==/UserScript==
function clearLocalStorage() {

    if (document.querySelector("div.sg-text--text-black") && document.querySelector("div.sg-text--text-black").textContent.toLowerCase().indexOf("out of free") != -1){
        console.log("Brainly cookies cleared!");
        localStorage.clear();
        location.reload();
    }
}

setInterval(clearLocalStorage, (1000));
