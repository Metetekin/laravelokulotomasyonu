import{f as A,m as B,n as W,r,o as g,q as f,w as t,d as c,e as s,b as $,y as D,l as P,u as p,s as y,t as m,a as U,v as L,F as N,h as X,j as Y}from"./app-DCfJDSeM.js";const Z={class:"grid grid-cols-3 gap-6"},x={class:"col-span-3 sm:col-span-1"},ee={class:"col-span-3 sm:col-span-1"},te={class:"col-span-3 sm:col-span-1"},ae={class:"col-span-3 sm:col-span-1"},ne={class:"col-span-3 sm:col-span-1"},se={class:"col-span-3 sm:col-span-1"},oe={class:"col-span-3 sm:col-span-1"},le={class:"col-span-3 sm:col-span-1"},ie={class:"col-span-3 sm:col-span-1"},re={__name:"Filter",props:{preRequisites:{type:Object,default(){return{}}}},emits:["hide"],setup(F,{emit:k}){const v=A(),b=k,V=F,w={codeNumber:"",name:"",joiningStartDate:"",joiningEndDate:"",leavingStartDate:"",leavingEndDate:"",department:"",designation:"",employmentStatus:"",types:[],status:"active"},o=B({...w}),S=B({types:V.preRequisites.types,statuses:V.preRequisites.statuses}),u=B({department:"",designation:"",employmentStatus:"",isLoaded:!(v.query.department||v.query.designation||v.query.employmentStatus)});return W(async()=>{u.department=v.query.department,u.designation=v.query.designation,u.employmentStatus=v.query.employmentStatus,u.isLoaded=!0}),(l,n)=>{const q=r("BaseInput"),C=r("DatePicker"),d=r("BaseSelectSearch"),a=r("BaseSelect"),j=r("FilterForm");return g(),f(j,{"init-form":w,form:o,multiple:["types"],onHide:n[11]||(n[11]=i=>b("hide"))},{default:t(()=>[c("div",Z,[c("div",x,[s(q,{type:"text",modelValue:o.codeNumber,"onUpdate:modelValue":n[0]||(n[0]=i=>o.codeNumber=i),name:"codeNumber",label:l.$trans("employee.props.code_number")},null,8,["modelValue","label"])]),c("div",ee,[s(q,{type:"text",modelValue:o.name,"onUpdate:modelValue":n[1]||(n[1]=i=>o.name=i),name:"name",label:l.$trans("contact.props.name")},null,8,["modelValue","label"])]),c("div",te,[s(C,{start:o.joiningStartDate,"onUpdate:start":n[2]||(n[2]=i=>o.joiningStartDate=i),end:o.joiningEndDate,"onUpdate:end":n[3]||(n[3]=i=>o.joiningEndDate=i),name:"joiningDateBetween",as:"range",label:l.$trans("global.date_between",{attribute:l.$trans("employee.props.joining_date")})},null,8,["start","end","label"])]),c("div",ae,[s(C,{start:o.leavingStartDate,"onUpdate:start":n[4]||(n[4]=i=>o.leavingStartDate=i),end:o.leavingEndDate,"onUpdate:end":n[5]||(n[5]=i=>o.leavingEndDate=i),name:"leavingDateBetween",as:"range",label:l.$trans("global.date_between",{attribute:l.$trans("employee.props.leaving_date")})},null,8,["start","end","label"])]),c("div",ne,[u.isLoaded?(g(),f(d,{key:0,name:"department",label:l.$trans("global.select",{attribute:l.$trans("employee.department.department")}),modelValue:o.department,"onUpdate:modelValue":n[6]||(n[6]=i=>o.department=i),"value-prop":"uuid","init-search":u.department,"search-action":"employee/department/list"},null,8,["label","modelValue","init-search"])):$("",!0)]),c("div",se,[u.isLoaded?(g(),f(d,{key:0,name:"designation",label:l.$trans("global.select",{attribute:l.$trans("employee.designation.designation")}),modelValue:o.designation,"onUpdate:modelValue":n[7]||(n[7]=i=>o.designation=i),"value-prop":"uuid","init-search":u.designation,"search-action":"employee/designation/list"},null,8,["label","modelValue","init-search"])):$("",!0)]),c("div",oe,[u.isLoaded?(g(),f(d,{key:0,name:"employmentStatus",label:l.$trans("global.select",{attribute:l.$trans("employee.employment_status.employment_status")}),modelValue:o.employmentStatus,"onUpdate:modelValue":n[8]||(n[8]=i=>o.employmentStatus=i),"value-prop":"uuid","init-search":u.employmentStatus,"search-action":"option/list","additional-search-query":{type:"employment_status"}},null,8,["label","modelValue","init-search"])):$("",!0)]),c("div",le,[s(a,{multiple:"",modelValue:o.types,"onUpdate:modelValue":n[9]||(n[9]=i=>o.types=i),name:"types",label:l.$trans("employee.type"),options:S.types},null,8,["modelValue","label","options"])]),c("div",ie,[s(a,{modelValue:o.status,"onUpdate:modelValue":n[10]||(n[10]=i=>o.status=i),name:"status",label:l.$trans("employee.status"),options:S.statuses},null,8,["modelValue","label","options"])])])]),_:1},8,["form"])}}},de={class:"grid grid-cols-1 gap-4 px-4 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},me={class:""},ue={class:"text-xs text-gray-500"},pe={class:"truncate text-sm text-gray-500"},ce={class:"text-sm text-gray-500"},ge={name:"EmployeeList"},fe=Object.assign(ge,{setup(F){const k=A(),v=X(),b=Y("emitter");let V=["filter","view"];D("employee:create")&&V.unshift("create"),D("employee:config")&&V.unshift("config");let w=[];D("employee:export")&&(w=["print","pdf","excel"]),D("employee:create")&&w.unshift("import");const o="employee/",S=P(!1),u=P(!1),l=B({}),n=B({statuses:[]}),q=d=>{Object.assign(l,d)},C=d=>{Object.assign(n,d)};return(d,a)=>{const j=r("PageHeaderAction"),i=r("PageHeader"),H=r("BaseAlert"),T=r("BaseImport"),I=r("ParentTransition"),M=r("CardView"),O=r("Pagination"),R=r("BaseButton"),z=r("CardList"),_=r("DataCell"),E=r("FloatingMenuItem"),G=r("FloatingMenu"),J=r("DataRow"),K=r("DataTable"),Q=r("ListItem");return g(),f(Q,{"pre-requisites":!0,onSetPreRequisites:C,"init-url":o,onSetItems:q},{header:t(()=>[s(i,{title:d.$trans("employee.employee"),navs:[]},{default:t(()=>[s(j,{url:"employees/",name:"Employee",title:d.$trans("employee.employee"),actions:p(V),"dropdown-actions":p(w),headers:l.headers,onToggleFilter:a[0]||(a[0]=e=>S.value=!S.value),onToggleImport:a[1]||(a[1]=e=>u.value=!u.value),onRefresh:a[2]||(a[2]=e=>p(b).emit("listItems"))},null,8,["title","actions","dropdown-actions","headers"])]),_:1},8,["title"])]),import:t(()=>[s(I,{appear:"",visibility:u.value},{default:t(()=>[s(T,{path:"employees/import",onCancelled:a[3]||(a[3]=e=>u.value=!1),onHide:a[4]||(a[4]=e=>u.value=!1),onCompleted:a[5]||(a[5]=e=>p(b).emit("listItems"))},{header:t(()=>[s(H,{size:"xs",design:"info"},{default:t(()=>[y(m(d.$trans("general.import_info")),1)]),_:1})]),option:t(()=>a[12]||(a[12]=[])),_:1})]),_:1},8,["visibility"])]),filter:t(()=>[s(I,{appear:"",visibility:S.value},{default:t(()=>[s(re,{"pre-requisites":n,onRefresh:a[6]||(a[6]=e=>p(b).emit("listItems")),onHide:a[7]||(a[7]=e=>S.value=!1)},null,8,["pre-requisites"])]),_:1},8,["visibility"])]),default:t(()=>[p(k).query.view!="list"?(g(),f(I,{key:0,appear:"",visibility:!0},{default:t(()=>[s(z,{header:l.headers,meta:l.meta,module:"employee"},{actionButton:t(()=>[p(D)("employee:create")?(g(),f(R,{key:0,onClick:a[9]||(a[9]=e=>p(v).push({name:"EmployeeCreate"}))},{default:t(()=>[y(m(d.$trans("global.add",{attribute:d.$trans("employee.employee")})),1)]),_:1})):$("",!0)]),default:t(()=>[c("div",de,[(g(!0),U(N,null,L(l.data,e=>(g(),f(M,{key:e.uuid,"img-src":e.photo,path:{name:"EmployeeShow",params:{uuid:e.uuid}}},{title:t(()=>[y(m(e.name)+" ",1),c("span",me,"("+m(e.codeNumber)+")",1)]),default:t(()=>{var h;return[c("p",ue,m((h=e.age)==null?void 0:h.short),1),c("p",pe,m(e.designation),1),c("p",ce,m(e.period),1)]}),_:2},1032,["img-src","path"]))),128))]),c("div",null,[s(O,{"card-view":"",meta:l.meta,onRefresh:a[8]||(a[8]=e=>p(b).emit("listItems"))},null,8,["meta"])])]),_:1},8,["header","meta"])]),_:1})):$("",!0),p(k).query.view=="list"?(g(),f(I,{key:1,appear:"",visibility:!0},{default:t(()=>[s(K,{header:l.headers,meta:l.meta,module:"employee",onRefresh:a[11]||(a[11]=e=>p(b).emit("listItems"))},{actionButton:t(()=>[p(D)("employee:create")?(g(),f(R,{key:0,onClick:a[10]||(a[10]=e=>p(v).push({name:"EmployeeCreate"}))},{default:t(()=>[y(m(d.$trans("global.add",{attribute:d.$trans("employee.employee")})),1)]),_:1})):$("",!0)]),default:t(()=>[(g(!0),U(N,null,L(l.data,e=>(g(),f(J,{key:e.uuid},{default:t(()=>[s(_,{name:"codeNumber"},{default:t(()=>[y(m(e.codeNumber),1)]),_:2},1024),s(_,{name:"name"},{default:t(()=>[y(m(e.name),1)]),_:2},1024),s(_,{name:"joiningDate"},{default:t(()=>[y(m(e.joiningDate.formatted),1)]),_:2},1024),s(_,{name:"employmentStatus"},{default:t(()=>[y(m(e.employmentStatus),1)]),_:2},1024),s(_,{name:"department"},{default:t(()=>[y(m(e.department),1)]),_:2},1024),s(_,{name:"designation"},{default:t(()=>[y(m(e.designation),1)]),_:2},1024),s(_,{name:"createdAt"},{default:t(()=>[y(m(e.createdAt.formatted),1)]),_:2},1024),s(_,{name:"action"},{default:t(()=>[s(G,null,{default:t(()=>[s(E,{icon:"fas fa-arrow-circle-right",onClick:h=>p(v).push({name:"EmployeeShow",params:{uuid:e.uuid}})},{default:t(()=>[y(m(d.$trans("general.show")),1)]),_:2},1032,["onClick"]),p(D)("employee:delete")&&!e.self&&!e.isDefault?(g(),f(E,{key:0,icon:"fas fa-trash",onClick:h=>p(b).emit("deleteItem",{uuid:e.uuid})},{default:t(()=>[y(m(d.$trans("general.delete")),1)]),_:2},1032,["onClick"])):$("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})):$("",!0)]),_:1})}}});export{fe as default};
