(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(6),o=t.n(c),i=(t(13),t(1)),s=t(2),p=t(4),l=t(3),m=t(7),u=(t(14),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e,n="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h1",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:n,alt:this.props.name})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"},"EXP: ",this.props.exp))}}]),t}(a.Component)),d=(t(15),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h1",{className:"Pokedex-winner"},"Winning Hand"):r.a.createElement("h1",{className:"Pokedex-loser"},"Losing Hand"),r.a.createElement("div",{className:"Pokedex"},e,r.a.createElement("h4",null,"Total Experience: ",this.props.exp),r.a.createElement("div",{className:"Pokedex-cards"},this.props.pokemon.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),t}(a.Component)),h=function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){for(var e=[],n=Object(m.a)(this.props.pokemon);e.length<n.length;){var t=Math.floor(Math.random()*n.length),a=n.splice(t,1)[0];e.push(a)}var c=e.reduce((function(e,n){return e+n.base_experience}),0),o=n.reduce((function(e,n){return e+n.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(d,{pokemon:e,exp:c,isWinner:c>o}),r.a.createElement(d,{pokemon:n,exp:o,isWinner:o>c}))}}]),t}(a.Component);h.defaultProps={pokemon:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var f=h;t(16);var b=function(){return r.a.createElement("div",{className:"Refresh"},r.a.createElement("button",{onClick:function(){window.location.reload(!1)},className:"Refresh-btn"},"Try Again!"))},v=(t(17),function(e){Object(p.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.685ecca7.chunk.js.map