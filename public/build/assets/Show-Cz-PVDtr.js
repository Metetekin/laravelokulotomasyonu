import{m as P,a as b,e as a,w as t,u as d,F as $,r as i,o as l,q as c,s as n,t as s,y as T,b as m,d as k,v as I,i as H,f as M,h as D,aI as j}from"./app-DCfJDSeM.js";const q={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},E={class:"flex space-x-2"},F=["src"],O={name:"ReceptionVisitorLogShow"},z=Object.assign(O,{setup(Q){H();const _=M(),v=D(),B={},w="reception/visitorLog/",e=P({...B}),V=o=>{Object.assign(e,o)},h=o=>{let u="/app/reception/visitor-logs/"+o.uuid+"/export",f={};window.open(j(u,f),"_blank").focus()};return(o,u)=>{const f=i("PageHeaderAction"),L=i("PageHeader"),r=i("BaseDataView"),g=i("TextMuted"),R=i("ListMedia"),y=i("BaseButton"),S=i("ShowButton"),N=i("BaseCard"),A=i("ShowItem"),C=i("ParentTransition");return l(),b($,null,[a(L,{title:o.$trans(d(_).meta.trans,{attribute:o.$trans(d(_).meta.label)}),navs:[{label:o.$trans("reception.reception"),path:"Reception"},{label:o.$trans("reception.visitor_log.visitor_log"),path:"ReceptionVisitorLog"}]},{default:t(()=>[a(f,{name:"ReceptionVisitorLog",title:o.$trans("reception.visitor_log.visitor_log"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),a(C,{appear:"",visibility:!0},{default:t(()=>[a(A,{"init-url":w,uuid:d(_).params.uuid,"module-uuid":d(_).params.muuid,onSetItem:V,onRedirectTo:u[2]||(u[2]=p=>d(v).push({name:"ReceptionVisitorLog",params:{uuid:e.uuid}}))},{default:t(()=>[e.uuid?(l(),c(N,{key:0},{title:t(()=>[n(s(e.codeNumber),1)]),footer:t(()=>[a(S,null,{default:t(()=>[a(y,{design:"success",onClick:u[0]||(u[0]=p=>h(e))},{default:t(()=>[n(s(o.$trans("global.print",{attribute:o.$trans("reception.visitor_log.pass")})),1)]),_:1}),d(T)("visitor-log:edit")?(l(),c(y,{key:0,design:"primary",onClick:u[1]||(u[1]=p=>d(v).push({name:"ReceptionVisitorLogEdit",params:{uuid:e.uuid}}))},{default:t(()=>[n(s(o.$trans("general.edit")),1)]),_:1})):m("",!0)]),_:1})]),default:t(()=>[k("dl",q,[a(r,{label:o.$trans("reception.visitor_log.props.type")},{default:t(()=>[n(s(e.type.label),1)]),_:1},8,["label"]),a(r,{label:o.$trans("reception.visitor_log.props.purpose")},{default:t(()=>[n(s(e.purpose.name),1)]),_:1},8,["label"]),a(r,{label:o.$trans("reception.visitor_log.props.entry_at")},{default:t(()=>[n(s(e.entryAt.formatted)+" ",1),e.exitAt.value?(l(),c(g,{key:0,block:""},{default:t(()=>[n(s(e.exitAt.formatted),1)]),_:1})):m("",!0)]),_:1},8,["label"]),a(r,{label:o.$trans("reception.visitor_log.props.name")},{default:t(()=>[n(s(e.name)+" ("+s(e.count)+") ",1),e.companyName?(l(),c(g,{key:0,block:""},{default:t(()=>[n(s(e.companyName),1)]),_:1})):m("",!0),a(g,{block:""},{default:t(()=>[n(s(e.contactNumber),1)]),_:1})]),_:1},8,["label"]),a(r,{label:o.$trans("reception.visitor_log.props.whom_to_meet")},{default:t(()=>{var p;return[n(s(((p=e.employee)==null?void 0:p.name)||"-")+" ",1),e.employee?(l(),c(g,{key:0,block:""},{default:t(()=>[n(s(e.employee.designation),1)]),_:1})):m("",!0)]}),_:1},8,["label"]),a(r,{class:"col-span-1 sm:col-span-2",label:o.$trans("reception.visitor_log.props.remarks")},{default:t(()=>[n(s(e.remarks),1)]),_:1},8,["label"]),e.images.length?(l(),c(r,{key:0,class:"col-span-1 sm:col-span-2"},{default:t(()=>[k("div",E,[(l(!0),b($,null,I(e.images,p=>(l(),b("img",{src:p.url,class:"max-w-1/4"},null,8,F))),256))])]),_:1})):m("",!0),a(r,{class:"col-span-1 sm:col-span-2"},{default:t(()=>[a(R,{media:e.media,url:`/app/reception/visitor-logs/${e.uuid}/`},null,8,["media","url"])]),_:1}),a(r,{label:o.$trans("general.created_at")},{default:t(()=>[n(s(e.createdAt.formatted),1)]),_:1},8,["label"]),a(r,{label:o.$trans("general.updated_at")},{default:t(()=>[n(s(e.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):m("",!0)]),_:1},8,["uuid","module-uuid"])]),_:1})],64)}}});export{z as default};
