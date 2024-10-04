import{j as K,f as te,i as ae,l as se,m as U,G as oe,n as ne,r as k,o as a,q as h,w as s,d as p,e as n,u as t,s as g,t as d,b as y,a as u,F as q,B as _e,y as be,c as fe,I as he,v as S,x as ke,A as ee,h as ve,a4 as ge,L as xe,z as Ae}from"./app-DCfJDSeM.js";import"./lodash-BwwPoz7C.js";const je={class:"grid grid-cols-4 gap-6"},Ve={class:"col-span-4 sm:col-span-1"},we={class:"col-span-4 sm:col-span-1"},He={class:"col-span-4 sm:col-span-1"},qe={class:"mt-4 grid grid-cols-4 gap-6"},Be={class:"col-span-4 sm:col-span-1"},Re={class:"col-span-4 sm:col-span-1"},Se={class:"col-span-4 sm:col-span-1"},$e={__name:"Filter",props:{initUrl:{type:String,default:""},preRequisites:{type:Object,default(){return{}}}},emits:["hide"],setup(G,{emit:v}){const L=K("moment"),H=te(),r=ae(),M=v,D=G,$={method:"batch_wise",date:L().format("YYYY-MM-DD"),batch:"",subject:"",session:"",detail:!1},x=se(!1),m=U({...$}),_=oe(D.initUrl),w=U({methods:D.preRequisites.methods,sessions:D.preRequisites.sessions,subjects:[]}),A=U({batch:"",subject:"",isLoaded:!H.query.batch}),f=async i=>{if(!m.method!="batch_wise"){if(!i){m.batch="",m.subject="",w.subjects=[];return}m.batch=i||"",w.subjects=[],m.subject="",x.value=!0,await r.dispatch("academic/batch/listSubjects",{uuid:i||""}).then(o=>{w.subjects=o,x.value=!1}).catch(o=>{x.value=!1})}};return ne(async()=>{A.batch=H.query.batch,m.batch=H.query.batch,H.query.batch&&(await f(H.query.batch),A.subject=H.query.subject,m.subject=H.query.subject),A.isLoaded=!0}),(i,o)=>{const C=k("BaseSelect"),T=k("BaseSelectSearch"),R=k("DatePicker"),O=k("BaseSwitch"),E=k("FilterForm");return a(),h(E,{"init-form":$,form:m,onHide:o[11]||(o[11]=c=>M("hide"))},{default:s(()=>[p("div",je,[p("div",Ve,[n(C,{modelValue:m.method,"onUpdate:modelValue":o[0]||(o[0]=c=>m.method=c),name:"method",label:i.$trans("student.attendance.method"),options:w.methods,error:t(_).method,"onUpdate:error":o[1]||(o[1]=c=>t(_).method=c)},null,8,["modelValue","label","options","error"])]),p("div",we,[A.isLoaded?(a(),h(T,{key:0,name:"batch",label:i.$trans("global.select",{attribute:i.$trans("academic.batch.batch")}),modelValue:m.batch,"onUpdate:modelValue":o[2]||(o[2]=c=>m.batch=c),error:t(_).batch,"onUpdate:error":o[3]||(o[3]=c=>t(_).batch=c),"value-prop":"uuid","init-search":A.batch,"search-key":"course_batch","search-action":"academic/batch/list",onChange:f},{selectedOption:s(c=>[g(d(c.value.course.nameWithTerm)+" "+d(c.value.name),1)]),listOption:s(c=>[g(d(c.option.course.nameWithTerm)+" "+d(c.option.name),1)]),_:1},8,["label","modelValue","error","init-search"])):y("",!0)]),p("div",He,[n(R,{modelValue:m.date,"onUpdate:modelValue":o[4]||(o[4]=c=>m.date=c),name:"date",label:i.$trans("student.attendance.props.date"),"no-clear":"",error:t(_).date,"onUpdate:error":o[5]||(o[5]=c=>t(_).date=c)},null,8,["modelValue","label","error"])])]),p("div",qe,[m.method=="subject_wise"?(a(),u(q,{key:0},[p("div",Be,[n(C,{modelValue:m.subject,"onUpdate:modelValue":o[6]||(o[6]=c=>m.subject=c),name:"subject",label:i.$trans("academic.subject.subject"),"label-prop":"name","value-prop":"uuid",options:w.subjects,error:t(_).subject,"onUpdate:error":o[7]||(o[7]=c=>t(_).subject=c)},null,8,["modelValue","label","options","error"])]),p("div",Re,[n(C,{modelValue:m.session,"onUpdate:modelValue":o[8]||(o[8]=c=>m.session=c),name:"session",label:i.$trans("student.attendance.session"),options:w.sessions,error:t(_).subject,"onUpdate:error":o[9]||(o[9]=c=>t(_).subject=c)},null,8,["modelValue","label","options","error"])])],64)):y("",!0),p("div",Se,[n(O,{vertical:"",modelValue:m.detail,"onUpdate:modelValue":o[10]||(o[10]=c=>m.detail=c),name:"detail",label:i.$trans("general.detail")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},Ue={class:"flex flex-wrap"},De={class:"p-2"},Ce={class:"divide-y divide-gray-200 dark:divide-gray-700"},Fe={class:"col-span-3 sm:col-span-1"},Pe={class:"flex"},Me={class:"mr-1"},Ne={class:"col-span-3 sm:col-span-1"},ze={key:0,class:"px-2"},Le={key:1,class:"px-2"},Te={key:0,class:"py-4 px-2 flex justify-between space-x-2"},Oe={key:0,class:"flex-1"},Ee={class:"py-4 px-2"},Ie={key:0,class:"fas fa-circle-h text-gray-600"},We={key:1,class:"fas fa-circle-h text-red-600"},Ye={key:2,class:"fas fa-check text-success"},Ke={key:3,class:"fas fa-history text-info"},Ge={key:4,class:"fas fa-coffee text-warning"},Je={key:5,class:"fas fa-times text-danger"},Qe={class:"text-xs"},Xe={class:"text-xs"},Ze={class:"text-xs"},et={class:"text-xs"},tt={class:"text-xs"},at={class:"text-xs"},st={class:"text-xs"},ot={class:"text-xs"},nt={class:"text-xs"},lt={class:"text-xs"},dt={key:0,class:"px-2"},rt={key:1,class:"px-2"},it={key:2,class:"py-4 px-2 flex justify-between space-x-2"},ct={key:0,class:"flex-1"},ut={key:3,class:"py-4 px-2 flex justify-between"},mt={class:"flex space-x-4"},pt={class:"flex space-x-4"},yt={name:"StudentAttendance"},ht=Object.assign(yt,{setup(G){const v=te(),L=ve(),H=ae();K("emitter");const r=K("$trans"),{screenSize:M}=_e();let D=[];be("student:list-attendance")&&(D=["print","pdf","excel"]);const $=fe(()=>ge(v.query.detail)),x={method:"batch_wise",batch:"",subject:"",session:"",date:"",markAsHoliday:!1,holidayReason:"",students:[]},m="student/attendance/",_=se(!1),w=U({sessions:[],types:[]}),A=oe(m),f=U({headers:[],data:[],meta:{total:0,isActionable:!1}}),i=U({...x}),o=U({meta:{},defaultAttendanceType:{code:"P",label:r("student.attendance.types.present")}}),C=b=>{o.defaultAttendanceType=b,i.students.forEach(l=>{l.attendance=b.code})},T=async()=>{_.value=!0,await H.dispatch(m+"preRequisite").then(b=>{_.value=!1,Object.assign(w,b)}).catch(b=>{_.value=!1})},R=async()=>{_.value=!0,await H.dispatch(m+"fetch",{params:v.query}).then(b=>{_.value=!1,x.method=v.query.method,x.batch=v.query.batch,x.subject=v.query.subject,x.session=v.query.session,x.date=v.query.date,x.students=b.data,o.meta=b.meta,o.meta.isForceHoliday?(x.markAsHoliday=!0,x.holidayReason=o.meta.holidayReason):(x.markAsHoliday=!1,x.holidayReason=""),Object.assign(i,he(x)),Object.assign(f,b)}).catch(b=>{_.value=!1})},O=b=>{if(b.isDisabled||!b.isActionable)return;let l=w.types.map(I=>I.code);l.push("");let B=l.indexOf(b.code);B=++B%l.length,b.code=l[B]},E=()=>{f.data.forEach(b=>{let l=b.attendances[f.meta.dateKey];l.isActionable&&(l.code="P")})},c=()=>{f.data.forEach(b=>{let l=b.attendances[f.meta.dateKey];l.isActionable&&(l.code="A")})},le=async()=>{let b=f.data.map(l=>({...l,attendance:l.attendances[f.meta.dateKey].code}));_.value=!0,await H.dispatch(m+"store",{form:{method:i.method,markAsHoliday:i.markAsHoliday,holidayReason:i.holidayReason,students:b,batch:v.query.batch,subject:v.query.subject,session:v.query.session,date:v.query.date}}).then(l=>{_.value=!1,R()}).catch(l=>{_.value=!1})},J=async()=>{await xe()&&(_.value=!0,await H.dispatch(m+"remove",{form:{method:i.method,batch:v.query.batch,subject:v.query.subject,session:v.query.session,date:v.query.date}}).then(b=>{_.value=!1,R()}).catch(b=>{_.value=!1}))},de=async()=>{await R()};return ne(async()=>{await T(),v.query.batch&&v.query.date&&await R()}),(b,l)=>{const B=k("BaseButton"),I=k("PageHeaderAction"),re=k("PageHeader"),W=k("ParentTransition"),Y=k("BaseCard"),ie=k("DropdownItem"),ce=k("DropdownButton"),F=k("BaseAlert"),N=k("BaseDataView"),ue=k("BaseLabel"),me=k("BaseSelect"),Q=k("BaseSwitch"),X=k("BaseInput"),pe=k("FormAction"),j=k("DataCell"),z=k("DataRow"),ye=k("DataTable"),Z=Ae("tooltip");return a(),u(q,null,[n(re,{title:t(r)(t(v).meta.label),navs:[{label:t(r)("student.student"),path:"Student"}]},{default:s(()=>[n(I,{url:"student/attendance/",name:"StudentAttendance",title:t(r)("student.attendance.attendance"),actions:[],"dropdown-actions":t(D)},{default:s(()=>[n(B,{design:"primary",onClick:l[0]||(l[0]=e=>t(L).push({name:"Student"}))},{default:s(()=>[g(d(t(r)("global.list",{attribute:t(r)("student.student")})),1)]),_:1})]),_:1},8,["title","dropdown-actions"])]),_:1},8,["title","navs"]),n(W,{appear:"",visibility:!0},{default:s(()=>[w.sessions.length?(a(),h($e,{key:0,onAfterFilter:R,"pre-requisites":w,"init-url":m},null,8,["pre-requisites"])):y("",!0)]),_:1}),n(W,{appear:"",visibility:!0},{default:s(()=>[t(M).small&&o.meta.monthName?(a(),h(Y,{key:0,class:"mt-4"},{title:s(()=>[g(d(o.meta.monthName),1)]),default:s(()=>[p("div",Ue,[(a(!0),u(q,null,S(o.meta.currentMonthAttendances,e=>(a(),u("span",{class:ke(["m-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 text-sm",{"text-white dark:text-gray-50":e.isHoliday||e.hasAttendanceMarked,"bg-info border-info":e.hasAttendanceMarked,"bg-gray-500 border-gray-500":e.isHoliday,"border-info text-gray-800 dark:text-gray-400":!e.isHoliday&&!e.hasAttendanceMarked}])},d(e.day),3))),256))])]),_:1})):y("",!0)]),_:1}),n(W,{appear:"",visibility:!0},{default:s(()=>[t(M).small?(a(),u(q,{key:0},[t(v).query.date?(a(),h(Y,{key:0,"no-padding":"","no-content-padding":"","is-loading":_.value},{title:s(()=>[g(d(t(r)("student.attendance.attendance")),1)]),action:s(()=>[w.types&&o.meta.isActionable?(a(),h(ce,{key:0,label:t(r)("student.attendance.mark")},{default:s(()=>[(a(!0),u(q,null,S(w.types,e=>(a(),u("div",{key:e.uuid},[n(ie,{as:"span",onClick:V=>C(e)},{default:s(()=>[g(d(e.label),1)]),_:2},1032,["onClick"])]))),128))]),_:1},8,["label"])):y("",!0)]),default:s(()=>[p("div",De,[i.students.length==0?(a(),h(F,{key:0,size:"xs",design:"error"},{default:s(()=>[g(d(t(r)("general.errors.record_not_found")),1)]),_:1})):y("",!0)]),i.students.length?(a(),h(pe,{key:0,"no-card":"","button-padding":"","keep-adding":!1,"stay-on":!0,"init-url":m,action:"store","init-form":x,form:i,"after-submit":de},{additionalAction:s(()=>[f.meta.isActionable&&!f.meta.isHoliday?(a(),u("div",Te,[n(Q,{vertical:"",modelValue:i.markAsHoliday,"onUpdate:modelValue":l[1]||(l[1]=e=>i.markAsHoliday=e),name:"markAsHoliday",label:t(r)("student.attendance.mark_as_holiday"),error:t(A).markAsHoliday,"onUpdate:error":l[2]||(l[2]=e=>t(A).markAsHoliday=e)},null,8,["modelValue","label","error"]),i.markAsHoliday?(a(),u("div",Oe,[n(X,{type:"text",modelValue:i.holidayReason,"onUpdate:modelValue":l[3]||(l[3]=e=>i.holidayReason=e),name:"holidayReason",label:t(r)("student.attendance.holiday_reason"),error:t(A).holidayReason,"onUpdate:error":l[4]||(l[4]=e=>t(A).holidayReason=e)},null,8,["modelValue","label","error"])])):y("",!0)])):y("",!0),p("div",Ee,[f.meta.isMarked?(a(),h(B,{key:0,design:"danger",onClick:J},{default:s(()=>[g(d(t(r)("global.remove",{attribute:t(r)("student.attendance.attendance")})),1)]),_:1})):y("",!0)])]),default:s(()=>[p("div",Ce,[(a(!0),u(q,null,S(i.students,(e,V)=>(a(),u("div",{class:"grid grid-cols-3 gap-6 px-4 py-2",key:e.uuid},[p("div",Fe,[p("div",Pe,[p("span",Me,[n(N,null,{default:s(()=>[g(d(e.sno)+".",1)]),_:2},1024)]),n(N,null,{default:s(()=>[g(d(e.name+" ("+(e.rollNumber?e.rollNumber:e.codeNumber)+")"),1)]),_:2},1024)])]),p("div",Ne,[e.attendance=="H"?(a(),h(ue,{key:0},{default:s(()=>[g(d(t(r)("calendar.holiday.holiday")),1)]),_:1})):(a(),h(me,{key:1,disabled:!o.meta.isActionable,modelValue:e.attendance,"onUpdate:modelValue":P=>e.attendance=P,name:`students.${V}.attendanceType`,placeholder:t(r)("student.attendance.props.type"),options:w.types,"value-prop":"code","label-prop":"label",error:t(A)[`students.${V}.attendanceType`],"onUpdate:error":P=>t(A)[`students.${V}.attendanceType`]=P},null,8,["disabled","modelValue","onUpdate:modelValue","name","placeholder","options","error","onUpdate:error"]))])]))),128))]),o.meta.isHoliday&&o.meta.isMarked?(a(),u("div",ze,[n(F,{size:"xs",design:"info"},{default:s(()=>[g(d(t(r)("student.attendance.holiday_force_attendance_marked",{attribute:o.meta.holidayReason})),1)]),_:1})])):y("",!0),o.meta.isForceHoliday?(a(),u("div",Le,[n(F,{size:"xs",design:"error"},{default:s(()=>[g(d(t(r)("student.attendance.attendance_force_holiday_marked")),1)]),_:1})])):y("",!0)]),_:1},8,["form"])):y("",!0)]),_:1},8,["is-loading"])):y("",!0)],64)):(a(),h(Y,{key:1,"no-padding":"","no-content-padding":"","is-loading":_.value},{default:s(()=>[n(ye,{"sticky-columns":["student"],header:f.headers,meta:f.meta,scroll:!0,module:"student.attendance",onRefresh:R},{actions:s(()=>[o.meta.isHoliday&&o.meta.isMarked?(a(),u("div",dt,[n(F,{size:"xs",design:"info"},{default:s(()=>[g(d(t(r)("student.attendance.holiday_force_attendance_marked",{attribute:o.meta.holidayReason})),1)]),_:1})])):y("",!0),o.meta.isForceHoliday?(a(),u("div",rt,[n(F,{size:"xs",design:"error"},{default:s(()=>[g(d(t(r)("student.attendance.attendance_force_holiday_marked")),1)]),_:1})])):y("",!0),f.meta.isActionable&&!f.meta.isHoliday?(a(),u("div",it,[n(Q,{vertical:"",modelValue:i.markAsHoliday,"onUpdate:modelValue":l[5]||(l[5]=e=>i.markAsHoliday=e),name:"markAsHoliday",label:t(r)("student.attendance.mark_as_holiday"),error:t(A).markAsHoliday,"onUpdate:error":l[6]||(l[6]=e=>t(A).markAsHoliday=e)},null,8,["modelValue","label","error"]),i.markAsHoliday?(a(),u("div",ct,[n(X,{type:"text",modelValue:i.holidayReason,"onUpdate:modelValue":l[7]||(l[7]=e=>i.holidayReason=e),name:"holidayReason",label:t(r)("student.attendance.holiday_reason"),error:t(A).holidayReason,"onUpdate:error":l[8]||(l[8]=e=>t(A).holidayReason=e)},null,8,["modelValue","label","error"])])):y("",!0)])):y("",!0),f.meta.isActionable?(a(),u("div",ut,[p("div",mt,[i.markAsHoliday?y("",!0):(a(),h(B,{key:0,design:"success",onClick:E},{default:s(()=>[g(d(t(r)("student.attendance.mark_all",{attribute:t(r)("student.attendance.types.present")})),1)]),_:1})),i.markAsHoliday?y("",!0):(a(),h(B,{key:1,design:"danger",onClick:c},{default:s(()=>[g(d(t(r)("student.attendance.mark_all",{attribute:t(r)("student.attendance.types.absent")})),1)]),_:1}))]),p("div",pt,[f.meta.isMarked?(a(),h(B,{key:0,design:"danger",onClick:J},{default:s(()=>[g(d(t(r)("global.remove",{attribute:t(r)("student.attendance.attendance")})),1)]),_:1})):y("",!0),n(B,{design:"primary",onClick:le},{default:s(()=>[g(d(t(r)("global.mark",{attribute:t(r)("student.attendance.attendance")})),1)]),_:1})])])):y("",!0)]),default:s(()=>[(a(!0),u(q,null,S(f.data,e=>(a(),h(z,{key:e.uuid},{default:s(()=>[n(j,{name:"sno","sticky-column":""},{default:s(()=>[n(N,{fontSize:"xs"},{default:s(()=>[g(d(e.sno),1)]),_:2},1024)]),_:2},1024),n(j,{name:"student","sticky-column":""},{default:s(()=>[n(N,{revert:""},{default:s(()=>[g(d(e.name)+" ("+d(e.rollNumber||e.codeNumber)+") ",1)]),_:2},1024)]),_:2},1024),(a(!0),u(q,null,S(e.attendances,(V,P)=>(a(),h(j,{bordered:"","vertical-align":"middle",clickable:V.isActionable,name:`day${P}`,disabled:!V.isAvailable,onClick:_t=>O(V)},{default:s(()=>[V.isHoliday?ee((a(),u("i",Ie,null,512)),[[Z,V.holidayReason]]):y("",!0),V.isForceHoliday?ee((a(),u("i",We,null,512)),[[Z,V.holidayReason]]):V.code=="P"?(a(),u("i",Ye)):V.code=="L"?(a(),u("i",Ke)):V.code=="HD"?(a(),u("i",Ge)):V.code=="A"?(a(),u("i",Je)):y("",!0)]),_:2},1032,["clickable","name","disabled","onClick"]))),256)),$.value?(a(),u(q,{key:0},[n(j,{bordered:""},{default:s(()=>[p("span",Qe,d(e.summary.cumulative),1)]),_:2},1024),n(j,{bordered:""},{default:s(()=>[p("span",Xe,d(e.summary.present),1)]),_:2},1024),n(j,{bordered:""},{default:s(()=>[p("span",Ze,d(e.summary.total),1)]),_:2},1024),n(j,{bordered:""},{default:s(()=>[p("span",et,d(e.summary.presentPercentage),1)]),_:2},1024)],64)):y("",!0)]),_:2},1024))),128)),n(z,null,{default:s(()=>[n(j,{colspan:2,bordered:"",name:"student","sticky-column":""},{default:s(()=>[p("span",tt,d(t(r)("student.attendance.types.present")),1)]),_:1}),(a(!0),u(q,null,S(f.meta.dateWiseSummary,e=>(a(),h(j,{bordered:"","vertical-align":"middle",key:e.date},{default:s(()=>[p("span",at,d(e.present),1)]),_:2},1024))),128)),$.value?(a(),h(j,{key:0,bordered:"",colspan:4})):y("",!0)]),_:1}),n(z,null,{default:s(()=>[n(j,{colspan:2,bordered:"",name:"student","sticky-column":""},{default:s(()=>[p("span",st,d(t(r)("student.attendance.types.absent")),1)]),_:1}),(a(!0),u(q,null,S(f.meta.dateWiseSummary,e=>(a(),h(j,{bordered:"","vertical-align":"middle",key:e.date},{default:s(()=>[p("span",ot,d(e.absent),1)]),_:2},1024))),128)),$.value?(a(),h(j,{key:0,bordered:"",colspan:4})):y("",!0)]),_:1}),n(z,null,{default:s(()=>[n(j,{colspan:2,bordered:"",name:"student","sticky-column":""},{default:s(()=>[p("span",nt,d(t(r)("general.percent"))+" (%)",1)]),_:1}),(a(!0),u(q,null,S(f.meta.dateWiseSummary,e=>(a(),h(j,{bordered:"","vertical-align":"middle",key:e.date},{default:s(()=>[p("span",lt,d(e.presentPercentage),1)]),_:2},1024))),128)),$.value?(a(),h(j,{key:0,bordered:"",colspan:4})):y("",!0)]),_:1})]),_:1},8,["header","meta"])]),_:1},8,["is-loading"]))]),_:1})],64)}}});export{ht as default};
