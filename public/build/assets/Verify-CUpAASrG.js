import{g,G as F,c as U,l as C,m as v,a as y,d as n,u as a,s as u,t as l,e as m,w as d,F as w,r as p,o as c,q as I,b as L,h as R}from"./app-DCfJDSeM.js";const h={class:"flex justify-between"},A={class:"flex justify-center"},j={href:"/",class:"mb-6"},D=["src"],O={class:"text-primary dark:text-darken-secondary text-center text-xl"},T={class:"text-dark-primary dark:text-darken-secondary text-center"},q={class:"space-y-6"},G={key:1},z={key:2},_="onlineRegistration/",K={__name:"Verify",setup(H){const f=R(),V={applicationNumber:"",email:"",code:""},$=g("layout.display").value=="dark"?g("assets.iconLight"):g("assets.icon"),i=F(_),B=U(()=>s.isVerificationEmailSent?"verify":"find"),E=C(null),r=v({...V}),s=v({isVerificationEmailSent:!1}),N=t=>{if(!s.isVerificationEmailSent){s.isVerificationEmailSent=!0;return}localStorage.setItem("authToken",t.token),f.push({name:"OnlineRegistrationForm",params:{number:t.applicationNumber}})};return(t,e)=>{const b=p("BaseInput"),k=p("BaseButton"),S=p("FormAction"),x=p("BaseLoader");return c(),y(w,null,[n("div",h,[n("span",{class:"text-sm text-gray-500 cursor-pointer",onClick:e[0]||(e[0]=o=>a(f).push({name:"OnlineRegistration"}))},[e[8]||(e[8]=n("i",{class:"fas fa-arrow-left mr-1"},null,-1)),u(" "+l(t.$trans("global.go_to",{attribute:t.$trans("student.online_registration.application")})),1)]),n("span",{class:"text-sm text-gray-500 cursor-pointer",onClick:e[1]||(e[1]=o=>a(f).push({name:"Dashboard"}))},[e[9]||(e[9]=n("i",{class:"fas fa-home mr-1"},null,-1)),u(" "+l(t.$trans("global.go_to",{attribute:t.$trans("dashboard.home")})),1)])]),n("div",A,[n("a",j,[n("img",{class:"h-16 w-auto",src:a($),alt:""},null,8,D)])]),m(x,{"is-loading":E.value},{default:d(()=>[n("div",null,[n("p",O,l(t.$trans("student.online_registration.title")),1),n("p",T,l(t.$trans("student.online_registration.subtitle")),1)]),m(S,{"no-card":"","no-action-button":"","init-url":_,"init-form":V,form:r,action:B.value,"stay-on":"","after-submit":N},{default:d(()=>[n("div",q,[m(b,{type:"text",modelValue:r.applicationNumber,"onUpdate:modelValue":e[2]||(e[2]=o=>r.applicationNumber=o),name:"applicationNumber",label:t.$trans("student.online_registration.props.number"),error:a(i).applicationNumber,"onUpdate:error":e[3]||(e[3]=o=>a(i).applicationNumber=o),readonly:s.isVerificationEmailSent,autofocus:""},null,8,["modelValue","label","error","readonly"]),m(b,{type:"text",modelValue:r.email,"onUpdate:modelValue":e[4]||(e[4]=o=>r.email=o),name:"email",label:t.$trans("contact.props.email"),error:a(i).email,"onUpdate:error":e[5]||(e[5]=o=>a(i).email=o),readonly:s.isVerificationEmailSent},null,8,["modelValue","label","error","readonly"]),s.isVerificationEmailSent?(c(),I(b,{key:0,type:"text",modelValue:r.code,"onUpdate:modelValue":e[6]||(e[6]=o=>r.code=o),name:"code",label:t.$trans("student.online_registration.props.code"),error:a(i).code,"onUpdate:error":e[7]||(e[7]=o=>a(i).code=o)},null,8,["modelValue","label","error"])):L("",!0),s.isVerificationEmailSent?(c(),y("div",G,[m(k,{type:"submit",block:""},{default:d(()=>[u(l(t.$trans("student.online_registration.props.verify")),1)]),_:1})])):(c(),y("div",z,[m(k,{type:"submit",block:""},{default:d(()=>[u(l(t.$trans("general.proceed")),1)]),_:1})]))])]),_:1},8,["form","action"])]),_:1},8,["is-loading"])],64)}}};export{K as default};
