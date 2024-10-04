import{m as A,r as i,o as d,q as f,w as e,d as F,e as a,y as c,l as j,u as s,s as r,t as n,b,a as L,v as x,F as E,h as O,j as U}from"./app-DCfJDSeM.js";const q={class:"grid grid-cols-3 gap-6"},z={class:"col-span-3 sm:col-span-1"},G={__name:"Filter",emits:["hide"],setup(D,{emit:m}){const C=m,_={name:""},g=A({..._});return(h,u)=>{const v=i("BaseInput"),T=i("FilterForm");return d(),f(T,{"init-form":_,form:g,onHide:u[1]||(u[1]=o=>C("hide"))},{default:e(()=>[F("div",q,[F("div",z,[a(v,{type:"text",modelValue:g.name,"onUpdate:modelValue":u[0]||(u[0]=o=>g.name=o),name:"name",label:h.$trans("transport.route.props.name")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},J={class:"text-xs"},K={name:"TransportRouteList"},W=Object.assign(K,{setup(D){const m=O(),C=U("emitter");let _=["filter"];c("transport:config")&&_.unshift("config"),c("transport-route:create")&&_.unshift("create");let g=[];c("transport-route:export")&&(g=["print","pdf","excel"]);const h="transport/route/",u=j(!1),v=A({}),T=o=>{Object.assign(v,o)};return(o,l)=>{const w=i("BaseButton"),S=i("PageHeaderAction"),P=i("PageHeader"),B=i("ParentTransition"),y=i("TextMuted"),p=i("DataCell"),k=i("FloatingMenuItem"),V=i("FloatingMenu"),H=i("DataRow"),M=i("DataTable"),N=i("ListItem");return d(),f(N,{"init-url":h,onSetItems:T},{header:e(()=>[a(P,{title:o.$trans("transport.route.route"),navs:[{label:o.$trans("transport.transport"),path:"Transport"}]},{default:e(()=>[a(S,{url:"transport/routes/",name:"TransportRoute",title:o.$trans("transport.route.route"),actions:s(_),"dropdown-actions":s(g),"config-path":"TransportConfig",onToggleFilter:l[1]||(l[1]=t=>u.value=!u.value)},{default:e(()=>[a(w,{design:"white",onClick:l[0]||(l[0]=t=>s(m).push({name:"TransportStoppage"}))},{default:e(()=>[r(n(o.$trans("transport.stoppage.stoppage")),1)]),_:1})]),_:1},8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(B,{appear:"",visibility:u.value},{default:e(()=>[a(G,{onRefresh:l[2]||(l[2]=t=>s(C).emit("listItems")),onHide:l[3]||(l[3]=t=>u.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(B,{appear:"",visibility:!0},{default:e(()=>[a(M,{header:v.headers,meta:v.meta,module:"transport.route",onRefresh:l[5]||(l[5]=t=>s(C).emit("listItems"))},{actionButton:e(()=>[s(c)("transport-route:create")?(d(),f(w,{key:0,onClick:l[4]||(l[4]=t=>s(m).push({name:"TransportRouteCreate"}))},{default:e(()=>[r(n(o.$trans("global.add",{attribute:o.$trans("transport.route.route")})),1)]),_:1})):b("",!0)]),default:e(()=>[(d(!0),L(E,null,x(v.data,t=>(d(),f(H,{key:t.uuid},{default:e(()=>[a(p,{name:"name"},{default:e(()=>[r(n(t.name)+" ",1),a(y,{block:""},{default:e(()=>[r(n(t.direction.label),1)]),_:2},1024)]),_:2},1024),a(p,{name:"vehicle"},{default:e(()=>{var $;return[r(n(($=t.vehicle)==null?void 0:$.name)+" ",1),a(y,{block:""},{default:e(()=>{var I;return[r(n((I=t.vehicle)==null?void 0:I.registrationNumber),1)]}),_:2},1024)]}),_:2},1024),a(p,{name:"time"},{default:e(()=>[r(n(t.arrivalStartsAt.formatted)+" ",1),a(y,{block:""},{default:e(()=>[r(n(t.departureStartsAt.formatted),1)]),_:2},1024)]),_:2},1024),a(p,{name:"maxCapacity"},{default:e(()=>[F("span",J,n(t.routePassengersCount),1),r("/"+n(t.maxCapacity),1)]),_:2},1024),a(p,{name:"routeStoppagesCount"},{default:e(()=>[r(n(t.routeStoppagesCount),1)]),_:2},1024),a(p,{name:"createdAt"},{default:e(()=>[r(n(t.createdAt.formatted),1)]),_:2},1024),a(p,{name:"action"},{default:e(()=>[a(V,null,{default:e(()=>[a(k,{icon:"fas fa-arrow-circle-right",onClick:$=>s(m).push({name:"TransportRouteShow",params:{uuid:t.uuid}})},{default:e(()=>[r(n(o.$trans("general.show")),1)]),_:2},1032,["onClick"]),s(c)("transport-route:edit")?(d(),f(k,{key:0,icon:"fas fa-edit",onClick:$=>s(m).push({name:"TransportRouteEdit",params:{uuid:t.uuid}})},{default:e(()=>[r(n(o.$trans("general.edit")),1)]),_:2},1032,["onClick"])):b("",!0),s(c)("transport-route:create")?(d(),f(k,{key:1,icon:"fas fa-copy",onClick:$=>s(m).push({name:"TransportRouteDuplicate",params:{uuid:t.uuid}})},{default:e(()=>[r(n(o.$trans("general.duplicate")),1)]),_:2},1032,["onClick"])):b("",!0),s(c)("transport-route:delete")?(d(),f(k,{key:2,icon:"fas fa-trash",onClick:$=>s(C).emit("deleteItem",{uuid:t.uuid})},{default:e(()=>[r(n(o.$trans("general.delete")),1)]),_:2},1032,["onClick"])):b("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{W as default};
