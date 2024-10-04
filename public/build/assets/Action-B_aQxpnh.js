import{f as N,j as Z,E as H,G as x,l as ee,m as M,n as oe,r as m,o as _,a as j,e as l,w as u,d,u as s,s as c,t as i,y as te,q as L,b as D,F as P,v as ne,L as se,I as ae}from"./app-DCfJDSeM.js";import{_ as re}from"./VendorForm-DXVgz6hm.js";const ie={class:"grid grid-cols-3 gap-6"},le={class:"col-span-3 sm:col-span-1"},de={class:"col-span-3 sm:col-span-1"},ue={class:"col-span-3 sm:col-span-1"},me={class:"col-span-3 sm:col-span-1"},pe={class:"col-span-2 sm:col-span-1"},ce=["onClick"],ve={class:"mt-4 grid grid-cols-4 gap-4"},ye={class:"col-span-4 sm:col-span-1"},_e={class:"col-span-4 sm:col-span-1"},ge={class:"col-span-4 sm:col-span-2"},be={class:"mt-4"},fe={class:"mt-4 grid grid-cols-1 gap-4"},Ve={class:"col"},ke={class:"col"},$e={name:"InventoryStockRequisitionForm"},qe=Object.assign($e,{setup(G){const b=N(),v=Z("emitter"),f={vendor:"",date:"",place:"",items:[],description:"",messageToVendor:"",media:[],mediaUpdated:!1,mediaToken:H(),mediaHash:[]},V={uuid:H(),item:"",quantity:1,unitPrice:0,description:""},h="inventory/stockRequisition/",a=x(h),k=ee(!1),R=M({inventories:[],vendors:[],places:[]}),y=M({isLoaded:!b.params.uuid}),n=M({...f}),z=t=>{Object.assign(R,t)},J=()=>{n.mediaToken=H(),n.mediaHash=[]},E=()=>{n.items.push({...V,uuid:H()})},K=async t=>{await se()&&(n.items.length==1?n.items=[V]:n.items.splice(t,1))},Q=t=>{var g,S,$,F,I,q,C,O,w;let o=[];t.items.forEach(U=>{o.push({...U,unitPrice:U.unitPrice.value,amount:U.amount.value})}),Object.assign(f,{...t,items:o,date:(g=t.date)==null?void 0:g.value,employee:((S=t.employee)==null?void 0:S.uuid)||"",inventory:(($=t.inventory)==null?void 0:$.uuid)||"",vendor:((F=t.vendor)==null?void 0:F.uuid)||"",place:((I=t.place)==null?void 0:I.uuid)||""}),Object.assign(n,ae(f)),y.employee=((q=t.employee)==null?void 0:q.uuid)||"",y.inventory=((C=t.inventory)==null?void 0:C.uuid)||"",y.vendor=((O=t.vendor)==null?void 0:O.uuid)||"",y.place=((w=t.place)==null?void 0:w.uuid)||"",y.isLoaded=!0},W=t=>{t!=n.inventory&&(n.items=[V])},X=()=>{k.value=!1,v.emit("refreshPreRequisites")};return oe(async()=>{b.params.uuid||E()}),(t,o)=>{const g=m("BaseSelect"),S=m("HelperText"),$=m("BaseSelectSearch"),F=m("DatePicker"),I=m("BaseInput"),q=m("BaseTextarea"),C=m("BaseFieldset"),O=m("BaseBadge"),w=m("MediaUpload"),U=m("FormAction"),Y=m("BaseModal");return _(),j(P,null,[l(U,{"pre-requisites":!0,onSetPreRequisites:z,"init-url":h,"init-form":f,form:n,"set-form":Q,redirect:"InventoryStockRequisition",onResetMediaFiles:J},{default:u(()=>[d("div",ie,[d("div",le,[l(g,{modelValue:n.inventory,"onUpdate:modelValue":o[0]||(o[0]=e=>n.inventory=e),name:"inventory",label:t.$trans("inventory.inventory"),options:R.inventories,"label-prop":"name","value-prop":"uuid",error:s(a).inventory,"onUpdate:error":o[1]||(o[1]=e=>s(a).inventory=e),onChange:W},null,8,["modelValue","label","options","error"])]),d("div",de,[l(g,{modelValue:n.vendor,"onUpdate:modelValue":o[2]||(o[2]=e=>n.vendor=e),name:"vendor",label:t.$trans("inventory.vendor"),options:R.vendors,"value-prop":"uuid",error:s(a).vendor,"onUpdate:error":o[3]||(o[3]=e=>s(a).vendor=e)},{selectedOption:u(e=>[c(i(e.value.name)+" ("+i(e.value.type.name)+") ",1)]),listOption:u(e=>[c(i(e.option.name)+" ("+i(e.option.type.name)+") ",1)]),_:1},8,["modelValue","label","options","error"]),s(te)("ledger:create")?(_(),L(S,{key:0,cursor:"","text-right":"",onClick:o[4]||(o[4]=e=>k.value=!0)},{default:u(()=>[c(i(t.$trans("global.add",{attribute:t.$trans("inventory.vendor")})),1)]),_:1})):D("",!0)]),d("div",ue,[l(g,{modelValue:n.place,"onUpdate:modelValue":o[5]||(o[5]=e=>n.place=e),name:"place",label:t.$trans("inventory.place"),options:R.places,"label-prop":"fullName","value-prop":"uuid",error:s(a).place,"onUpdate:error":o[6]||(o[6]=e=>s(a).place=e)},null,8,["modelValue","label","options","error"])]),d("div",me,[y.isLoaded?(_(),L($,{key:0,name:"employee",label:t.$trans("employee.employee"),placeholder:t.$trans("inventory.stock_requisition.props.requested_by"),modelValue:n.employee,"onUpdate:modelValue":o[7]||(o[7]=e=>n.employee=e),error:s(a).employee,"onUpdate:error":o[8]||(o[8]=e=>s(a).employee=e),"value-prop":"uuid","init-search":y.employee,"search-key":"name","search-action":"employee/summary"},{selectedOption:u(e=>[c(i(e.value.name)+" ("+i(e.value.designation)+") ",1)]),listOption:u(e=>[c(i(e.option.name)+" ("+i(e.option.designation)+") ",1)]),_:1},8,["label","placeholder","modelValue","error","init-search"])):D("",!0)]),d("div",pe,[l(F,{modelValue:n.date,"onUpdate:modelValue":o[9]||(o[9]=e=>n.date=e),name:"date",label:t.$trans("inventory.stock_requisition.props.date"),"no-clear":"",error:s(a).date,"onUpdate:error":o[10]||(o[10]=e=>s(a).date=e)},null,8,["modelValue","label","error"])])]),n.inventory?(_(),j(P,{key:0},[(_(!0),j(P,null,ne(n.items,(e,p)=>(_(),L(C,{class:"mt-4",key:e.uuid},{legend:u(()=>[c(i(t.$trans("inventory.item"))+" "+i(p+1)+". ",1),d("span",{class:"text-danger ml-2 cursor-pointer",onClick:A=>K(p)},o[17]||(o[17]=[d("i",{class:"fas fa-times-circle"},null,-1)]),8,ce)]),default:u(()=>{var A;return[d("div",ve,[d("div",ye,[l($,{name:`items.${p}.item`,label:t.$trans("global.select",{attribute:t.$trans("inventory.stock_item.stock_item")}),modelValue:e.item,"onUpdate:modelValue":r=>e.item=r,error:s(a)[`items.${p}.item`],"onUpdate:error":r=>s(a)[`items.${p}.item`]=r,"value-prop":"uuid","object-prop":!0,"init-search":(A=e==null?void 0:e.item)==null?void 0:A.name,"init-search-key":"name","search-action":"inventory/stockItem/list","additional-search-query":{inventory:n.inventory}},{selectedOption:u(r=>{var B,T;return[c(i(r.value.name)+" "+i((T=(B=r.value)==null?void 0:B.category)==null?void 0:T.name),1)]}),listOption:u(r=>{var B,T;return[c(i(r.option.name)+" "+i((T=(B=r.option)==null?void 0:B.category)==null?void 0:T.name),1)]}),_:2},1032,["name","label","modelValue","onUpdate:modelValue","error","onUpdate:error","init-search","additional-search-query"])]),d("div",_e,[l(I,{type:"number",step:.01,modelValue:e.quantity,"onUpdate:modelValue":r=>e.quantity=r,name:`items.${p}.quantity`,label:t.$trans("inventory.stock_requisition.props.quantity"),error:s(a)[`items.${p}.quantity`],"onUpdate:error":r=>s(a)[`items.${p}.quantity`]=r},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])]),d("div",ge,[l(q,{rows:1,modelValue:e.description,"onUpdate:modelValue":r=>e.description=r,name:`items.${p}.description`,label:t.$trans("inventory.stock_requisition.props.description"),error:s(a)[`items.${p}.description`],"onUpdate:error":r=>s(a)[`items.${p}.description`]=r},null,8,["modelValue","onUpdate:modelValue","name","label","error","onUpdate:error"])])])]}),_:2},1024))),128)),d("div",be,[l(O,{design:"primary",onClick:E,class:"cursor-pointer"},{default:u(()=>[c(i(t.$trans("global.add",{attribute:t.$trans("inventory.stock_item.stock_item")})),1)]),_:1})])],64)):D("",!0),d("div",fe,[d("div",Ve,[l(q,{rows:1,modelValue:n.messageToVendor,"onUpdate:modelValue":o[11]||(o[11]=e=>n.messageToVendor=e),name:"messageToVendor",label:t.$trans("inventory.stock_requisition.props.message_to_vendor"),error:s(a).messageToVendor,"onUpdate:error":o[12]||(o[12]=e=>s(a).messageToVendor=e)},null,8,["modelValue","label","error"])]),d("div",ke,[l(w,{multiple:"",label:t.$trans("general.file"),module:"stock_requisition",media:n.media,"media-token":n.mediaToken,onIsUpdated:o[13]||(o[13]=e=>n.mediaUpdated=!0),onSetHash:o[14]||(o[14]=e=>n.mediaHash.push(e))},null,8,["label","media","media-token"])])])]),_:1},8,["form"]),l(Y,{show:k.value,onClose:o[16]||(o[16]=e=>k.value=!1)},{title:u(()=>[c(i(t.$trans("global.add",{attribute:t.$trans("inventory.vendor")})),1)]),default:u(()=>[l(re,{"is-modal":!0,"after-submit":X,onCancelled:o[15]||(o[15]=e=>k.value=!1)})]),_:1},8,["show"])],64)}}}),Ue={name:"InventoryStockRequisitionAction"},he=Object.assign(Ue,{setup(G){const b=N();return(v,f)=>{const V=m("PageHeaderAction"),h=m("PageHeader"),a=m("ParentTransition");return _(),j(P,null,[l(h,{title:v.$trans(s(b).meta.trans,{attribute:v.$trans(s(b).meta.label)}),navs:[{label:v.$trans("inventory.inventory"),path:"Inventory"},{label:v.$trans("inventory.stock_requisition.stock_requisition"),path:"InventoryStockRequisitionList"}]},{default:u(()=>[l(V,{name:"InventoryStockRequisition",title:v.$trans("inventory.stock_requisition.stock_requisition"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),l(a,{appear:"",visibility:!0},{default:u(()=>[l(qe)]),_:1})],64)}}});export{he as default};
