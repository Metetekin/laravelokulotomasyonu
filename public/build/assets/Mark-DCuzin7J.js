import{l as J,m as T,G as K,n as Q,a as _,e as r,w as a,u as l,q as c,b as f,F as V,f as W,I as X,r as n,o,s as p,t as u,v as D,d as v,A as Y,h as Z,i as x,z as ee}from"./app-DCfJDSeM.js";import{_ as te}from"./Filter-DrTBU8va.js";const ae={class:"p-2"},ne={class:"divide-y divide-gray-200 dark:divide-gray-700"},oe={class:"col-span-3 sm:col-span-1"},se={key:0,class:"ml-2"},re={class:"col-span-3 sm:col-span-1"},le={class:"col-span-3 sm:col-span-1"},de={name:"EmployeeAttendanceMark"},ue=Object.assign(de,{setup(ie){const g=W(),w=Z(),C=x(),k={employees:[]},B="employee/attendance/",$=J(!1),b=T({attendanceTypes:[]}),h=K(B),m=T({...k}),y=T({meta:{},defaultAttendanceType:{}}),U=e=>{y.defaultAttendanceType=e,m.employees.forEach(s=>{s.timeBasedAttendance||(s.attendanceType=e.uuid)})},A=async()=>{$.value=!0,await C.dispatch(B+"fetchEmployee",{params:g.query}).then(e=>{$.value=!1,k.employees=e.data,y.meta=e.meta,Object.assign(m,X(k))}).catch(e=>{$.value=!1})},q=e=>{Object.assign(b,e)};return Q(async()=>{g.query.date&&await A()}),(e,s)=>{const P=n("BaseButton"),F=n("PageHeaderAction"),R=n("PageHeader"),N=n("ParentTransition"),S=n("DropdownItem"),H=n("DropdownButton"),L=n("BaseAlert"),E=n("BaseDataView"),j=n("BaseSelect"),I=n("BaseTextarea"),O=n("FormAction"),z=n("Pagination"),M=n("BaseCard"),G=ee("tooltip");return o(),_(V,null,[r(R,{title:e.$trans(l(g).meta.label),navs:[{label:e.$trans("employee.employee"),path:"Employee"},{label:e.$trans("employee.attendance.attendance"),path:"EmployeeAttendance"}]},{default:a(()=>[r(F,null,{default:a(()=>[r(P,{design:"white",onClick:s[0]||(s[0]=t=>l(w).push({name:"EmployeeAttendanceList"}))},{default:a(()=>[p(u(e.$trans("global.list",{attribute:e.$trans("employee.attendance.attendance")})),1)]),_:1}),r(P,{design:"primary",onClick:s[1]||(s[1]=t=>l(w).push({name:"EmployeeAttendanceProduction"}))},{default:a(()=>[p(u(e.$trans("employee.attendance.mark_production")),1)]),_:1})]),_:1})]),_:1},8,["title","navs"]),r(N,{appear:"",visibility:!0},{default:a(()=>[r(te,{onAfterFilter:A,"init-url":B})]),_:1}),l(g).query.date?(o(),c(M,{key:0,"no-padding":"","no-content-padding":"","is-loading":$.value},{title:a(()=>[p(u(e.$trans("employee.attendance.mark")),1)]),action:a(()=>[b.attendanceTypes?(o(),c(H,{key:0,label:y.defaultAttendanceType.uuid?y.defaultAttendanceType.name:e.$trans("employee.attendance.type.type")},{default:a(()=>[(o(!0),_(V,null,D(b.attendanceTypes,t=>(o(),_("div",{key:t.uuid},[t.uuid!=y.defaultAttendanceType.name?(o(),c(S,{key:0,as:"span",onClick:d=>U(t)},{default:a(()=>[p(u(t.name),1)]),_:2},1032,["onClick"])):f("",!0)]))),128))]),_:1},8,["label"])):f("",!0)]),default:a(()=>[v("div",ae,[m.employees.length==0?(o(),c(L,{key:0,size:"xs",design:"error"},{default:a(()=>[p(u(e.$trans("general.errors.record_not_found")),1)]),_:1})):f("",!0)]),m.employees.length?(o(),c(O,{key:0,"no-card":"","button-padding":"","keep-adding":!1,"stay-on":!0,"init-url":B,"pre-requisites":!0,onSetPreRequisites:q,action:"markAttendance","init-form":k,form:m},{default:a(()=>[v("div",ne,[(o(!0),_(V,null,D(m.employees,(t,d)=>(o(),_("div",{class:"grid grid-cols-3 gap-6 px-4 py-2",key:t.uuid},[v("div",oe,[r(E,{label:t.name+" ("+t.codeNumber+")",revert:""},{default:a(()=>[p(u(t.designation)+" ",1),t.timeBasedAttendance?Y((o(),_("span",se,s[2]||(s[2]=[v("i",{class:"fas fa-clock text-info"},null,-1)]))),[[G,e.$trans("employee.attendance.is_time_based")]]):f("",!0)]),_:2},1032,["label"])]),v("div",re,[t.onLeave?(o(),c(E,{key:0,label:e.$trans("employee.leave.on_leave"),revert:""},{default:a(()=>[p(u(t.leavePeriod),1)]),_:2},1032,["label"])):(o(),c(j,{key:1,disabled:t.timeBasedAttendance,modelValue:t.attendanceType,"onUpdate:modelValue":i=>t.attendanceType=i,name:`employees.${d}.attendanceType`,placeholder:e.$trans("employee.attendance.type.type"),options:b.attendanceTypes,"value-prop":"uuid","label-prop":"name",error:l(h)[`employees.${d}.attendanceType`],"onUpdate:error":i=>l(h)[`employees.${d}.attendanceType`]=i},null,8,["disabled","modelValue","onUpdate:modelValue","name","placeholder","options","error","onUpdate:error"]))]),v("div",le,[r(I,{rows:1,modelValue:t.remarks,"onUpdate:modelValue":i=>t.remarks=i,name:`employees.${d}.remarks`,placeholder:e.$trans("employee.attendance.props.remarks"),error:l(h)[`details.${d}.remarks`],"onUpdate:error":i=>l(h)[`details.${d}.remarks`]=i},null,8,["modelValue","onUpdate:modelValue","name","placeholder","error","onUpdate:error"])])]))),128))])]),_:1},8,["form"])):f("",!0),r(z,{meta:y.meta,onRefresh:A},null,8,["meta"])]),_:1},8,["is-loading"])):f("",!0)],64)}}});export{ue as default};
