(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36769079"],{"0d26":function(o,t,e){"use strict";t["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(o,t=!1){return o.dialogo?o.dialogo.map((e,a)=>({...e,id:this.uid+a+1,textoIng:t?this.splitPhrase(e.textoIng):e.textoIng,textoEsp:t?this.splitPhrase(e.textoEsp):e.textoEsp,personaje:o.personajes&&o.personajes.find(o=>o.nombre===e.personaje)})):[]},splitPhrase(o){return o.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},"1db7":function(o,t,e){"use strict";e.r(t);var a=function(){var o=this,t=o._self._c;return t("div",{staticClass:"dialogo__chat dialogo__chat--no-scroll p-4 me-0"},o._l(o.dialogoComputed,(function(o){return t("DialogoBurbuja",{key:"dialogo-item-"+o.id,staticClass:"mb-3",attrs:{dialogoItem:o}})})),1)},s=[],i=e("0d26"),l={name:"Dialogo",mixins:[i["a"]],props:{dialogo:{type:Object,default:()=>({})}},computed:{dialogoComputed(){return this.dialogoMerge(this.dialogo)}}},n=l,r=e("2877"),d=Object(r["a"])(n,a,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-36769079.5de2998f.js.map