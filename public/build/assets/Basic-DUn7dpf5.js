import{i as F,G as O,l as E,m as j,J as x,n as H,r as m,o as i,q as f,w as n,s as l,t as u,u as e,y as I,a as N,b as g,F as P,v as U,I as R,g as q,e as o,j as D,d as G,f as J,h as M,L as z}from"./app-DCfJDSeM.js";import{_ as K}from"./EditRequestInfo-CFFOtg2a.js";const Q={key:0,class:"space-x-1"},W={name:"TaskTagList"},X=Object.assign(W,{props:{student:{type:Object,default(){return{}}}},emits:["refresh"],setup(t,{emit:k}){F();const v=k,S=t,a={tags:[]},_="student/",p=O(_),b=E(!1),h=j({...a}),B=j({tags:[],isLoaded:!1}),y=r=>{Object.assign(a,{tags:r.map(c=>c.uuid)}),Object.assign(h,R(a)),B.tags=r.map(c=>c.uuid),B.isLoaded=!0},L=()=>{b.value=!1,v("refresh")};return x(()=>S.student.tags,r=>{y(r)}),H(()=>{var r;y(((r=S.student)==null?void 0:r.tags)||[])}),(r,c)=>{const C=m("BaseBadge"),w=m("BaseSelectSearch"),V=m("FormAction"),$=m("BaseDataView");return i(),f($,{class:"col-span-1 sm:col-span-4"},{label:n(()=>[l(u(r.$trans("general.tags"))+" ",1),e(I)("student:edit")?(i(),N("i",{key:0,class:"fas fa-edit cursor-pointer",onClick:c[0]||(c[0]=s=>b.value=!0)})):g("",!0)]),default:n(()=>[b.value?g("",!0):(i(),N("div",Q,[(i(!0),N(P,null,U(t.student.tags||[],s=>(i(),f(C,{design:"primary"},{default:n(()=>[l(u(s.name),1)]),_:2},1024))),256))])),b.value?(i(),f(V,{key:1,"no-card":"","no-data-fetch":"","cancel-action":"",action:"updateTags","keep-adding":!1,"init-url":_,"init-form":a,form:h,"after-submit":L,onCancelled:c[3]||(c[3]=s=>b.value=!1)},{default:n(()=>[B.isLoaded?(i(),f(w,{key:0,tags:"",name:"tags",placeholder:r.$trans("global.select",{attribute:r.$trans("general.tag")}),modelValue:h.tags,"onUpdate:modelValue":c[1]||(c[1]=s=>h.tags=s),error:e(p).tags,"onUpdate:error":c[2]||(c[2]=s=>e(p).tags=s),"init-search":B.tags,"search-action":"tag/list"},null,8,["placeholder","modelValue","error","init-search"])):g("",!0)]),_:1},8,["form"])):g("",!0)]),_:1})}}}),Y={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3"},Z={name:"StudentShowBasic"},at=Object.assign(Z,{props:{student:{type:Object,default(){return{contact:{}}}}},setup(t){const k=J(),v=M(),S=F(),a=D("$trans"),_=D("emitter"),p=t,b=q("contact.uniqueIdNumber1Label"),h=q("contact.uniqueIdNumber2Label"),B=q("contact.uniqueIdNumber3Label");let y=[];I("student:edit")&&(y.push({label:a("general.edit"),path:{name:"StudentEditBasic",params:{uuid:p.student.uuid}}}),y.push({label:a("global.edit",{attribute:a("contact.props.photo")}),path:{name:"StudentEditPhoto",params:{uuid:p.student.uuid}}}));const L=()=>{_.emit("studentUpdated")},r=async()=>{await z()&&await S.dispatch("student/delete",{uuid:p.student.uuid}).then(c=>{v.push({name:"StudentList"})}).catch(c=>{})};return(c,C)=>{const w=m("BaseButton"),V=m("PageHeaderAction"),$=m("PageHeader"),s=m("BaseDataView"),T=m("BaseCard"),A=m("ParentTransition");return i(),N(P,null,[t.student.uuid?(i(),f($,{key:0,title:e(a)(e(k).meta.label),navs:[{label:e(a)("student.student"),path:"Student"},{label:t.student.contact.name,path:{name:"StudentShow",params:{uuid:t.student.uuid}}}]},{default:n(()=>[o(V,{"additional-actions":e(y)},{after:n(()=>[e(I)("student:delete")&&t.student.records.length==0?(i(),f(w,{key:0,design:"danger",onClick:r},{default:n(()=>[l(u(e(a)("global.delete",{attribute:e(a)("student.student")})),1)]),_:1})):g("",!0)]),_:1},8,["additional-actions"])]),_:1},8,["title","navs"])):g("",!0),o(A,{appear:"",visibility:!0},{default:n(()=>[t.student.uuid?(i(),f(T,{key:0},{default:n(()=>[o(K,{student:t.student},null,8,["student"]),G("dl",Y,[o(s,{label:e(a)("contact.props.father_name")},{default:n(()=>[l(u(t.student.contact.fatherName),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.mother_name")},{default:n(()=>[l(u(t.student.contact.motherName),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.birth_date")},{default:n(()=>[l(u(t.student.contact.birthDate.formatted),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.gender")},{default:n(()=>[l(u(t.student.contact.gender.label),1)]),_:1},8,["label"]),o(s,{label:e(b)},{default:n(()=>[l(u(t.student.contact.uniqueIdNumber1),1)]),_:1},8,["label"]),o(s,{label:e(h)},{default:n(()=>[l(u(t.student.contact.uniqueIdNumber2),1)]),_:1},8,["label"]),o(s,{label:e(B)},{default:n(()=>[l(u(t.student.contact.uniqueIdNumber3),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.birth_place")},{default:n(()=>[l(u(t.student.contact.birthPlace),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.nationality")},{default:n(()=>[l(u(t.student.contact.nationality),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.mother_tongue")},{default:n(()=>[l(u(t.student.contact.motherTongue),1)]),_:1},8,["label"]),o(s,{label:e(a)("contact.props.blood_group")},{default:n(()=>{var d;return[l(u(((d=t.student.contact.bloodGroup)==null?void 0:d.label)||"-"),1)]}),_:1},8,["label"]),o(s,{label:e(a)("contact.props.marital_status")},{default:n(()=>{var d;return[l(u(((d=t.student.contact.maritalStatus)==null?void 0:d.label)||"-"),1)]}),_:1},8,["label"]),o(s,{label:e(a)("contact.religion.religion")},{default:n(()=>{var d;return[l(u(((d=t.student.contact.religion)==null?void 0:d.name)||"-"),1)]}),_:1},8,["label"]),o(s,{label:e(a)("contact.caste.caste")},{default:n(()=>{var d;return[l(u(((d=t.student.contact.caste)==null?void 0:d.name)||"-"),1)]}),_:1},8,["label"]),o(s,{label:e(a)("contact.category.category")},{default:n(()=>{var d;return[l(u(((d=t.student.contact.category)==null?void 0:d.name)||"-"),1)]}),_:1},8,["label"]),o(X,{student:t.student,onRefresh:L},null,8,["student"])])]),_:1})):g("",!0)]),_:1})],64)}}});export{at as default};
