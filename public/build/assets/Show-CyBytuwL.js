import{m as F,a as S,e as a,w as t,u as r,F as C,r as o,o as c,q as H,s as n,t as l,d as m,b as P,i as T,f as V,h as y}from"./app-DCfJDSeM.js";const N={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},I=["innerHTML"],D={name:"AssetBuildingFloorShow"},j=Object.assign(D,{setup(L){T();const d=V(),p=y(),b={},g="asset/building/floor/",s=F({...b}),f=e=>{Object.assign(s,e)};return(e,u)=>{const _=o("PageHeaderAction"),B=o("PageHeader"),i=o("BaseDataView"),$=o("BaseButton"),h=o("ShowButton"),A=o("BaseCard"),w=o("ShowItem"),k=o("ParentTransition");return c(),S(C,null,[a(B,{title:e.$trans(r(d).meta.trans,{attribute:e.$trans(r(d).meta.label)}),navs:[{label:e.$trans("asset.asset"),path:"Asset"},{label:e.$trans("asset.building.building"),path:"AssetBuilding"},{label:e.$trans("asset.building.floor.floor"),path:"AssetBuildingFloorList"}]},{default:t(()=>[a(_,{name:"AssetBuildingFloor",title:e.$trans("asset.building.floor.floor"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),a(k,{appear:"",visibility:!0},{default:t(()=>[a(w,{"init-url":g,uuid:r(d).params.uuid,onSetItem:f,onRedirectTo:u[1]||(u[1]=v=>r(p).push({name:"AssetBuildingFloor"}))},{default:t(()=>[s.uuid?(c(),H(A,{key:0},{title:t(()=>[n(l(s.name),1)]),footer:t(()=>[a(h,null,{default:t(()=>[a($,{design:"primary",onClick:u[0]||(u[0]=v=>r(p).push({name:"AssetBuildingFloorEdit",params:{uuid:s.uuid}}))},{default:t(()=>[n(l(e.$trans("general.edit")),1)]),_:1})]),_:1})]),default:t(()=>[m("dl",N,[a(i,{label:e.$trans("asset.building.floor.props.name")},{default:t(()=>[n(l(s.name),1)]),_:1},8,["label"]),a(i,{label:e.$trans("asset.building.floor.props.alias")},{default:t(()=>[n(l(s.alias),1)]),_:1},8,["label"]),a(i,{label:e.$trans("asset.building.block.block")},{default:t(()=>[n(l(s.blockName),1)]),_:1},8,["label"]),a(i,{class:"col-span-1 sm:col-span-2",label:e.$trans("asset.building.floor.props.description")},{default:t(()=>[m("div",{innerHTML:s.description},null,8,I)]),_:1},8,["label"]),a(i,{label:e.$trans("general.created_at")},{default:t(()=>[n(l(s.createdAt.formatted),1)]),_:1},8,["label"]),a(i,{label:e.$trans("general.updated_at")},{default:t(()=>[n(l(s.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):P("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{j as default};
