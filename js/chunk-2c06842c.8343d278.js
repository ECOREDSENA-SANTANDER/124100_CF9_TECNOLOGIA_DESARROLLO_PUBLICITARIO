(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c06842c"],{ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const t=this.elements.map(t=>t.id),e=t.indexOf(this.selected);if(e<0)return{};const s={};return 0===e?s.next=t[e+1]:(e+1===t.length||(s.next=t[e+1]),s.back=t[e-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b5d4:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tabs-a"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-xl-3"},[e("div",{staticClass:"row"},t._l(t.elements,(function(s,i){return e("div",{key:"tabs-menu-"+s.id,staticClass:"col-sm-6 col-lg-12 mb-3"},[e("button",{staticClass:"tabs-a__tab",class:{"tabs-a__tab__selected":t.selected===s.id},on:{click:function(e){t.selected=s.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&i>=1)&&t.mostrarIndicador}}},[e("div",{staticClass:"tabs-a__tab__text",domProps:{innerHTML:t._s(s.titulo)}}),t.mostrarIndicador&&1===i?e("div",{staticClass:"indicador__container"},[e("div",{staticClass:"indicador--click"})]):t._e()])])})),0)]),e("div",{staticClass:"col-lg-8 col-xl-9"},t._l(t.elements,(function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.selected===s.id,expression:"selected === elm.id"},{name:"child",rawName:"v-child",value:s.elm,expression:"elm.elm"}],key:"tabs-a-content-"+s.id,staticClass:"tabs-a__content-item",class:{"tabs-a__content-item--active":t.selected===s.id}})})),0)]),e("div",{staticClass:"hidden-slot"},[t._t("default")],2)])},a=[],n=s("ab14"),d={name:"TabsA",mixins:[n["a"]],data:()=>({mostrarIndicador:!0})},r=d,l=s("2877"),c=Object(l["a"])(r,i,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2c06842c.8343d278.js.map