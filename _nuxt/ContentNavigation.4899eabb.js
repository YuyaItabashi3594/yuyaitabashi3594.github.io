import{q as f,e as v,j as g,u as d}from"./query.70571789.js";import{m as l,y as h,q as _,z as y,A as w,B as C,s as P,x as r}from"./entry.aaa469ab.js";import{h as p,u as $}from"./preview.f4b67e9c.js";import{_ as N}from"./nuxt-link.9a11c4b3.js";import{w as c,s as j,u as T}from"./utils.26b3a0bb.js";const x=async e=>{const{content:t}=l().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):c(`/navigation/${p(a)}.${t.integrity}.json`);if(j())return(await h(()=>import("./client-db.18b50b3c.js"),["./client-db.18b50b3c.js","./entry.aaa469ab.js","./query.70571789.js","./preview.f4b67e9c.js","./utils.26b3a0bb.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:g(a),previewToken:$().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},O=_({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=y(e),a=w(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:n}=T();return{navigation:n}}const{data:s}=await d(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=P(),{navigation:a}=e,s=o=>r(N,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),m=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{O as default};
