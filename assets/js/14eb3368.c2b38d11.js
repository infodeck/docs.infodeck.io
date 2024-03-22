"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[6969],{71243:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(58168),r=a(96540),l=a(20053),i=a(17559),s=a(84142),c=a(99169),o=a(75489),m=a(21312),d=a(86025);function u(e){return r.createElement("svg",(0,n.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function f(){const e=(0,d.default)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.default,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:b.breadcrumbHomeIcon})))}const h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:a,isLast:n}=e;const l="breadcrumbs__link";return n?r.createElement("span",{className:l,itemProp:"name"},t):a?r.createElement(o.default,{className:l,href:a,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function p(e){let{children:t,active:a,index:i,addMicrodata:s}=e;return r.createElement("li",(0,n.A)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.default)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){const e=(0,s.OF)(),t=(0,c.Dt)();return e?r.createElement("nav",{className:(0,l.default)(i.G.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map(((t,a)=>{const n=a===e.length-1;return r.createElement(p,{key:a,active:n,index:a,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:n},t.label))})))):null}},34136:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(96540),r=a(69024),l=a(84142),i=a(86025),s=a(20053),c=a(75489),o=a(16654),m=a(21312);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:a}=e;return n.createElement(c.default,{href:t,className:(0,s.default)("card padding--lg",d.cardContainer)},a)}function b(e){let{href:t,icon:a,title:r,description:l}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,s.default)("text--truncate",d.cardTitle),title:r},a," ",r),l&&n.createElement("p",{className:(0,s.default)("text--truncate",d.cardDescription),title:l},l))}function f(e){let{item:t}=e;const a=(0,l._o)(t);return a?n.createElement(b,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.cC)(t.docId??void 0);return n.createElement(b,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const a=(0,l.$S)();return n.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return n.createElement(p,e);const r=(0,l.d1)(t);return n.createElement("section",{className:(0,s.default)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}var E=a(86929),N=a(51878),_=a(4267),T=a(71243),k=a(51107);const L={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function A(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function x(e){let{categoryGeneratedIndex:t}=e;const a=(0,l.$S)();return n.createElement("div",{className:L.generatedIndexPage},n.createElement(N.default,null),n.createElement(T.default,null),n.createElement(_.default,null),n.createElement("header",null,n.createElement(k.A,{as:"h1",className:L.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(g,{items:a.items,className:L.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(E.A,{previous:t.navigation.previous,next:t.navigation.next})))}function y(e){return n.createElement(n.Fragment,null,n.createElement(A,e),n.createElement(x,e))}},86929:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(58168),r=a(96540),l=a(21312),i=a(20053),s=a(75489);function c(e){const{permalink:t,title:a,subLabel:n,isNext:l}=e;return r.createElement(s.default,{className:(0,i.default)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.A)({},t,{subLabel:r.createElement(l.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.A)({},a,{subLabel:r.createElement(l.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4267:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(96540),r=a(20053),l=a(21312),i=a(17559),s=a(32252);function c(e){let{className:t}=e;const a=(0,s.r)();return a.badge?n.createElement("span",{className:(0,r.default)(t,i.G.docs.docVersionBadge,"badge badge--secondary")},n.createElement(l.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},51878:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(96540),r=a(20053),l=a(44586),i=a(75489),s=a(21312),c=a(44070),o=a(17559),m=a(55597),d=a(32252);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function f(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.default,{to:a,onClick:r},n.createElement(s.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:i}}=(0,l.default)(),{pluginId:s}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,m.g1)(s),{latestDocSuggestion:u,latestVersionSuggestion:h}=(0,c.HW)(s),v=u??(p=h).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.default)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(f,{versionLabel:h.label,to:v.path,onClick:()=>d(h.name)})))}function v(e){let{className:t}=e;const a=(0,d.r)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);