const t={pageItems:[],items:[],all:!1,global:!1};function a(i){return!!i.pageItems.every(e=>i.items.includes(e))}function l(i,e){return e.pageItems.forEach(s=>{i&&!e.items.includes(s)?e.items.push(s):i||e.items.splice(e.items.indexOf(s),1)}),e.items}export{a,t as i,l as t};
