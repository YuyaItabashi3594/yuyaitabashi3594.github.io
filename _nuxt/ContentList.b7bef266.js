import n from"./ContentQuery.51441dd2.js";import{f as c,A as l,h as f}from"./entry.50ae7971.js";import"./query.4ee1e51b.js";import"./preview.7582ff14.js";import"./utils.7c39451a.js";const u=(r,t)=>f("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),q=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:p,query:a}=r,m={...a||{},path:p||(a==null?void 0:a.path)||"/"};return f(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}});export{q as default};
