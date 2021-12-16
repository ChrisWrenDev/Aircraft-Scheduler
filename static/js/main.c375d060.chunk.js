(this["webpackJsonpaircraft-scheduler"]=this["webpackJsonpaircraft-scheduler"]||[]).push([[0],{23:function(n,t,e){},28:function(n,t,e){"use strict";e.r(t);var r,i,a,c,o,s,d,l,j,b,f,u,x,h,O,p,g,m,v,y,w,k,C,S,E,T,A,D,R,_,z,I,F,L,M,N,q,V=e(1),G=e.n(V),J=e(14),P=e.n(J),B=(e(23),e(2)),H=e(3),X=e(0),K=H.a.div(r||(r=Object(B.a)(["\n  grid-area: 1 / span 3;\n  background-color: #fdfdfd;\n"]))),Q=function(){return Object(X.jsx)(K,{})},U=e(5),W=H.a.div(i||(i=Object(B.a)(["\n  background-color: ",";\n  position: relative;\n"])),(function(n){return n.bgColor})),Y=H.a.div(a||(a=Object(B.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]))),Z=function(n){return Object(X.jsx)(W,{bgColor:n.bgColor,children:Object(X.jsx)(Y,{children:n.children})})},$=H.a.div(c||(c=Object(B.a)(["\n  flex: 1;\n  /* margin: 20px 0; */\n"]))),nn=H.a.h2(o||(o=Object(B.a)(["\n  font-size: 24px;\n  text-align: center;\n  color: #1d0833;\n"]))),tn=function(n){return Object(X.jsx)($,{children:Object(X.jsx)(nn,{children:n.children})})},en=H.a.div(s||(s=Object(B.a)(["\n  width: 100%;\n  flex: 10;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0px 15px;\n"]))),rn=H.a.div(d||(d=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),an=function(n){return Object(X.jsx)(en,{children:Object(X.jsx)(rn,{children:n.children})})},cn=Object(V.createContext)({aircrafts:[],selectedAircraft:"",flights:[],rotations:[],turnoverTime:0}),on=Object(H.b)(l||(l=Object(B.a)(["\n0%{opacity: 0},\n100%{opacity: 1}\n"]))),sn=H.a.div(j||(j=Object(B.a)(["\n  width: 300px;\n  height: 150px;\n  border: solid 2px ",";\n  border-radius: 4px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 15px;\n  cursor: pointer;\n  animation: 0.1s ease-in ",";\n"])),(function(n){return n.selected?"#5026e1":"#fff"}),on),dn=H.a.h3(b||(b=Object(B.a)(["\n  font-size: 24px;\n  text-align: center;\n  color: #1d0833;\n  margin: 0 0 10px 0;\n"]))),ln=H.a.p(f||(f=Object(B.a)(["\n  font-size: 20px;\n  text-align: center;\n  color: #b1aaba;\n  margin: 0;\n"]))),jn=function(n){var t=Object(V.useState)(!1),e=Object(U.a)(t,2),r=e[0],i=e[1],a=Object(V.useContext)(cn).aircraftsDispatch;return Object(X.jsxs)(sn,{onClick:function(){i((function(n){return!n})),a(r?{type:"REMOVE_SELECTED"}:{type:"SELECTED_AIRCRAFT",aircraft:n.details})},selected:r,children:[Object(X.jsx)(dn,{selected:r,children:n.details.ident}),Object(X.jsx)(ln,{children:"".concat(n.details.utilisation,"%")})]})},bn=H.a.div(u||(u=Object(B.a)(["\n  width: 300px;\n  height: 150px;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #dddbdd;\n  margin-bottom: 15px;\n  position: relative;\n"]))),fn=H.a.div(x||(x=Object(B.a)(["\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(-90deg, #fff 0%, #dddbdd 50%, #fff 100%);\n  background-size: 400% 400%;\n  animation: pulse 2s ease-in-out infinite;\n  @keyframes pulse {\n    0% {\n      background-position: 0% 0%;\n    }\n    100% {\n      background-position: -150% 0%;\n    }\n  }\n"]))),un=function(n){return Object(X.jsx)(bn,{children:Object(X.jsx)(fn,{})})},xn=e(12),hn=e.n(xn),On=e(18),pn=function(){var n=Object(V.useState)(!1),t=Object(U.a)(n,2),e=t[0],r=t[1],i=Object(V.useState)(null),a=Object(U.a)(i,2),c=a[0],o=a[1];return{loadingStatus:e,error:c,httpRequest:Object(V.useCallback)(function(){var n=Object(On.a)(hn.a.mark((function n(t,e){var i,a;return hn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(!0),o(null),n.prev=2,n.next=5,fetch(t.url,{method:t.method?t.method:"GET",headers:t.headers?t.headers:{},body:t.body?JSON.stringify(t.body):null});case 5:if((i=n.sent).ok){n.next=8;break}throw new Error("Request failed!");case 8:return n.next=10,i.json();case 10:a=n.sent,e(a),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),o(n.t0.message||"Something went wrong!");case 17:r(!1);case 18:case"end":return n.stop()}}),n,null,[[2,14]])})));return function(t,e){return n.apply(this,arguments)}}(),[])}},gn=function(){var n,t=Object(V.useState)(!1),e=Object(U.a)(t,2),r=e[0],i=e[1],a=Object(V.useContext)(cn),c=a.aircraftsState,o=a.aircraftsDispatch,s=pn(),d=s.loadingStatus,l=s.error,j=s.httpRequest;return Object(V.useEffect)((function(){if(!r){j({url:"https://infinite-dawn-93085.herokuapp.com/aircrafts"},(function(n){o({type:"ADD_AIRCRAFTS",aircrafts:n.data})})),i(!0)}}),[j,o,r]),l&&(n=Object(X.jsx)(un,{children:l})),d&&(n=Object(X.jsx)(un,{children:"Loading..."})),c.aircrafts.length>0&&(n=c.aircrafts.map((function(n){return Object(X.jsx)(jn,{details:n},n.ident)}))),Object(X.jsxs)(Z,{bgColor:"#f5f7fb",children:[Object(X.jsx)(tn,{children:"Aircrafts"}),Object(X.jsx)(an,{children:n})]})},mn=Object(H.b)(h||(h=Object(B.a)(["\n0%{transform: translateX(100%)},\n100%{transform: translateX(0)}\n"]))),vn=H.a.div(O||(O=Object(B.a)(['\n  width: 600px;\n  height: 150px;\n  border-radius: 4px;\n  background-color: #fff;\n\n  display: grid;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-areas: "head head head" "departure icon arrival";\n  padding: 15px;\n  margin-bottom: 15px;\n  animation: 0.5s ease-in-out ',";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])),mn),yn=H.a.h3(p||(p=Object(B.a)(["\n  grid-area: head;\n  align-self: end;\n\n  font-size: 24px;\n  text-align: center;\n  color: #b1aaba;\n  margin: 0;\n"]))),wn=H.a.div(g||(g=Object(B.a)(["\n  grid-area: arrival;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),kn=H.a.div(m||(m=Object(B.a)(["\n  grid-area: departure;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Cn=H.a.p(v||(v=Object(B.a)(["\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n  color: #1d0833;\n  margin: 0;\n"]))),Sn=H.a.p(y||(y=Object(B.a)(["\n  font-size: 16px;\n  text-align: center;\n  color: #b1aaba;\n  margin: 0;\n"]))),En=H.a.div(w||(w=Object(B.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Tn=H.a.hr(k||(k=Object(B.a)(["\n  width: 100%;\n  border-top: 1px solid #aeb1bb;\n  border-radius: 5px;\n"]))),An=function(n){var t=n.details;return Object(X.jsxs)(vn,{children:[Object(X.jsx)(yn,{children:t.id}),Object(X.jsxs)(kn,{children:[Object(X.jsx)(Cn,{children:t.readable_departure}),Object(X.jsx)(Sn,{children:t.origin})]}),Object(X.jsx)(En,{children:Object(X.jsx)(Tn,{})}),Object(X.jsxs)(wn,{children:[Object(X.jsx)(Cn,{children:t.readable_arrival}),Object(X.jsx)(Sn,{children:t.destination})]})]})},Dn=H.a.div(C||(C=Object(B.a)(["\n  flex: 1.5;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #f3f5f9;\n"]))),Rn=H.a.div(S||(S=Object(B.a)(["\n  width: 600px;\n  height: 30px;\n  background-color: grey;\n  display: flex;\n"]))),_n=H.a.div(E||(E=Object(B.a)(["\n  height: 100%;\n  width: ",";\n  background-color: ",";\n"])),(function(n){return n.width}),(function(n){return"arrival"===n.type?"#5026e1":"#019c73"})),zn=H.a.div(T||(T=Object(B.a)(["\n  width: 600px;\n  display: flex;\n  justify-content: space-between;\n"]))),In=H.a.p(A||(A=Object(B.a)(["\n  font-size: 14px;\n"]))),Fn=function(){return Object(X.jsxs)(Dn,{children:[Object(X.jsxs)(zn,{children:[Object(X.jsx)(In,{children:"0:00"}),Object(X.jsx)(In,{children:"12:00"}),Object(X.jsx)(In,{children:"24:00"})]}),Object(X.jsxs)(Rn,{children:[Object(X.jsx)(_n,{type:"arrival",width:"10%"}),Object(X.jsx)(_n,{width:"20%"}),Object(X.jsx)(_n,{type:"arrival",width:"30%"}),Object(X.jsx)(_n,{width:"20%"})]})]})},Ln=H.a.div(D||(D=Object(B.a)(["\n  width: 100%;\n  height: 150px;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #dddbdd;\n  margin-bottom: 15px;\n"]))),Mn=H.a.h3(R||(R=Object(B.a)(["\n  font-size: 18px;\n  text-align: center;\n  color: #271f33;\n  margin: 0;\n"]))),Nn=function(n){return Object(X.jsx)(Ln,{children:Object(X.jsx)(Mn,{children:n.children})})},qn=function(){var n,t=Object(V.useContext)(cn).aircraftsState,e=Object(X.jsx)(Nn,{children:"Select a flight to add a rotation"});t.rotations.length>0&&(e=t.rotations.map((function(n){return Object(X.jsx)(An,{details:n},n.id)})));var r=null!==(n=t.selectedAircraft)&&void 0!==n?n:"";return Object(X.jsxs)(Z,{bgColor:"#edf0f8",children:[Object(X.jsx)(tn,{children:Object(X.jsx)(tn,{children:"Rotations ".concat(r)})}),Object(X.jsx)(an,{children:e}),Object(X.jsx)(Fn,{})]})},Vn=Object(H.b)(_||(_=Object(B.a)(["\n0%{opacity: 0},\n100%{opacity: 1}\n"]))),Gn=H.a.div(z||(z=Object(B.a)(["\n  width: 300px;\n  height: 150px;\n  border: solid 2px ",";\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: ",";\n  display: grid;\n  grid-template-rows: 1fr 3fr;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 15px;\n  margin-bottom: 15px;\n  cursor: pointer;\n  animation: 0.1s ease-in ",";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.selected?"#5026e1":"#fff"}),(function(n){return n.selected?"0 0 5px rgba(0, 0, 0, 0.1)":"none"}),Vn),Jn=H.a.h3(I||(I=Object(B.a)(["\n  grid-area: 1 / span 2;\n  align-self: end;\n\n  font-size: 24px;\n  text-align: center;\n  color: #b1aaba;\n  margin: 0;\n"]))),Pn=H.a.div(F||(F=Object(B.a)(["\n  grid: 2 / 1 /3/ 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Bn=H.a.div(L||(L=Object(B.a)(["\n  grid: 2 /2 / 3 /3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),Hn=H.a.p(M||(M=Object(B.a)(["\n  font-size: 30px;\n  font-weight: 700;\n  text-align: center;\n  color: #1d0833;\n  margin: 0;\n"]))),Xn=H.a.p(N||(N=Object(B.a)(["\n  font-size: 16px;\n  text-align: center;\n  color: #b1aaba;\n  margin: 0;\n"]))),Kn=function(n){var t=n.details,e=Object(V.useContext)(cn),r=e.aircraftsState,i=e.aircraftsDispatch,a=r.rotations.some((function(n){return n.id===t.id}));return Object(X.jsxs)(Gn,{onClick:function(){i(a?{type:"REMOVE_ROTATION",flight:t}:{type:"ADD_ROTATION",flight:t})},selected:a,children:[Object(X.jsx)(Jn,{children:t.id}),Object(X.jsxs)(Bn,{children:[Object(X.jsx)(Hn,{children:t.readable_departure}),Object(X.jsx)(Xn,{children:t.origin})]}),Object(X.jsxs)(Pn,{children:[Object(X.jsx)(Hn,{children:t.readable_arrival}),Object(X.jsx)(Xn,{children:t.destination})]})]})},Qn=function(){var n,t=Object(V.useState)(!1),e=Object(U.a)(t,2),r=e[0],i=e[1],a=Object(V.useContext)(cn),c=a.aircraftsState,o=a.aircraftsDispatch,s=pn(),d=s.loadingStatus,l=s.error,j=s.httpRequest;return Object(V.useEffect)((function(){if(!r){j({url:"https://infinite-dawn-93085.herokuapp.com/flights"},(function(n){o({type:"ADD_FLIGHTS",flights:n.data})})),i(!0)}}),[j,o,r]),l&&(n=Object(X.jsx)(un,{children:l})),d&&(n=[Object(X.jsx)(un,{},"1"),Object(X.jsx)(un,{},"2"),Object(X.jsx)(un,{},"3"),Object(X.jsx)(un,{},"4"),Object(X.jsx)(un,{},"5")]),c.flights.length>0&&(n=c.flights.map((function(n){return Object(X.jsx)(Kn,{details:n},n.id)}))),Object(X.jsxs)(Z,{bgColor:"#f5f7fb",children:[Object(X.jsx)(tn,{children:"Flights"}),Object(X.jsx)(an,{children:n})]})};var Un=H.a.div(q||(q=Object(B.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  overflow: hidden;\n"]))),Wn=function(){return Object(X.jsxs)(Un,{children:[Object(X.jsx)(Q,{}),Object(X.jsx)(gn,{}),Object(X.jsx)(qn,{}),Object(X.jsx)(Qn,{})]})},Yn=e(7),Zn=e(4),$n=function(n,t){var e=n.rotations.concat(t);return e.sort((function(n,t){return n.departuretime-t.departuretime})),Object(Zn.a)(Object(Zn.a)({},n),{},{rotations:e})},nt=function(n,t){var e=n.rotations.filter((function(n){return n.id!==t.id}));return Object(Zn.a)(Object(Zn.a)({},n),{},{rotations:Object(Yn.a)(e)})},tt=function(n,t){if("ADD_ROTATION"===t.type)return 0===n.rotations.length?$n(n,t.flight):function(n,t){var e=n.rotations,r=n.turnoverTime;return function(n,t,e){var r=+t.departuretime,i=+t.arrivaltime+e,a=t.origin,c=t.destination,o=n[0].departuretime,s=+n[n.length-1].arrivaltime+e,d=n[0].origin,l=n[n.length-1].destination;return r>s&&a===l||i<o&&c===d}(e,t,r)||function(n,t,e){for(var r=+t.departuretime,i=+t.arrivaltime+e,a=t.origin,c=t.destination,o=0;o<n.length-1;o++){var s=+n[1+o].departuretime,d=+n[o].arrivaltime+e,l=n[1+o].origin,j=n[o].destination;if(r>d&&i<s&&a===j&&c===l)return!0}return!1}(e,t,r)?$n(n,t):n}(n,t.flight);if("REMOVE_ROTATION"===t.type)return n.rotations.length<=2||function(n,t){var e=n.rotations.indexOf(t);if(0===e||e===n.rotations.length-1)return!0;var r=n.rotations[e-1],i=n.rotations[e+1],a=r.arrivaltime+n.turnoverTime<i.departuretime,c=r.destination===i.origin;return a&&c}(n,t.flight)?nt(n,t.flight):n;if("ADD_AIRCRAFTS"===t.type){var e=t.aircrafts.map((function(n){return Object(Zn.a)(Object(Zn.a)({},n),{},{utilisation:0})}));return Object(Zn.a)(Object(Zn.a)({},n),{},{aircrafts:Object(Yn.a)(e)})}return"SELECTED_AIRCRAFT"===t.type?Object(Zn.a)(Object(Zn.a)({},n),{},{selectedAircraft:t.aircraft.ident}):"REMOVE_SELECTED"===t.type?Object(Zn.a)(Object(Zn.a)({},n),{},{selectedAircraft:""}):"ADD_FLIGHTS"===t.type?Object(Zn.a)(Object(Zn.a)({},n),{},{flights:Object(Yn.a)(t.flights)}):n},et=function(n){var t=Object(V.useReducer)(tt,{aircrafts:[],selectedAircraft:"",flights:[],rotations:[],turnoverTime:1200}),e=Object(U.a)(t,2),r=e[0],i=e[1];return Object(X.jsx)(cn.Provider,{value:{aircraftsState:r,aircraftsDispatch:i},children:n.children})},rt=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),r(n),i(n),a(n),c(n)}))};P.a.render(Object(X.jsx)(G.a.StrictMode,{children:Object(X.jsx)(et,{children:Object(X.jsx)(Wn,{})})}),document.getElementById("root")),rt()}},[[28,1,2]]]);
//# sourceMappingURL=main.c375d060.chunk.js.map