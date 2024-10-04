import{m as C,a as P,e as o,w as e,u as r,F as V,r as s,o as p,q as f,s as l,t as n,y as W,b as h,d as D,i as A,f as H,h as I}from"./app-DCfJDSeM.js";const N={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},T={name:"EmployeeWorkShiftShow"},O=Object.assign(T,{props:{employee:{type:Object,default(){return{}}}},setup(u){A();const d=H(),c=I(),y={},k="employee/workShift/",a=C({...y}),_=t=>{Object.assign(a,t)};return(t,m)=>{const w=s("PageHeaderAction"),b=s("PageHeader"),i=s("BaseDataView"),S=s("BaseButton"),g=s("ShowButton"),B=s("BaseCard"),$=s("ShowItem"),E=s("ParentTransition");return p(),P(V,null,[o(b,{title:t.$trans(r(d).meta.trans,{attribute:t.$trans(r(d).meta.label)}),navs:[{label:t.$trans("employee.employee"),path:"Employee"},{label:u.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:u.employee.uuid}}},{label:t.$trans("employee.work_shift.work_shift"),path:{name:"EmployeeWorkShift",params:{uuid:u.employee.uuid}}}]},{default:e(()=>[o(w,{name:"EmployeeWorkShift",title:t.$trans("employee.attendance.work_shift.work_shift"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),o(E,{appear:"",visibility:!0},{default:e(()=>[o($,{"init-url":k,uuid:r(d).params.uuid,"module-uuid":r(d).params.muuid,onSetItem:_,onRedirectTo:m[1]||(m[1]=v=>r(c).push({name:"EmployeeWorkShift",params:{uuid:u.employee.uuid}}))},{default:e(()=>[a.uuid?(p(),f(B,{key:0},{title:e(()=>[l(n(a.workShift.name),1)]),footer:e(()=>[o(g,null,{default:e(()=>[r(W)("work-shift:assign")?(p(),f(S,{key:0,design:"primary",onClick:m[0]||(m[0]=v=>r(c).push({name:"EmployeeWorkShiftEdit",params:{uuid:u.employee.uuid,muuid:a.uuid}}))},{default:e(()=>[l(n(t.$trans("general.edit")),1)]),_:1})):h("",!0)]),_:1})]),default:e(()=>[D("dl",N,[o(i,{label:t.$trans("employee.attendance.work_shift.work_shift"),class:"col-span-1 sm:col-span-2"},{default:e(()=>[l(n(a.workShift.name)+" ("+n(a.workShift.code)+") ",1)]),_:1},8,["label"]),o(i,{label:t.$trans("employee.attendance.work_shift.props.start_date")},{default:e(()=>[l(n(a.startDate.formatted),1)]),_:1},8,["label"]),o(i,{label:t.$trans("employee.attendance.work_shift.props.end_date")},{default:e(()=>[l(n(a.endDate.formatted),1)]),_:1},8,["label"]),o(i,{class:"col-span-1 sm:col-span-2"},{default:e(()=>[l(n(a.remarks),1)]),_:1}),o(i,{label:t.$trans("general.created_at")},{default:e(()=>[l(n(a.createdAt.formatted),1)]),_:1},8,["label"]),o(i,{label:t.$trans("general.updated_at")},{default:e(()=>[l(n(a.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):h("",!0)]),_:1},8,["uuid","module-uuid"])]),_:1})],64)}}});export{O as default};
