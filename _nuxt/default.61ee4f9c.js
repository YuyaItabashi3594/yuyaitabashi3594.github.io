import{_ as i}from"./nuxt-link.487ff6a0.js";import{q as d,o as r,c as u,w as f,S as t,U as x,u as m,V as p,k as c,l as a,R as o,Y as h,r as v,Z as g}from"./entry.07b59a8f.js";const y={class:"w-auto cursor-pointer"},b={class:"text text-center p-2"},$={__name:"NavbarContent",props:{text:String,url:String},setup(s){const n=d();return(e,_)=>{const l=i;return r(),u(l,{to:s.url},{default:f(()=>[t("div",y,[t("div",{class:x(["hover:bg-slate-600 transition duration-75",m(n).path===s.url?"border-b border-gray-400":""])},[t("p",b,p(s.text),1)],2)])]),_:1},8,["to"])}}},k={},w={class:"flex items-end justify-end"},N=t("div",{class:"w-1/2 flex items-start justify-start p-2"},[t("p",{class:"text text-center ml-12 cursor-pointer"},"nemunyan's room")],-1),B={class:"w-1/2 grid grid-cols-5"};function S(s,n){const e=$;return r(),a("div",w,[N,t("div",B,[o(e,{text:"Home",url:"/"}),o(e,{text:"About",url:"/about"}),o(e,{text:"Works",url:"/works"}),o(e,{text:"Blog",url:"blog"}),o(e,{text:"Walkthrough",url:"walkthrough"})])])}const j=c(k,[["render",S]]);const C={},V={class:"border-t border-gray-500 w-full bg-gray-900 h-auto py-6"},F=h('<div class="grid grid-cols-3"><div class="flex flex-col justify-center px-10 items-start"><p class="footertext self-start">©nemunyan 2023</p></div><div class="self-end text-center footertext"><a href="/">Back to Home</a></div></div>',1),H=[F];function R(s,n){return r(),a("div",V,H)}const W=c(C,[["render",R]]);const q={},z={class:"bg-gray-800 h-full min-h-screen items-center justify-top flex flex-col pb-10"},A={class:"w-full"},D={class:"mt-10"};function E(s,n){const e=j,_=W;return r(),a(g,null,[t("div",z,[t("div",A,[o(e),t("div",D,[v(s.$slots,"default")])])]),o(_)],64)}const Y=c(q,[["render",E]]);export{Y as default};
