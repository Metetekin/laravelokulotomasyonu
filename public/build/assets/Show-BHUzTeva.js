import{m as P,q as s,w as t,r as e,o as c,e as a,u,s as T,t as r,d as b,b as S,i as w,f as B,h as k}from"./app-DCfJDSeM.js";const v={name:"ConfigPushNotificationTemplateShow"},j=Object.assign(v,{setup(y){w();const l=B(),p=k(),m={},f="config/pushNotificationTemplate/",o=P({...m}),d=n=>{Object.assign(o,n)};return(n,i)=>{const _=e("PageHeaderAction"),g=e("BaseCard"),h=e("ShowItem"),C=e("ParentTransition"),N=e("ConfigPage");return c(),s(N,{"no-background":""},{action:t(()=>[a(_,{name:"ConfigPushNotificationTemplate",title:n.$trans("config.push_notification.template.template")},null,8,["title"])]),default:t(()=>[a(C,{appear:"",visibility:!0},{default:t(()=>[a(h,{"init-url":f,uuid:u(l).params.uuid,onSetItem:d,onRedirectTo:i[0]||(i[0]=I=>u(p).push({name:"ConfigPushNotificationTemplate"}))},{default:t(()=>[o.uuid?(c(),s(g,{key:0},{title:t(()=>[T(r(o.subject),1)]),default:t(()=>[b("p",null,r(o.body),1)]),_:1})):S("",!0)]),_:1},8,["uuid"])]),_:1})]),_:1})}}});export{j as default};
