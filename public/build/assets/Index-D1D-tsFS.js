import{f as M,m as V,n as U,r as s,o as d,q as _,w as e,d as C,e as t,y as f,l as E,u as r,s as c,t as l,b as D,a as R,v as B,F as j,h as O,j as S}from"./app-DCfJDSeM.js";const q={class:"grid grid-cols-3 gap-6"},x={class:"col-span-3 sm:col-span-1"},z={class:"col-span-3 sm:col-span-1"},G={__name:"Filter",emits:["hide"],setup(I,{emit:v}){M();const $=v,b={codeNumber:"",startDate:"",endDate:""},u=V({...b}),w=V({isLoaded:!0});return U(async()=>{w.isLoaded=!0}),(p,a)=>{const F=s("BaseInput"),o=s("DatePicker"),i=s("FilterForm");return d(),_(i,{"init-form":b,form:u,multiple:[],onHide:a[3]||(a[3]=m=>$("hide"))},{default:e(()=>[C("div",q,[C("div",x,[t(F,{type:"text",modelValue:u.codeNumber,"onUpdate:modelValue":a[0]||(a[0]=m=>u.codeNumber=m),name:"codeNumber",label:p.$trans("recruitment.vacancy.props.code_number")},null,8,["modelValue","label"])]),C("div",z,[t(o,{start:u.startDate,"onUpdate:start":a[1]||(a[1]=m=>u.startDate=m),end:u.endDate,"onUpdate:end":a[2]||(a[2]=m=>u.endDate=m),name:"dateBetween",as:"range",label:p.$trans("general.date_between")},null,8,["start","end","label"])])])]),_:1},8,["form"])}}},J={class:"flex text-xs justify-between mr-4"},K={name:"RecruitmentVacancyList"},W=Object.assign(K,{setup(I){const v=O(),$=S("emitter");let b=["filter"];f("recruitment:config")&&b.push("config"),f("job-vacancy:create")&&b.unshift("create");let u=[];f("job-vacancy:export")&&(u=["print","pdf","excel"]);const w="recruitment/vacancy/",p=E(!1),a=V({}),F=o=>{Object.assign(a,o)};return(o,i)=>{const m=s("PageHeaderAction"),N=s("PageHeader"),h=s("ParentTransition"),g=s("DataCell"),k=s("FloatingMenuItem"),P=s("FloatingMenu"),A=s("DataRow"),H=s("BaseButton"),L=s("DataTable"),T=s("ListItem");return d(),_(T,{"init-url":w,"additional-query":{},onSetItems:F},{header:e(()=>[t(N,{title:o.$trans("recruitment.vacancy.vacancy"),navs:[{label:o.$trans("recruitment.recruitment"),path:"Recruitment"}]},{default:e(()=>[t(m,{url:"recruitment/vacancies/",name:"RecruitmentVacancy",title:o.$trans("recruitment.vacancy.vacancy"),actions:r(b),"dropdown-actions":r(u),"config-path":"RecruitmentConfig",onToggleFilter:i[0]||(i[0]=n=>p.value=!p.value)},null,8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[t(h,{appear:"",visibility:p.value},{default:e(()=>[t(G,{onRefresh:i[1]||(i[1]=n=>r($).emit("listItems")),onHide:i[2]||(i[2]=n=>p.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(h,{appear:"",visibility:!0},{default:e(()=>[t(L,{header:a.headers,meta:a.meta,module:"recruitment.vacancy",onRefresh:i[4]||(i[4]=n=>r($).emit("listItems"))},{actionButton:e(()=>[r(f)("job-vacancy:create")?(d(),_(H,{key:0,onClick:i[3]||(i[3]=n=>r(v).push({name:"RecruitmentVacancyCreate"}))},{default:e(()=>[c(l(o.$trans("global.add",{attribute:o.$trans("recruitment.vacancy.vacancy")})),1)]),_:1})):D("",!0)]),default:e(()=>[(d(!0),R(j,null,B(a.data,n=>(d(),_(A,{key:n.uuid},{default:e(()=>[t(g,{name:"codeNumber"},{default:e(()=>[c(l(n.codeNumber),1)]),_:2},1024),t(g,{name:"title"},{default:e(()=>[c(l(n.titleExcerpt),1)]),_:2},1024),t(g,{name:"records",table:""},{default:e(()=>[(d(!0),R(j,null,B(n.records,y=>(d(),R("div",J,[c(l(y.designation.name)+" ",1),C("div",null,l(y.numberOfPositions),1)]))),256))]),_:2},1024),t(g,{name:"lastApplicationDate"},{default:e(()=>[c(l(n.lastApplicationDate.formatted),1)]),_:2},1024),t(g,{name:"createdAt"},{default:e(()=>[c(l(n.createdAt.formatted),1)]),_:2},1024),t(g,{name:"action"},{default:e(()=>[t(P,null,{default:e(()=>[t(k,{icon:"fas fa-arrow-circle-right",onClick:y=>r(v).push({name:"RecruitmentVacancyShow",params:{uuid:n.uuid}})},{default:e(()=>[c(l(o.$trans("general.show")),1)]),_:2},1032,["onClick"]),r(f)("job-vacancy:edit")?(d(),_(k,{key:0,icon:"fas fa-edit",onClick:y=>r(v).push({name:"RecruitmentVacancyEdit",params:{uuid:n.uuid}})},{default:e(()=>[c(l(o.$trans("general.edit")),1)]),_:2},1032,["onClick"])):D("",!0),r(f)("job-vacancy:create")?(d(),_(k,{key:1,icon:"fas fa-copy",onClick:y=>r(v).push({name:"RecruitmentVacancyDuplicate",params:{uuid:n.uuid}})},{default:e(()=>[c(l(o.$trans("general.duplicate")),1)]),_:2},1032,["onClick"])):D("",!0),r(f)("job-vacancy:delete")?(d(),_(k,{key:2,icon:"fas fa-trash",onClick:y=>r($).emit("deleteItem",{uuid:n.uuid})},{default:e(()=>[c(l(o.$trans("general.delete")),1)]),_:2},1032,["onClick"])):D("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{W as default};
