import{m as k,a as P,e as t,w as e,u as d,F as T,r as o,o as c,q as m,s as l,t as s,y as V,b as _,d as f,i as D,f as A,h as I}from"./app-DCfJDSeM.js";const N={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},L=["innerHTML"],R={name:"CalendarHolidayShow"},F=Object.assign(R,{setup(j){D();const u=A(),p=I(),y={},h="calendar/holiday/",n=k({...y}),b=a=>{Object.assign(n,a)};return(a,i)=>{const g=o("PageHeaderAction"),B=o("PageHeader"),r=o("BaseDataView"),$=o("BaseButton"),H=o("ShowButton"),C=o("BaseCard"),w=o("ShowItem"),v=o("ParentTransition");return c(),P(T,null,[t(B,{title:a.$trans(d(u).meta.trans,{attribute:a.$trans(d(u).meta.label)}),navs:[{label:a.$trans("calendar.calendar"),path:"Calendar"},{label:a.$trans("calendar.holiday.holiday"),path:"CalendarHolidayList"}]},{default:e(()=>[t(g,{name:"CalendarHoliday",title:a.$trans("calendar.holiday.holiday"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(v,{appear:"",visibility:!0},{default:e(()=>[t(w,{"init-url":h,uuid:d(u).params.uuid,onSetItem:b,onRedirectTo:i[1]||(i[1]=S=>d(p).push({name:"Holiday"}))},{default:e(()=>[n.uuid?(c(),m(C,{key:0},{title:e(()=>[l(s(n.name),1)]),footer:e(()=>[t(H,null,{default:e(()=>[d(V)("holiday:edit")?(c(),m($,{key:0,design:"primary",onClick:i[0]||(i[0]=S=>d(p).push({name:"CalendarHolidayEdit",params:{uuid:n.uuid}}))},{default:e(()=>[l(s(a.$trans("general.edit")),1)]),_:1})):_("",!0)]),_:1})]),default:e(()=>[f("dl",N,[t(r,{label:a.$trans("calendar.holiday.props.name")},{default:e(()=>[l(s(n.name),1)]),_:1},8,["label"]),t(r,{label:a.$trans("calendar.holiday.props.start_date")},{default:e(()=>[l(s(n.startDate.formatted),1)]),_:1},8,["label"]),t(r,{label:a.$trans("calendar.holiday.props.end_date")},{default:e(()=>[l(s(n.endDate.formatted),1)]),_:1},8,["label"]),t(r,{class:"col-span-1 sm:col-span-2",label:a.$trans("calendar.holiday.props.description")},{default:e(()=>[f("div",{innerHTML:n.description},null,8,L)]),_:1},8,["label"]),t(r,{label:a.$trans("general.created_at")},{default:e(()=>[l(s(n.createdAt.formatted),1)]),_:1},8,["label"]),t(r,{label:a.$trans("general.updated_at")},{default:e(()=>[l(s(n.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):_("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{F as default};
