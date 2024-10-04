import{m as j,a as y,e as t,w as e,u as n,F as k,j as g,r as i,o as d,q as v,d as _,s as r,t as s,v as $,b,i as F,f as O,h as z}from"./app-DCfJDSeM.js";const E={class:"space-y-2"},U=["innerHTML"],G={class:"space-y-4"},J={key:1,class:"px-4 py-2"},K={class:"px-4 py-2"},Q={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},W={name:"InventoryStockPurchaseShow"},Z=Object.assign(W,{setup(X){F();const m=O(),P=z(),a=g("$trans");g("emitter");const S={},L="inventory/stockPurchase/",V=[{key:"name",label:a("inventory.stock_item.props.name"),visibility:!0},{key:"quantity",label:a("inventory.stock_purchase.props.quantity"),visibility:!0},{key:"unitPrice",label:a("inventory.stock_purchase.props.unit_price"),visibility:!0},{key:"amount",label:a("inventory.stock_purchase.props.amount"),visibility:!0}],o=j({...S}),w=f=>{Object.assign(o,f)};return(f,u)=>{const I=i("PageHeaderAction"),x=i("PageHeader"),c=i("ListItemView"),B=i("ListContainerVertical"),h=i("BaseCard"),T=i("TextMuted"),p=i("DataCell"),C=i("DataRow"),D=i("SimpleTable"),H=i("BaseAlert"),N=i("ListMedia"),A=i("BaseDataView"),M=i("DetailLayoutVertical"),q=i("ShowItem"),R=i("ParentTransition");return d(),y(k,null,[t(x,{title:n(a)(n(m).meta.trans,{attribute:n(a)(n(m).meta.label)}),navs:[{label:n(a)("inventory.inventory"),path:"Inventory"},{label:n(a)("inventory.stock_purchase.stock_purchase"),path:"InventoryStockPurchaseList"}]},{default:e(()=>[t(I,{name:"InventoryStockPurchase",title:n(a)("inventory.stock_purchase.stock_purchase"),actions:["list"]},null,8,["title"])]),_:1},8,["title","navs"]),t(R,{appear:"",visibility:!0},{default:e(()=>[t(q,{"init-url":L,uuid:n(m).params.uuid,onSetItem:w,onRedirectTo:u[0]||(u[0]=l=>n(P).push({name:"InventoryStockPurchase"}))},{default:e(()=>[o.uuid?(d(),v(M,{key:0},{detail:e(()=>[_("div",E,[t(h,{"no-padding":"","no-content-padding":""},{title:e(()=>[r(s(n(a)("inventory.stock_purchase.props.code_number"))+" "+s(o.codeNumber),1)]),action:e(()=>u[1]||(u[1]=[])),default:e(()=>[t(B,null,{default:e(()=>[t(c,{label:n(a)("inventory.inventory")},{default:e(()=>{var l;return[r(s((l=o.inventory)==null?void 0:l.name),1)]}),_:1},8,["label"]),t(c,{label:n(a)("inventory.stock_purchase.props.voucher_number")},{default:e(()=>[r(s(o.voucherNumber),1)]),_:1},8,["label"]),t(c,{label:n(a)("inventory.vendor")},{default:e(()=>[r(s(o.vendor.name)+" ("+s(o.vendor.type.name)+") ",1)]),_:1},8,["label"]),t(c,{label:n(a)("inventory.place")},{default:e(()=>{var l;return[r(s(((l=o.place)==null?void 0:l.fullName)||"-"),1)]}),_:1},8,["label"]),t(c,{label:n(a)("inventory.stock_purchase.props.date")},{default:e(()=>[r(s(o.date.formatted),1)]),_:1},8,["label"]),t(c,{label:n(a)("inventory.stock_purchase.props.total")},{default:e(()=>[r(s(o.total.formatted),1)]),_:1},8,["label"]),t(c,{label:n(a)("inventory.stock_purchase.props.description")},{default:e(()=>[_("div",{innerHTML:o.description},null,8,U)]),_:1},8,["label"]),t(c,{label:n(a)("general.created_at")},{default:e(()=>[r(s(o.createdAt.formatted),1)]),_:1},8,["label"]),t(c,{label:n(a)("general.updated_at")},{default:e(()=>[r(s(o.updatedAt.formatted),1)]),_:1},8,["label"])]),_:1})]),_:1})])]),default:e(()=>[_("div",G,[t(h,{"no-padding":"","no-content-padding":""},{title:e(()=>[r(s(n(a)("inventory.stock_purchase.props.items")),1)]),footer:e(()=>u[2]||(u[2]=[])),default:e(()=>[o.items.length>0?(d(),v(D,{key:0,header:V},{default:e(()=>[(d(!0),y(k,null,$(o.items,l=>(d(),v(C,{key:l.uuid},{default:e(()=>[t(p,{name:"name"},{default:e(()=>[r(s(l.item.name)+" ",1),t(T,{block:""},{default:e(()=>[r(s(l.description),1)]),_:2},1024)]),_:2},1024),t(p,{name:"quantity"},{default:e(()=>[r(s(l.quantity),1)]),_:2},1024),t(p,{name:"unitPrice"},{default:e(()=>[r(s(l.unitPrice.formatted),1)]),_:2},1024),t(p,{name:"amount"},{default:e(()=>[r(s(l.amount.formatted),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):b("",!0),o.items.length===0?(d(),y("div",J,[t(H,{design:"info",size:"xs"},{default:e(()=>[r(s(n(a)("general.errors.record_not_found")),1)]),_:1})])):b("",!0),_("div",K,[_("dl",Q,[t(A,{class:"col-span-1 sm:col-span-2"},{default:e(()=>[t(N,{media:o.media,url:`/app/inventory/stock-purchases/${o.uuid}/`},null,8,["media","url"])]),_:1})])])]),_:1})])]),_:1})):b("",!0)]),_:1},8,["uuid"])]),_:1})],64)}}});export{Z as default};
