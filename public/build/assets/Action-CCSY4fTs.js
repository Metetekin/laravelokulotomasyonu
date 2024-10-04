import{f as P,G as q,m as $,r as m,o as d,q as y,w as h,d as t,e as n,u as s,b as k,I as F,a as A,F as O}from"./app-DCfJDSeM.js";const S={class:"grid grid-cols-3 gap-6"},H={class:"col-span-3 sm:col-span-2"},R={class:"col-span-3 sm:col-span-1"},C={class:"col-span-3 sm:col-span-1"},E={class:"col-span-3 sm:col-span-1"},I={class:"col-span-3 sm:col-span-1"},w={class:"col-span-3 sm:col-span-1"},D={class:"col-span-3 sm:col-span-1"},G={class:"col-span-3 sm:col-span-1"},_={class:"col-span-3 sm:col-span-1"},z={class:"col-span-3 sm:col-span-1"},J={class:"col-span-3 sm:col-span-1"},K={class:"col-span-3 sm:col-span-1"},M={class:"col-span-3 sm:col-span-1"},Q={class:"col-span-3 sm:col-span-1"},W={class:"col-span-3 sm:col-span-1"},X={name:"LibraryBookForm"},Y=Object.assign(X,{setup(L){const c=P(),p={title:"",subTitle:"",author:"",publisher:"",language:"",topic:"",subject:"",yearPublished:"",volume:"",isbnNumber:"",callNumber:"",edition:"",page:"",price:""},v="library/book/",a=q(v),U=$({}),l=$({...p}),i=$({isLoaded:!c.params.uuid}),j=r=>{Object.assign(U,r)},T=r=>{var e,u,b,V,g,o,f,B,N;Object.assign(p,{...r,price:(e=r.price)==null?void 0:e.value,author:((u=r.author)==null?void 0:u.uuid)||"",publisher:((b=r.publisher)==null?void 0:b.uuid)||"",language:((V=r.language)==null?void 0:V.uuid)||"",topic:((g=r.topic)==null?void 0:g.uuid)||""}),Object.assign(l,F(p)),i.author=((o=r.author)==null?void 0:o.name)||"",i.publisher=((f=r.publisher)==null?void 0:f.name)||"",i.language=((B=r.language)==null?void 0:B.name)||"",i.topic=((N=r.topic)==null?void 0:N.name)||"",i.isLoaded=!0};return(r,e)=>{const u=m("BaseInput"),b=m("BaseSelectSearch"),V=m("BaseTextarea"),g=m("FormAction");return d(),y(g,{"pre-requisites":!0,onSetPreRequisites:j,"init-url":v,"init-form":p,form:l,"set-form":T,redirect:"LibraryBook"},{default:h(()=>[t("div",S,[t("div",H,[n(u,{type:"text",modelValue:l.title,"onUpdate:modelValue":e[0]||(e[0]=o=>l.title=o),name:"title",label:r.$trans("library.book.props.title"),error:s(a).title,"onUpdate:error":e[1]||(e[1]=o=>s(a).title=o)},null,8,["modelValue","label","error"])]),t("div",R,[n(u,{type:"text",modelValue:l.subTitle,"onUpdate:modelValue":e[2]||(e[2]=o=>l.subTitle=o),name:"subTitle",label:r.$trans("library.book.props.sub_title"),error:s(a).subTitle,"onUpdate:error":e[3]||(e[3]=o=>s(a).subTitle=o)},null,8,["modelValue","label","error"])]),t("div",C,[i.isLoaded?(d(),y(b,{key:0,name:"author",label:r.$trans("global.select",{attribute:r.$trans("library.book.props.author")}),modelValue:l.author,"onUpdate:modelValue":e[4]||(e[4]=o=>l.author=o),"label-prop":"name","value-prop":"uuid","init-search":i.author,"init-search-key":"name","search-action":"option/list","additional-search-query":{type:"book_author"}},null,8,["label","modelValue","init-search"])):k("",!0)]),t("div",E,[i.isLoaded?(d(),y(b,{key:0,name:"publisher",label:r.$trans("global.select",{attribute:r.$trans("library.book.props.publisher")}),modelValue:l.publisher,"onUpdate:modelValue":e[5]||(e[5]=o=>l.publisher=o),"label-prop":"name","value-prop":"uuid","init-search":i.publisher,"init-search-key":"name","search-action":"option/list","additional-search-query":{type:"book_publisher"}},null,8,["label","modelValue","init-search"])):k("",!0)]),t("div",I,[i.isLoaded?(d(),y(b,{key:0,name:"language",label:r.$trans("global.select",{attribute:r.$trans("library.book.props.language")}),modelValue:l.language,"onUpdate:modelValue":e[6]||(e[6]=o=>l.language=o),"label-prop":"name","value-prop":"uuid","init-search":i.language,"init-search-key":"name","search-action":"option/list","additional-search-query":{type:"book_language"}},null,8,["label","modelValue","init-search"])):k("",!0)]),t("div",w,[i.isLoaded?(d(),y(b,{key:0,name:"topic",label:r.$trans("global.select",{attribute:r.$trans("library.book.props.topic")}),modelValue:l.topic,"onUpdate:modelValue":e[7]||(e[7]=o=>l.topic=o),"label-prop":"name","value-prop":"uuid","init-search":i.topic,"init-search-key":"name","search-action":"option/list","additional-search-query":{type:"book_topic"}},null,8,["label","modelValue","init-search"])):k("",!0)]),t("div",D,[n(u,{type:"text",modelValue:l.subject,"onUpdate:modelValue":e[8]||(e[8]=o=>l.subject=o),name:"subject",label:r.$trans("library.book.props.subject"),error:s(a).subject,"onUpdate:error":e[9]||(e[9]=o=>s(a).subject=o)},null,8,["modelValue","label","error"])]),t("div",G,[n(u,{type:"text",modelValue:l.yearPublished,"onUpdate:modelValue":e[10]||(e[10]=o=>l.yearPublished=o),name:"yearPublished",label:r.$trans("library.book.props.year_published"),error:s(a).yearPublished,"onUpdate:error":e[11]||(e[11]=o=>s(a).yearPublished=o)},null,8,["modelValue","label","error"])]),t("div",_,[n(u,{type:"text",modelValue:l.volume,"onUpdate:modelValue":e[12]||(e[12]=o=>l.volume=o),name:"volume",label:r.$trans("library.book.props.volume"),error:s(a).volume,"onUpdate:error":e[13]||(e[13]=o=>s(a).volume=o)},null,8,["modelValue","label","error"])]),t("div",z,[n(u,{type:"text",modelValue:l.isbnNumber,"onUpdate:modelValue":e[14]||(e[14]=o=>l.isbnNumber=o),name:"isbnNumber",label:r.$trans("library.book.props.isbn_number"),error:s(a).isbnNumber,"onUpdate:error":e[15]||(e[15]=o=>s(a).isbnNumber=o)},null,8,["modelValue","label","error"])]),t("div",J,[n(u,{type:"text",modelValue:l.callNumber,"onUpdate:modelValue":e[16]||(e[16]=o=>l.callNumber=o),name:"callNumber",label:r.$trans("library.book.props.call_number"),error:s(a).callNumber,"onUpdate:error":e[17]||(e[17]=o=>s(a).callNumber=o)},null,8,["modelValue","label","error"])]),t("div",K,[n(u,{type:"text",modelValue:l.edition,"onUpdate:modelValue":e[18]||(e[18]=o=>l.edition=o),name:"edition",label:r.$trans("library.book.props.edition"),error:s(a).edition,"onUpdate:error":e[19]||(e[19]=o=>s(a).edition=o)},null,8,["modelValue","label","error"])]),t("div",M,[n(u,{type:"number",modelValue:l.page,"onUpdate:modelValue":e[20]||(e[20]=o=>l.page=o),name:"page",label:r.$trans("library.book.props.page"),error:s(a).page,"onUpdate:error":e[21]||(e[21]=o=>s(a).page=o)},null,8,["modelValue","label","error"])]),t("div",Q,[n(u,{currency:"",modelValue:l.price,"onUpdate:modelValue":e[22]||(e[22]=o=>l.price=o),name:"price",label:r.$trans("library.book.props.price"),error:s(a).price,"onUpdate:error":e[23]||(e[23]=o=>s(a).price=o)},null,8,["modelValue","label","error"])]),t("div",W,[n(V,{modelValue:l.summary,"onUpdate:modelValue":e[24]||(e[24]=o=>l.summary=o),name:"summary",label:r.$trans("library.book.props.summary"),error:s(a).summary,"onUpdate:error":e[25]||(e[25]=o=>s(a).summary=o)},null,8,["modelValue","label","error"])])])]),_:1},8,["form"])}}}),Z={name:"LibraryBookAction"},ee=Object.assign(Z,{setup(L){const c=P();return(p,v)=>{const a=m("PageHeaderAction"),U=m("PageHeader"),l=m("ParentTransition");return d(),A(O,null,[n(U,{title:p.$trans(s(c).meta.trans,{attribute:p.$trans(s(c).meta.label)}),navs:[{label:p.$trans("library.library"),path:"Library"},{label:p.$trans("library.book.book"),path:"LibraryBookList"}]},{default:h(()=>[n(a,{name:"LibraryBook",title:p.$trans("library.book.book"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),n(l,{appear:"",visibility:!0},{default:h(()=>[n(Y)]),_:1})],64)}}});export{ee as default};
