import{m as j,a as D,e as a,w as e,u as t,F as h,j as M,r as o,o as d,q as m,d as p,s,t as c,b,v as N,i as $,f as F,h as O}from"./app-DCfJDSeM.js";const q={class:"space-y-2"},E={class:"grid grid-cols-1 gap-x-4 gap-y-8 px-4 pt-4 sm:grid-cols-2"},U=["innerHTML"],z={name:"AcademicDivisionShow"},K=Object.assign(z,{setup(G){$();const _=F(),V=O(),i=M("$trans"),k={},w="academic/division/",A=[{key:"course",label:i("academic.course.course"),visibility:!0},{key:"action",label:"",visibility:!0}],n=j({...k}),L=g=>{Object.assign(n,g)};return(g,u)=>{const T=o("PageHeaderAction"),C=o("PageHeader"),v=o("TextMuted"),r=o("ListItemView"),x=o("ListContainerVertical"),f=o("BaseCard"),y=o("DataCell"),B=o("DataRow"),S=o("SimpleTable"),H=o("BaseDataView"),I=o("DetailLayoutVertical"),P=o("ShowItem"),R=o("ParentTransition");return d(),D(h,null,[a(C,{title:t(i)(t(_).meta.trans,{attribute:t(i)(t(_).meta.label)}),navs:[{label:t(i)("academic.academic"),path:"Academic"},{label:t(i)("academic.division.division"),path:"AcademicDivisionList"}]},{default:e(()=>[a(T,{name:"AcademicDivision",title:t(i)("academic.division.division"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),a(R,{appear:"",visibility:!0},{default:e(()=>[a(P,{"init-url":w,uuid:t(_).params.uuid,onSetItem:L,onRedirectTo:u[0]||(u[0]=l=>t(V).push({name:"AcademicDivision"}))},{default:e(()=>[n.uuid?(d(),m(I,{key:0},{detail:e(()=>[p("div",q,[a(f,{"no-padding":"","no-content-padding":""},{title:e(()=>[s(c(t(i)("academic.division.division")),1)]),action:e(()=>u[1]||(u[1]=[])),default:e(()=>[a(x,null,{default:e(()=>[a(r,{label:t(i)("academic.division.props.name")},{default:e(()=>[s(c(n.name)+" ",1),n.pgAccount?(d(),m(v,{key:0,block:""},{default:e(()=>[s(c(n.pgAccount),1)]),_:1})):b("",!0)]),_:1},8,["label"]),a(r,{label:t(i)("academic.division.props.code")},{default:e(()=>[s(c(n.code)+" ",1),a(v,{block:""},{default:e(()=>[s(c(n.shortcode),1)]),_:1})]),_:1},8,["label"]),a(r,{label:t(i)("academic.program.program")},{default:e(()=>{var l;return[s(c(((l=n==null?void 0:n.program)==null?void 0:l.name)||"-"),1)]}),_:1},8,["label"]),a(r,{label:t(i)("general.created_at")},{default:e(()=>[s(c(n.createdAt.formatted),1)]),_:1},8,["label"]),a(r,{label:t(i)("general.updated_at")},{default:e(()=>[s(c(n.updatedAt.formatted),1)]),_:1},8,["label"])]),_:1})]),_:1})])]),default:e(()=>[a(f,{"no-padding":"","no-content-padding":"","bottom-content-padding":""},{title:e(()=>[s(c(t(i)("global.detail",{attribute:t(i)("academic.division.division")})),1)]),default:e(()=>[n.courses.length>0?(d(),m(S,{key:0,header:A},{default:e(()=>[(d(!0),D(h,null,N(n.courses,l=>(d(),m(B,{key:l.uuid},{default:e(()=>[a(y,{name:"course"},{default:e(()=>[s(c(l.name),1)]),_:2},1024),a(y,{name:"action"})]),_:2},1024))),128))]),_:1})):b("",!0),p("dl",E,[a(H,{class:"col-span-1 sm:col-span-2",label:t(i)("academic.division.props.description")},{default:e(()=>[p("div",{innerHTML:n.description},null,8,U)]),_:1},8,["label"])])]),_:1})]),_:1})):b("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{K as default};
