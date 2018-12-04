(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],p=0,h=[];p<r.length;p++)i=r[p],a[i]&&h.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var s=o("2b0e"),a=o("bb71");o("da64");s["a"].use(a["a"],{iconfont:"md"});var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-content",[o("Graph")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"explorerContainer"},[t.topic?o("div",{attrs:{id:"topic"}},[o("h3",{staticClass:"text-xs-center"},[t._v("\n      Current topic:\n      "),o("span",[t._v(t._s(t.topic))])])]):t._e(),o("div",{ref:"graph",attrs:{id:"graph"}}),o("div",{attrs:{id:"btns"}},[o("v-btn",{attrs:{id:"reloadBtn",color:"warning"},on:{click:t.reload}},[t._v(t._s(t.reloadBtnText))]),o("v-btn",{attrs:{id:"demoBtn",color:"primary"},on:{click:t.enableDemo}},[t._v(t._s(t.demoBtnText))]),o("v-btn",{attrs:{id:"physicsBtn",color:"secondary"},on:{click:t.swapPhysics}},[t._v(t._s(t.physicsText))])],1),o("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",{attrs:{color:"primary",dark:""}},[o("v-card-text",[t._v("Please stand by\n        "),o("v-progress-linear",{staticClass:"mb-0",attrs:{color:"white",indeterminate:""}})],1)],1)],1)],1)},c=[],l=o("2f62"),d=o("e9a8"),p=o.n(d),h=o("dd61"),u=o.n(h),b=o("2769"),m=o.n(b),f=o("a8fc"),g=o.n(f),_=o("6cd4"),y=o.n(_);function w(t){const e=t=>{y()(e.data,o=>{const s=o[t];y()(s,t=>{m()(e.graph.nodes,e=>e.label===t.label)||e.graph.nodes.push(t)})});const o=p()(e.data,o=>{const s=g()(o[t],"label");return u()(s,t=>{const s=m()(e.graph.nodes,e=>{return e.label===t.label});return{from:o.id,to:(s||t).id}})});e.graph.edges.push(...o);const s=p()(e.data,e=>e[t]);return e.data=s,e};return e.data=t,e.graph={nodes:[...e.data],edges:[]},e}var v=o("2ef0");const k={mass:3,fixed:!1,clickable:!0},T={...k,group:"city"},x={...k,group:"keywords"},O={...k,group:"challenge"},S={...k,group:"topics"},D={clickable:!1,fixed:!0,physics:!1,size:25},E=[{...T,...D,x:25,y:0,label:"city"},{...x,...D,x:25,y:50,label:"keyword"},{...O,...D,x:25,y:100,label:"challenge"},{...S,...D,x:25,y:150,label:"topic"}];const j=t=>{let e=0;return Object(v["map"])(t.entry,t=>{const{gsx$city:{$t:o},gsx$description:{$t:s},gsx$keywords:{$t:a},gsx$title:{$t:n},gsx$topics:{$t:i}}=t,r={city:o,description:s,title:n,keywords:a.split(", ").filter(t=>""!==t),topics:i.split(", ").filter(t=>""!==t),id:++e,label:o};return r})},A=t=>{return Object(v["filter"])(Object(v["map"])(Object(v["uniqBy"])(t,"city"),t=>t.city),t=>""!==t)},P=(t,e)=>{const o=A(t);let s=0;return Object(v["compact"])(Object(v["map"])(o,o=>{const a=Object(v["filter"])(t,t=>t.city===o&&Object(v["includes"])(t.topics,e));return a.length<=0?null:{challenges:Object(v["map"])(a,t=>({...t,...O,label:t.title,id:++s,keywords:Object(v["map"])(t.keywords,t=>({...x,label:t,id:++s}))})),...T,label:o,id:++s}}))},$=t=>{const e=A(t);let o=0;return Object(v["map"])(e,e=>{const s=Object(v["filter"])(t,t=>t.city===e),a=Object(v["flatMap"])(s,t=>t.topics);return{...T,label:e,id:++o,topics:Object(v["map"])(a,t=>({...S,label:t,id:++o}))}})};var C=o("4f27"),B={mutate_raw_data(t,{feed:e}){const o=j(e);t.raw_data=o;const{graph:s}=w($(o))("topics");t.graph={nodes:new C["DataSet"](s.nodes),edges:new C["DataSet"](s.edges)}},handle_click(t,e){if(e){t.reloadBtnText="back";const o={...e};t.selected_topic=o;const{graph:s}=w(P(t.raw_data,o.label))("challenges")("keywords");t.graph={nodes:new C["DataSet"](s.nodes),edges:new C["DataSet"](s.edges)}}},reset_button(t){t.reloadBtnText="reload"},swap_demo_mode(t){t.demo=!t.demo},swap_physics({options:t}){t.physics.enabled=!t.physics.enabled}};const M=async t=>{const e=await fetch(t);return e.json()};var W={async fetch_spreadsheet({commit:t}){const e="https://spreadsheets.google.com/feeds/list/11PkGogP7rsQhiUomXhQBJVZh4wPZWPcDCJm8lKWrisE/2/public/values?alt=json";try{const s=await M(e);t(z.MUTATE_RAW_DATA,s),t(z.RESET_BUTTON)}catch(o){console.error(o)}}},H={get_network({graph:t}){return t},get_options:({options:t})=>t,reloadBtnText:({reloadBtnText:t})=>t,cities:({cities:t})=>t,selected_cities:({selected_cities:t})=>t,topic:({selected_topic:t})=>t.label,demoBtnText:({demo:t})=>t?"Disable Demo":"Enable Demo",physics:({options:{physics:t}})=>t,physicsText:({options:{physics:{enabled:t}}})=>t?"Disable physics":"Enable physics"},z={MUTATE_RAW_DATA:"mutate_raw_data",FETCH_SPREADSHEET_DATA:"fetch_spreadsheet",HANDLE_CLICK:"handle_click",RESET_BUTTON:"reset_button",SWAP_DEMO:"swap_demo_mode",SWAP_PHYSICS:"swap_physics"};s["a"].use(l["a"]);var R=new l["a"].Store({state:{graph:{nodes:[],edges:[]},options:{autoResize:!0,height:"100%",width:"100%",layout:{improvedLayout:!1},physics:{enabled:!0,stabilization:{enabled:!0,iterations:150,fit:!0}},groups:{city:{color:"rgba(57,62,70,1)",font:{size:18},shape:"hexagon"},topics:{color:"rgba(252, 60, 60, 1)",font:{size:18},shape:"hexagon"},keywords:{color:"rgba(0, 173, 181, 1)",font:{size:18},shape:"hexagon"},challenge:{color:"rgba(248, 181, 0, 1)",font:{size:18},shape:"hexagon"}},edges:{arrows:{to:{enabled:!0,scaleFactor:.5},arrowStrikethrough:!1}}},raw_data:{},reloadBtnText:"Reload",demo:!1,selected_topic:{}},mutations:B,actions:W,getters:H}),I={name:"Graph",props:{width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"100%"}}},data(){return{events:["doubleClick","selectNode","click","stabilizationIterationsDone","afterDrawing"],network:null,dialog:!1,timeout:null}},computed:{...Object(l["c"])(["demo"]),...Object(l["b"])(["get_network","get_options","reloadBtnText","topic","demoBtnText","physics","physicsText"])},watch:{get_network:function(t){null!==this.network&&this.network.destroy();const e=this.$refs.graph,o=-e.clientWidth/2-75;let s=-e.clientHeight/2-75;const a=E.map(t=>{const{font:e}=t,a={...t,x:o,y:s,font:{...e,vadjust:-12}};return s+=80,a});t.nodes.add(a),this.network=new C["Network"](e,t,this.get_options),this.events.forEach(t=>this.network.on(t,e=>this.handle_event(t,e)))}},created(){},mounted(){this.dialog=!0,this.$store.state.topic="",this.$store.dispatch(z.FETCH_SPREADSHEET_DATA)},methods:{reload(){this.dialog=!0,this.demo&&(clearTimeout(this.timeout),this.$store.commit(z.SWAP_DEMO)),this.$store.state.selected_topic={},this.$store.dispatch(z.FETCH_SPREADSHEET_DATA)},swapPhysics(){this.$store.commit(z.SWAP_PHYSICS),this.network.setOptions({physics:this.physics})},handle_event(t,e){let o,s;switch(t){case"doubleClick":o=e.nodes[0],s=this.network.body.data.nodes.map(t=>t).find(t=>t.id===o),this.dialog=!0,this.$store.commit(z.HANDLE_CLICK,s),this.demo&&(clearTimeout(this.timeout),this.$store.commit(z.SWAP_DEMO));break;case"selectNode":o=e.nodes[0],s=this.network.body.data.nodes.map(t=>t).find(t=>t.id===o),this.demo&&(clearTimeout(this.timeout),this.$store.commit(z.SWAP_DEMO)),s.clickable&&this.network.focus(o,{animation:{duration:800,easingFunction:"easeInCubic"},scale:1.2});break;case"click":0!==e.nodes.length||0!==e.edges.length||this.demo||this.network.fit({animation:{duration:800,easingFunction:"easeInCubic"},scale:1.2});break;case"afterDrawing":this.dialog=!1;break;case"stabilizationIterationsDone":this.swapPhysics(),this.$nextTick(()=>{this.swapPhysics()});break;default:return}},enableDemo(){if(this.demo)clearTimeout(this.timeout);else{const t=20,e=()=>{const t=this.randomSecs(4,8),o=Object(v["sample"])(this.network.body.data.nodes.map(t=>t).filter(t=>t.clickable));this.network.focus(o.id,{animation:{duration:t,easingFunction:"easeOutCubic"},scale:1.1}),this.timeout=setTimeout(e,t+50)};this.timeout=setTimeout(e,t)}this.$store.commit(z.SWAP_DEMO)},randomSecs(t,e){return Math.floor(Math.random()*(1e3*e-1e3*t))+1e3*t}}},V=I,F=(o("8e60"),o("2877")),N=o("6544"),L=o.n(N),G=o("8336"),U=o("b0af"),J=o("99d9"),K=o("169a"),Q=o("8e36"),Y=Object(F["a"])(V,r,c,!1,null,null,null);Y.options.__file="Graph.vue";var Z=Y.exports;L()(Y,{VBtn:G["a"],VCard:U["a"],VCardText:J["a"],VDialog:K["a"],VProgressLinear:Q["a"]});var q={name:"App",components:{Graph:Z},data(){return{}}},X=q,tt=o("7496"),et=o("549c"),ot=Object(F["a"])(X,n,i,!1,null,null,null);ot.options.__file="App.vue";var st=ot.exports;L()(ot,{VApp:tt["a"],VContent:et["a"]}),s["a"].config.productionTip=!1,new s["a"]({store:R,render:t=>t(st)}).$mount("#app")},"8e60":function(t,e,o){"use strict";var s=o("af4a"),a=o.n(s);a.a},af4a:function(t,e,o){}});
//# sourceMappingURL=app.e782f2fb.js.map