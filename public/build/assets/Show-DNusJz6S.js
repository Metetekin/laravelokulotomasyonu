import{j as E,G as N,m as x,r as u,o as m,q as U,w as a,d as p,e as s,u as r,a as y,s as c,t as i,b as g,f as P,h as W,F as A,v as G,y as T,l as O,i as D}from"./app-DCfJDSeM.js";const H={class:"grid grid-cols-3 gap-6"},M={class:"col-span-3"},q={key:0,class:"col-span-1"},z={key:1,class:"col-span-1"},J={class:"col-span-3 sm:col-span-1"},K={class:"col-span-3 sm:col-span-1"},Q={class:"col-span-3 sm:col-span-1"},R={class:"col-span-3 sm:col-span-1"},X={class:"col-span-3 sm:col-span-1"},Y={class:"col-span-3 sm:col-span-1"},Z={name:"SubjectAllocationForm"},ee=Object.assign(Z,{props:{uuid:{type:String,default:""}},emits:["completed"],setup(I,{emit:F}){const j=F,b=E("emitter"),_={type:"course",courses:[],batches:[],credit:1,maxClassPerWeek:"",examFee:0,courseFee:0,isElective:!1,hasNoExam:!1,hasGranding:!1},h="academic/subject/subjectRecord/",l=N(h),o=x({..._}),v=()=>{j("completed"),b.emit("listItems")};return(n,e)=>{const k=u("BaseRadioGroup"),f=u("BaseSelectSearch"),V=u("BaseInput"),$=u("BaseSwitch"),C=u("FormAction");return m(),U(C,{"init-url":h,uuid:I.uuid,"no-data-fetch":"",action:"create","init-form":_,form:o,"keep-adding":!1,"after-submit":v},{default:a(()=>[p("div",H,[p("div",M,[s(k,{options:[{label:n.$trans("academic.course.course"),value:"course"},{label:n.$trans("academic.batch.batch"),value:"batch"}],name:"type",modelValue:o.type,"onUpdate:modelValue":e[0]||(e[0]=t=>o.type=t),error:r(l).type,"onUpdate:error":e[1]||(e[1]=t=>r(l).type=t),horizontal:""},null,8,["options","modelValue","error"])]),o.type=="course"?(m(),y("div",q,[s(f,{name:"courses",multiple:"",label:n.$trans("academic.course.course"),modelValue:o.courses,"onUpdate:modelValue":e[2]||(e[2]=t=>o.courses=t),error:r(l).courses,"onUpdate:error":e[3]||(e[3]=t=>r(l).courses=t),"value-prop":"uuid","search-action":"academic/course/list"},{selectedOption:a(t=>[c(i(t.value.division.name)+" - "+i(t.value.nameWithTerm),1)]),listOption:a(t=>[c(i(t.option.division.name)+" - "+i(t.option.nameWithTerm),1)]),_:1},8,["label","modelValue","error"])])):g("",!0),o.type=="batch"?(m(),y("div",z,[s(f,{name:"batches",multiple:"",label:n.$trans("academic.batch.batch"),modelValue:o.batches,"onUpdate:modelValue":e[4]||(e[4]=t=>o.batches=t),error:r(l).batches,"onUpdate:error":e[5]||(e[5]=t=>r(l).batches=t),"search-key":"course_batch","value-prop":"uuid","search-action":"academic/batch/list"},{selectedOption:a(t=>[c(i(t.value.course.name)+" - "+i(t.value.name),1)]),listOption:a(t=>[c(i(t.option.course.nameWithTerm)+" - "+i(t.option.name),1)]),_:1},8,["label","modelValue","error"])])):g("",!0),p("div",J,[s(V,{step:.01,type:"number",modelValue:o.credit,"onUpdate:modelValue":e[6]||(e[6]=t=>o.credit=t),name:"credit",label:n.$trans("academic.subject.props.credit"),error:r(l).credit,"onUpdate:error":e[7]||(e[7]=t=>r(l).credit=t)},null,8,["modelValue","label","error"])]),p("div",K,[s(V,{type:"text",modelValue:o.maxClassPerWeek,"onUpdate:modelValue":e[8]||(e[8]=t=>o.maxClassPerWeek=t),name:"maxClassPerWeek",label:n.$trans("academic.subject.props.max_class_per_week"),error:r(l).maxClassPerWeek,"onUpdate:error":e[9]||(e[9]=t=>r(l).maxClassPerWeek=t)},null,8,["modelValue","label","error"])]),p("div",Q,[s(V,{currency:"",modelValue:o.examFee,"onUpdate:modelValue":e[10]||(e[10]=t=>o.examFee=t),name:"examFee",label:n.$trans("academic.subject.props.exam_fee"),error:r(l).examFee,"onUpdate:error":e[11]||(e[11]=t=>r(l).examFee=t)},null,8,["modelValue","label","error"])]),p("div",R,[s($,{vertical:"",modelValue:o.isElective,"onUpdate:modelValue":e[12]||(e[12]=t=>o.isElective=t),name:"isElective",label:n.$trans("academic.subject.props.is_elective"),error:r(l).isElective,"onUpdate:error":e[13]||(e[13]=t=>r(l).isElective=t)},null,8,["modelValue","label","error"])]),p("div",X,[s($,{vertical:"",modelValue:o.hasNoExam,"onUpdate:modelValue":e[14]||(e[14]=t=>o.hasNoExam=t),name:"hasNoExam",label:n.$trans("academic.subject.props.has_no_exam"),error:r(l).hasNoExam,"onUpdate:error":e[15]||(e[15]=t=>r(l).hasNoExam=t)},null,8,["modelValue","label","error"])]),p("div",Y,[s($,{vertical:"",modelValue:o.hasGranding,"onUpdate:modelValue":e[16]||(e[16]=t=>o.hasGranding=t),name:"hasGranding",label:n.$trans("academic.subject.props.has_grading"),error:r(l).hasGranding,"onUpdate:error":e[17]||(e[17]=t=>r(l).hasGranding=t)},null,8,["modelValue","label","error"])])])]),_:1},8,["uuid","form"])}}}),te={class:"grid grid-cols-3 gap-6"},ae={class:"col-span-3 sm:col-span-1"},se={name:"SubjectAllocationFeeForm"},oe=Object.assign(se,{props:{uuid:{type:String,default:""}},emits:["completed"],setup(I,{emit:F}){const j=F,b=E("emitter"),_={examFee:0,courseFee:0},h="academic/subject/subjectRecord/",l=N(h),o=x({..._}),v=()=>{j("completed"),b.emit("listItems")};return(n,e)=>{const k=u("BaseInput"),f=u("FormAction");return m(),U(f,{"init-url":h,uuid:I.uuid,"no-data-fetch":"",action:"updateFee","init-form":_,form:o,"keep-adding":!1,"after-submit":v},{default:a(()=>[p("div",te,[p("div",ae,[s(k,{currency:"",modelValue:o.examFee,"onUpdate:modelValue":e[0]||(e[0]=V=>o.examFee=V),name:"examFee",label:n.$trans("academic.subject.props.exam_fee"),error:r(l).examFee,"onUpdate:error":e[1]||(e[1]=V=>r(l).examFee=V)},null,8,["modelValue","label","error"])])])]),_:1},8,["uuid","form"])}}}),ne={class:"grid grid-cols-3 gap-6"},le={class:"col-span-3 sm:col-span-1"},re={__name:"Filter",emits:["hide"],setup(I,{emit:F}){const j=F,b={course:""},_=x({...b});return(h,l)=>{const o=u("BaseInput"),v=u("FilterForm");return m(),U(v,{"init-form":b,form:_,onHide:l[1]||(l[1]=n=>j("hide"))},{default:a(()=>[p("div",ne,[p("div",le,[s(o,{type:"text",modelValue:_.course,"onUpdate:modelValue":l[0]||(l[0]=n=>_.course=n),name:"course",label:h.$trans("academic.course.course")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},ie={key:0},ue={key:0},de={key:0,class:"far fa-check-circle fa-lg text-success"},me={key:0,class:"far fa-check-circle fa-lg text-success"},ce={key:0,class:"far fa-check-circle fa-lg text-success"},pe={name:"AcademicSubjectRecordList"},fe=Object.assign(pe,{props:{subject:{type:Object,default(){return{}}},showFilter:{type:Boolean,default:!1}},emits:["refresh","hideFilter"],setup(I,{emit:F}){const j=P();W();const b=E("emitter"),_=F,h="academic/subject/subjectRecord/",l=x({}),o=v=>{Object.assign(l,v)};return(v,n)=>{const e=u("ParentTransition"),k=u("TextMuted"),f=u("DataCell"),V=u("FloatingMenuItem"),$=u("FloatingMenu"),C=u("DataRow"),t=u("DataTable"),w=u("ListItem");return m(),y(A,null,[s(e,{appear:"",visibility:I.showFilter},{default:a(()=>[s(re,{onRefresh:n[0]||(n[0]=d=>r(b).emit("listItems")),onHide:n[1]||(n[1]=d=>_("hideFilter"))})]),_:1},8,["visibility"]),s(w,{spacing:!1,"init-url":h,uuid:r(j).params.uuid,"additional-query":{details:!0},onSetItems:o},{default:a(()=>[s(e,{appear:"",visibility:!0},{default:a(()=>[s(t,{header:l.headers,meta:l.meta,module:"academic.subject",onRefresh:n[2]||(n[2]=d=>r(b).emit("listItems"))},{default:a(()=>[(m(!0),y(A,null,G(l.data,d=>(m(),U(C,{key:d.uuid},{default:a(()=>[s(f,{name:"course"},{default:a(()=>{var S;return[c(i(((S=d.course)==null?void 0:S.nameWithTerm)||"-")+" ",1),s(k,{block:""},{default:a(()=>[d.courseFee.value?(m(),y("span",ie,i(v.$trans("academic.subject.props.course_fee"))+": "+i(d.courseFee.formatted),1)):g("",!0)]),_:2},1024),s(k,{block:""},{default:a(()=>[d.examFee.value?(m(),y("span",ue,i(v.$trans("academic.subject.props.exam_fee"))+": "+i(d.examFee.formatted),1)):g("",!0)]),_:2},1024)]}),_:2},1024),s(f,{name:"batch"},{default:a(()=>{var S,B,L;return[c(i(((B=(S=d.batch)==null?void 0:S.course)==null?void 0:B.name)||"-")+" ",1),(L=d.batch)!=null&&L.uuid?(m(),U(k,{key:0,block:""},{default:a(()=>[c(i(d.batch.name),1)]),_:2},1024)):g("",!0)]}),_:2},1024),s(f,{name:"credit"},{default:a(()=>[c(i(d.credit),1)]),_:2},1024),s(f,{name:"maxClassPerWeek"},{default:a(()=>[c(i(d.maxClassPerWeek),1)]),_:2},1024),s(f,{name:"isElective"},{default:a(()=>[d.isElective?(m(),y("i",de)):g("",!0)]),_:2},1024),s(f,{name:"hasNoExam"},{default:a(()=>[d.hasNoExam?(m(),y("i",me)):g("",!0)]),_:2},1024),s(f,{name:"hasGrading"},{default:a(()=>[d.hasGrading?(m(),y("i",ce)):g("",!0)]),_:2},1024),s(f,{name:"action"},{default:a(()=>[s($,null,{default:a(()=>[r(T)("subject:update")?(m(),U(V,{key:0,icon:"fas fa-trash",onClick:S=>r(b).emit("deleteItem",{uuid:I.subject.uuid,moduleUuid:d.uuid})},{default:a(()=>[c(i(v.$trans("general.delete")),1)]),_:2},1032,["onClick"])):g("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1},8,["uuid"])],64)}}}),be={class:"space-y-2"},_e=["innerHTML"],ve={class:"space-y-4"},$e={name:"AcademicSubjectShow"},Fe=Object.assign($e,{setup(I){D();const F=P(),j=W(),b=E("emitter"),_={},h="academic/subject/",l=O(!1),o=x({..._}),v=n=>{Object.assign(o,n)};return(n,e)=>{const k=u("BaseButton"),f=u("PageHeaderAction"),V=u("PageHeader"),$=u("ListItemView"),C=u("ListContainerVertical"),t=u("BaseCard"),w=u("DetailLayoutVertical"),d=u("ShowItem"),S=u("ParentTransition");return m(),y(A,null,[s(V,{title:n.$trans(r(F).meta.trans,{attribute:n.$trans(r(F).meta.label)}),navs:[{label:n.$trans("academic.academic"),path:"Academic"},{label:n.$trans("academic.subject.subject"),path:"AcademicSubjectList"}]},{default:a(()=>[s(f,{name:"AcademicSubject",title:n.$trans("academic.subject.subject"),actions:["list"]},{default:a(()=>[s(k,{design:"white",onClick:e[0]||(e[0]=B=>l.value=!0)},{default:a(()=>e[5]||(e[5]=[p("i",{class:"fas fa-filter"},null,-1)])),_:1})]),_:1},8,["title"])]),_:1},8,["title","navs"]),s(S,{appear:"",visibility:!0},{default:a(()=>[s(d,{"init-url":h,uuid:r(F).params.uuid,onSetItem:v,onRedirectTo:e[4]||(e[4]=B=>r(j).push({name:"AcademicSubject"}))},{default:a(()=>[o.uuid?(m(),U(w,{key:0},{detail:a(()=>[p("div",be,[s(t,{"no-padding":"","no-content-padding":""},{title:a(()=>[c(i(o.name),1)]),action:a(()=>e[6]||(e[6]=[])),default:a(()=>[s(C,null,{default:a(()=>[s($,{label:n.$trans("academic.subject.props.name")},{default:a(()=>[c(i(o.name),1)]),_:1},8,["label"]),s($,{label:n.$trans("academic.subject.props.alias")},{default:a(()=>[c(i(o.alias),1)]),_:1},8,["label"]),s($,{label:n.$trans("academic.subject.props.code")},{default:a(()=>[c(i(o.code),1)]),_:1},8,["label"]),s($,{label:n.$trans("academic.subject.props.shortcode")},{default:a(()=>[c(i(o.shortcode),1)]),_:1},8,["label"]),s($,{class:"col-span-1 sm:col-span-2",label:n.$trans("academic.subject.props.description")},{default:a(()=>[p("div",{innerHTML:o.description},null,8,_e)]),_:1},8,["label"]),s($,{label:n.$trans("general.created_at")},{default:a(()=>[c(i(o.createdAt.formatted),1)]),_:1},8,["label"]),s($,{label:n.$trans("general.updated_at")},{default:a(()=>[c(i(o.updatedAt.formatted),1)]),_:1},8,["label"])]),_:1})]),_:1})])]),default:a(()=>[p("div",ve,[s(fe,{subject:o,"show-filter":l.value,onHideFilter:e[1]||(e[1]=B=>l.value=!1)},null,8,["subject","show-filter"])]),r(T)("subject:edit")?(m(),U(t,{key:0,"no-padding":"","no-content-padding":""},{title:a(()=>[c(i(n.$trans("academic.subject.allocation")),1)]),default:a(()=>[s(ee,{onCompleted:e[2]||(e[2]=B=>r(b).emit("refreshItem"))})]),_:1})):g("",!0),r(T)("subject:edit")?(m(),U(t,{key:1,"no-padding":"","no-content-padding":""},{title:a(()=>[c(i(n.$trans("academic.subject.props.fee")),1)]),default:a(()=>[s(oe,{onCompleted:e[3]||(e[3]=B=>r(b).emit("refreshItem"))})]),_:1})):g("",!0)]),_:1})):g("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{Fe as default};
