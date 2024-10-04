import{G as k,m as w,n as I,I as S,a as j,q as v,u as d,b as N,e as l,w as c,F as O,r as p,o as g,d as o,s as B,t as R,H as F,f as H}from"./app-DCfJDSeM.js";const T={class:"grid grid-cols-3 gap-6"},D={class:"col-span-3 sm:col-span-1"},q={class:"col-span-3 sm:col-span-1"},G={class:"col-span-3 sm:col-span-1"},M={class:"col-span-3 sm:col-span-1"},J={class:"col-span-3"},K={class:"grid grid-cols-3 gap-6"},Q={class:"col-span-3"},W={class:"grid grid-cols-3 gap-6"},X={class:"col-span-3 sm:col-span-1"},Y={class:"mt-4 grid grid-cols-3 gap-6"},Z={name:"ContactEditContact"},_=Object.assign(Z,{props:{contact:{type:Object,default(){return{}}}},setup(m){const V=H(),n=m,b={contactNumber:"",email:"",alternateRecords:{},presentAddress:{},permanentAddress:{}},z="contact/",r=k(z),s=w({...b});return I(async()=>{var a,e,y,i,u,A,L,f,U,t,E,C,P,$;Object.assign(b,{contactNumber:n.contact.contactNumber,email:n.contact.email,alternateRecords:{contactNumber:(a=n.contact.alternateRecords)==null?void 0:a.contactNumber,email:(e=n.contact.alternateRecords)==null?void 0:e.email},presentAddress:{addressLine1:(y=n.contact.presentAddress)==null?void 0:y.addressLine1,addressLine2:(i=n.contact.presentAddress)==null?void 0:i.addressLine2,city:(u=n.contact.presentAddress)==null?void 0:u.city,state:(A=n.contact.presentAddress)==null?void 0:A.state,zipcode:(L=n.contact.presentAddress)==null?void 0:L.zipcode,country:(f=n.contact.presentAddress)==null?void 0:f.country},permanentAddress:{sameAsPresentAddress:n.contact.sameAsPresentAddress,addressLine1:(U=n.contact.permanentAddress)==null?void 0:U.addressLine1,addressLine2:(t=n.contact.permanentAddress)==null?void 0:t.addressLine2,city:(E=n.contact.permanentAddress)==null?void 0:E.city,state:(C=n.contact.permanentAddress)==null?void 0:C.state,zipcode:(P=n.contact.permanentAddress)==null?void 0:P.zipcode,country:($=n.contact.permanentAddress)==null?void 0:$.country}}),Object.assign(s,S(b))}),(a,e)=>{const y=p("PageHeader"),i=p("BaseInput"),u=p("AddressInput"),A=p("BaseFieldset"),L=p("BaseSwitch"),f=p("FormAction"),U=p("ParentTransition");return g(),j(O,null,[m.contact.uuid?(g(),v(y,{key:0,title:a.$trans(d(V).meta.trans,{attribute:a.$trans(d(V).meta.label)}),navs:[{label:a.$trans("contact.contact"),path:"Contact"},{label:m.contact.name,path:{name:"ContactShow",params:{uuid:m.contact.uuid}}}]},null,8,["title","navs"])):N("",!0),l(U,{appear:"",visibility:!0},{default:c(()=>[m.contact.uuid?(g(),v(f,{key:0,"init-url":z,"no-data-fetch":"","init-form":b,form:s,"stay-on":"",redirect:{name:"ContactShowContact",params:{uuid:m.contact.uuid}}},{default:c(()=>[o("div",T,[o("div",D,[l(i,{type:"text",modelValue:s.contactNumber,"onUpdate:modelValue":e[0]||(e[0]=t=>s.contactNumber=t),name:"contactNumber",label:a.$trans("contact.props.contact_number"),error:d(r).contactNumber,"onUpdate:error":e[1]||(e[1]=t=>d(r).contactNumber=t)},null,8,["modelValue","label","error"])]),o("div",q,[l(i,{type:"text",modelValue:s.alternateRecords.contactNumber,"onUpdate:modelValue":e[2]||(e[2]=t=>s.alternateRecords.contactNumber=t),name:"alternateContactNumber",label:a.$trans("global.alternate",{attribute:a.$trans("contact.props.contact_number")}),error:d(r).alternateContactNumber,"onUpdate:error":e[3]||(e[3]=t=>d(r).alternateContactNumber=t)},null,8,["modelValue","label","error"])]),e[24]||(e[24]=o("div",{class:"col-span-3 sm:col-span-1"},null,-1)),o("div",G,[l(i,{type:"text",modelValue:s.email,"onUpdate:modelValue":e[4]||(e[4]=t=>s.email=t),name:"email",label:a.$trans("contact.props.email"),error:d(r).email,"onUpdate:error":e[5]||(e[5]=t=>d(r).email=t)},null,8,["modelValue","label","error"])]),o("div",M,[l(i,{type:"text",modelValue:s.alternateRecords.email,"onUpdate:modelValue":e[6]||(e[6]=t=>s.alternateRecords.email=t),name:"alternateEmail",label:a.$trans("global.alternate",{attribute:a.$trans("contact.props.email")}),error:d(r).alternateEmail,"onUpdate:error":e[7]||(e[7]=t=>d(r).alternateEmail=t)},null,8,["modelValue","label","error"])]),e[25]||(e[25]=o("div",{class:"col-span-3 sm:col-span-1"},null,-1)),o("div",J,[l(A,null,{legend:c(()=>[B(R(a.$trans("contact.props.present_address")),1)]),default:c(()=>[o("div",K,[l(u,{prefix:"presentAddress",addressLine1:s.presentAddress.addressLine1,"onUpdate:addressLine1":e[8]||(e[8]=t=>s.presentAddress.addressLine1=t),addressLine2:s.presentAddress.addressLine2,"onUpdate:addressLine2":e[9]||(e[9]=t=>s.presentAddress.addressLine2=t),city:s.presentAddress.city,"onUpdate:city":e[10]||(e[10]=t=>s.presentAddress.city=t),state:s.presentAddress.state,"onUpdate:state":e[11]||(e[11]=t=>s.presentAddress.state=t),zipcode:s.presentAddress.zipcode,"onUpdate:zipcode":e[12]||(e[12]=t=>s.presentAddress.zipcode=t),country:s.presentAddress.country,"onUpdate:country":e[13]||(e[13]=t=>s.presentAddress.country=t),formErrors:d(r),"onUpdate:formErrors":e[14]||(e[14]=t=>F(r)?r.value=t:null)},null,8,["addressLine1","addressLine2","city","state","zipcode","country","formErrors"])])]),_:1})]),o("div",Q,[l(A,null,{legend:c(()=>[B(R(a.$trans("contact.props.permanent_address")),1)]),default:c(()=>[o("div",W,[o("div",X,[l(L,{modelValue:s.permanentAddress.sameAsPresentAddress,"onUpdate:modelValue":e[15]||(e[15]=t=>s.permanentAddress.sameAsPresentAddress=t),name:"sameAsPresentAddress",label:a.$trans("contact.props.same_as_present_address"),error:d(r).sameAsPresentAddress,"onUpdate:error":e[16]||(e[16]=t=>d(r).sameAsPresentAddress=t)},null,8,["modelValue","label","error"])])]),o("div",Y,[s.permanentAddress.sameAsPresentAddress?N("",!0):(g(),v(u,{key:0,prefix:"permanentAddress",addressLine1:s.permanentAddress.addressLine1,"onUpdate:addressLine1":e[17]||(e[17]=t=>s.permanentAddress.addressLine1=t),addressLine2:s.permanentAddress.addressLine2,"onUpdate:addressLine2":e[18]||(e[18]=t=>s.permanentAddress.addressLine2=t),city:s.permanentAddress.city,"onUpdate:city":e[19]||(e[19]=t=>s.permanentAddress.city=t),state:s.permanentAddress.state,"onUpdate:state":e[20]||(e[20]=t=>s.permanentAddress.state=t),zipcode:s.permanentAddress.zipcode,"onUpdate:zipcode":e[21]||(e[21]=t=>s.permanentAddress.zipcode=t),country:s.permanentAddress.country,"onUpdate:country":e[22]||(e[22]=t=>s.permanentAddress.country=t),formErrors:d(r),"onUpdate:formErrors":e[23]||(e[23]=t=>F(r)?r.value=t:null)},null,8,["addressLine1","addressLine2","city","state","zipcode","country","formErrors"]))])]),_:1})])])]),_:1},8,["form","redirect"])):N("",!0)]),_:1})],64)}}});export{_ as default};
