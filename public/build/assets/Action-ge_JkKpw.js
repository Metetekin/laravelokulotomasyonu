import{f as h,h as F,G as B,m as f,r as c,o as _,q as y,w as i,d as u,u as s,s as g,t as d,b as v,e as m,I as C,a as O,F as I}from"./app-DCfJDSeM.js";const T={class:"grid grid-cols-3 gap-6"},N={class:"col-span-3 sm:col-span-1"},P={class:"col-span-2 sm:col-span-1"},L={class:"col-span-2 sm:col-span-1"},S={class:"col-span-2 sm:col-span-1"},j={class:"col-span-3"},H={name:"AcademicCourseInchargeForm"},E=Object.assign(H,{setup(k){const p=h();F();const n={course:"",employee:"",startDate:"",endDate:"",remarks:""},b="academic/courseIncharge/",t=B(b),r=f({...n}),l=f({course:"",employee:"",isLoaded:!p.params.uuid}),$=o=>{Object.assign(n,{...o,startDate:o.startDate.value,endDate:o.endDate.value,course:o.course.uuid,employee:o.employee.uuid}),Object.assign(r,C(n)),l.course=o.course.uuid,l.employee=o.employee.uuid,l.isLoaded=!0};return(o,a)=>{const D=c("BaseSelectSearch"),V=c("DatePicker"),A=c("BaseTextarea"),U=c("FormAction");return _(),y(U,{"init-url":b,"init-form":n,form:r,setForm:$,redirect:"AcademicCourseIncharge"},{default:i(()=>[u("div",T,[u("div",N,[l.isLoaded?(_(),y(D,{key:0,name:"course",label:o.$trans("academic.course.course"),modelValue:r.course,"onUpdate:modelValue":a[0]||(a[0]=e=>r.course=e),error:s(t).course,"onUpdate:error":a[1]||(a[1]=e=>s(t).course=e),"value-prop":"uuid","init-search":l.course,"search-action":"academic/course/list"},{selectedOption:i(e=>[g(d(e.value.nameWithTerm),1)]),listOption:i(e=>[g(d(e.option.nameWithTerm),1)]),_:1},8,["label","modelValue","error","init-search"])):v("",!0)]),u("div",P,[l.isLoaded?(_(),y(D,{key:0,name:"employee",label:o.$trans("global.select",{attribute:o.$trans("employee.employee")}),modelValue:r.employee,"onUpdate:modelValue":a[2]||(a[2]=e=>r.employee=e),error:s(t).employee,"onUpdate:error":a[3]||(a[3]=e=>s(t).employee=e),"value-prop":"uuid","init-search":l.employee,"search-key":"name","search-action":"employee/list"},{selectedOption:i(e=>[g(d(e.value.name)+" ("+d(e.value.codeNumber)+") ",1)]),listOption:i(e=>[g(d(e.option.name)+" ("+d(e.option.codeNumber)+") ",1)]),_:1},8,["label","modelValue","error","init-search"])):v("",!0)]),u("div",L,[m(V,{modelValue:r.startDate,"onUpdate:modelValue":a[4]||(a[4]=e=>r.startDate=e),name:"startDate",label:o.$trans("employee.incharge.props.start_date"),"no-clear":"",error:s(t).startDate,"onUpdate:error":a[5]||(a[5]=e=>s(t).startDate=e)},null,8,["modelValue","label","error"])]),u("div",S,[m(V,{modelValue:r.endDate,"onUpdate:modelValue":a[6]||(a[6]=e=>r.endDate=e),name:"endDate",label:o.$trans("employee.incharge.props.end_date"),"no-clear":"",error:s(t).endDate,"onUpdate:error":a[7]||(a[7]=e=>s(t).endDate=e)},null,8,["modelValue","label","error"])]),u("div",j,[m(A,{modelValue:r.remarks,"onUpdate:modelValue":a[8]||(a[8]=e=>r.remarks=e),name:"remarks",label:o.$trans("employee.incharge.props.remarks"),error:s(t).remarks,"onUpdate:error":a[9]||(a[9]=e=>s(t).remarks=e)},null,8,["modelValue","label","error"])])])]),_:1},8,["form"])}}}),w={name:"AcademicCourseInchargeAction"},W=Object.assign(w,{setup(k){const p=h();return(n,b)=>{const t=c("PageHeaderAction"),r=c("PageHeader"),l=c("ParentTransition");return _(),O(I,null,[m(r,{title:n.$trans(s(p).meta.trans,{attribute:n.$trans(s(p).meta.label)}),navs:[{label:n.$trans("academic.academic"),path:"Academic"},{label:n.$trans("academic.course_incharge.course_incharge"),path:"AcademicCourseInchargeList"}]},{default:i(()=>[m(t,{name:"AcademicCourseIncharge",title:n.$trans("academic.course_incharge.course_incharge"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),m(l,{appear:"",visibility:!0},{default:i(()=>[m(E)]),_:1})],64)}}});export{W as default};
