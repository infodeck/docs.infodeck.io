"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[7983],{85671:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>I,frontMatter:()=>y,metadata:()=>v,toc:()=>b});var t=i(58168),s=(i(96540),i(15680)),n=i(91366),l=(i(6050),i(57742)),m=i.n(l),d=(i(67792),i(27362)),p=i(36683),c=i(81124),r=i(60674),o=i(23397),g=(i(26651),i(77675),i(19365));const y={id:"lns-device-get-device-activation",title:"Get Device Activation",description:"Get device activation",sidebar_label:"Get Device Activation",hide_title:!0,hide_table_of_contents:!0,api:"eJylVW1v0zAQ/iuWvwBSaca0TxVC6tiLCmgg2okPVYXcxF28praxnY4qyn/nzk5bp00HGp9y8d35nnt5zhXNuE2N0E4oSQf0ljuS8bVIOWGpE2vmz3tUaW68PMrA6svd+OeVt+qDQ5CGsbljD5YOpmhIgprOelQzw1bccYO6ikr4gcscl0w6uLd3gGWSczK6ImpBgkkfLAQqNHM5yIb/KoXhAMiZkveoTXO+YnRQUbfReLN1RsgHWte9XTCmdSHSbSanI0Z2Lw87C8bcukuVbcCixgOrlbTcosP52Rl+UiUhQ4diFDd5tAiqOg6g5o88dQBFG+yLE+G2jLl/sGpX4Bg11mR9XYpTqmGWmU4dXDz+zDedOvm0HF/L9JTa3oF+JN0p/eJv+o/S3etIJcvVnBsf+QZ0V+pJdmrZM9o6bvW0Y3J8lfY12VeglW87u3YuO+QxzhjV7BCF7zGc4vlFmJ7jEW6GjuTMEqkcge6vhLV+lr3fxSk/q0oD1AdH+cqRhSplFlzOz7tdhNQlbAxA5aMJuWaFQB/sKk9LI9zGk720UNPBdIakgB2QK9wjD9zPJ/JqQJNC2iQw3SbVdivUSVR4OG+1oU7CrrLNd5Ql+61lsfTcrLfrpjQFRMmd03aQ4K19IRcq4+myLxT8C4rYtqDHSLrAmAB9Nx94A21oj/9zzgzH9gfhRpkVAy7TTz8mRwsG1+sGakyG30bEqSWXZC0Y+fZ1PCEJK10Oa2CXq9dbX0pE6iEIV2DM0R75UYxIR976QJlKyxXcvN3OWJJg+65/1j/DBmtl3Yp5GjSbEqGG1U1aq70VLNpdJ5+OpmyO/3aJLhisUojnm1E1rZ/SwneraT5Ig+hRiPuPqg4i4gjspOAUjQF0NYf0ME5VzZnl96aoazwGmhgcTxDXzAg2x+LCqGTCogwjumCF5c8k/fp7Q843pOu56sy9OWQSFwDwpcQ/EJe43fbPIb5a/wnk4BV7AZp2sesZOOScZZ7LVWMzTFOuXeR99Ii1SH97jbyY715EHPuIXgd08nE6Mb6/9AZkgjT5sK8f/iLSuv4DUeQF7Q==",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},u=void 0,v={unversionedId:"api/rest/lns-device-get-device-activation",id:"api/rest/lns-device-get-device-activation",title:"Get Device Activation",description:"Get device activation",source:"@site/docs/api/rest/lns-device-get-device-activation.api.mdx",sourceDirName:"api/rest",slug:"/api/rest/lns-device-get-device-activation",permalink:"/api/rest/lns-device-get-device-activation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lns-device-get-device-activation",title:"Get Device Activation",description:"Get device activation",sidebar_label:"Get Device Activation",hide_title:!0,hide_table_of_contents:!0,api:"eJylVW1v0zAQ/iuWvwBSaca0TxVC6tiLCmgg2okPVYXcxF28praxnY4qyn/nzk5bp00HGp9y8d35nnt5zhXNuE2N0E4oSQf0ljuS8bVIOWGpE2vmz3tUaW68PMrA6svd+OeVt+qDQ5CGsbljD5YOpmhIgprOelQzw1bccYO6ikr4gcscl0w6uLd3gGWSczK6ImpBgkkfLAQqNHM5yIb/KoXhAMiZkveoTXO+YnRQUbfReLN1RsgHWte9XTCmdSHSbSanI0Z2Lw87C8bcukuVbcCixgOrlbTcosP52Rl+UiUhQ4diFDd5tAiqOg6g5o88dQBFG+yLE+G2jLl/sGpX4Bg11mR9XYpTqmGWmU4dXDz+zDedOvm0HF/L9JTa3oF+JN0p/eJv+o/S3etIJcvVnBsf+QZ0V+pJdmrZM9o6bvW0Y3J8lfY12VeglW87u3YuO+QxzhjV7BCF7zGc4vlFmJ7jEW6GjuTMEqkcge6vhLV+lr3fxSk/q0oD1AdH+cqRhSplFlzOz7tdhNQlbAxA5aMJuWaFQB/sKk9LI9zGk720UNPBdIakgB2QK9wjD9zPJ/JqQJNC2iQw3SbVdivUSVR4OG+1oU7CrrLNd5Ql+61lsfTcrLfrpjQFRMmd03aQ4K19IRcq4+myLxT8C4rYtqDHSLrAmAB9Nx94A21oj/9zzgzH9gfhRpkVAy7TTz8mRwsG1+sGakyG30bEqSWXZC0Y+fZ1PCEJK10Oa2CXq9dbX0pE6iEIV2DM0R75UYxIR976QJlKyxXcvN3OWJJg+65/1j/DBmtl3Yp5GjSbEqGG1U1aq70VLNpdJ5+OpmyO/3aJLhisUojnm1E1rZ/SwneraT5Ig+hRiPuPqg4i4gjspOAUjQF0NYf0ME5VzZnl96aoazwGmhgcTxDXzAg2x+LCqGTCogwjumCF5c8k/fp7Q843pOu56sy9OWQSFwDwpcQ/EJe43fbPIb5a/wnk4BV7AZp2sesZOOScZZ7LVWMzTFOuXeR99Ii1SH97jbyY715EHPuIXgd08nE6Mb6/9AZkgjT5sK8f/iLSuv4DUeQF7Q==",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},sidebar:"api",previous:{title:"Get Device",permalink:"/api/rest/lns-device-get-device"},next:{title:"Get Device Keys",permalink:"/api/rest/lns-device-get-device-keys"}},h={},b=[{value:"Request",id:"request",level:2}],T={toc:b},f="wrapper";function I(e){let{components:a,...i}=e;return(0,s.yg)(f,(0,t.A)({},T,i,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{className:"openapi__heading"},"Get Device Activation"),(0,s.yg)(m(),{method:"get",path:"/lns/tenants/{tenantId}/applications/{applicationId}/devices/deviceId/activations",mdxType:"MethodEndpoint"}),(0,s.yg)("p",null,"Get device activation"),(0,s.yg)("h2",{id:"request"},"Request"),(0,s.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{}},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.yg)("div",null,(0,s.yg)("ul",null,(0,s.yg)(p.A,{className:"paramsItem",param:{name:"tenantId",description:"The ID of tenant.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.yg)(p.A,{className:"paramsItem",param:{name:"applicationId",description:"The ID of application.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.yg)("div",null,(0,s.yg)("div",null,(0,s.yg)(n.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.yg)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.yg)("div",null),(0,s.yg)("div",null,(0,s.yg)(d.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.yg)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.yg)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.yg)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.yg)("strong",null,"Schema")),(0,s.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.yg)("ul",{style:{marginLeft:"1rem"}},(0,s.yg)(r.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details"},(0,s.yg)("summary",{style:{}},(0,s.yg)("span",{className:"openapi-schema__container"},(0,s.yg)("strong",{className:"openapi-schema__property"},"data"),(0,s.yg)("span",{className:"openapi-schema__name"}," object"),(0,s.yg)("span",{className:"openapi-schema__divider"}),(0,s.yg)("span",{className:"openapi-schema__required"},"required"))),(0,s.yg)("div",{style:{marginLeft:"1rem"}},(0,s.yg)(r.A,{collapsible:!1,name:"applicationId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"devEui",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"devAddr",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"appSKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"nwkSEncKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"sNwkSIntKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"fNwkSIntKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"fCntUp",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"nFCntDown",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}),(0,s.yg)(r.A,{collapsible:!1,name:"aFCntDown",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"},mdxType:"SchemaItem"}))))))),(0,s.yg)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.yg)(c.A,{responseExample:'{\n  "data": {\n    "applicationId": "string",\n    "devEui": "string",\n    "devAddr": "string",\n    "appSKey": "string",\n    "nwkSEncKey": "string",\n    "sNwkSIntKey": "string",\n    "fNwkSIntKey": "string",\n    "fCntUp": 0,\n    "nFCntDown": 0,\n    "aFCntDown": 0\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.yg)(g.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The request has not permission.")),(0,s.yg)("div",null)),(0,s.yg)(g.default,{label:"404",value:"404",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The resource hasn't found.")),(0,s.yg)("div",null)),(0,s.yg)(g.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The input data has invalid.")),(0,s.yg)("div",null))))))}I.isMDXComponent=!0}}]);