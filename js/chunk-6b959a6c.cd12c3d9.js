(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b959a6c"],{"00ee":function(t,e,i){"use strict";var s=i("b622"),n=s("toStringTag"),r={};r[n]="z",t.exports="[object z]"===String(r)},"0366":function(t,e,i){"use strict";var s=i("4625"),n=i("59ed"),r=i("40d5"),a=s(s.bind);t.exports=function(t,e){return n(t),void 0===e?t:r?a(t,e):function(){return t.apply(e,arguments)}}},2266:function(t,e,i){"use strict";var s=i("0366"),n=i("c65b"),r=i("825a"),a=i("0d51"),o=i("e95a"),l=i("07fa"),c=i("3a9b"),d=i("9a1f"),u=i("35a1"),h=i("2a62"),f=TypeError,m=function(t,e){this.stopped=t,this.result=e},p=m.prototype;t.exports=function(t,e,i){var _,v,g,b,w,x,C,S=i&&i.that,y=!(!i||!i.AS_ENTRIES),I=!(!i||!i.IS_RECORD),E=!(!i||!i.IS_ITERATOR),k=!(!i||!i.INTERRUPTED),T=s(e,S),z=function(t){return _&&h(_,"normal",t),new m(!0,t)},$=function(t){return y?(r(t),k?T(t[0],t[1],z):T(t[0],t[1])):k?T(t,z):T(t)};if(I)_=t.iterator;else if(E)_=t;else{if(v=u(t),!v)throw new f(a(t)+" is not iterable");if(o(v)){for(g=0,b=l(t);b>g;g++)if(w=$(t[g]),w&&c(p,w))return w;return new m(!1)}_=d(t,v)}x=I?t.next:_.next;while(!(C=n(x,_)).done){try{w=$(C.value)}catch(O){h(_,"throw",O)}if("object"==typeof w&&w&&c(p,w))return w}return new m(!1)}},"35a1":function(t,e,i){"use strict";var s=i("f5df"),n=i("dc4a"),r=i("7234"),a=i("3f8c"),o=i("b622"),l=o("iterator");t.exports=function(t){if(!r(t))return n(t,l)||n(t,"@@iterator")||a[s(t)]}},"3f8c":function(t,e,i){"use strict";t.exports={}},4625:function(t,e,i){"use strict";var s=i("c6b6"),n=i("e330");t.exports=function(t){if("Function"===s(t))return n(t)}},"519b":function(t,e,i){},6189:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[e("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:`translate(${t.scrollVal}px,0px)`}]},[t._t("default")],2)])},n=[],r=(i("0643"),i("fffc"),i("a573"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(t){t.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var t;const e=null===(t=this.ids.find(t=>t.id===this.selectedId))||void 0===t?void 0:t.id,i=document.getElementById(e);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===i)return;const s=this.$refs.hContainer,n=i.offsetWidth*this.ids.length;let r=i.offsetLeft;const a=s.offsetWidth/i.offsetWidth;a>1&&n-r<s.offsetWidth&&(r=n-s.offsetWidth),this.scrollVal=1===this.ids.length?0:-r},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(t=>({id:t.elm.id,key:t.key})))}}}),a=r,o=(i("9d8e"),i("2877")),l=Object(o["a"])(a,s,n,!1,null,"c4e6906c",null);e["a"]=l.exports},8464:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"linea-tiempo-c"},[e("div",{staticClass:"row flex-nowrap mx-0 linea-tiempo-c__header mb-4"},[e("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[e("div",{staticClass:"linea-tiempo-c__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[e("i",{staticClass:"fas fa-angle-left"})])]),e("div",{staticClass:"col-8 col-sm px-0"},[e("div",{staticClass:"row mx-0 flex-nowrap linea-tiempo-c__header__items"},[t.elements.length?e("ScrollHorizontal",{attrs:{selectedId:"ltc-header-"+(t.selected-1)}},t._l(t.elements,(function(i,s){return e("div",{key:"ltc-header-key-"+i.id,staticClass:"col-6 col-sm-4 px-0 linea-tiempo-c__header__item",class:t.itemClasses(i.id),attrs:{id:"ltc-header-"+i.id},on:{click:function(e){t.selected=i.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&s>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===s?e("div",{staticClass:"indicador__container"},[e("div",{staticClass:"indicador--click indicador--sm"})]):t._e(),e("span",{staticClass:"linea-tiempo-c__header__item__year",class:{"text-small":t.textSmall},domProps:{innerHTML:t._s(i.titulo)}}),e("div",{staticClass:"linea-tiempo-c__header__item__line-container"},[e("div",{staticClass:"linea-tiempo-c__header__item__dot"})])])})),0):t._e()],1)]),e("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[e("div",{staticClass:"linea-tiempo-c__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId}}},[e("i",{staticClass:"fas fa-angle-right"})])])]),e("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?e("ScrollHorizontal",{attrs:{selectedId:"ltc-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return e("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"ltc-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"ltc-content-"+t.id}})})),0):t._e(),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],r=i("ab14"),a=i("6189"),o={name:"LineaTiempoC",components:{ScrollHorizontal:a["a"]},mixins:[r["a"]],props:{textSmall:{type:Boolean}},data:()=>({headerSelected:0,mostrarIndicador:!0}),computed:{leftBtnId(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses(t){return[{"linea-tiempo-c__header__item--active":t===this.selected},{"linea-tiempo-c__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},l=o,c=i("2877"),d=Object(c["a"])(l,s,n,!1,null,null,null);e["default"]=d.exports},"9a1f":function(t,e,i){"use strict";var s=i("c65b"),n=i("59ed"),r=i("825a"),a=i("0d51"),o=i("35a1"),l=TypeError;t.exports=function(t,e){var i=arguments.length<2?o(t):e;if(n(i))return r(s(i,t));throw new l(a(t)+" is not iterable")}},"9d8e":function(t,e,i){"use strict";i("519b")},a573:function(t,e,i){"use strict";i("ab43")},ab14:function(t,e,i){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const i=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...i}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},ab43:function(t,e,i){"use strict";var s=i("23e7"),n=i("d024"),r=i("c430");s({target:"Iterator",proto:!0,real:!0,forced:r},{map:n})},d024:function(t,e,i){"use strict";var s=i("c65b"),n=i("59ed"),r=i("825a"),a=i("46c4"),o=i("c5cc"),l=i("9bdd"),c=o((function(){var t=this.iterator,e=r(s(this.next,t)),i=this.done=!!e.done;if(!i)return l(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return r(this),n(t),new c(a(this),{mapper:t})}},e95a:function(t,e,i){"use strict";var s=i("b622"),n=i("3f8c"),r=s("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||a[r]===t)}},f5df:function(t,e,i){"use strict";var s=i("00ee"),n=i("1626"),r=i("c6b6"),a=i("b622"),o=a("toStringTag"),l=Object,c="Arguments"===r(function(){return arguments}()),d=function(t,e){try{return t[e]}catch(i){}};t.exports=s?r:function(t){var e,i,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=d(e=l(t),o))?i:c?r(e):"Object"===(s=r(e))&&n(e.callee)?"Arguments":s}},f665:function(t,e,i){"use strict";var s=i("23e7"),n=i("2266"),r=i("59ed"),a=i("825a"),o=i("46c4");s({target:"Iterator",proto:!0,real:!0},{find:function(t){a(this),r(t);var e=o(this),i=0;return n(e,(function(e,s){if(t(e,i++))return s(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},fffc:function(t,e,i){"use strict";i("f665")}}]);
//# sourceMappingURL=chunk-6b959a6c.cd12c3d9.js.map