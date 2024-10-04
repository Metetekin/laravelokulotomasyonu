import{g as I,G as ie,m as O,l as pe,a as J,e as t,w as s,u as i,F as me,r as n,o as m,q as A,s as d,t as u,b as g,d as q,j as ce,i as be,f as ve,h as $e}from"./app-DCfJDSeM.js";const fe={key:0,class:"mb-4"},ye={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},we={class:"grid grid-cols-3 gap-6"},ge={class:"col-span-3 sm:col-span-1"},_e={class:"col-span-3"},Ae={name:"EmployeeEditRequestShow"},Be=Object.assign(Ae,{setup(qe){ce("emitter"),be();const L=ve(),K=$e(),Q={},E={status:"",comment:""},B="employee/editRequest/",W=I("contact.uniqueIdNumber1Label"),X=I("contact.uniqueIdNumber2Label"),Y=I("contact.uniqueIdNumber3Label"),_=ie(B),c=O({...E}),N=pe(!1),e=O({...Q}),Z=a=>{Object.assign(e,a)},x=()=>{N.value=!0};return(a,r)=>{const ee=n("PageHeaderAction"),ae=n("PageHeader"),te=n("BaseAlert"),le=n("BaseBadge"),p=n("BaseDataView"),l=n("HorizontalListItem"),h=n("HorizontalList"),R=n("BaseFieldset"),se=n("ListMedia"),V=n("BaseCard"),ne=n("BaseSelect"),re=n("BaseTextarea"),oe=n("FormAction"),de=n("ShowItem"),ue=n("ParentTransition");return m(),J(me,null,[t(ae,{title:a.$trans(i(L).meta.trans,{attribute:a.$trans(i(L).meta.label)}),navs:[{label:a.$trans("employee.employee"),path:"Employee"},{label:a.$trans("employee.edit_request.edit_request"),path:"EmployeeEditRequestList"}]},{default:s(()=>[t(ee,{name:"EmployeeEditRequest",title:a.$trans("employee.edit_request.edit_request"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(ue,{appear:"",visibility:!0},{default:s(()=>[t(de,{"init-url":B,uuid:i(L).params.uuid,onSetItem:Z,onRedirectTo:r[4]||(r[4]=o=>i(K).push({name:"EmployeeEditRequest"})),refresh:N.value,onRefreshed:r[5]||(r[5]=o=>N.value=!1)},{default:s(()=>[e.uuid?(m(),A(V,{key:0},{title:s(()=>[d(u(e.employee.name),1)]),default:s(()=>[e.isRejected&&e.comment?(m(),J("div",fe,[t(te,{design:"error",size:"xs"},{default:s(()=>[d(u(e.comment),1)]),_:1})])):g("",!0),q("dl",ye,[t(p,{label:a.$trans("employee.admission.props.code_number")},{default:s(()=>[d(u(e.employee.codeNumber)+" ",1),t(le,{design:e.status.color},{default:s(()=>[d(u(e.status.label),1)]),_:1},8,["design"])]),_:1},8,["label"]),t(p,{label:a.$trans("contact.props.birth_date")},{default:s(()=>[d(u(e.employee.birthDate.formatted),1)]),_:1},8,["label"]),t(p,{label:a.$trans("employee.designation.designation")},{default:s(()=>[d(u(e.employee.designation+" "+e.employee.department),1)]),_:1},8,["label"]),t(p,{label:a.$trans("employee.edit_request.request_by")},{default:s(()=>[d(u(e.user.profile.name),1)]),_:1},8,["label"]),t(p,{class:"col-span-1 sm:col-span-2"},{default:s(()=>{var o,z,S,k,P,F,H,j,C,T,U,D,G;return[t(h,null,{default:s(()=>[t(l,{label:a.$trans("contact.props.contact_number"),value:e.data.new.contactNumber},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.alternate_contact_number"),value:e.data.new.alternateContactNumber},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.email"),value:e.data.new.email},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.father_name"),value:e.data.new.fatherName},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.mother_name"),value:e.data.new.motherName},null,8,["label","value"]),t(l,{label:i(W),value:e.data.new.uniqueIdNumber1},null,8,["label","value"]),t(l,{label:i(X),value:e.data.new.uniqueIdNumber2},null,8,["label","value"]),t(l,{label:i(Y),value:e.data.new.uniqueIdNumber3},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.birth_place"),value:e.data.new.birthPlace},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.nationality"),value:e.data.new.nationality},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.mother_tongue"),value:e.data.new.motherTongue},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.blood_group"),value:a.$trans("list.blood_groups."+e.data.new.bloodGroup)},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.marital_status"),value:a.$trans("list.marital_statuses."+e.data.new.maritalStatus)},null,8,["label","value"]),t(l,{label:a.$trans("contact.religion.religion"),value:e.data.new.religion},null,8,["label","value"]),t(l,{label:a.$trans("contact.category.category"),value:e.data.new.category},null,8,["label","value"]),t(l,{label:a.$trans("contact.caste.caste"),value:e.data.new.caste},null,8,["label","value"])]),_:1}),(o=e.data.new.presentAddress)!=null&&o.addressLine1||(z=e.data.new.presentAddress)!=null&&z.addressLine2||(S=e.data.new.presentAddress)!=null&&S.city||(k=e.data.new.presentAddress)!=null&&k.state||(P=e.data.new.presentAddress)!=null&&P.zipcode||(F=e.data.new.presentAddress)!=null&&F.country?(m(),A(R,{key:0,class:"mt-4"},{legend:s(()=>[d(u(a.$trans("contact.props.present_address")),1)]),default:s(()=>[t(h,null,{default:s(()=>{var b,v,$,f,y,w;return[t(l,{label:a.$trans("contact.props.address.address_line1"),value:(b=e.data.new.presentAddress)==null?void 0:b.addressLine1},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.address_line2"),value:(v=e.data.new.presentAddress)==null?void 0:v.addressLine2},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.city"),value:($=e.data.new.presentAddress)==null?void 0:$.city},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.state"),value:(f=e.data.new.presentAddress)==null?void 0:f.state},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.zipcode"),value:(y=e.data.new.presentAddress)==null?void 0:y.zipcode},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.country"),value:(w=e.data.new.presentAddress)==null?void 0:w.country},null,8,["label","value"])]}),_:1})]),_:1})):g("",!0),(H=e.data.new.permanentAddress)!=null&&H.sameAsPresentAddress||(j=e.data.new.permanentAddress)!=null&&j.addressLine1||(C=e.data.new.permanentAddress)!=null&&C.addressLine2||(T=e.data.new.permanentAddress)!=null&&T.city||(U=e.data.new.permanentAddress)!=null&&U.state||(D=e.data.new.permanentAddress)!=null&&D.zipcode||(G=e.data.new.permanentAddress)!=null&&G.country?(m(),A(R,{key:1,class:"mt-4"},{legend:s(()=>[d(u(a.$trans("contact.props.permanent_address")),1)]),default:s(()=>[t(h,null,{default:s(()=>{var b,v,$,f,y,w,M;return[t(l,{label:a.$trans("contact.props.same_as_present_address"),value:(b=e.data.new.permanentAddress)!=null&&b.sameAsPresentAddress?a.$trans("general.yes"):a.$trans("general.no")},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.address_line1"),value:(v=e.data.new.permanentAddress)==null?void 0:v.addressLine1},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.address_line2"),value:($=e.data.new.permanentAddress)==null?void 0:$.addressLine2},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.city"),value:(f=e.data.new.permanentAddress)==null?void 0:f.city},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.state"),value:(y=e.data.new.permanentAddress)==null?void 0:y.state},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.zipcode"),value:(w=e.data.new.permanentAddress)==null?void 0:w.zipcode},null,8,["label","value"]),t(l,{label:a.$trans("contact.props.address.country"),value:(M=e.data.new.permanentAddress)==null?void 0:M.country},null,8,["label","value"])]}),_:1})]),_:1})):g("",!0)]}),_:1}),t(p,{class:"col-span-1 sm:col-span-2"},{default:s(()=>[t(se,{media:e.media,url:`/app/employee/edit-requests/${e.uuid}/`},null,8,["media","url"])]),_:1}),t(p,{label:a.$trans("general.created_at")},{default:s(()=>[d(u(e.createdAt.formatted),1)]),_:1},8,["label"]),t(p,{label:a.$trans("general.updated_at")},{default:s(()=>[d(u(e.updatedAt.formatted),1)]),_:1},8,["label"])])]),_:1})):g("",!0),e.uuid&&e.status.value=="pending"?(m(),A(V,{key:1},{title:s(()=>[d(u(a.$trans("employee.edit_request.props.action")),1)]),default:s(()=>[t(oe,{"no-card":"","keep-adding":!1,"init-url":B,uuid:e.uuid,"no-data-fetch":!0,action:"action","init-form":E,form:c,"after-submit":x},{default:s(()=>[q("div",we,[q("div",ge,[t(ne,{name:"status",label:a.$trans("global.select",{attribute:a.$trans("contact.verification.props.status")}),modelValue:c.status,"onUpdate:modelValue":r[0]||(r[0]=o=>c.status=o),options:[{value:"approve",label:a.$trans("employee.edit_request.statuses.approve")},{value:"reject",label:a.$trans("employee.edit_request.statuses.reject")}],error:i(_).status,"onUpdate:error":r[1]||(r[1]=o=>i(_).status=o)},null,8,["label","modelValue","options","error"])]),q("div",_e,[t(re,{modelValue:c.comment,"onUpdate:modelValue":r[2]||(r[2]=o=>c.comment=o),name:"comment",label:a.$trans("employee.edit_request.props.comment"),error:i(_).comment,"onUpdate:error":r[3]||(r[3]=o=>i(_).comment=o)},null,8,["modelValue","label","error"])])])]),_:1},8,["uuid","form"])]),_:1})):g("",!0)]),_:1},8,["uuid","refresh"])]),_:1})],64)}}});export{Be as default};
