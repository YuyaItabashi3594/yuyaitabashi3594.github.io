import{f as h,j as g,k as d,l as _,u as C,m as v,q as w,s as x,v as D,x as r}from"./entry.7a7aefa0.js";import q from"./ContentRenderer.210d5550.js";import S from"./ContentQuery.7d471280.js";import"./ContentRendererMarkdown.94270b77.js";import"./index.a6ef77ff.js";import"./preview.a3711509.js";import"./query.a9f8a600.js";import"./utils.642f3b76.js";const y=(u,e=d())=>{const m=h(u),p=v();g(()=>h(u),(t=m)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),_(()=>C(n))},{immediate:!0})},k=w({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=x(),{tag:m,excerpt:p,path:f,query:t,head:n}=u,c={...t||{},path:f||(t==null?void 0:t.path)||D(d().path),find:"one"},s=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(S,c,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:a})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:a,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(q,{value:o,excerpt:p,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):s("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),T=k;export{T as default};