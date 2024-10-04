import{E as z,G as Q,m as j,J as W,o as y,q as k,w as a,a as V,t as i,e as l,d as $,u as r,s as c,b as _,v as H,F as q,f as K,L as X,I as Y,r as m,y as G,l as J,n as Z,p as x,j as ee,h as te}from"./app-DCfJDSeM.js";const ae={key:0},ne={key:1},oe={class:"grid grid-cols-2 gap-6"},re={class:"col-span-2"},ie={key:0,class:"col-span-2"},se={key:1,class:"col-span-2"},le={class:"col-span-2"},de=["onClick"],pe={class:"mt-4 grid grid-cols-2 gap-2"},ue={class:"col-span-2 sm:col-span-1"},ce={class:"col-span-2 sm:col-span-1"},me={class:"col-span-2 sm:col-span-1"},ye={class:"col-span-2 sm:col-span-1"},fe={class:"col-span-2"},be={key:1,class:"mt-4"},ve={name:"TripParticipantForm"},$e=Object.assign(ve,{props:{trip:{type:Object,default(){return{}}},visibility:{type:Boolean,default:!1},action:{type:String,default:"create"},selectedParticipant:{type:Object,default(){return{}}}},emits:["close","completed"],setup(v,{emit:D}){var I,P;K();const C=D,p=v,N={type:"",participant:"",fee:((I=p.trip.fee)==null?void 0:I.value)||"",payments:[]},L={uuid:z(),codeNumber:"",amount:"",date:"",paymentMethod:"",description:""},F="activity/trip/participant/",s=Q(F),o=j({...N}),f=j({student:"",employee:"",isLoaded:!((P=p.selectedParticipant)!=null&&P.uuid)}),O=()=>{o.payments.push({...L,uuid:z()}),f.isLoaded=!0},h=async n=>{await X()&&o.payments.splice(n,1)},w=()=>{C("completed")};return W(()=>[p.action,p.selectedParticipant.uuid],n=>{if(!p.selectedParticipant.uuid)return;let t=p.selectedParticipant.payments.map(b=>{var g;return{...b,amount:((g=b.amount)==null?void 0:g.value)||""}});Object.assign(N,{...p.selectedParticipant,participant:p.selectedParticipant.participantUuid,type:p.selectedParticipant.type.value,payments:t}),Object.assign(o,Y(N)),f.student=p.selectedParticipant.participantUuid,f.employee=p.selectedParticipant.participantUuid,f.isLoaded=!0}),(n,t)=>{const b=m("BaseRadioGroup"),g=m("TextMuted"),U=m("BaseSelectSearch"),B=m("BaseInput"),T=m("DatePicker"),R=m("BaseFieldset"),S=m("BaseBadge"),A=m("FormAction"),E=m("BaseSideover");return y(),k(E,{visibility:v.visibility,onClose:t[10]||(t[10]=M=>C("close"))},{title:a(()=>[v.action=="create"?(y(),V("span",ae,i(n.$trans("global.add",{attribute:n.$trans("activity.trip.participant.participant")})),1)):(y(),V("span",ne,i(n.$trans("global.edit",{attribute:n.$trans("activity.trip.participant.participant")})),1))]),default:a(()=>{var M;return[l(A,{sideover:"","no-card":"","no-data-fetch":"","cancel-action":"","keep-adding":v.action!="update",action:v.action,"init-url":F,"init-form":N,moduleUuid:(M=v.selectedParticipant)==null?void 0:M.uuid,form:o,onEnd:t[8]||(t[8]=e=>C("close")),onCompleted:w,onCancelled:t[9]||(t[9]=e=>C("close"))},{default:a(()=>[$("div",oe,[$("div",re,[l(b,{"top-margin":"",options:[{label:n.$trans("student.student"),value:"student"},{label:n.$trans("employee.employee"),value:"employee"}],name:"type",modelValue:o.type,"onUpdate:modelValue":t[0]||(t[0]=e=>o.type=e),error:r(s).type,"onUpdate:error":t[1]||(t[1]=e=>r(s).type=e),horizontal:""},null,8,["options","modelValue","error"])]),o.type=="student"?(y(),V("div",ie,[f.isLoaded?(y(),k(U,{key:0,name:"participant",label:n.$trans("student.student"),placeholder:n.$trans("global.select",{attribute:n.$trans("student.student")}),modelValue:o.participant,"onUpdate:modelValue":t[2]||(t[2]=e=>o.participant=e),error:r(s).participant,"onUpdate:error":t[3]||(t[3]=e=>r(s).participant=e),"value-prop":"uuid","init-search":f.student,"search-key":"name","search-action":"student/summary"},{selectedOption:a(e=>[c(i(e.value.name)+" ("+i(e.value.courseName+" "+e.value.batchName)+") ",1),l(g,null,{default:a(()=>[c(i(e.value.codeNumber),1)]),_:2},1024)]),listOption:a(e=>[c(i(e.option.name)+" ("+i(e.option.courseName+" "+e.option.batchName)+") ",1),l(g,null,{default:a(()=>[c(i(e.option.codeNumber),1)]),_:2},1024)]),_:1},8,["label","placeholder","modelValue","error","init-search"])):_("",!0)])):_("",!0),o.type=="employee"?(y(),V("div",se,[f.isLoaded?(y(),k(U,{key:0,name:"participant",label:n.$trans("employee.employee"),placeholder:n.$trans("global.select",{attribute:n.$trans("employee.employee")}),modelValue:o.participant,"onUpdate:modelValue":t[4]||(t[4]=e=>o.participant=e),error:r(s).participant,"onUpdate:error":t[5]||(t[5]=e=>r(s).participant=e),"value-prop":"uuid","init-search":f.employee,"search-key":"name","search-action":"employee/summary"},{selectedOption:a(e=>[c(i(e.value.name)+" ("+i(e.value.designation)+") ",1)]),listOption:a(e=>[c(i(e.option.name)+" ("+i(e.option.designation)+") ",1)]),_:1},8,["label","placeholder","modelValue","error","init-search"])):_("",!0)])):_("",!0),$("div",le,[l(B,{currency:"",modelValue:o.fee,"onUpdate:modelValue":t[6]||(t[6]=e=>o.fee=e),name:"fee",label:n.$trans("activity.trip.props.fee"),error:r(s).fee,"onUpdate:error":t[7]||(t[7]=e=>r(s).fee=e)},null,8,["modelValue","label","error"])])]),o.fee>0?(y(!0),V(q,{key:0},H(o.payments,(e,u)=>(y(),k(R,{class:"mt-4",key:e.uuid},{legend:a(()=>[c(i(u+1)+". ",1),$("span",{class:"text-danger ml-2 cursor-pointer",onClick:d=>h(u)},t[11]||(t[11]=[$("i",{class:"fas fa-times-circle"},null,-1)]),8,de)]),default:a(()=>[$("div",pe,[$("div",ue,[l(B,{type:"text",modelValue:e.codeNumber,"onUpdate:modelValue":d=>e.codeNumber=d,name:`payments.${u}.codeNumber`,label:n.$trans("finance.transaction.props.code_number"),error:r(s)[`payments.${u}.codeNumber`],"onUpdate:error":d=>r(s)[`payments.${u}.codeNumber`]=d},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])]),$("div",ce,[l(B,{currency:"",modelValue:e.amount,"onUpdate:modelValue":d=>e.amount=d,name:`payments.${u}.amount`,label:n.$trans("finance.transaction.props.amount"),error:r(s)[`payments.${u}.amount`],"onUpdate:error":d=>r(s)[`payments.${u}.amount`]=d},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])]),$("div",me,[l(T,{modelValue:e.date,"onUpdate:modelValue":d=>e.date=d,name:`payments.${u}.date`,label:n.$trans("finance.transaction.props.date"),"no-clear":"",error:r(s)[`payments.${u}.date`],"onUpdate:error":d=>r(s)[`payments.${u}.date`]=d},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])]),$("div",ye,[l(B,{type:"text",modelValue:e.paymentMethod,"onUpdate:modelValue":d=>e.paymentMethod=d,name:`payments.${u}.paymentMethod`,label:n.$trans("finance.payment_method.payment_method"),error:r(s)[`payments.${u}.paymentMethod`],"onUpdate:error":d=>r(s)[`payments.${u}.paymentMethod`]=d},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])]),$("div",fe,[l(B,{type:"text",modelValue:e.description,"onUpdate:modelValue":d=>e.description=d,name:`payments.${u}.description`,label:n.$trans("finance.transaction.props.description"),error:r(s)[`payments.${u}.description`],"onUpdate:error":d=>r(s)[`payments.${u}.description`]=d},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])])])]),_:2},1024))),128)):_("",!0),o.fee>0?(y(),V("div",be,[l(S,{design:"primary",onClick:O,class:"cursor-pointer"},{default:a(()=>[c(i(n.$trans("global.add",{attribute:n.$trans("finance.payment.payment")})),1)]),_:1})])):_("",!0)]),_:1},8,["keep-adding","action","moduleUuid","form"])]}),_:1},8,["visibility"])}}}),ge={name:"TripParticipantList"},_e=Object.assign(ge,{props:{trip:{type:Object,default(){return{}}}},emits:["refresh"],setup(v,{emit:D}){const C=K();te();const p=ee("emitter"),N=D,L=v;G("trip:manage");const F="activity/trip/participant/",s=J("create"),o=J(!1),f=j({}),O=j({uuid:null}),h=j({}),w=b=>{Object.assign(f,b)},I=b=>{Object.assign(h,{...b}),s.value="update",o.value=!0},P=()=>{L.trip&&N("refresh")},n=()=>{Object.assign(h,O),P(),p.emit("listItems")},t=()=>{Object.assign(h,O),o.value=!1};return Z(async()=>{p.on("addTripParticipant",()=>{Object.assign(h,O),s.value="create",o.value=!0}),p.on("actionPerformed",()=>{P()})}),x(()=>{p.all.delete("addTripParticipant"),p.all.delete("actionPerformed")}),(b,g)=>{const U=m("DataCell"),B=m("TextMuted"),T=m("FloatingMenuItem"),R=m("FloatingMenu"),S=m("DataRow"),A=m("BaseButton"),E=m("DataTable"),M=m("ListItem");return y(),V(q,null,[l(M,{"init-url":F,uuid:r(C).params.uuid,onSetItems:w},{default:a(()=>[l(E,{header:f.headers,meta:f.meta,module:"activity.trip.participant",onRefresh:g[1]||(g[1]=e=>r(p).emit("listItems"))},{actionButton:a(()=>[r(G)("trip:manage")?(y(),k(A,{key:0,onClick:g[0]||(g[0]=e=>o.value=!0)},{default:a(()=>[c(i(b.$trans("global.add",{attribute:b.$trans("activity.trip.participant.participant")})),1)]),_:1})):_("",!0)]),default:a(()=>[(y(!0),V(q,null,H(f.data,e=>(y(),k(S,{key:e.uuid},{default:a(()=>[l(U,{name:"type"},{default:a(()=>[c(i(e.type.label),1)]),_:2},1024),l(U,{name:"name"},{default:a(()=>[c(i(e.name)+" ",1),l(B,{block:""},{default:a(()=>[c(i(e.contactNumber),1)]),_:2},1024)]),_:2},1024),l(U,{name:"amount"},{default:a(()=>[c(i(e.amount.formatted),1)]),_:2},1024),l(U,{name:"balance"},{default:a(()=>[c(i(e.balance.formatted),1)]),_:2},1024),l(U,{name:"createdAt"},{default:a(()=>[c(i(e.createdAt.formatted),1)]),_:2},1024),l(U,{name:"action"},{default:a(()=>[r(G)("trip:manage")?(y(),k(R,{key:0},{default:a(()=>[l(T,{icon:"fas fa-edit",onClick:u=>I(e)},{default:a(()=>[c(i(b.$trans("general.edit")),1)]),_:2},1032,["onClick"]),l(T,{icon:"fas fa-trash",onClick:u=>r(p).emit("deleteItem",{uuid:v.trip.uuid,moduleUuid:e.uuid})},{default:a(()=>[c(i(b.$trans("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)):_("",!0)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1},8,["uuid"]),v.trip?(y(),k($e,{key:0,trip:v.trip,action:s.value,visibility:o.value,"selected-participant":h,onCompleted:n,onClose:t},null,8,["trip","action","visibility","selected-participant"])):_("",!0)],64)}}});export{_e as default};
