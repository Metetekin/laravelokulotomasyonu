import{f as g,E as v,G as L,g as u,m as P,r as p,o as b,q as _,w as U,d,e as t,u as n,a as k,b as V,F as T}from"./app-DCfJDSeM.js";const M={class:"grid grid-cols-3 gap-6"},j={class:"col-span-3 sm:col-span-1"},w={class:"col-span-3 sm:col-span-1"},I={class:"col-span-3 sm:col-span-1"},O={class:"col-span-3 sm:col-span-1"},R={class:"col-span-3 sm:col-span-1"},S={key:0,class:"col-span-3 sm:col-span-1"},q={key:1,class:"col-span-3 sm:col-span-1"},x={key:2,class:"col-span-3 sm:col-span-1"},G={class:"grid grid-cols-1"},z={class:"col"},D={name:"EmployeeAccountForm"},J=Object.assign(D,{setup(c){const m=g(),r={name:"",alias:"",number:"",bankName:"",branchName:"",bankCode1:"",bankCode2:"",bankCode3:"",media:[],mediaUpdated:!1,mediaToken:v(),mediaHash:[]},f="employee/account/",l=L(f),C=u("finance.enableBankCode1"),y=u("finance.enableBankCode2"),N=u("finance.enableBankCode3"),$=u("finance.bankCode1Label"),B=u("finance.bankCode2Label"),E=u("finance.bankCode3Label"),o=P({...r}),A=()=>{o.mediaToken=v(),o.mediaHash=[]};return(i,e)=>{const s=p("BaseInput"),F=p("MediaUpload"),H=p("FormAction");return b(),_(H,{"no-data-fetch":"","init-url":f,uuid:n(m).params.uuid,"module-uuid":n(m).params.muuid,"init-form":r,form:o,redirect:{name:"EmployeeAccount",params:{uuid:n(m).params.uuid}},onResetMediaFiles:A},{default:U(()=>[d("div",M,[d("div",j,[t(s,{type:"text",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=a=>o.name=a),name:"name",label:i.$trans("finance.account.props.name"),error:n(l).name,"onUpdate:error":e[1]||(e[1]=a=>n(l).name=a),autofocus:""},null,8,["modelValue","label","error"])]),d("div",w,[t(s,{type:"text",modelValue:o.alias,"onUpdate:modelValue":e[2]||(e[2]=a=>o.alias=a),name:"alias",label:i.$trans("finance.account.props.alias"),error:n(l).alias,"onUpdate:error":e[3]||(e[3]=a=>n(l).alias=a)},null,8,["modelValue","label","error"])]),d("div",I,[t(s,{type:"text",modelValue:o.number,"onUpdate:modelValue":e[4]||(e[4]=a=>o.number=a),name:"number",label:i.$trans("finance.account.props.number"),error:n(l).number,"onUpdate:error":e[5]||(e[5]=a=>n(l).number=a)},null,8,["modelValue","label","error"])]),d("div",O,[t(s,{type:"text",modelValue:o.bankName,"onUpdate:modelValue":e[6]||(e[6]=a=>o.bankName=a),name:"bankName",label:i.$trans("finance.account.props.bank_name"),error:n(l).bankName,"onUpdate:error":e[7]||(e[7]=a=>n(l).bankName=a)},null,8,["modelValue","label","error"])]),d("div",R,[t(s,{type:"text",modelValue:o.branchName,"onUpdate:modelValue":e[8]||(e[8]=a=>o.branchName=a),name:"branchName",label:i.$trans("finance.account.props.branch_name"),error:n(l).branchName,"onUpdate:error":e[9]||(e[9]=a=>n(l).branchName=a)},null,8,["modelValue","label","error"])]),n(C)?(b(),k("div",S,[t(s,{type:"text",modelValue:o.bankCode1,"onUpdate:modelValue":e[10]||(e[10]=a=>o.bankCode1=a),name:"bankCode1",label:n($),error:n(l).bankCode1,"onUpdate:error":e[11]||(e[11]=a=>n(l).bankCode1=a)},null,8,["modelValue","label","error"])])):V("",!0),n(y)?(b(),k("div",q,[t(s,{type:"text",modelValue:o.bankCode2,"onUpdate:modelValue":e[12]||(e[12]=a=>o.bankCode2=a),name:"bankCode2",label:n(B),error:n(l).bankCode2,"onUpdate:error":e[13]||(e[13]=a=>n(l).bankCode2=a)},null,8,["modelValue","label","error"])])):V("",!0),n(N)?(b(),k("div",x,[t(s,{type:"text",modelValue:o.bankCode3,"onUpdate:modelValue":e[14]||(e[14]=a=>o.bankCode3=a),name:"bankCode3",label:n(E),error:n(l).bankCode3,"onUpdate:error":e[15]||(e[15]=a=>n(l).bankCode3=a)},null,8,["modelValue","label","error"])])):V("",!0)]),d("div",G,[d("div",z,[t(F,{multiple:"",label:i.$trans("general.file"),module:"account",media:o.media,"media-token":o.mediaToken,onIsUpdated:e[16]||(e[16]=a=>o.mediaUpdated=!0),onSetHash:e[17]||(e[17]=a=>o.mediaHash.push(a))},null,8,["label","media","media-token"])])])]),_:1},8,["uuid","module-uuid","form","redirect"])}}}),K={name:"EmployeeAccountAction"},W=Object.assign(K,{props:{employee:{type:Object,default(){return{}}}},setup(c){const m=g();return(r,f)=>{const l=p("PageHeaderAction"),C=p("PageHeader"),y=p("ParentTransition");return b(),k(T,null,[t(C,{title:r.$trans(n(m).meta.trans,{attribute:r.$trans(n(m).meta.label)}),navs:[{label:r.$trans("employee.employee"),path:"EmployeeList"},{label:c.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:c.employee.uuid}}},{label:r.$trans("finance.account.account"),path:{name:"EmployeeAccount",params:{uuid:c.employee.uuid}}}]},{default:U(()=>[t(l,{name:"EmployeeAccount",title:r.$trans("finance.account.account"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(y,{appear:"",visibility:!0},{default:U(()=>[t(J)]),_:1})],64)}}});export{W as default};
