import{f as P,m as B,n as M,r as o,o as f,q as v,w as e,d as h,s as p,t as s,b,e as a,y as g,l as O,u as d,a as F,v as U,F as w,h as j,j as z}from"./app-DCfJDSeM.js";import{_ as G}from"./ModuleDropdown-DnYRB0M_.js";const J={class:"grid grid-cols-3 gap-6"},K={class:"col-span-3 sm:col-span-1"},Q={class:"col-span-3 sm:col-span-1"},R={class:"col-span-3 sm:col-span-1"},W={__name:"Filter",emits:["hide"],setup(V,{emit:$}){const c=P(),k=$,D={employees:[],leaveTypes:[],startDate:"",endDate:""},u=B({...D}),r=B({employees:[],leaveTypes:[],isLoaded:!(c.query.employees||c.query.leaveTypes)});return M(async()=>{r.employees=c.query.employees?c.query.employees.split(","):[],r.leaveTypes=c.query.leaveTypes?c.query.leaveTypes.split(","):[],r.isLoaded=!0}),(y,i)=>{const l=o("BaseSelectSearch"),m=o("DatePicker"),T=o("FilterForm");return f(),v(T,{"init-form":D,form:u,multiple:["employees","leaveTypes"],onHide:i[4]||(i[4]=n=>k("hide"))},{default:e(()=>[h("div",J,[h("div",K,[r.isLoaded?(f(),v(l,{key:0,multiple:"",name:"employees",label:y.$trans("global.select",{attribute:y.$trans("employee.employee")}),modelValue:u.employees,"onUpdate:modelValue":i[0]||(i[0]=n=>u.employees=n),"value-prop":"uuid","init-search":r.employees,"search-key":"name","search-action":"employee/list"},{selectedOption:e(n=>[p(s(n.value.name)+" ("+s(n.value.codeNumber)+") ",1)]),listOption:e(n=>[p(s(n.option.name)+" ("+s(n.option.codeNumber)+") ",1)]),_:1},8,["label","modelValue","init-search"])):b("",!0)]),h("div",Q,[r.isLoaded?(f(),v(l,{key:0,multiple:"",name:"leaveTypes",label:y.$trans("global.select",{attribute:y.$trans("employee.leave.type.type")}),modelValue:u.leaveTypes,"onUpdate:modelValue":i[1]||(i[1]=n=>u.leaveTypes=n),"label-prop":"name","value-prop":"uuid","init-search":r.leaveTypes,"search-key":"name","search-action":"leave/type/list"},null,8,["label","modelValue","init-search"])):b("",!0)]),h("div",R,[a(m,{start:u.startDate,"onUpdate:start":i[2]||(i[2]=n=>u.startDate=n),end:u.endDate,"onUpdate:end":i[3]||(i[3]=n=>u.endDate=n),name:"dateBetween",as:"range",label:y.$trans("general.date_between")},null,8,["start","end","label"])])])]),_:1},8,["form"])}}},X={name:"EmployeeLeaveRequestList"},x=Object.assign(X,{setup(V){const $=j(),c=z("emitter");let k=["filter"];g("leave-request:create")&&k.unshift("create"),g("leave:config")&&k.unshift("config");let D=[];g("leave-request:export")&&(D=["print","pdf","excel"]);const u="employee/leave/request/",r=O(!1),y=B({}),i=l=>{Object.assign(y,l)};return(l,m)=>{const T=o("PageHeaderAction"),n=o("PageHeader"),L=o("ParentTransition"),_=o("DataCell"),E=o("BaseBadge"),q=o("FloatingMenuItem"),I=o("FloatingMenu"),N=o("DataRow"),S=o("BaseButton"),A=o("DataTable"),H=o("ListItem");return f(),v(H,{"init-url":u,onSetItems:i},{header:e(()=>[a(n,{title:l.$trans("employee.leave.request.request"),navs:[{label:l.$trans("employee.leave.leave"),path:"EmployeeLeave"}]},{default:e(()=>[a(T,{url:"employee/leave/requests/",name:"EmployeeLeaveRequest","config-path":"EmployeeLeaveConfig",title:l.$trans("employee.leave.request.request"),actions:d(k),"dropdown-actions":d(D),onToggleFilter:m[0]||(m[0]=t=>r.value=!r.value)},{moduleOption:e(()=>[a(G)]),_:1},8,["title","actions","dropdown-actions"])]),_:1},8,["title","navs"])]),filter:e(()=>[a(L,{appear:"",visibility:r.value},{default:e(()=>[a(W,{onRefresh:m[1]||(m[1]=t=>d(c).emit("listItems")),onHide:m[2]||(m[2]=t=>r.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[a(L,{appear:"",visibility:!0},{default:e(()=>[a(A,{header:y.headers,meta:y.meta,module:"employee.leave.request",onRefresh:m[4]||(m[4]=t=>d(c).emit("listItems"))},{actionButton:e(()=>[d(g)("leave-request:create")?(f(),v(S,{key:0,onClick:m[3]||(m[3]=t=>d($).push({name:"EmployeeLeaveRequestCreate"}))},{default:e(()=>[p(s(l.$trans("global.add",{attribute:l.$trans("employee.leave.request.request")})),1)]),_:1})):b("",!0)]),default:e(()=>[(f(!0),F(w,null,U(y.data,t=>(f(),v(N,{key:t.uuid},{default:e(()=>[a(_,{name:"employee"},{default:e(()=>[p(s(t.employee.name)+" ("+s(t.employee.codeNumber)+") ",1)]),_:2},1024),a(_,{name:"leaveType"},{default:e(()=>[p(s(t.leaveType.name),1)]),_:2},1024),a(_,{name:"startDate"},{default:e(()=>[p(s(t.startDate.formatted),1)]),_:2},1024),a(_,{name:"endDate"},{default:e(()=>[p(s(t.endDate.formatted),1)]),_:2},1024),a(_,{name:"status"},{default:e(()=>[a(E,{label:t.status.label,design:t.status.color},null,8,["label","design"])]),_:2},1024),a(_,{name:"createdAt"},{default:e(()=>[p(s(t.createdAt.formatted),1)]),_:2},1024),a(_,{name:"action"},{default:e(()=>[a(I,null,{default:e(()=>[a(q,{icon:"fas fa-arrow-circle-right",onClick:C=>d($).push({name:"EmployeeLeaveRequestShow",params:{uuid:t.uuid}})},{default:e(()=>[p(s(l.$trans("general.show")),1)]),_:2},1032,["onClick"]),t.status.value=="requested"?(f(),F(w,{key:0},[d(g)("leave-request:edit")?(f(),v(q,{key:0,icon:"fas fa-edit",onClick:C=>d($).push({name:"EmployeeLeaveRequestEdit",params:{uuid:t.uuid}})},{default:e(()=>[p(s(l.$trans("general.edit")),1)]),_:2},1032,["onClick"])):b("",!0),d(g)("leave-request:delete")?(f(),v(q,{key:1,icon:"fas fa-trash",onClick:C=>d(c).emit("deleteItem",{uuid:t.uuid})},{default:e(()=>[p(s(l.$trans("general.delete")),1)]),_:2},1032,["onClick"])):b("",!0)],64)):b("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1})}}});export{x as default};
