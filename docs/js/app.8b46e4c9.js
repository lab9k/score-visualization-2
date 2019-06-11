(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],d=0,h=[];d<c.length;d++)i=c[d],a[i]&&h.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("Graph")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorerContainer"},[e.cluster?n("div",{attrs:{id:"cluster"}},[n("h3",{staticClass:"text-xs-center"},[e._v("\n      You are watching everything within the Cluster:\n      "),n("span",[e._v(e._s(e.cluster))])])]):e._e(),n("div",{ref:"graph",attrs:{id:"graph"}}),n("div",{attrs:{id:"btns"}},[n("v-btn",{attrs:{id:"reloadBtn",color:"warning"},on:{click:e.reload}},[e._v("\n      "+e._s(e.reloadBtnText)+"\n    ")]),e.displayDemo?n("v-btn",{attrs:{id:"demoBtn",color:"primary"},on:{click:e.enableDemo}},[e._v("\n      "+e._s(e.demoBtnText)+"\n    ")]):e._e(),n("v-btn",{attrs:{id:"physicsBtn",color:"secondary"},on:{click:e.swapPhysics}},[e._v("\n      "+e._s(e.physicsText)+"\n    ")])],1),n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v("\n        Please stand by\n        "),n("v-progress-linear",{staticClass:"mb-0",attrs:{color:"white",indeterminate:""}})],1)],1)],1)],1)},s=[],u=n("75fc"),l=(n("7514"),n("386d"),n("ac6a"),n("cebc")),d=n("2f62"),h=n("bd86"),p=n("e9a8"),b=n.n(p),f=n("dd61"),g=n.n(f),m=n("2769"),v=n.n(m),_=n("a8fc"),y=n.n(_),w=n("6cd4"),O=n.n(w);function k(e){var t=function e(t){var n;O()(e.data,function(n){var r=n[t];O()(r,function(t){v()(e.graph.nodes,function(e){return e.label===t.label})||e.graph.nodes.push(t)})});var r=b()(e.data,function(n){var r=y()(n[t],"label");return g()(r,function(t){var r=v()(e.graph.nodes,function(e){return e.label===t.label});return{from:n.id,to:(r||t).id}})});(n=e.graph.edges).push.apply(n,Object(u["a"])(r));var a=b()(e.data,function(e){return e[t]});return e.data=a,e};return t.data=e,t.graph={nodes:Object(u["a"])(t.data),edges:[]},t}n("28a5");var j=n("2ef0"),T={mass:3,fixed:!1,clickable:!0,size:25},x=Object(l["a"])({},T,{group:"city"}),E=Object(l["a"])({},T,{group:"topics"}),S=Object(l["a"])({},T,{group:"challenge"}),D=Object(l["a"])({},T,{group:"clusters"}),A={clickable:!1,fixed:!0,physics:!1,size:25},C=[Object(l["a"])({},x,A,{label:"city"}),Object(l["a"])({},D,A,{label:"cluster"}),Object(l["a"])({},S,A,{label:"challenge"}),Object(l["a"])({},E,A,{label:"topic"})];var P,$=function(e){var t=0;return Object(j["map"])(e.entry,function(e){var n=e.gsx$city.$t,r=e.gsx$description.$t,a=e.gsx$topicsauto.$t,o=e.gsx$title.$t,i=e.gsx$clustersauto.$t;return{city:n,description:r,title:o,keywords:a.split(", ").filter(function(e){return""!==e}),topics:i.split(", ").filter(function(e){return""!==e}),id:++t,label:n}})},B=function(e){return Object(j["filter"])(Object(j["map"])(Object(j["uniqBy"])(e,"city"),function(e){return e.city}),function(e){return""!==e})},M=function(e,t){var n=B(e),r=0;return Object(j["compact"])(Object(j["map"])(n,function(n){var a=Object(j["filter"])(e,function(e){return e.city===n&&Object(j["includes"])(e.topics,t)});return a.length<=0?null:Object(l["a"])({challenges:Object(j["map"])(a,function(e){return Object(l["a"])({},e,S,{label:e.title,id:++r,keywords:Object(j["map"])(e.keywords,function(e){return Object(l["a"])({},E,{label:e,id:++r})})})})},x,{label:n,id:++r})}))},R=function(e){var t=B(e),n=0;return Object(j["map"])(t,function(t){var r=Object(j["filter"])(e,function(e){return e.city===t}),a=Object(j["flatMap"])(r,function(e){return e.topics});return Object(l["a"])({},x,{label:t,id:++n,topics:Object(j["map"])(a,function(e){return Object(l["a"])({},D,{label:e,id:++n})})})})},H=n("4f27"),W={MUTATE_RAW_DATA:"mutate_raw_data",FETCH_SPREADSHEET_DATA:"fetch_spreadsheet",HANDLE_CLICK:"handle_click",RESET_BUTTON:"reset_button",SWAP_DEMO:"swap_demo_mode",SWAP_PHYSICS:"swap_physics"},z=(P={},Object(h["a"])(P,W.MUTATE_RAW_DATA,function(e,t){var n=t.feed;e.feed=n;var r=$(n);e.raw_data=r;var a=k(R(r))("topics"),o=a.graph;e.graph={nodes:new H["DataSet"](o.nodes),edges:new H["DataSet"](o.edges)}}),Object(h["a"])(P,W.HANDLE_CLICK,function(e,t){if(t){e.reloadBtnText="back";var n=Object(l["a"])({},t);e.selected_cluster=n;var r=k(M(e.raw_data,n.label))("challenges")("keywords"),a=r.graph,o=new H["DataSet"](a.nodes),i=new H["DataSet"](a.edges);e.graph={nodes:o,edges:i}}}),Object(h["a"])(P,W.RESET_BUTTON,function(e){e.reloadBtnText="reload"}),Object(h["a"])(P,W.SWAP_DEMO,function(e){e.demo=!e.demo}),Object(h["a"])(P,W.SWAP_PHYSICS,function(e){var t=e.options;t.physics.enabled=!t.physics.enabled}),P),N=(n("96cf"),n("3b8d")),I=function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=Object(h["a"])({},W.FETCH_SPREADSHEET_DATA,function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r="https://spreadsheets.google.com/feeds/list/1vBJ9rB7NttdM98DbF0cBm6C1QD5nVmom53iisk3mtTc/1/public/values?alt=json",e.prev=2,e.next=5,I(r);case 5:a=e.sent,n(W.MUTATE_RAW_DATA,a),n(W.RESET_BUTTON),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.error(e.t0);case 13:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()),F={get_network:function(e){var t=e.graph;return t},get_options:function(e){var t=e.options;return t},reloadBtnText:function(e){var t=e.reloadBtnText;return t},cities:function(e){var t=e.cities;return t},selected_cities:function(e){var t=e.selected_cities;return t},cluster:function(e){var t=e.selected_cluster;return t.label},demoBtnText:function(e){var t=e.demo;return t?"Disable Demo":"Enable Demo"},physics:function(e){var t=e.options.physics;return t},physicsText:function(e){var t=e.options.physics.enabled;return t?"Disable physics":"Enable physics"}};r["a"].use(d["a"]);var V=new d["a"].Store({state:{graph:{nodes:[],edges:[]},options:{autoResize:!0,height:"100%",width:"100%",layout:{improvedLayout:!1},physics:{enabled:!0,stabilization:{enabled:!0,iterations:150,fit:!0}},groups:{city:{color:{border:"rgba(43, 222, 200, 0.7)",background:"rgba(43, 222, 200, 0.7)",highlight:{border:"rgba(43, 222, 200, 1)",background:"rgba(43, 222, 200, 1)"}},font:{size:18},shape:"hexagon"},clusters:{color:{border:"rgba(252, 60, 60, 0.7)",background:"rgba(252, 60, 60, 0.7)",highlight:{border:"rgba(252, 60, 60, 1)",background:"rgba(252, 60, 60, 1)"}},font:{size:18},shape:"hexagon"},topics:{color:{border:"rgba(174, 25, 255, 0.7)",background:"rgba(174, 25, 255, 0.7)",highlight:{border:"rgba(174, 25, 255, 1)",background:"rgba(174, 25, 255, 1)"}},font:{size:18},shape:"hexagon"},challenge:{color:{border:"rgba(248, 181, 0, 0.7)",background:"rgba(248, 181, 0, 0.7)",highlight:{border:"rgba(248, 181, 0, 1)",background:"rgba(248, 181, 0, 1)"}},font:{size:18},shape:"hexagon"}},edges:{arrows:{to:{enabled:!0,scaleFactor:.5}}},nodes:{font:{background:"rgba(0, 0, 0, 0.1)"}},interaction:{hover:!1}},raw_data:{},reloadBtnText:"Reload",demo:!1,selected_cluster:{}},mutations:z,actions:L,getters:F}),U={name:"Graph",props:{width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"100%"}}},data:function(){return{events:["doubleClick","selectNode","click","stabilizationIterationsDone","afterDrawing"],network:null,dialog:!1,timeout:null,displayDemo:!1}},computed:Object(l["a"])({},Object(d["c"])(["demo"]),Object(d["b"])(["get_network","get_options","reloadBtnText","cluster","demoBtnText","physics","physicsText"])),watch:{get_network:function(e){var t=this;null!==this.network&&this.network.destroy();var n=this.$refs.graph,r=-n.clientWidth/2-75,a=-n.clientHeight/2-75,o=C.map(function(e){var t=e.font,n=Object(l["a"])({},e,{x:r,y:a,font:Object(l["a"])({},t)});return a+=100,n});e.nodes.add(o),this.network=new H["Network"](n,e,this.get_options),e.nodes.forEach(function(n){var r=n.id,a=n.size,o=n.group;if("city"!==o){var i=t.network.getConnectedEdges(r).length,c=a+2*i;e.nodes.update({id:r,size:c})}}),this.events.forEach(function(e){return t.network.on(e,function(n){return t.handle_event(e,n)})})}},created:function(){},mounted:function(){this.dialog=!0,this.$store.state.topic="",this.$store.dispatch(W.FETCH_SPREADSHEET_DATA);var e=window.location.search.substring(1),t=new URLSearchParams(e);t.get("demo")&&(this.displayDemo=!0)},methods:{reload:function(){this.dialog=!0,this.demo&&(clearTimeout(this.timeout),this.$store.commit(W.SWAP_DEMO)),this.$store.state.selected_cluster={},this.$store.dispatch(W.FETCH_SPREADSHEET_DATA)},swapPhysics:function(){this.$store.commit(W.SWAP_PHYSICS),this.network.setOptions({physics:this.physics})},handle_event:function(e,t){var n,r,a,o,i=this;switch(e){case"doubleClick":n=t.nodes[0],r=this.network.body.data.nodes.map(function(e){return e}).find(function(e){return e.id===n&&"clusters"===e.group}),this.dialog=!0,this.$store.commit(W.HANDLE_CLICK,r),this.demo&&(clearTimeout(this.timeout),this.$store.commit(W.SWAP_DEMO));break;case"selectNode":n=t.nodes[0],r=this.network.body.data.nodes.map(function(e){return e}).find(function(e){return e.id===n}),a=[r.id].concat(Object(u["a"])(this.network.getConnectedNodes(r.id))),o=this.network.getConnectedEdges(r.id),this.network.setSelection({nodes:a,edges:o},{highlightEdges:!1}),this.demo&&(clearTimeout(this.timeout),this.$store.commit(W.SWAP_DEMO)),r.clickable;break;case"click":0!==t.nodes.length||0!==t.edges.length||this.demo||this.network.fit({animation:{duration:800,easingFunction:"easeInCubic"},scale:1.2});break;case"afterDrawing":this.dialog=!1;break;case"stabilizationIterationsDone":this.swapPhysics(),this.$nextTick(function(){i.swapPhysics()});break;default:return}},enableDemo:function(){var e=this;if(this.demo)clearTimeout(this.timeout);else{var t=20,n=function t(){var n=e.randomSecs(4,8),r=Object(j["sample"])(e.network.body.data.nodes.map(function(e){return e}).filter(function(e){return e.clickable}));e.network.focus(r.id,{animation:{duration:n,easingFunction:"easeOutCubic"},scale:1.1}),e.timeout=setTimeout(t,n+50)};this.timeout=setTimeout(n,t)}this.$store.commit(W.SWAP_DEMO)},randomSecs:function(e,t){return Math.floor(Math.random()*(1e3*t-1e3*e))+1e3*e}}},Y=U,G=(n("8e60"),n("2877")),J=n("6544"),K=n.n(J),q=n("8336"),Q=n("b0af"),X=n("99d9"),Z=n("169a"),ee=n("8e36"),te=Object(G["a"])(Y,c,s,!1,null,null,null),ne=te.exports;K()(te,{VBtn:q["a"],VCard:Q["a"],VCardText:X["a"],VDialog:Z["a"],VProgressLinear:ee["a"]});var re={name:"App",components:{Graph:ne},data:function(){return{}}},ae=re,oe=n("7496"),ie=n("549c"),ce=Object(G["a"])(ae,o,i,!1,null,null,null),se=ce.exports;K()(ce,{VApp:oe["a"],VContent:ie["a"]}),r["a"].config.productionTip=!1,new r["a"]({store:V,render:function(e){return e(se)}}).$mount("#app")},"8e60":function(e,t,n){"use strict";var r=n("af4a"),a=n.n(r);a.a},af4a:function(e,t,n){}});
//# sourceMappingURL=app.8b46e4c9.js.map