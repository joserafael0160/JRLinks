(function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const i=function(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,i)}})();const c=document.querySelector(".description"),s=document.querySelector(".social-networks-h2"),l=document.querySelector(".messaging-h2"),u=document.querySelector(".games-educational-h2"),a=navigator.language||navigator.userLanguage;(async t=>{await fetch(`./../../locales/${a}.json`).then(o=>o.json()).then(o=>function(e){c.innerHTML=e.profile.description,s.innerHTML=e.sections.section1,l.innerHTML=e.sections.section2,u.innerHTML=e.sections.section3}(o)).catch(o=>console.error(o))})();