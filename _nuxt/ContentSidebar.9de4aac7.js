import{q as m}from"./query.4ee1e51b.js";import{s as f,g as d,o as n,c as a,F as x,q as y,a as l,t as c,i as h}from"./entry.50ae7971.js";const q={class:"w-1/3 text px-20 text-xl"},w=l("p",null,"タグ一覧",-1),A={__name:"ContentSidebar",props:{page:String},async setup(_){let o,r;const i=_,p=([o,r]=f(()=>m(i.page).only("tags").find()),o=await o,r(),o),u=d(()=>{const e={};for(const s of p){console.log(s);for(const t of s.tags)console.log(t),e[t]?e[t]+=1:e[t]=1}return e});return(e,s)=>(n(),a("div",q,[w,(n(!0),a(x,null,y(h(u),(t,g)=>(n(),a("div",null,[l("p",null,c(g)+"("+c(t)+")",1)]))),256))]))}},S=A;export{S as _};
