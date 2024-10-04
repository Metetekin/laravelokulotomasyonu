import{f as E,m as F,G as w,n as D,r as t,o as v,q as P,w as o,d as u,u as d,s as g,t as p,b as S,e as l,l as O,a as U,F as A,v as I,h as R,i as j}from"./app-DCfJDSeM.js";const G={class:"grid grid-cols-3 gap-6"},z={class:"col-span-3 sm:col-span-1"},J={class:"col-span-3 sm:col-span-1"},K={__name:"FilterProduction",props:{initUrl:{type:String,default:""}},emits:["hide"],setup(T,{emit:y}){const $=E(),b=y,h=T,c={date:"",employee:""},n=F({...c}),i=w(h.initUrl),r=F({employee:"",isLoaded:!$.query.employee});return D(async()=>{r.employee=$.query.employee,r.isLoaded=!0}),(_,e)=>{const k=t("BaseSelectSearch"),V=t("DatePicker"),B=t("FilterForm");return v(),P(B,{"init-form":c,form:n,onHide:e[4]||(e[4]=a=>b("hide"))},{default:o(()=>[u("div",G,[u("div",z,[r.isLoaded?(v(),P(k,{key:0,name:"employee",label:_.$trans("global.select",{attribute:_.$trans("employee.employee")}),modelValue:n.employee,"onUpdate:modelValue":e[0]||(e[0]=a=>n.employee=a),"value-prop":"uuid","init-search":r.employee,"search-action":"employee/list",error:d(i).employee,"onUpdate:error":e[1]||(e[1]=a=>d(i).employee=a)},{selectedOption:o(a=>[g(p(a.value.name)+" ("+p(a.value.codeNumber)+") ",1)]),listOption:o(a=>[g(p(a.option.name)+" ("+p(a.option.codeNumber)+") ",1)]),_:1},8,["label","modelValue","init-search","error"])):S("",!0)]),u("div",J,[l(V,{modelValue:n.date,"onUpdate:modelValue":e[2]||(e[2]=a=>n.date=a),name:"date",label:_.$trans("employee.attendance.props.date"),"no-clear":"",error:d(i).date,"onUpdate:error":e[3]||(e[3]=a=>d(i).date=a)},null,8,["modelValue","label","error"])])])]),_:1},8,["form"])}}},Q={class:"divide-y divide-gray-200 dark:divide-gray-700"},W={class:"col-span-3 sm:col-span-1"},X={class:"col-span-3 sm:col-span-1"},Y={class:"col-span-3 sm:col-span-1"},Z={name:"EmployeeAttendanceMark"},ee=Object.assign(Z,{setup(T){const y=E(),$=R(),b=j(),h={records:[]},c="employee/attendance/",n=O(!1),i=w(c),r=F({...h}),_=async()=>{r.records=[],n.value=!0,await b.dispatch(c+"fetchProduction",{params:y.query}).then(e=>{n.value=!1,r.records=e}).catch(e=>{n.value=!1})};return D(async()=>{y.query.employee&&y.query.date&&await _()}),(e,k)=>{const V=t("BaseButton"),B=t("PageHeaderAction"),a=t("PageHeader"),q=t("ParentTransition"),C=t("BaseDataView"),L=t("BaseInput"),N=t("BaseTextarea"),H=t("FormAction"),M=t("BaseCard");return v(),U(A,null,[l(a,{title:e.$trans(d(y).meta.label),navs:[{label:e.$trans("employee.employee"),path:"Employee"},{label:e.$trans("employee.attendance.attendance"),path:"EmployeeAttendance"},{label:e.$trans("employee.attendance.mark"),path:"EmployeeAttendanceMark"}]},{default:o(()=>[l(B,null,{default:o(()=>[l(V,{design:"white",onClick:k[0]||(k[0]=s=>d($).push({name:"EmployeeAttendanceList"}))},{default:o(()=>[g(p(e.$trans("global.list",{attribute:e.$trans("employee.attendance.attendance")})),1)]),_:1})]),_:1})]),_:1},8,["title","navs"]),l(q,{appear:"",visibility:!0},{default:o(()=>[l(K,{onAfterFilter:_,"init-url":c})]),_:1}),r.records.length?(v(),P(M,{key:0,"no-padding":"","no-content-padding":"","is-loading":n.value},{title:o(()=>[g(p(e.$trans("employee.attendance.mark_production")),1)]),default:o(()=>[l(H,{"no-card":"","button-padding":"","keep-adding":!1,"stay-on":!0,"init-url":c,action:"markProduction","init-form":h,form:r},{default:o(()=>[u("div",Q,[(v(!0),U(A,null,I(r.records,(s,f)=>(v(),U("div",{class:"grid grid-cols-3 gap-6 px-4 py-2",key:s.attendanceType.uuid},[u("div",W,[l(C,{label:s.attendanceType.name+" ("+s.attendanceType.code+")",revert:""},{default:o(()=>[g(p(s.attendanceType.categoryDisplay)+" ("+p(s.attendanceType.unitDisplay)+") ",1)]),_:2},1032,["label"])]),u("div",X,[l(L,{type:"text",modelValue:s.value,"onUpdate:modelValue":m=>s.value=m,name:`records.${f}.value`,placeholder:e.$trans("employee.attendance.props.value"),error:d(i)[`records.${f}.value`],"onUpdate:error":m=>d(i)[`records.${f}.value`]=m},null,8,["modelValue","onUpdate:modelValue","name","placeholder","error","onUpdate:error"])]),u("div",Y,[l(N,{rows:1,modelValue:s.remarks,"onUpdate:modelValue":m=>s.remarks=m,name:`records.${f}.remarks`,placeholder:e.$trans("employee.attendance.props.remarks"),error:d(i)[`records.${f}.remarks`],"onUpdate:error":m=>d(i)[`records.${f}.remarks`]=m},null,8,["modelValue","onUpdate:modelValue","name","placeholder","error","onUpdate:error"])])]))),128))])]),_:1},8,["form"])]),_:1},8,["is-loading"])):S("",!0)],64)}}});export{ee as default};
