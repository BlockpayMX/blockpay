import{j as d,e as n,o as a,c as i,b as t,F as _,r,m as v,t as o,k as h,l as p}from"./index-88fabc75.js";const u={class:"row slideOutLeft"},g={class:"col-lg-6"},f={class:"table py-4"},m=["onClick"],x={class:"td"},w={class:"bg"},b=["src"],y={style:{flex:"0 1 auto"}},V={class:"td"},k=t("svg",{width:"19",height:"22",viewBox:"0 0 19 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.215 0C5.83617 0 3.07167 2.7645 3.07167 6.14333V9.215H0V21.5017H18.43V9.215H15.3583V6.14333C15.3583 2.7645 12.5938 0 9.215 0ZM9.215 3.07167C10.9351 3.07167 12.2867 4.4232 12.2867 6.14333V9.215H6.14333V6.14333C6.14333 4.4232 7.49487 3.07167 9.215 3.07167Z",fill:"#fff"})],-1),$={class:"bg"},C={class:"td"},H=t("svg",{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M0 0V18.43H18.43V0H0ZM2.30375 2.30375H16.1263V9.215L13.8225 6.91125L11.5188 9.215L16.1263 13.8225V16.1263H13.8225L4.6075 6.91125L2.30375 9.215V2.30375Z",fill:"#fff"})],-1),B={class:"bg"},L=t("div",{class:"cta-container mx-auto"},[t("a",{href:"#",class:"btn-cta px-5"}," Mint ")],-1),M={class:"col-lg-4 offset-lg-1"},P={key:0,class:"plan-card"},F=t("div",{class:"plan-overlay"},null,-1),N=["src"],Z={__name:"ParticipationTable",setup(c){d(()=>{s.value=l.value[0]});const s=n(null),l=n([{icon:"fish.svg",title:"Fish",value1:"1200",value2:"2,500.00",badge:"fish.png"},{icon:"dolphin.svg",title:"Dolphin",value1:"600",value2:"10,000.00",badge:"dolphin.png"},{icon:"shark.svg",title:"Shark",value1:"180",value2:"30,000.00",badge:"shark.png"},{icon:"whale.svg",title:"Whale",value1:"20",value2:"130,000.00",badge:"whale.png"}]);return(S,j)=>(a(),i("div",u,[t("div",g,[t("div",f,[(a(!0),i(_,null,r(l.value,e=>(a(),i("div",{class:v(["item",{active:s.value==e}]),onClick:z=>s.value=e},[t("div",x,[t("div",w,[t("div",null,[t("img",{src:`/${e.icon}`,style:{width:"100%"}},null,8,b)]),t("div",y,o(e.title),1)])]),t("div",V,[k,t("div",$,o(e.value1),1)]),t("div",C,[H,t("div",B,o(e.value2),1)])],10,m))),256))]),L]),t("div",M,[s.value?(a(),i("div",P,[F,t("img",{src:`/${s.value.badge}`,style:{width:"100%"}},null,8,N)])):h("",!0)])]))}};const T={class:"container main-content position-relative"},D={class:"row fadeIn"},I=t("div",{class:"col-lg-8 mx-auto text-primary px-0",style:{"padding-top":"50px"}},[t("div",{class:"text-center slideOutRight"},[t("h1",{class:"bp-page-title"}," Fair Participation "),t("p",{class:"bp-page-subtitle"}," 2,000 NFTs granting access to the Blockpay token presale, with $BPAY max bid depending on 4 different tiers. ")])],-1),O={class:"col-lg-10 text-primary mx-auto"},E={__name:"Participation",setup(c){return(s,l)=>(a(),i("div",T,[t("div",D,[I,t("div",O,[p(Z)])])]))}};export{E as default};
