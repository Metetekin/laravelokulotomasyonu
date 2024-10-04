import{m as E,r as n,o as f,q as _,w as e,d as B,e as t,y as V,l as j,u,b as C,s as l,t as s,a as I,v as L,F as w,f as M,h as O,j as q}from"./app-DCfJDSeM.js";const z={class:"grid grid-cols-3 gap-6"},G={class:"col-span-3 sm:col-span-1"},J={class:"col-span-3 sm:col-span-1"},K={class:"col-span-3 sm:col-span-1"},Q={__name:"Filter",emits:["hide"],setup(o,{emit:F}){const b=F,v={name:"",alias:"",number:""},d=E({...v});return(g,m)=>{const c=n("BaseInput"),$=n("FilterForm");return f(),_($,{"init-form":v,form:d,onHide:m[3]||(m[3]=p=>b("hide"))},{default:e(()=>[B("div",z,[B("div",G,[t(c,{type:"text",modelValue:d.name,"onUpdate:modelValue":m[0]||(m[0]=p=>d.name=p),name:"name",label:g.$trans("finance.account.props.name")},null,8,["modelValue","label"])]),B("div",J,[t(c,{type:"text",modelValue:d.alias,"onUpdate:modelValue":m[1]||(m[1]=p=>d.alias=p),name:"alias",label:g.$trans("finance.account.props.alias")},null,8,["modelValue","label"])]),B("div",K,[t(c,{type:"text",modelValue:d.number,"onUpdate:modelValue":m[2]||(m[2]=p=>d.number=p),name:"number",label:g.$trans("finance.account.props.number")},null,8,["modelValue","label"])])])]),_:1},8,["form"])}}},W={name:"EmployeeAccountList"},Y=Object.assign(W,{props:{employee:{type:Object,default(){return{}}}},setup(o){const F=M(),b=O(),v=q("emitter"),d=o;let g=["filter"];(V("employee:edit")||d.employee.selfService)&&g.unshift("create");const m="employee/account/",c=j(!1),$=E({}),p=i=>{Object.assign($,i)};return(i,r)=>{const S=n("PageHeaderAction"),D=n("PageHeader"),A=n("ParentTransition"),N=n("BaseBadge"),y=n("DataCell"),k=n("FloatingMenuItem"),H=n("FloatingMenu"),P=n("DataRow"),R=n("BaseButton"),T=n("DataTable"),U=n("ListItem");return f(),_(U,{"init-url":m,uuid:u(F).params.uuid,onSetItems:p},{header:e(()=>[o.employee.uuid?(f(),_(D,{key:0,title:i.$trans("finance.account.account"),navs:[{label:i.$trans("employee.employee"),path:"Employee"},{label:o.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:o.employee.uuid}}}]},{default:e(()=>[t(S,{url:`employees/${o.employee.uuid}/accounts/`,name:"EmployeeAccount",title:i.$trans("finance.account.account"),actions:u(g),"dropdown-actions":["print","pdf","excel"],onToggleFilter:r[0]||(r[0]=a=>c.value=!c.value)},null,8,["url","title","actions"])]),_:1},8,["title","navs"])):C("",!0)]),filter:e(()=>[t(A,{appear:"",visibility:c.value},{default:e(()=>[t(Q,{onRefresh:r[1]||(r[1]=a=>u(v).emit("listItems")),onHide:r[2]||(r[2]=a=>c.value=!1)})]),_:1},8,["visibility"])]),default:e(()=>[t(A,{appear:"",visibility:!0},{default:e(()=>[t(T,{header:$.headers,meta:$.meta,module:"employee.account",onRefresh:r[4]||(r[4]=a=>u(v).emit("listItems"))},{actionButton:e(()=>[u(V)("employee:edit")||o.employee.selfService?(f(),_(R,{key:0,onClick:r[3]||(r[3]=a=>u(b).push({name:"EmployeeAccountCreate"}))},{default:e(()=>[l(s(i.$trans("global.add",{attribute:i.$trans("finance.account.account")})),1)]),_:1})):C("",!0)]),default:e(()=>[(f(!0),I(w,null,L($.data,a=>(f(),_(P,{key:a.uuid},{default:e(()=>[t(y,{name:"name"},{default:e(()=>[l(s(a.name)+" ",1),a.selfUpload?(f(),_(N,{key:0,design:a.verificationStatus.color},{default:e(()=>[l(s(a.verificationStatus.label),1)]),_:2},1032,["design"])):C("",!0)]),_:2},1024),t(y,{name:"alias"},{default:e(()=>[l(s(a.alias),1)]),_:2},1024),t(y,{name:"number"},{default:e(()=>[l(s(a.number),1)]),_:2},1024),t(y,{name:"bankName"},{default:e(()=>[l(s(a.bankName),1)]),_:2},1024),t(y,{name:"branchName"},{default:e(()=>[l(s(a.branchName),1)]),_:2},1024),t(y,{name:"createdAt"},{default:e(()=>[l(s(a.createdAt.formatted),1)]),_:2},1024),t(y,{name:"action"},{default:e(()=>[t(H,null,{default:e(()=>[t(k,{icon:"fas fa-arrow-circle-right",onClick:h=>u(b).push({name:"EmployeeAccountShow",params:{uuid:o.employee.uuid,muuid:a.uuid}})},{default:e(()=>[l(s(i.$trans("general.show")),1)]),_:2},1032,["onClick"]),u(V)("employee:edit")||o.employee.selfService?(f(),I(w,{key:0},[t(k,{icon:"fas fa-edit",onClick:h=>u(b).push({name:"EmployeeAccountEdit",params:{uuid:o.employee.uuid,muuid:a.uuid}})},{default:e(()=>[l(s(i.$trans("general.edit")),1)]),_:2},1032,["onClick"]),t(k,{icon:"fas fa-copy",onClick:h=>u(b).push({name:"EmployeeAccountDuplicate",params:{uuid:o.employee.uuid,muuid:a.uuid}})},{default:e(()=>[l(s(i.$trans("general.duplicate")),1)]),_:2},1032,["onClick"]),t(k,{icon:"fas fa-trash",onClick:h=>u(v).emit("deleteItem",{uuid:o.employee.uuid,moduleUuid:a.uuid})},{default:e(()=>[l(s(i.$trans("general.delete")),1)]),_:2},1032,["onClick"])],64)):C("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["header","meta"])]),_:1})]),_:1},8,["uuid"])}}});export{Y as default};
