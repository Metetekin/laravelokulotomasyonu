import{m as k,a as H,e as a,w as t,u as s,F as P,r as n,o as p,q as m,s as o,t as l,y as V,b as _,d as f,i as A,f as I,h as N}from"./app-DCfJDSeM.js";const D={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},L=["innerHTML"],R={name:"TransportCircleShow"},F=Object.assign(R,{setup(j){A();const u=I(),d=N(),g={},b="transport/circle/",r=k({...g}),B=e=>{Object.assign(r,e)};return(e,i)=>{const C=n("PageHeaderAction"),T=n("PageHeader"),c=n("BaseDataView"),$=n("BaseButton"),h=n("ShowButton"),w=n("BaseCard"),v=n("ShowItem"),S=n("ParentTransition");return p(),H(P,null,[a(T,{title:e.$trans(s(u).meta.trans,{attribute:e.$trans(s(u).meta.label)}),navs:[{label:e.$trans("transport.transport"),path:"Transport"},{label:e.$trans("transport.circle.circle"),path:"TransportCircleList"}]},{default:t(()=>[a(C,{name:"TransportCircle",title:e.$trans("transport.circle.circle"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),a(S,{appear:"",visibility:!0},{default:t(()=>[a(v,{"init-url":b,uuid:s(u).params.uuid,onSetItem:B,onRedirectTo:i[1]||(i[1]=y=>s(d).push({name:"TransportCircle"}))},{default:t(()=>[r.uuid?(p(),m(w,{key:0},{title:t(()=>[o(l(r.name),1)]),footer:t(()=>[a(h,null,{default:t(()=>[s(V)("transport-circle:edit")?(p(),m($,{key:0,design:"primary",onClick:i[0]||(i[0]=y=>s(d).push({name:"TransportCircleEdit",params:{uuid:r.uuid}}))},{default:t(()=>[o(l(e.$trans("general.edit")),1)]),_:1})):_("",!0)]),_:1})]),default:t(()=>[f("dl",D,[a(c,{label:e.$trans("transport.circle.props.name")},{default:t(()=>[o(l(r.name),1)]),_:1},8,["label"]),a(c,{class:"col-span-1 sm:col-span-2",label:e.$trans("transport.circle.props.description")},{default:t(()=>[f("div",{innerHTML:r.description},null,8,L)]),_:1},8,["label"]),a(c,{label:e.$trans("general.created_at")},{default:t(()=>[o(l(r.createdAt.formatted),1)]),_:1},8,["label"]),a(c,{label:e.$trans("general.updated_at")},{default:t(()=>[o(l(r.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):_("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{F as default};
