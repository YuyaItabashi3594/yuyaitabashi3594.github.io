import{_ as i}from"./nuxt-link.82f0d744.js";import{m as d,o as r,P as u,w as f,a as t,n as x,g as m,t as p,_ as c,c as a,b as o,j as h,Q as v,F as g}from"./entry.30366a2b.js";const b={class:"w-auto cursor-pointer"},y={class:"text text-center p-2"},$={__name:"NavbarContent",props:{text:String,url:String},setup(s){const n=d();return(e,_)=>{const l=i;return r(),u(l,{to:s.url},{default:f(()=>[t("div",b,[t("div",{class:x(["hover:bg-slate-600 transition duration-75",m(n).path===s.url?"border-b border-gray-400":""])},[t("p",y,p(s.text),1)],2)])]),_:1},8,["to"])}}},k=$,w={},N={class:"flex items-end justify-end"},B=t("div",{class:"w-1/2 flex items-start justify-start p-2"},[t("p",{class:"text text-center ml-12 cursor-pointer"},"nemunyan's room")],-1),j={class:"w-1/2 grid grid-cols-5"};function S(s,n){const e=k;return r(),a("div",N,[B,t("div",j,[o(e,{text:"Home",url:"/"}),o(e,{text:"About",url:"/about"}),o(e,{text:"Works",url:"/works"}),o(e,{text:"Blog",url:"blog"}),o(e,{text:"Walkthrough",url:"walkthrough"})])])}const C=c(w,[["render",S]]);const F={},V={class:"border-t border-gray-500 w-full bg-gray-900 h-auto py-6"},H=h('<div class="grid grid-cols-3"><div class="flex flex-col justify-center px-10 items-start"><p class="footertext self-start">©nemunyan 2023</p></div><div class="self-end text-center footertext"><a href="/">Back to Home</a></div></div>',1),W=[H];function z(s,n){return r(),a("div",V,W)}const A=c(F,[["render",z]]);const D={},E={class:"bg-gray-800 h-full min-h-screen items-center justify-top flex flex-col pb-10"},L={class:"w-full"},P={class:"mt-10"};function Q(s,n){const e=C,_=A;return r(),a(g,null,[t("div",E,[t("div",L,[o(e),t("div",P,[v(s.$slots,"default")])])]),o(_)],64)}const G=c(D,[["render",Q]]);export{G as default};
