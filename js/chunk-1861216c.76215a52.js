(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1861216c","chunk-55d286b8"],{"00ee":function(t,e,r){"use strict";var a=r("b622"),s=a("toStringTag"),i={};i[s]="z",t.exports="[object z]"===String(i)},"0366":function(t,e,r){"use strict";var a=r("4625"),s=r("59ed"),i=r("40d5"),o=a(a.bind);t.exports=function(t,e){return s(t),void 0===e?t:i?o(t,e):function(){return t.apply(e,arguments)}}},"0d26":function(t,e,r){"use strict";e["a"]={data:()=>({uid:Math.floor(Math.random()*10**10)}),methods:{dialogoMerge(t,e=!1){return t.dialogo?t.dialogo.map((r,a)=>({...r,id:this.uid+a+1,textoIng:e?this.splitPhrase(r.textoIng):r.textoIng,textoEsp:e?this.splitPhrase(r.textoEsp):r.textoEsp,personaje:t.personajes&&t.personajes.find(t=>t.nombre===r.personaje)})):[]},splitPhrase(t){return t.replace(/^\s+|\s+$/g,"&nbsp;").replace("***","___*___").split("___").filter(Boolean)}}}},"14d9":function(t,e,r){"use strict";var a=r("23e7"),s=r("7b0b"),i=r("07fa"),o=r("3a34"),n=r("3511"),d=r("d039"),c=d((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=c||!l();a({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=s(this),r=i(e),a=arguments.length;n(r+a);for(var d=0;d<a;d++)e[r]=arguments[d],r++;return o(e,r),r}})},2266:function(t,e,r){"use strict";var a=r("0366"),s=r("c65b"),i=r("825a"),o=r("0d51"),n=r("e95a"),d=r("07fa"),c=r("3a9b"),l=r("9a1f"),u=r("35a1"),_=r("2a62"),h=TypeError,p=function(t,e){this.stopped=t,this.result=e},f=p.prototype;t.exports=function(t,e,r){var g,m,v,b,w,C,x,y=r&&r.that,E=!(!r||!r.AS_ENTRIES),I=!(!r||!r.IS_RECORD),T=!(!r||!r.IS_ITERATOR),D=!(!r||!r.INTERRUPTED),R=a(e,y),S=function(t){return g&&_(g,"normal",t),new p(!0,t)},A=function(t){return E?(i(t),D?R(t[0],t[1],S):R(t[0],t[1])):D?R(t,S):R(t)};if(I)g=t.iterator;else if(T)g=t;else{if(m=u(t),!m)throw new h(o(t)+" is not iterable");if(n(m)){for(v=0,b=d(t);b>v;v++)if(w=A(t[v]),w&&c(f,w))return w;return new p(!1)}g=l(t,m)}C=I?t.next:g.next;while(!(x=s(C,g)).done){try{w=A(x.value)}catch(P){_(g,"throw",P)}if("object"==typeof w&&w&&c(f,w))return w}return new p(!1)}},3511:function(t,e,r){"use strict";var a=TypeError,s=9007199254740991;t.exports=function(t){if(t>s)throw a("Maximum allowed index exceeded");return t}},"35a1":function(t,e,r){"use strict";var a=r("f5df"),s=r("dc4a"),i=r("7234"),o=r("3f8c"),n=r("b622"),d=n("iterator");t.exports=function(t){if(!i(t))return s(t,d)||s(t,"@@iterator")||o[a(t)]}},"3a34":function(t,e,r){"use strict";var a=r("83ab"),s=r("e8b5"),i=TypeError,o=Object.getOwnPropertyDescriptor,n=a&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=n?function(t,e){if(s(t)&&!o(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},"3b23":function(t,e,r){t.exports=r.p+"img/red-x.76179c7f.svg"},"3bff":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dialogo"},[e("div",{staticClass:"dialogo__header px-3 px-lg-4 py-2 py-lg-3"},[e("div",{staticClass:"mb-1"},[t._t("nombre-actividad",(function(){return[t._v("Arrastrar y soltar")]}))],2),e("div",{staticClass:"h3 mb-0"},[t._t("titulo-actividad",(function(){return[t._v("Titulo de actividad - Completa la conversación")]}))],2)]),e("div",{staticClass:"px-2 py-3 p-lg-4"},[e("div",{staticClass:"row g-0"},[e("div",{ref:"chat-"+t.uid,staticClass:"col-md-8 dialogo__chat"},t._l(t.dialogoComputed,(function(r,a){return e("div",{staticClass:"row g-0 flex-nowrap dialogo__chat__item mb-3"},[e("div",{staticClass:"col-auto dialogo__chat__item__person"},[e("img",{attrs:{src:r.personaje.img}}),e("span",{staticClass:"text-small",domProps:{innerHTML:t._s(r.personaje.nombre)}})]),e("div",{staticClass:"col dialogo__chat__item__message__container"},[e("div",{staticClass:"dialogo__chat__item__message"},[e("div",{staticClass:"row g-0 align-items-center dialogo__chat__item__message__bubble dialogo__chat__item__message__bubble--tail"},[e("div",{staticClass:"col dialogo__chat__item__message__text me-2"},[e("div",{staticClass:"dialogo__chat__item__message__text__eng h5 mb-0"},[t._l(r.textoIng,(function(a,s){return["*"===a?e("div",{key:`phrase-${r.id}-${s}`,ref:"phrase-"+r.id,refInFor:!0,staticClass:"d-inline dialogo__chat__item__message__text__drop",class:{"is-active":t.dropId===r.id},on:{drop:function(e){return e.preventDefault(),t.onDrop(r.id)},dragenter:function(e){return e.preventDefault(),t.onDragEnter(r.id)},dragleave:function(e){return e.preventDefault(),t.onDragLeave()},dragover:function(t){t.preventDefault()}}},[t.answers[r.id]?e("span",{staticClass:"dialogo__chat__item__message__text__drop__response",domProps:{innerHTML:t._s(t.answers[r.id].palabra)}}):e("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):e("span",{key:`phrase-${r.id}-${s}`,domProps:{innerHTML:t._s(a)}})]}))],2),t.translations.includes(r.id)?e("div",{staticClass:"dialogo__chat__item__message__text__esp text-small"},[e("hr",{staticClass:"my-2"}),t._l(r.textoEsp,(function(r){return["*"===r?e("div",{staticClass:"d-inline dialogo__chat__item__message__text__drop"},[e("span",{staticClass:"dialogo__chat__item__message__text__drop__default"})]):e("span",{domProps:{innerHTML:t._s(r)}})]}))],2):t._e()]),e("div",{staticClass:"col-auto dialogo__chat__item__message__audio"},[e("Audio",{attrs:{audio:r.audio},on:{"audio-hover":function(e){t.mostrarIndicadorAudio=!1}}})],1)]),e("div",{staticClass:"d-flex justify-content-end me-3"},[e("button",{staticClass:"dialogo__chat__item__message__translate-btn text-small",on:{click:function(e){return t.toggleTranslate(r.id)}}},[t._v("Ver traducción")])])])]),e("div",{staticClass:"col-1"})])})),0),t._m(0),e("div",{staticClass:"col dialogo__words"},[e("div",{staticClass:"dialogo__words__content"},[e("div",{staticClass:"dialogo__words__content__explanation"},[t._t("descripcion-actividad",(function(){return[t._v("Arrastra y suelta las palabras en la conversación")]}))],2),t.wordsToShow.length?e("div",{staticClass:"dialogo__words__content__words__container mt-md-3 mb-3 mb-md-0"},[t.touchScreen?t._l(t.wordsToShow,(function(r){return e("div",{key:"word-"+r.id,ref:"word-"+r.id,refInFor:!0,staticClass:"h5 dialogo__words__word",class:{grabbing:r.id===t.dragId},domProps:{innerHTML:t._s(r.palabra)},on:{touchstart:function(e){return e.preventDefault(),t.onTouchStart(r.id)},touchmove:function(e){return e.preventDefault(),t.onTouchMove(e,r.id)},touchend:function(e){return e.preventDefault(),t.onTouchEnd(e,r.id)},touchcancel:function(e){return e.preventDefault(),t.onTouchCancel(e,r.id)}}})})):t._l(t.wordsToShow,(function(r){return e("div",{key:"word-"+r.id,staticClass:"h5 dialogo__words__word",class:{grabbing:r.id===t.dragId},attrs:{draggable:""},domProps:{innerHTML:t._s(r.palabra)},on:{dragstart:function(e){return t.onStartDrag(r.id)},dragend:function(e){return t.onEndDrag()}}})}))],2):t._e()]),e("div",{staticClass:"dialogo__words__footer"},[t.score?e("div",{staticClass:"dialogo__score mt-3"},["approved"===t.score?e("div",{staticClass:"dialogo__score p-3 approved"},[e("div",{staticClass:"row align-items-center"},[t._m(1),e("div",{staticClass:"col"},[t._t("feedback-correcto",(function(){return[t._v("¡Muy bien!")]}))],2)])]):t._e(),"disapproved"===t.score?e("div",{staticClass:"dialogo__score px-3 py-2 disapproved"},[e("div",{staticClass:"row align-items-center"},[t._m(2),e("div",{staticClass:"col"},[t._t("feedback-incorrecto",(function(){return[t._v("Incorrecto")]}))],2)])]):t._e()]):t._e(),Object.values(t.answers).length===t.words.length?e("div",{staticClass:"dialogo__words__footer__actions text-end mt-3"},[null===t.score?e("button",{on:{click:t.onCheck}},[t._v("Comprobar")]):"disapproved"===t.score?e("button",{on:{click:t.reset}},[t._v("Prueba otra vez")]):t._e()]):t._e()])])])])])},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-12 d-md-none"},[e("hr",{staticClass:"mb-3 mt-4"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-2"},[e("div",{staticClass:"dialogo__score__icon"},[e("img",{attrs:{src:r("86bd")}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-2"},[e("div",{staticClass:"dialogo__score__icon"},[e("img",{attrs:{src:r("3b23")}})])])}],i=(r("14d9"),r("0643"),r("76d6"),r("2382"),r("fffc"),r("a573"),r("9a9a"),r("b2ea")),o=r("0d26"),n={name:"DialogoActividad",components:{Audio:i["default"]},mixins:[o["a"]],props:{dialogo:{type:Object,default:()=>({})}},data:()=>({uid:Math.floor(Math.random()*10**10),touchScreen:!1,dragId:null,dropId:null,answers:{},translations:[],score:null}),computed:{dialogoComputed(){return this.dialogoMerge(this.dialogo,!0)},words(){return this.shuffle(this.dialogoComputed.map(t=>({palabra:t.palabra,id:t.id})).filter(t=>t.palabra))},answerWordsIds(){return Object.values(this.answers).map(t=>t.dragId)},wordsToShow(){return this.words.filter(t=>!this.answerWordsIds.includes(t.id))}},created(){this.touchScreen="ontouchstart"in document.documentElement},methods:{onStartDrag(t){this.dragId=t},onEndDrag(){this.dragId=null},onDrop(t){this.dragId&&(this.$set(this.answers,t,{dragId:this.dragId,dropId:t,palabra:this.words.find(t=>t.id===this.dragId).palabra}),this.dropId=null)},onDragEnter(t){this.dropId=t},onDragLeave(){this.dropId=null},onTouchStart(t){const e=this.$refs["word-"+t][0];e.classList.add("touch-drag")},onTouchMove(t,e){const r=this.$refs["word-"+e][0],a=r.getBoundingClientRect(),s=t.touches[0];r.style.top=s.clientY-a.height/2+"px",r.style.left=s.clientX-a.width/2+"px"},onTouchEnd(t,e){if(t.changedTouches.length>1)return void this.resetDragElm(e);const r=this.$refs["chat-"+this.uid],a=r.getBoundingClientRect(),s=t.changedTouches[0],i=s.clientX>a.x&&s.clientX<a.x+a.width,o=s.clientY>a.y&&s.clientY<a.y+a.height;if(!i||!o)return void this.resetDragElm(e);let n;const d=this.words.some(t=>{const e=this.$refs["phrase-"+t.id][0],r=e.getBoundingClientRect(),a=25,i=s.clientX>r.x-a&&s.clientX<r.x+r.width+a,o=s.clientY>r.y-a&&s.clientY<r.y+r.height+a;return i&&o&&(n=t.id),i&&o});d&&this.$set(this.answers,n,{dragId:e,dropId:n,palabra:this.words.find(t=>t.id===e).palabra}),this.resetDragElm(e)},onTouchCancel(t){this.resetDragElm(t)},resetDragElm(t){const e=this.$refs["word-"+t][0];e.classList.remove("touch-drag")},toggleTranslate(t){this.translations.includes(t)?this.translations=this.translations.filter(e=>e!==t):this.translations.push(t)},onCheck(){const t=Object.values(this.answers).every(t=>t.dragId===t.dropId);this.score=t?"approved":"disapproved"},reset(){this.answers={},this.score=null},shuffle(t){for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}return t}}},d=n,c=r("2877"),l=Object(c["a"])(d,a,s,!1,null,null,null);e["default"]=l.exports},"3f8c":function(t,e,r){"use strict";t.exports={}},4625:function(t,e,r){"use strict";var a=r("c6b6"),s=r("e330");t.exports=function(t){if("Function"===a(t))return s(t)}},"5ccd":function(t,e,r){t.exports=r.p+"img/audio.058779f0.svg"},"76d6":function(t,e,r){"use strict";r("d866")},"86bd":function(t,e,r){t.exports=r.p+"img/green-check.f4a3fa01.svg"},"8fb3":function(t,e,r){"use strict";e["a"]={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const t=this.audioElement.buffered;return t.end(t.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const t=document.createElement("audio");return t.setAttribute("preload","metadata"),t.setAttribute("src",this.audio),document.body.appendChild(t),t},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}}},"9a1f":function(t,e,r){"use strict";var a=r("c65b"),s=r("59ed"),i=r("825a"),o=r("0d51"),n=r("35a1"),d=TypeError;t.exports=function(t,e){var r=arguments.length<2?n(t):e;if(s(r))return i(a(r,t));throw new d(o(t)+" is not iterable")}},"9a9a":function(t,e,r){"use strict";r("a732")},a573:function(t,e,r){"use strict";r("ab43")},a732:function(t,e,r){"use strict";var a=r("23e7"),s=r("2266"),i=r("59ed"),o=r("825a"),n=r("46c4");a({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),i(t);var e=n(this),r=0;return s(e,(function(e,a){if(t(e,r++))return a()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},ab43:function(t,e,r){"use strict";var a=r("23e7"),s=r("d024"),i=r("c430");a({target:"Iterator",proto:!0,real:!0,forced:i},{map:s})},b2ea:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"audio position-relative",on:{"~mouseover":function(e){return t.$emit("audio-hover")}}},[t._t("default"),t.audioCanPlay?"pause"===t.state?e("button",{staticClass:"audio__btn",on:{click:t.play}},[e("img",{attrs:{src:r("5ccd")}})]):e("button",{staticClass:"audio__btn",on:{click:t.pause}},[e("img",{attrs:{src:r("f034")}})]):e("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"visually-hidden"},[t._v("Loading..")])])],2)},s=[],i=r("8fb3"),o={name:"Audio",mixins:[i["a"]]},n=o,d=r("2877"),c=Object(d["a"])(n,a,s,!1,null,null,null);e["default"]=c.exports},d024:function(t,e,r){"use strict";var a=r("c65b"),s=r("59ed"),i=r("825a"),o=r("46c4"),n=r("c5cc"),d=r("9bdd"),c=n((function(){var t=this.iterator,e=i(a(this.next,t)),r=this.done=!!e.done;if(!r)return d(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return i(this),s(t),new c(o(this),{mapper:t})}},d866:function(t,e,r){"use strict";var a=r("23e7"),s=r("2266"),i=r("59ed"),o=r("825a"),n=r("46c4");a({target:"Iterator",proto:!0,real:!0},{every:function(t){o(this),i(t);var e=n(this),r=0;return!s(e,(function(e,a){if(!t(e,r++))return a()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},e8b5:function(t,e,r){"use strict";var a=r("c6b6");t.exports=Array.isArray||function(t){return"Array"===a(t)}},e95a:function(t,e,r){"use strict";var a=r("b622"),s=r("3f8c"),i=a("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(s.Array===t||o[i]===t)}},f034:function(t,e,r){t.exports=r.p+"img/pause.8df843e4.svg"},f5df:function(t,e,r){"use strict";var a=r("00ee"),s=r("1626"),i=r("c6b6"),o=r("b622"),n=o("toStringTag"),d=Object,c="Arguments"===i(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=a?i:function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=d(t),n))?r:c?i(e):"Object"===(a=i(e))&&s(e.callee)?"Arguments":a}},f665:function(t,e,r){"use strict";var a=r("23e7"),s=r("2266"),i=r("59ed"),o=r("825a"),n=r("46c4");a({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),i(t);var e=n(this),r=0;return s(e,(function(e,a){if(t(e,r++))return a(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},fffc:function(t,e,r){"use strict";r("f665")}}]);
//# sourceMappingURL=chunk-1861216c.76215a52.js.map