import{p as w,r as c,E as v,d as L,h as a,e as t,f as n,b as g,w as r,u as x,o as u,g as m,q as y,s as C,t as k,F as h,i as b,R}from"./index-h3speP7Y.js";const S=w("user",()=>{const l=c(""),o=c(!1),s=c({account:"",password:""});return{currentUser:l,isLogin:o,users:s,login:(i,d)=>{const _=s.value.account==i&&s.value.password==d;console.log(s.value.account,i),console.log(s.value.account==i),console.log(s.value.password==d),console.log(_),_?(v({message:"登录成功",type:"success"}),o.value=!0,l.value=i):v({message:"账号或密码错误!",type:"error"})},logout:()=>{o.value=!1,l.value="",v({message:"退出登录",type:"success"})},register:(i,d)=>{s.value={account:i,password:d},localStorage.setItem("xdclass_vue_users",JSON.stringify(s.value)),localStorage.setItem("xdclass_vue_is_Login",!0),o.value=!0}}},{persist:!0}),B="/vue-edufront/assets/logo-BoxRf433.png",F="/vue-edufront/assets/VIP-ByBymjz-.png",I=w("modal",()=>{const l=c(!1),o=c(!1);return{isRegVisible:l,isLoginVisible:o,switchLoginVisible:()=>{o.value=!o.value},switchRegVisible:()=>{l.value=!l.value}}}),N={style:{"box-shadow":"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","margin-bottom":"10px"}},$={style:{width:"1200px","margin-left":"auto","margin-right":"auto"}},j={style:{display:"flex","align-items":"center",gap:"0.5rem"}},z={style:{display:"flex","align-items":"center","justify-content":"space-between","flex-grow":"1","flex-shrink":"1","flex-basis":"0%"}},E={href:"#"},U={href:"#"},M={href:"#"},O={key:0},q={key:1},G=L({__name:"Header",setup(l){const o=I(),s=S();return c(""),(f,e)=>{const p=g("RouterLink"),i=g("el-icon"),d=g("el-input"),_=g("el-button"),V=g("el-popconfirm");return u(),a("div",N,[t("div",$,[t("div",j,[n(p,{to:"/home"},{default:r(()=>e[0]||(e[0]=[t("img",{style:{height:"4rem",width:"10rem","margin-right":"0.5rem"},src:B},null,-1)])),_:1}),t("div",z,[n(p,{to:"/home"},{default:r(()=>e[1]||(e[1]=[m("首页")])),_:1}),e[4]||(e[4]=t("a",{href:"#"},"课程中心",-1)),e[5]||(e[5]=t("a",{href:"#",style:{display:"flex","align-items":"center","justify-content":"center"}},[t("img",{src:F,style:{width:"1.25rem",height:"1.25rem"}}),t("span",null,"超级会员")],-1)),e[6]||(e[6]=t("a",{href:"#"},"工具",-1)),t("a",E,[e[2]||(e[2]=t("span",null,"自学路线",-1)),n(i,null,{default:r(()=>[n(x(y))]),_:1})]),t("a",U,[e[3]||(e[3]=t("span",null,"一对一辅导",-1)),n(i,null,{default:r(()=>[n(x(y))]),_:1})]),t("a",M,[n(d,{placeholder:"请输入搜索内容",style:{width:"15rem"}},{append:r(()=>[n(i,null,{default:r(()=>[n(x(C))]),_:1})]),_:1})]),e[7]||(e[7]=t("a",{href:"#"},"兑换码",-1)),e[8]||(e[8]=t("a",{href:"#"},"云服务器",-1))]),x(s).isLogin?(u(),a("div",q,[n(V,{title:"是否退出登录?",onConfirm:x(s).logout},{reference:r(()=>[n(_,null,{default:r(()=>[m(k(x(s).users.account),1)]),_:1})]),_:1},8,["onConfirm"])])):(u(),a("div",O,[n(_,{link:"",size:"large",onClick:x(o).switchLoginVisible},{default:r(()=>e[9]||(e[9]=[m("登录")])),_:1},8,["onClick"]),e[11]||(e[11]=t("span",null,"/",-1)),n(_,{link:"",size:"large",onClick:x(o).switchRegVisible},{default:r(()=>e[10]||(e[10]=[m("注册")])),_:1},8,["onClick"])]))])])])}}}),D=(l,o)=>{const s=l.__vccOpts||l;for(const[f,e]of o)s[f]=e;return s},H={class:"footer-container"},J={class:"footer-content"},P={class:"itembox"},T={__name:"Footer",setup(l){const o=c([["加入我们","xxxxxx","xxxxxx","xxxxxx","xxxxxx"],["客服咨询","xxxxxx","xxxxxx","xxxxxx","xxxxxx"],["合作伙伴","xxxxxx","xxxxxx","xxxxxx","xxxxxx"],["社区","xxxxxx","xxxxxx","xxxxxx","xxxxxx"]]);return(s,f)=>(u(),a("div",H,[(u(!0),a(h,null,b(o.value,e=>(u(),a("div",J,[(u(!0),a(h,null,b(e,p=>(u(),a("span",P,[n(x(R),{to:"/"},{default:r(()=>[m(k(p),1)]),_:2},1024)]))),256))]))),256))]))}},K=D(T,[["__scopeId","data-v-856ce70a"]]);export{K as F,D as _,I as a,G as b,S as u};
