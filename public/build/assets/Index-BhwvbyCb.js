import{m as S,r as s,o as f,q as v,w as e,d as y,e as t,y as b,l as A,u,b as N,s as r,t as d,a as I,v as G,F as w,f as L,h as M,j as U}from"./app-DCfJDSeM.js";const O={class:"grid grid-cols-3 gap-6"},E={class:"col-span-3 sm:col-span-1"},q={class:"col-span-3 sm:col-span-1"},z={__name:"Filter",emits:["hide"],setup(m,{emit:k}){const _=k,p={firstName:"",lastName:""},l=S({...p});return($,o)=>{const c=s("BaseInput"),F=s("FilterForm");return f(),v(F,{"init-form":p,form:l,onHide:o[2]||(o[2]=a=>_("hide"))},{default:e(()=>[y("div",O,[y("div",E,[t(c,{type:"text",modelValue:l.firstName,"onUpdate:modelValue":o[0]||(o[0]=a=>l.firstName=a),name:"name",label:$.$trans("contact.props.first_name")},null,8,["modelValue","label"])]),y("div",q,[t(c,{type:"text",modelValue:l.lastName,"onUpdate:modelValue":o[1]||(o[1]=a=>l.lastName=a),name:"name",label:$.$trans("contact.props.last_name")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},J={name:"StudentGuardianList"},Q=Object.assign(J,{props:{student:{type:Object,default(){return{}}}},setup(m){const k=L(),_=M(),p=U("emitter");let l=["filter"];b("student:edit")&&l.unshift("create");const $="student/guardian/",o=A(!1),c=S({}),F=a=>{Object.assign(c,a)};return(a,i)=>{const V=s("PageHeaderAction"),D=s("PageHeader"),h=s("ParentTransition"),g=s("DataCell"),C=s("FloatingMenuItem"),H=s("FloatingMenu"),P=s("DataRow"),R=s("BaseButton"),T=s("DataTable"),j=s("ListItem");return f(),v(j,{"init-url":$,uuid:u(k).params.uuid,onSetItems:F},{header:e(()=>[m.student.uuid?(f(),v(D,{key:0,title:a.$trans("guardian.guardian"),navs:[{label:a.$trans("student.student"),path:"Student"},{label:m.student.contact.name,path:{name:"StudentShow",params:{uuid:m.student.uuid}}}]},{default:e(()=>[t(V,{url:`students/${m.student.uuid}/guardians/`,name:"StudentGuardian",title:a.$trans("guardian.guardian"),actions:u(l),"dropdown-actions":["print","pdf","excel"],onToggleFilter:i[0]||(i[0]=n=>o.value=!o.value)},null,8,["url","title","actions"])]),_:1},8,["title","navs"])):N("",!0)]),filter:e(()=>[t(h,{appear:"",visibility:o.value},{default:e(()=>[t(z,{onRefresh:i[1]||(i[1]=n=>u(p).emit("listItems")),onHide:i[2]||(i[2]=n=>o.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(h,{appear:"",visibility:!0},{default:e(()=>[t(T,{header:c.headers,meta:c.meta,module:"guardian",onRefresh:i[4]||(i[4]=n=>u(p).emit("listItems"))},{actionButton:e(()=>[u(b)("student:edit")&&u(b)("guardian:create")?(f(),v(R,{key:0,onClick:i[3]||(i[3]=n=>u(_).push({name:"StudentGuardianCreate"}))},{default:e(()=>[r(d(a.$trans("global.add",{attribute:a.$trans("guardian.guardian")})),1)]),_:1})):N("",!0)]),default:e(()=>[(f(!0),I(w,null,G(c.data,n=>(f(),v(P,{key:n.uuid},{default:e(()=>[t(g,{name:"name"},{default:e(()=>[r(d(n.contact.name),1)]),_:2},1024),t(g,{name:"relation"},{default:e(()=>[r(d(n.relation.label),1)]),_:2},1024),t(g,{name:"contactNumber"},{default:e(()=>[r(d(n.contact.contactNumber),1)]),_:2},1024),t(g,{name:"createdAt"},{default:e(()=>[r(d(n.createdAt.formatted),1)]),_:2},1024),t(g,{name:"action"},{default:e(()=>[t(H,null,{default:e(()=>[t(C,{icon:"fas fa-arrow-circle-right",onClick:B=>u(_).push({name:"GuardianShow",params:{uuid:n.uuid}})},{default:e(()=>[r(d(a.$trans("general.show")),1)]),_:2},1032,["onClick"]),u(b)("student:edit")?(f(),I(w,{key:0},[t(C,{icon:"fas fa-edit",onClick:B=>u(_).push({name:"StudentGuardianEdit",params:{uuid:m.student.uuid,muuid:n.uuid}})},{default:e(()=>[r(d(a.$trans("general.edit")),1)]),_:2},1032,["onClick"]),t(C,{icon:"fas fa-trash",onClick:B=>u(p).emit("deleteItem",{uuid:m.student.uuid,moduleUuid:n.uuid})},{default:e(()=>[r(d(a.$trans("general.delete")),1)]),_:2},1032,["onClick"])],64)):N("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1},8,["uuid"])}}});export{Q as default};
