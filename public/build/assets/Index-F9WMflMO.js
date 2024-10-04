import{f as H,m as R,n as E,r,o as p,q as f,w as e,d as _,e as a,s as l,t as u,b as $,y as D,l as W,u as c,a as z,v as G,F as J,h as K,j as Q}from"./app-DCfJDSeM.js";const X={class:"grid grid-cols-3 gap-6"},Y={class:"col-span-3 sm:col-span-1"},Z={class:"col-span-3 sm:col-span-1"},x={class:"col-span-3 sm:col-span-1"},ee={class:"col-span-3 sm:col-span-1"},te={class:"col-span-3 sm:col-span-1"},ae={class:"col-span-3 sm:col-span-1"},ne={class:"col-span-3 sm:col-span-1"},se={class:"col-span-3 sm:col-span-1"},oe={__name:"Filter",props:{preRequisites:{type:Object,default(){return{}}}},emits:["hide"],setup(h,{emit:N}){const v=H(),S=N,B={codeNumber:"",applicationNumber:"",name:"",guardianName:"",courses:[],startDate:"",endDate:"",type:""},o=R({...B});R({});const y=R({isLoaded:!v.query.courses});return E(async()=>{y.courses=v.query.courses?v.query.courses.split(","):[],y.isLoaded=!0}),(d,n)=>{const k=r("BaseInput"),F=r("BaseSelectSearch"),i=r("DatePicker"),m=r("BaseSelect"),q=r("FilterForm");return p(),f(q,{"init-form":B,form:o,multiple:["courses"],onHide:n[9]||(n[9]=s=>S("hide"))},{default:e(()=>[_("div",X,[_("div",Y,[a(k,{type:"text",modelValue:o.codeNumber,"onUpdate:modelValue":n[0]||(n[0]=s=>o.codeNumber=s),name:"codeNumber",label:d.$trans("student.registration.props.code_number")},null,8,["modelValue","label"])]),_("div",Z,[a(k,{type:"text",modelValue:o.applicationNumber,"onUpdate:modelValue":n[1]||(n[1]=s=>o.applicationNumber=s),name:"applicationNumber",label:d.$trans("student.online_registration.props.number")},null,8,["modelValue","label"])]),_("div",x,[a(k,{type:"text",modelValue:o.name,"onUpdate:modelValue":n[2]||(n[2]=s=>o.name=s),name:"name",label:d.$trans("contact.props.name")},null,8,["modelValue","label"])]),_("div",ee,[a(k,{type:"text",modelValue:o.guardianName,"onUpdate:modelValue":n[3]||(n[3]=s=>o.guardianName=s),name:"guardianName",label:d.$trans("guardian.props.name")},null,8,["modelValue","label"])]),_("div",te,[y.isLoaded?(p(),f(F,{key:0,multiple:"",name:"courses",label:d.$trans("global.select",{attribute:d.$trans("academic.course.course")}),modelValue:o.courses,"onUpdate:modelValue":n[4]||(n[4]=s=>o.courses=s),"value-prop":"uuid","init-search":y.courses,"search-action":"academic/course/list"},{selectedOption:e(s=>[l(u(s.value.nameWithTerm),1)]),listOption:e(s=>[l(u(s.option.nameWithTerm),1)]),_:1},8,["label","modelValue","init-search"])):$("",!0)]),_("div",ae,[a(i,{start:o.startDate,"onUpdate:start":n[5]||(n[5]=s=>o.startDate=s),end:o.endDate,"onUpdate:end":n[6]||(n[6]=s=>o.endDate=s),name:"dateBetween",as:"range",label:d.$trans("general.date_between")},null,8,["start","end","label"])]),_("div",ne,[a(m,{modelValue:o.status,"onUpdate:modelValue":n[7]||(n[7]=s=>o.status=s),name:"status",label:d.$trans("student.registration.props.status"),options:h.preRequisites.statuses},null,8,["modelValue","label","options"])]),_("div",se,[a(m,{modelValue:o.type,"onUpdate:modelValue":n[8]||(n[8]=s=>o.type=s),name:"type",label:d.$trans("student.registration.props.type"),options:h.preRequisites.types},null,8,["modelValue","label","options"])])])]),_:1},8,["form"])}}},le={name:"StudentRegistrationList"},re=Object.assign(le,{setup(h){const N=K(),v=Q("emitter");let S=["filter"];D("registration:create")&&S.unshift("create");let B=[];D("registration:export")&&(B=["print","pdf","excel"]);const o="student/registration/",y=R({statuses:[]}),d=W(!1),n=R({}),k=i=>{Object.assign(n,i)},F=i=>{Object.assign(y,i)};return(i,m)=>{const q=r("PageHeaderAction"),s=r("PageHeader"),C=r("ParentTransition"),V=r("TextMuted"),I=r("BaseBadge"),b=r("DataCell"),w=r("FloatingMenuItem"),O=r("FloatingMenu"),L=r("DataRow"),M=r("BaseButton"),j=r("DataTable"),A=r("ListItem");return p(),f(A,{"init-url":o,"pre-requisites":!0,onSetPreRequisites:F,onSetItems:k},{header:e(()=>[a(s,{title:i.$trans("student.registration.registration"),navs:[{label:i.$trans("student.student"),path:"Student"}]},{default:e(()=>[a(q,{url:"student/registrations/",name:"StudentRegistration",title:i.$trans("student.registration.registration"),actions:c(S),"dropdown-actions":c(B),onToggleFilter:m[0]||(m[0]=t=>d.value=!d.value)},null,8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(C,{appear:"",visibility:d.value},{default:e(()=>[a(oe,{onRefresh:m[1]||(m[1]=t=>c(v).emit("listItems")),"pre-requisites":y,onHide:m[2]||(m[2]=t=>d.value=!1)},null,8,["pre-requisites"])]),_:1},8,["visibility"])]),default:e(()=>[a(C,{appear:"",visibility:!0},{default:e(()=>[a(j,{header:n.headers,meta:n.meta,module:"student.registration",onRefresh:m[4]||(m[4]=t=>c(v).emit("listItems"))},{actionButton:e(()=>[c(D)("registration:create")?(p(),f(M,{key:0,onClick:m[3]||(m[3]=t=>c(N).push({name:"StudentRegistrationCreate"}))},{default:e(()=>[l(u(i.$trans("global.add",{attribute:i.$trans("student.registration.registration")})),1)]),_:1})):$("",!0)]),default:e(()=>[(p(!0),z(J,null,G(n.data,t=>(p(),f(L,{key:t.uuid},{default:e(()=>[a(b,{name:"codeNumber"},{default:e(()=>[l(u(t.codeNumber)+" ",1),a(V,{block:""},{default:e(()=>[l(u(t.period.name),1)]),_:2},1024),a(V,{block:""},{default:e(()=>[l(u(t.admissionDate.formatted),1)]),_:2},1024),t.isOnline?(p(),f(I,{key:0},{default:e(()=>[l(u(i.$trans("student.registration.online")),1)]),_:1})):$("",!0)]),_:2},1024),a(b,{name:"name"},{default:e(()=>[l(u(t.contact.name)+" ",1),a(V,{block:""},{default:e(()=>[l(u(t.contact.contactNumber),1)]),_:2},1024)]),_:2},1024),a(b,{name:"guardianName"},{default:e(()=>{var g,T;return[l(u(((T=(g=t.contact.guardian)==null?void 0:g.contact)==null?void 0:T.name)||"-")+" ",1),a(V,{block:""},{default:e(()=>{var P,U;return[l(u(((U=(P=t.contact.guardian)==null?void 0:P.contact)==null?void 0:U.contactNumber)||""),1)]}),_:2},1024)]}),_:2},1024),a(b,{name:"birthDate"},{default:e(()=>[l(u(t.contact.birthDate.formatted),1)]),_:2},1024),a(b,{name:"course"},{default:e(()=>{var g;return[l(u(((g=t.course)==null?void 0:g.nameWithTerm)||"-")+" ",1),t.batchName?(p(),f(V,{key:0,block:""},{default:e(()=>[l(u(t.batchName),1)]),_:2},1024)):$("",!0)]}),_:2},1024),a(b,{name:"status"},{default:e(()=>[a(I,{design:t.status.color},{default:e(()=>[l(u(t.status.label),1)]),_:2},1032,["design"])]),_:2},1024),a(b,{name:"date"},{default:e(()=>[l(u(t.date.formatted)+" ",1),t.isOnline?(p(),f(V,{key:0,block:""},{default:e(()=>[l(u(t.applicationNumber),1)]),_:2},1024)):$("",!0)]),_:2},1024),a(b,{name:"createdAt"},{default:e(()=>[l(u(t.createdAt.formatted),1)]),_:2},1024),a(b,{name:"action"},{default:e(()=>[a(O,null,{default:e(()=>[a(w,{icon:"fas fa-arrow-circle-right",onClick:g=>c(N).push({name:"StudentRegistrationShow",params:{uuid:t.uuid}})},{default:e(()=>[l(u(i.$trans("general.show")),1)]),_:2},1032,["onClick"]),c(D)("registration:edit")&&t.isEditable?(p(),f(w,{key:0,icon:"fas fa-edit",onClick:g=>c(N).push({name:"StudentRegistrationEdit",params:{uuid:t.uuid}})},{default:e(()=>[l(u(i.$trans("general.edit")),1)]),_:2},1032,["onClick"])):$("",!0),c(D)("registration:delete")&&t.isEditable?(p(),f(w,{key:1,icon:"fas fa-trash",onClick:g=>c(v).emit("deleteItem",{uuid:t.uuid})},{default:e(()=>[l(u(i.$trans("general.delete")),1)]),_:2},1032,["onClick"])):$("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{re as default};
