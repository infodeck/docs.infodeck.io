"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[3366],{57145:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>g,default:()=>q,frontMatter:()=>u,metadata:()=>v,toc:()=>f});var s=t(58168),i=(t(96540),t(15680)),m=t(91366),l=(t(6050),t(57742)),n=t.n(l),d=(t(67792),t(27362)),r=t(36683),p=t(81124),c=t(60674),o=t(23397),y=(t(26651),t(77675),t(19365));const u={id:"lns-device-get-devices",title:"Get Devices",description:"Get devices",sidebar_label:"Get Devices",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zgQ/SsEL20B13KDnoxFgbRpiywWbbFO0UNgFLQ0jthIpEqOjBqC/ntnKMmmIyW72c3JFGc473E+Ht3IDHzqdIXaGrmUHwFFBjudgpczaStwii2XGdn++rT6fhFsc3K7OHihuvFyec120e3K9UxWyqkSEBzbGmnog2IgGGWQws3uAF/lIC4vhN2KzmVOHpoNlcKc1g5+1toB8UBXw0z6NIdSyWUjcV9xZI9OmxvZtrMDmKqqQqfDBe5HjPyeApby977WD+B1CX4KKLvdesBJqM40AfezBreXE/FNXW7AkaXURpd1KZcLDrxVdYG0bmOKW1V4iIgUutTTPILl/9F4RWv1q18vYlJnU6zW3RZ4fGuzPUUOPr6yxlO/EtDZYsE/qTXUa8jLqAOSH565N2NidvMDUr5k5XgwUHfRMoWxl3JO8b00Qun/xemuWcZVnslCeVwBmHMcZ4fMKkW9UwgrVFjHSBtrC1CGGyXKzfWxL6PAozBrPoUWVfHO1mYK+W5Uvv7JEQrBTq+7LI87oi+OyJUXxqKgbJTa+zB94dzr+855W7sU+KB5hmJLaFl35Oxs+og2VU2CRhQDmjY7VWg+Q4c8pLXTuA/yVHu62vJ6zc1DqpVbFrybMFphPJcyKYxPOm3ySTPoWJtErUP7J5LTJr2UJqoouNXB7QY9rF1BQXPEyi8TDjLXZmszSG/n2tK3lkxl4LjiXuwapmN6qApHGKYoFB+UC9PTLT5YVyqqovzz29VoPFns95RScf7lUqC9BSN2Wokvn1dXIlE15jQdh6sFuw+ZY6aBgsaCMS+PzEcYkU28DECZTeuSIoe45M8p6XxfzRfzBdezsh5LFaaw1xemenxxTiCiQb7zfPUpQviFSVUokh2KHRLf9FW9llRV9uzqSqtl9ELFpWXT+D0ZkLi+VK6ceHPQptkoD19d0ba83UkdVz3TXm2Kg1Q9cJP7JHzyTrewjx8DavKanSQL9OMgJ9T6AcRB9Y+Aa/5wmhEfeeHnf/ei8kJM/ReYZDFIrtnHJAZ2h0o+Lg2TRO78RfgPbE6b5wko/UOFHmbTvwXtmjxzUFlQv6Y3nqcpVHFdR8/jiUx+fM/Ssjm8tawc8XN0qkgBZ5LcH2+Dg7hipXlzLCN/MtO2/Q1hqZ4w",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},g=void 0,v={unversionedId:"api/rest/lns-device-get-devices",id:"api/rest/lns-device-get-devices",title:"Get Devices",description:"Get devices",source:"@site/docs/api/rest/lns-device-get-devices.api.mdx",sourceDirName:"api/rest",slug:"/api/rest/lns-device-get-devices",permalink:"/api/rest/lns-device-get-devices",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lns-device-get-devices",title:"Get Devices",description:"Get devices",sidebar_label:"Get Devices",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zgQ/SsEL20B13KDnoxFgbRpiywWbbFO0UNgFLQ0jthIpEqOjBqC/ntnKMmmIyW72c3JFGc473E+Ht3IDHzqdIXaGrmUHwFFBjudgpczaStwii2XGdn++rT6fhFsc3K7OHihuvFyec120e3K9UxWyqkSEBzbGmnog2IgGGWQws3uAF/lIC4vhN2KzmVOHpoNlcKc1g5+1toB8UBXw0z6NIdSyWUjcV9xZI9OmxvZtrMDmKqqQqfDBe5HjPyeApby977WD+B1CX4KKLvdesBJqM40AfezBreXE/FNXW7AkaXURpd1KZcLDrxVdYG0bmOKW1V4iIgUutTTPILl/9F4RWv1q18vYlJnU6zW3RZ4fGuzPUUOPr6yxlO/EtDZYsE/qTXUa8jLqAOSH565N2NidvMDUr5k5XgwUHfRMoWxl3JO8b00Qun/xemuWcZVnslCeVwBmHMcZ4fMKkW9UwgrVFjHSBtrC1CGGyXKzfWxL6PAozBrPoUWVfHO1mYK+W5Uvv7JEQrBTq+7LI87oi+OyJUXxqKgbJTa+zB94dzr+855W7sU+KB5hmJLaFl35Oxs+og2VU2CRhQDmjY7VWg+Q4c8pLXTuA/yVHu62vJ6zc1DqpVbFrybMFphPJcyKYxPOm3ySTPoWJtErUP7J5LTJr2UJqoouNXB7QY9rF1BQXPEyi8TDjLXZmszSG/n2tK3lkxl4LjiXuwapmN6qApHGKYoFB+UC9PTLT5YVyqqovzz29VoPFns95RScf7lUqC9BSN2Wokvn1dXIlE15jQdh6sFuw+ZY6aBgsaCMS+PzEcYkU28DECZTeuSIoe45M8p6XxfzRfzBdezsh5LFaaw1xemenxxTiCiQb7zfPUpQviFSVUokh2KHRLf9FW9llRV9uzqSqtl9ELFpWXT+D0ZkLi+VK6ceHPQptkoD19d0ba83UkdVz3TXm2Kg1Q9cJP7JHzyTrewjx8DavKanSQL9OMgJ9T6AcRB9Y+Aa/5wmhEfeeHnf/ei8kJM/ReYZDFIrtnHJAZ2h0o+Lg2TRO78RfgPbE6b5wko/UOFHmbTvwXtmjxzUFlQv6Y3nqcpVHFdR8/jiUx+fM/Ssjm8tawc8XN0qkgBZ5LcH2+Dg7hipXlzLCN/MtO2/Q1hqZ4w",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},sidebar:"api",previous:{title:"Get Device Queue Items",permalink:"/api/rest/lns-device-get-device-queue-items"},next:{title:"List Devices",permalink:"/api/rest/lns-device-list-devices"}},h={},f=[{value:"Request",id:"request",level:2}],T={toc:f},b="wrapper";function q(e){let{components:a,...t}=e;return(0,i.yg)(b,(0,s.A)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Get Devices"),(0,i.yg)(n(),{method:"get",path:"/lns/tenants/{tenantId}/applications/{applicationId}/devices/all",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"Get devices"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(r.A,{className:"paramsItem",param:{name:"tenantId",description:"The ID of tenant.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.yg)(r.A,{className:"paramsItem",param:{name:"applicationId",description:"The ID of application.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.yg)(r.A,{className:"paramsItem",param:{name:"devEui",description:"The ID of device.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(r.A,{className:"paramsItem",param:{name:"offset",description:"The offset of device.",in:"query",schema:{type:"number",minimum:0,default:0},required:!1},mdxType:"ParamsItem"}),(0,i.yg)(r.A,{className:"paramsItem",param:{name:"limit",description:"The limit of device.",in:"query",schema:{type:"number",minimum:1,maximum:100,default:20},required:!1},mdxType:"ParamsItem"})))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(m.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null),(0,i.yg)("div",null,(0,i.yg)(d.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"data"),(0,i.yg)("span",{className:"openapi-schema__name"}," object[]"),(0,i.yg)("span",{className:"openapi-schema__divider"}),(0,i.yg)("span",{className:"openapi-schema__required"},"required"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.yg)(c.A,{collapsible:!1,name:"devEui",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.yg)(c.A,{collapsible:!1,name:"lastSeenAt",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,i.yg)(c.A,{collapsible:!1,name:"activateStatus",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.yg)(c.A,{collapsible:!1,name:"totalCount",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"})))),(0,i.yg)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(p.A,{responseExample:'{\n  "data": [\n    {\n      "devEui": "string",\n      "lastSeenAt": 0,\n      "activateStatus": true\n    }\n  ],\n  "totalCount": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.yg)(y.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The request has not permission.")),(0,i.yg)("div",null)),(0,i.yg)(y.default,{label:"404",value:"404",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The resource hasn't found.")),(0,i.yg)("div",null)),(0,i.yg)(y.default,{label:"422",value:"422",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The input data has invalid.")),(0,i.yg)("div",null))))))}q.isMDXComponent=!0}}]);