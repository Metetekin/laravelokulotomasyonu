import{g as _,m as te,a as j,e as a,w as n,u as r,F as le,r as s,o as w,q,s as d,t as o,b as g,d as ne,i as se,f as re,h as de}from"./app-DCfJDSeM.js";const oe={key:0,class:"mb-4"},ue={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},ie={name:"EmployeeProfileEditRequestShow"},ce=Object.assign(ie,{props:{employee:{type:Object,default(){return{}}}},setup(y){se();const $=re(),F=de(),D={},O="employee/profileEditRequest/",M=_("contact.uniqueIdNumber1Label"),G=_("contact.uniqueIdNumber2Label"),U=_("contact.uniqueIdNumber3Label"),e=te({...D}),J=t=>{Object.assign(e,t)};return(t,h)=>{const K=s("PageHeaderAction"),Q=s("PageHeader"),W=s("BaseAlert"),X=s("BaseBadge"),u=s("BaseDataView"),l=s("HorizontalListItem"),A=s("HorizontalList"),L=s("BaseFieldset"),Y=s("ListMedia"),Z=s("ShowButton"),x=s("BaseCard"),ee=s("ShowItem"),ae=s("ParentTransition");return w(),j(le,null,[a(Q,{title:t.$trans(r($).meta.trans,{attribute:t.$trans(r($).meta.label)}),navs:[{label:t.$trans("employee.employee"),path:"Employee"},{label:y.employee.contact.name,path:{name:"EmployeeShow",params:{uuid:y.employee.uuid}}}]},{default:n(()=>[a(K,{name:"EmployeeProfileEditRequest",title:t.$trans("employee.edit_request.edit_request"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),a(ae,{appear:"",visibility:!0},{default:n(()=>[a(ee,{"init-url":O,uuid:r($).params.uuid,"module-uuid":r($).params.muuid,onSetItem:J,onRedirectTo:h[0]||(h[0]=f=>r(F).push({name:"EmployeeProfileEditRequest",params:{uuid:y.employee.uuid}}))},{default:n(()=>[e.uuid?(w(),q(x,{key:0},{title:n(()=>[d(o(t.$trans("employee.edit_request.request_by_name",{attribute:e.user.profile.name})),1)]),footer:n(()=>[a(Z)]),default:n(()=>[e.isRejected&&e.comment?(w(),j("div",oe,[a(W,{design:"error",size:"xs"},{default:n(()=>[d(o(e.comment),1)]),_:1})])):g("",!0),ne("dl",ue,[a(u,{label:t.$trans("employee.edit_request.props.status")},{default:n(()=>[a(X,{design:e.status.color},{default:n(()=>[d(o(e.status.label),1)]),_:1},8,["design"])]),_:1},8,["label"]),a(u,{class:"col-span-1 sm:col-span-2"},{default:n(()=>{var f,B,N,I,P,z,E,R,S,H,k,C,V;return[a(A,null,{default:n(()=>[a(l,{label:t.$trans("contact.props.contact_number"),value:e.data.new.contactNumber},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.alternate_contact_number"),value:e.data.new.alternateContactNumber},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.email"),value:e.data.new.email},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.father_name"),value:e.data.new.fatherName},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.mother_name"),value:e.data.new.motherName},null,8,["label","value"]),a(l,{label:r(M),value:e.data.new.uniqueIdNumber1},null,8,["label","value"]),a(l,{label:r(G),value:e.data.new.uniqueIdNumber2},null,8,["label","value"]),a(l,{label:r(U),value:e.data.new.uniqueIdNumber3},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.birth_place"),value:e.data.new.birthPlace},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.nationality"),value:e.data.new.nationality},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.mother_tongue"),value:e.data.new.motherTongue},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.blood_group"),value:t.$trans("list.blood_groups."+e.data.new.bloodGroup)},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.marital_status"),value:t.$trans("list.marital_statuses."+e.data.new.maritalStatus)},null,8,["label","value"]),a(l,{label:t.$trans("contact.religion.religion"),value:e.data.new.religion},null,8,["label","value"]),a(l,{label:t.$trans("contact.category.category"),value:e.data.new.category},null,8,["label","value"]),a(l,{label:t.$trans("contact.caste.caste"),value:e.data.new.caste},null,8,["label","value"])]),_:1}),(f=e.data.new.presentAddress)!=null&&f.addressLine1||(B=e.data.new.presentAddress)!=null&&B.addressLine2||(N=e.data.new.presentAddress)!=null&&N.city||(I=e.data.new.presentAddress)!=null&&I.state||(P=e.data.new.presentAddress)!=null&&P.zipcode||(z=e.data.new.presentAddress)!=null&&z.country?(w(),q(L,{key:0,class:"mt-4"},{legend:n(()=>[d(o(t.$trans("contact.props.present_address")),1)]),default:n(()=>[a(A,null,{default:n(()=>{var i,p,c,m,b,v;return[a(l,{label:t.$trans("contact.props.address.address_line1"),value:(i=e.data.new.presentAddress)==null?void 0:i.addressLine1},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.address_line2"),value:(p=e.data.new.presentAddress)==null?void 0:p.addressLine2},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.city"),value:(c=e.data.new.presentAddress)==null?void 0:c.city},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.state"),value:(m=e.data.new.presentAddress)==null?void 0:m.state},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.zipcode"),value:(b=e.data.new.presentAddress)==null?void 0:b.zipcode},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.country"),value:(v=e.data.new.presentAddress)==null?void 0:v.country},null,8,["label","value"])]}),_:1})]),_:1})):g("",!0),(E=e.data.new.permanentAddress)!=null&&E.sameAsPresentAddress||(R=e.data.new.permanentAddress)!=null&&R.addressLine1||(S=e.data.new.permanentAddress)!=null&&S.addressLine2||(H=e.data.new.permanentAddress)!=null&&H.city||(k=e.data.new.permanentAddress)!=null&&k.state||(C=e.data.new.permanentAddress)!=null&&C.zipcode||(V=e.data.new.permanentAddress)!=null&&V.country?(w(),q(L,{key:1,class:"mt-4"},{legend:n(()=>[d(o(t.$trans("contact.props.permanent_address")),1)]),default:n(()=>[a(A,null,{default:n(()=>{var i,p,c,m,b,v,T;return[a(l,{label:t.$trans("contact.props.same_as_present_address"),value:(i=e.data.new.permanentAddress)!=null&&i.sameAsPresentAddress?t.$trans("general.yes"):t.$trans("general.no")},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.address_line1"),value:(p=e.data.new.permanentAddress)==null?void 0:p.addressLine1},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.address_line2"),value:(c=e.data.new.permanentAddress)==null?void 0:c.addressLine2},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.city"),value:(m=e.data.new.permanentAddress)==null?void 0:m.city},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.state"),value:(b=e.data.new.permanentAddress)==null?void 0:b.state},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.zipcode"),value:(v=e.data.new.permanentAddress)==null?void 0:v.zipcode},null,8,["label","value"]),a(l,{label:t.$trans("contact.props.address.country"),value:(T=e.data.new.permanentAddress)==null?void 0:T.country},null,8,["label","value"])]}),_:1})]),_:1})):g("",!0)]}),_:1}),a(u,{class:"col-span-1 sm:col-span-2"},{default:n(()=>[a(Y,{media:e.media,url:`/app/employees/${y.employee.uuid}/edit-requests/${e.uuid}/`},null,8,["media","url"])]),_:1}),a(u,{label:t.$trans("general.created_at")},{default:n(()=>[d(o(e.createdAt.formatted),1)]),_:1},8,["label"]),a(u,{label:t.$trans("general.updated_at")},{default:n(()=>[d(o(e.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):g("",!0)]),_:1},8,["uuid","module-uuid"])]),_:1})],64)}}});export{ce as default};
