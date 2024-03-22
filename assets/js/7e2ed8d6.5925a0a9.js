(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[4650],{45401:(e,t,o)=>{"use strict";o.r(t),o.d(t,{Collapsible:()=>s.N,ErrorBoundaryError:()=>A.bq,ErrorBoundaryTryAgainButton:()=>A.a2,ErrorCauseBoundary:()=>A.k2,HtmlClassNameProvider:()=>f.e3,NavbarSecondaryMenuFiller:()=>m.GX,PageMetadata:()=>f.be,ReactContextError:()=>d.dV,SkipToContentFallbackId:()=>x.j,SkipToContentLink:()=>x.K,ThemeClassNames:()=>u.G,composeProviders:()=>d.fM,createStorageSlot:()=>r.Wf,duplicates:()=>k.X,filterDocCardListItems:()=>i.d1,isMultiColumnFooterLinks:()=>b.C,isRegexpStringMatch:()=>v.G,listStorageKeys:()=>r.Eo,listTagsByLetters:()=>h.Q,prefersReducedMotion:()=>c.O,processAdmonitionProps:()=>E,translateTagsPageTitle:()=>h.b,uniq:()=>k.s,useCollapsible:()=>s.u,useColorMode:()=>p.G,useContextualSearchFilters:()=>a.af,useCurrentSidebarCategory:()=>i.$S,useDocsPreferredVersion:()=>T.g1,useEvent:()=>d._q,useIsomorphicLayoutEffect:()=>d.Es,usePluralForm:()=>l.W,usePrevious:()=>d.ZC,usePrismTheme:()=>w.A,useSearchLinkCreator:()=>y.w,useSearchQueryString:()=>y.b,useStorageSlot:()=>r.Dv,useThemeConfig:()=>n.p,useWindowSize:()=>g.l});var n=o(6342),r=o(89466),a=o(2967),i=o(84142),l=o(53465),s=o(41422),u=o(17559),c=o(53109),d=o(89532),f=o(69024),p=o(95293),m=o(75600),g=o(24581),h=o(26820),y=o(24255),b=o(53106),v=o(91252),k=o(31682),w=o(26058),T=o(55597),_=o(96540);function E(e){const{mdxAdmonitionTitle:t,rest:o}=function(e){const t=_.Children.toArray(e),o=t.find((e=>_.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),n=_.createElement(_.Fragment,null,t.filter((e=>e!==o)));return{mdxAdmonitionTitle:o?.props.children,rest:n}}(e.children),n=e.title??t;return{...e,...n&&{title:n},children:o}}var x=o(75236),A=o(12181)},26820:(e,t,o)=>{"use strict";o.d(t,{Q:()=>a,b:()=>r});var n=o(21312);const r=()=>(0,n.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function a(e){const t={};return Object.values(e).forEach((e=>{const o=function(e){return e[0].toUpperCase()}(e.label);t[o]??=[],t[o].push(e)})),Object.entries(t).sort(((e,t)=>{let[o]=e,[n]=t;return o.localeCompare(n)})).map((e=>{let[t,o]=e;return{letter:t,tags:o.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}},53465:(e,t,o)=>{"use strict";o.d(t,{W:()=>c});var n=o(96540),r=o(44586),a=o(96763);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function c(){const e=u();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&a.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),i=o.pluralForms.indexOf(r);return n[Math.min(i,n.length-1)]}(o,t,e)}}},69016:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(96540)),a=n(o(4213));t.default=function(e){let{url:t,proxy:o}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,o){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(o(96540)),a=o(45401),i=n(o(86025)),l=n(o(41653));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:o,darkLogo:n}=e,s=()=>"dark"===t?n?.altText??o?.altText:o?.altText,u=(0,i.default)(o?.url),c=(0,i.default)(n?.url);return o&&n?r.default.createElement(l.default,{alt:s(),sources:{light:u,dark:c},className:"openapi__logo"}):o||n?r.default.createElement(l.default,{alt:s(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},69776:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var n=o(58168),r=(o(96540),o(15680)),a=(o(43905),o(23397)),i=o(19365),l=o(69016),s=o.n(l);const u={id:"infodeck-io",title:"Infodeck.io",description:"Infodeck.io - API documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},c=void 0,d={unversionedId:"api/rest/infodeck-io",id:"api/rest/infodeck-io",title:"Infodeck.io",description:"Infodeck.io - API documentation",source:"@site/docs/api/rest/infodeck-io.info.mdx",sourceDirName:"api/rest",slug:"/api/rest/infodeck-io",permalink:"/api/rest/infodeck-io",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"infodeck-io",title:"Infodeck.io",description:"Infodeck.io - API documentation",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null}},f={},p=[],m={toc:p},g="wrapper";function h(e){let{components:t,...o}=e;return(0,r.yg)(g,(0,n.A)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 1.0.0"),(0,r.yg)(s(),{url:"https://github.com/infodeck/docs.infodeck.io/blob/main/examples/api.json",proxy:void 0,mdxType:"Export"}),(0,r.yg)("h1",{className:"openapi__heading"},"Infodeck.io"),(0,r.yg)("p",null,"Infodeck.io - API documentation"),(0,r.yg)("div",{style:{marginBottom:"2rem"}},(0,r.yg)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,r.yg)(a.default,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,r.yg)(i.default,{label:"HTTP: Bearer Auth",value:"user",mdxType:"TabItem"},(0,r.yg)("p",null,"Get your API token via POST /authentications/tokens"),(0,r.yg)("div",null,(0,r.yg)("table",null,(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Security Scheme Type:"),(0,r.yg)("td",null,"http")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"HTTP Authorization Scheme:"),(0,r.yg)("td",null,"bearer")),(0,r.yg)("tr",null,(0,r.yg)("th",null,"Bearer format:"),(0,r.yg)("td",null,"JWT")))))))))}h.isMDXComponent=!0},4213:function(e,t,o){var n,r,a,i=o(96763);r=[],void 0===(a="function"==typeof(n=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(i.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function n(e,t,o){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){u(n.response,t,o)},n.onerror=function(){i.error("could not download file")},n.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof o.g&&o.g.global===o.g?o.g:void 0,s=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,t,o){var i=l.URL||l.webkitURL,s=document.createElement("a");t=t||e.name||"download",s.download=t,s.rel="noopener","string"==typeof e?(s.href=e,s.origin===location.origin?a(s):r(s.href)?n(e,t,o):a(s,s.target="_blank")):(s.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(s.href)}),4e4),setTimeout((function(){a(s)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,o,i){if(o=o||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,i),o);else if(r(e))n(e,o,i);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout((function(){a(l)}))}}:function(e,t,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return n(e,t,o);var a="application/octet-stream"===e.type,i=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&i||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=l.URL||l.webkitURL,f=d.createObjectURL(e);r?r.location=f:location.href=f,r=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});l.saveAs=u.saveAs=u,e.exports=u})?n.apply(t,r):n)||(e.exports=a)}}]);