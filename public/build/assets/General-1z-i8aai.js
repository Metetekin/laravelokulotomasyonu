import{G as w,c as q,m as p,a as b,e as o,u as e,w as u,F as x,r as s,o as P,d as _,f as R,j as C}from"./app-DCfJDSeM.js";const L={class:"grid grid-cols-3 gap-4"},F={class:"col-span-3 sm:col-span-1"},W={name:"EmployeeLeaveConfigGeneral"},V=Object.assign(W,{setup(j){const h=R(),a=C("$trans"),n="config/",i=w(n);q(()=>a("global.placeholder_info",{attribute:c.datePlaceholders}));const c=p({datePlaceholders:""}),d={allowEmployeeRequestLeaveWithExhaustedCredit:!1,type:"employee"},l=p({...d}),v=m=>{Object.assign(c,{datePlaceholders:m.datePlaceholders.map(t=>t.value).join(", ")})};return(m,t)=>{const f=s("PageHeader"),y=s("BaseSwitch"),E=s("FormAction"),g=s("ParentTransition");return P(),b(x,null,[o(f,{title:e(a)(e(h).meta.label),navs:[{label:e(a)("employee.employee"),path:"Employee"},{label:e(a)("employee.leave.leave"),path:"EmployeeLeave"}]},null,8,["title","navs"]),o(g,{appear:"",visibility:!0},{default:u(()=>[o(E,{"pre-requisites":!1,onSetPreRequisites:v,"init-url":n,"data-fetch":"employee",action:"store","init-form":d,form:l,"stay-on":"",redirect:"EmployeeLeave"},{default:u(()=>[_("div",L,[_("div",F,[o(y,{vertical:"",modelValue:l.allowEmployeeRequestLeaveWithExhaustedCredit,"onUpdate:modelValue":t[0]||(t[0]=r=>l.allowEmployeeRequestLeaveWithExhaustedCredit=r),name:"allowEmployeeRequestLeaveWithExhaustedCredit",label:e(a)("employee.leave.config.props.allow_employee_request_leave_with_exhausted_credit"),error:e(i).allowEmployeeRequestLeaveWithExhaustedCredit,"onUpdate:error":t[1]||(t[1]=r=>e(i).allowEmployeeRequestLeaveWithExhaustedCredit=r)},null,8,["modelValue","label","error"])])])]),_:1},8,["form"])]),_:1})],64)}}});export{V as default};
