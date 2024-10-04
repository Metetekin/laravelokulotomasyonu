import{f as F,G as v,m as l,r as p,o as j,q,w as L,d as i,e as f,u as c,I as g}from"./app-DCfJDSeM.js";const O={class:"grid grid-cols-3 gap-6"},U={class:"col-span-3 sm:col-span-1"},R={class:"col-span-3 sm:col-span-1"},x={name:"FinanceLedgerVendorForm"},M=Object.assign(x,{props:{isModal:{type:Boolean,default:!1}},setup(m){const b=F(),n={name:"",type:"sundry_creditor",openingBalance:0,contactNumber:""},d="finance/ledger/",a=v(d),y=l({ledgerTypes:[]}),_=l({selectedLedgerType:{}}),t=l({...n}),u=l({type:"",isLoaded:!b.params.uuid}),B=o=>{Object.assign(y,o),Object.assign(t,g(n))},V=o=>{var e,r;Object.assign(n,{...o,openingBalance:o.openingBalance.value,type:((e=o.type)==null?void 0:e.uuid)||""}),Object.assign(t,g(n)),u.type=((r=o.type)==null?void 0:r.uuid)||"",_.selectedLedgerType=o.type,u.isLoaded=!0};return(o,e)=>{const r=p("BaseInput"),N=p("FormAction");return j(),q(N,{"no-card":!!m.isModal,"pre-requisites":!1,onSetPreRequisites:B,"is-modal":m.isModal,"init-url":d,"init-form":n,form:t,"set-form":V},{default:L(()=>[i("div",O,[i("div",U,[f(r,{type:"text",modelValue:t.name,"onUpdate:modelValue":e[0]||(e[0]=s=>t.name=s),name:"name",label:o.$trans("finance.ledger.props.name"),error:c(a).name,"onUpdate:error":e[1]||(e[1]=s=>c(a).name=s),autofocus:""},null,8,["modelValue","label","error"])]),i("div",R,[f(r,{type:"text",modelValue:t.contactNumber,"onUpdate:modelValue":e[2]||(e[2]=s=>t.contactNumber=s),name:"contactNumber",label:o.$trans("finance.ledger.props.contact_number"),error:c(a).contactNumber,"onUpdate:error":e[3]||(e[3]=s=>c(a).contactNumber=s)},null,8,["modelValue","label","error"])])])]),_:1},8,["no-card","is-modal","form"])}}});export{M as _};
