import{G as j,m as B,n as C,I as _,a as $,q as d,u,b as c,e as l,w as m,F as k,r as e,o,d as p,f as P,j as F}from"./app-DCfJDSeM.js";const O={class:"grid grid-cols-1"},w={class:"col-span-1"},E={name:"ContactEditPhoto"},V=Object.assign(E,{props:{guardian:{type:Object,default(){return{}}}},setup(a){const r=P(),s=F("emitter"),g=a,n={photo:""};j("guardian/");const i=B({...n}),h=async()=>{s.emit("guardianUpdated")},b=async()=>{s.emit("guardianUpdated")};return C(async()=>{Object.assign(n,{photo:g.guardian.contact.photo}),Object.assign(i,_(n))}),(t,I)=>{const v=e("PageHeader"),f=e("ImageUpload"),y=e("BaseCard"),U=e("ParentTransition");return o(),$(k,null,[a.guardian.uuid?(o(),d(v,{key:0,title:t.$trans(u(r).meta.trans,{attribute:t.$trans(u(r).meta.label)}),navs:[{label:t.$trans("guardian.guardian"),path:"Guardian"},{label:a.guardian.contact.name,path:{name:"GuardianShow",params:{uuid:a.guardian.uuid}}}]},null,8,["title","navs"])):c("",!0),l(U,{appear:"",visibility:!0},{default:m(()=>[a.guardian.uuid?(o(),d(y,{key:0},{default:m(()=>[p("div",O,[p("div",w,[l(f,{label:t.$trans("contact.props.photo"),src:i.photo,"upload-path":`guardians/${a.guardian.uuid}/photo`,"remove-path":`guardians/${a.guardian.uuid}/photo`,onUploaded:h,onRemoved:b},null,8,["label","src","upload-path","remove-path"])])])]),_:1})):c("",!0)]),_:1})],64)}}});export{V as default};
