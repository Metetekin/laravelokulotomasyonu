import{m as B,r as o,o as y,q as k,w as e,d as C,e as t,y as F,l as T,u as i,b as D,s as m,t as l,a as W,v as j,F as A,f as L,h as M,j as N}from"./app-DCfJDSeM.js";const O={class:"grid grid-cols-3 gap-6"},U={class:"col-span-3 sm:col-span-1"},q={__name:"Filter",emits:["hide"],setup(r,{emit:h}){const d=h,p={name:""},c=B({...p});return(v,u)=>{const f=o("BaseInput"),$=o("FilterForm");return y(),k($,{"init-form":p,form:c,onHide:u[1]||(u[1]=n=>d("hide"))},{default:e(()=>[C("div",O,[C("div",U,[t(f,{type:"text",modelValue:c.name,"onUpdate:modelValue":u[0]||(u[0]=n=>c.name=n),name:"name",label:v.$trans("employee.attendance.work_shift.props.name")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},z={name:"EmployeeWorkShiftList"},J=Object.assign(z,{props:{employee:{type:Object,default(){return{}}}},setup(r){const h=L(),d=M(),p=N("emitter");let c=["filter"];F("work-shift:assign")&&c.unshift("create");const v="employee/workShift/",u=T(!1),f=B({}),$=n=>{Object.assign(f,n)};return(n,s)=>{const I=o("PageHeaderAction"),E=o("PageHeader"),b=o("ParentTransition"),_=o("DataCell"),g=o("FloatingMenuItem"),V=o("FloatingMenu"),H=o("DataRow"),P=o("BaseButton"),R=o("DataTable"),S=o("ListItem");return y(),k(S,{"init-url":v,uuid:i(h).params.uuid,onSetItems:$},{header:e(()=>[r.employee.uuid?(y(),k(E,{key:0,title:n.$trans("employee.attendance.work_shift.work_shift"),navs:[{label:n.$trans("employee.employee"),path:"Employee"},{label:r.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:r.employee.uuid}}}]},{default:e(()=>[t(I,{url:`employees/${r.employee.uuid}/work-shifts/`,name:"EmployeeWorkShift",title:n.$trans("employee.attendance.work_shift.work_shift"),actions:i(c),"dropdown-actions":["print","pdf","excel"],onToggleFilter:s[0]||(s[0]=a=>u.value=!u.value)},null,8,["url","title","actions"])]),_:1},8,["title","navs"])):D("",!0)]),filter:e(()=>[t(b,{appear:"",visibility:u.value},{default:e(()=>[t(q,{onRefresh:s[1]||(s[1]=a=>i(p).emit("listItems")),onHide:s[2]||(s[2]=a=>u.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(b,{appear:"",visibility:!0},{default:e(()=>[t(R,{header:f.headers,meta:f.meta,module:"employee.attendance.work_shift",onRefresh:s[4]||(s[4]=a=>i(p).emit("listItems"))},{actionButton:e(()=>[i(F)("work-shift:assign")?(y(),k(P,{key:0,onClick:s[3]||(s[3]=a=>i(d).push({name:"EmployeeWorkShiftCreate"}))},{default:e(()=>[m(l(n.$trans("global.assign",{attribute:n.$trans("employee.attendance.work_shift.work_shift")})),1)]),_:1})):D("",!0)]),default:e(()=>[(y(!0),W(A,null,j(f.data,a=>(y(),k(H,{key:a.uuid},{default:e(()=>[t(_,{name:"workShift"},{default:e(()=>[m(l(a.workShift.name)+" ("+l(a.workShift.code)+") ",1)]),_:2},1024),t(_,{name:"startDate"},{default:e(()=>[m(l(a.startDate.formatted),1)]),_:2},1024),t(_,{name:"endDate"},{default:e(()=>[m(l(a.endDate.formatted),1)]),_:2},1024),t(_,{name:"createdAt"},{default:e(()=>[m(l(a.createdAt.formatted),1)]),_:2},1024),t(_,{name:"action"},{default:e(()=>[t(V,null,{default:e(()=>[t(g,{icon:"fas fa-arrow-circle-right",onClick:w=>i(d).push({name:"EmployeeWorkShiftShow",params:{uuid:r.employee.uuid,muuid:a.uuid}})},{default:e(()=>[m(l(n.$trans("general.show")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-edit",onClick:w=>i(d).push({name:"EmployeeWorkShiftEdit",params:{uuid:r.employee.uuid,muuid:a.uuid}})},{default:e(()=>[m(l(n.$trans("general.edit")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-copy",onClick:w=>i(d).push({name:"EmployeeWorkShiftDuplicate",params:{uuid:r.employee.uuid,muuid:a.uuid}})},{default:e(()=>[m(l(n.$trans("general.duplicate")),1)]),_:2},1032,["onClick"]),t(g,{icon:"fas fa-trash",onClick:w=>i(p).emit("deleteItem",{uuid:r.employee.uuid,moduleUuid:a.uuid})},{default:e(()=>[m(l(n.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1},8,["uuid"])}}});export{J as default};
