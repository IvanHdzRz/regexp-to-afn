'use strict'
const regParser = require('automata.js');

const btn_create=document.getElementById('btn_create');
const txt_regexp=document.getElementById('txt_regexp');
const graph = document.getElementById('graph')

btn_create.addEventListener('click',(e)=>{
    const parser = new regParser.RegParser(txt_regexp.value);
    const nfa = parser.parseToNFA();
    const result =Viz(nfa.toDotScript(), 'svg', 'dot');
    console.log(result)
    graph.innerHTML=result;
})