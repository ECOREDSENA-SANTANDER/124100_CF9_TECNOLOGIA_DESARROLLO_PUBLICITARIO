(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1ed9906"],{"0141":function(t,i,s){"use strict";s("f446")},5997:function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"accesibilidad"},[i("div",{staticClass:"accesibilidad__menu"},[t._m(0),i("div",{staticClass:"accesibilidad__menu__content"},[i("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.contraste()}}},[i("i",{staticClass:"fas fa-adjust"}),i("span",[t._v("Contraste")])]),i("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.aumentarLetra()}}},[i("img",{attrs:{src:s("6d0a")}}),i("span",[t._v("Aumentar letra")])]),i("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.reducirLetra()}}},[i("img",{attrs:{src:s("ba62")}}),i("span",[t._v("Reducir letra")])])])])])},e=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"accesibilidad__menu__header"},[i("div",{staticClass:"accesibilidad__menu__item"},[i("i",{staticClass:"fas fa-universal-access"}),i("span",{staticClass:"h5 mb-0"},[t._v("Accesibilidad")])])])}],c={name:"Accesibilidad",data:()=>({fontSize:16}),methods:{contraste(){const t=document.querySelector("html"),i="html-constraste-activo";t.classList.contains(i)?t.classList.remove(i):t.classList.add(i)},aumentarLetra(){const t=document.querySelector("body");this.fontSize>=22||(this.fontSize+=2,t.style.fontSize=this.fontSize+"px")},reducirLetra(){const t=document.querySelector("body");this.fontSize<=16||(this.fontSize-=2,t.style.fontSize=this.fontSize+"px")}}},n=c,r=(s("0141"),s("2877")),d=Object(r["a"])(n,a,e,!1,null,"4f6b7c58",null);i["default"]=d.exports},"6d0a":function(t,i,s){t.exports=s.p+"img/aumentar.4890ae42.svg"},ba62:function(t,i,s){t.exports=s.p+"img/reducir.68fb49e8.svg"},f446:function(t,i,s){}}]);
//# sourceMappingURL=chunk-c1ed9906.40c7895d.js.map