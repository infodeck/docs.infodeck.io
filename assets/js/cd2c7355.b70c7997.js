"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[6503],{17872:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>u,default:()=>N,frontMatter:()=>o,metadata:()=>h,toc:()=>b});var m=s(58168),t=(s(96540),s(15680)),i=s(91366),n=(s(6050),s(57742)),r=s.n(n),p=(s(67792),s(27362)),l=s(36683),y=s(81124),c=s(60674),d=s(23397),g=(s(26651),s(77675),s(19365));const o={id:"edge-gateways-get-network-metric-with-edge-gateway",title:"Get network metric with edge gateway",description:"Get network metric with edge gateway",sidebar_label:"Get network metric with edge gateway",hide_title:!0,hide_table_of_contents:!0,api:"eJzVV9tu2zgQ/RVCTy3gWq6bNRqhWCBF2yCLzW6wcdGHwFjQ0sRiLZEqSTn1Cvr3naEkm7acW9sXv1iUOMM5c+HMcRUkYGItCiuUDKLgHCyTYO+UXrIcrBYxuxM2ZZAsgC24hTu+DgaBKkBzUrlIUOkjbv573myaIR7xV3PCpTvgC+qTxPlG2/KFCaIbp8c6vWA2CAquOVoFTdtVIPEFj1d6waX4r7M32IM8TYFdfGDqlvmCQ5QTtF1wm+Jaw7dSaEC4VpcwCEycQs6DqArsuiArBrHKRVDXg41h2KI+YNdHjwB+gT0MqlB9Q1fuMznYZGTIXpRS2IgZiF92Zr+VoCm2PTuyzOegcQdwRVGfjPDlzYh+T93vm4l7vJ2cuOdkdPLWLca/nY5HuJoRoFteZjaIUK/2nbvlmYGeC1OBL/e4YXHvp33JhRQ5ufMa1/x7ux6foice2MnDWI3FSjFWxD2o192OB/RRcG1Ct4E+W+ElWVAgLlu4uGrB+jHdCB5AO2s+gbHvVbJGa07GFEoaMGQcM0SPWEkL0tKSF0UmYncJwq+G/Kn6YNX8K8QWARWa7rIVzWkJt0+QKtBPdORxQco1RjkvjCfLtXZdQFjITT+5eCGCFc9KeJbOTuhufMOb02Yo45ALeaTIuzo5TvSXCayOFPpUWZ5d8XgJ1hypC38qY47Vgz2hrv1sr/Pu9fDK7UD6+uHoGXBdEL/S95Omv/YpR9uWWcoNk8oyDF8ujHHUg/TG48N6QhalZWTCqQqJbopk6OKHQ7DUwq4d+ykNRii6mdEMwBmUKqJaC3DZIo4RBaFPeExY7RKlOiT+8qolbbi9Q2fqsJlrJmzpHo000KuOe5U6QwuptYWJwhBnylDIW5VAvBwKhe8iIFwd4GuaL03mG9ibTNMJ3bSk9zlw7UZ4s/ikdM5pBv7xZdobw0RG16rU7Ozqglm1BMlWgrOrv6+nLOSlTXHitZPOhG7fuDAS0qaMbUY2L7bIeza8PfbKGUpUXOZ4sjuXyhBD0si+Ho6GI0puoYzNuRsjLZd4Im/ese1N7afqt0G18N2GRcax9BGNS1XVFsXNDl2mco96/HmnLkhin+i2pYGrrjgw1yk6TedX1Zwb+KyzuqbPDR+ikkmE4fNsw10e8PYxRnvQzSWsfY7sugN+CIjRPdv0wyz0Ufstwf1BDPfQywes+lR1a3RGL1qQ1Wcm4MU/bbt7ye7/+3QQT9fY5dqH0uHcK7XnhcUD1f9v9QNgdqu6pkmYAk9cV61ambM4hsJ62j32vNN+zz9Sl5pvqDg1Ia/Z7TU3Z+cgxnfvnQCbUtP6fYPY9TBCWtf/AwdUVXc=",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},u=void 0,h={unversionedId:"api/rest/edge-gateways-get-network-metric-with-edge-gateway",id:"api/rest/edge-gateways-get-network-metric-with-edge-gateway",title:"Get network metric with edge gateway",description:"Get network metric with edge gateway",source:"@site/docs/api/rest/edge-gateways-get-network-metric-with-edge-gateway.api.mdx",sourceDirName:"api/rest",slug:"/api/rest/edge-gateways-get-network-metric-with-edge-gateway",permalink:"/api/rest/edge-gateways-get-network-metric-with-edge-gateway",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"edge-gateways-get-network-metric-with-edge-gateway",title:"Get network metric with edge gateway",description:"Get network metric with edge gateway",sidebar_label:"Get network metric with edge gateway",hide_title:!0,hide_table_of_contents:!0,api:"eJzVV9tu2zgQ/RVCTy3gWq6bNRqhWCBF2yCLzW6wcdGHwFjQ0sRiLZEqSTn1Cvr3naEkm7acW9sXv1iUOMM5c+HMcRUkYGItCiuUDKLgHCyTYO+UXrIcrBYxuxM2ZZAsgC24hTu+DgaBKkBzUrlIUOkjbv573myaIR7xV3PCpTvgC+qTxPlG2/KFCaIbp8c6vWA2CAquOVoFTdtVIPEFj1d6waX4r7M32IM8TYFdfGDqlvmCQ5QTtF1wm+Jaw7dSaEC4VpcwCEycQs6DqArsuiArBrHKRVDXg41h2KI+YNdHjwB+gT0MqlB9Q1fuMznYZGTIXpRS2IgZiF92Zr+VoCm2PTuyzOegcQdwRVGfjPDlzYh+T93vm4l7vJ2cuOdkdPLWLca/nY5HuJoRoFteZjaIUK/2nbvlmYGeC1OBL/e4YXHvp33JhRQ5ufMa1/x7ux6foice2MnDWI3FSjFWxD2o192OB/RRcG1Ct4E+W+ElWVAgLlu4uGrB+jHdCB5AO2s+gbHvVbJGa07GFEoaMGQcM0SPWEkL0tKSF0UmYncJwq+G/Kn6YNX8K8QWARWa7rIVzWkJt0+QKtBPdORxQco1RjkvjCfLtXZdQFjITT+5eCGCFc9KeJbOTuhufMOb02Yo45ALeaTIuzo5TvSXCayOFPpUWZ5d8XgJ1hypC38qY47Vgz2hrv1sr/Pu9fDK7UD6+uHoGXBdEL/S95Omv/YpR9uWWcoNk8oyDF8ujHHUg/TG48N6QhalZWTCqQqJbopk6OKHQ7DUwq4d+ykNRii6mdEMwBmUKqJaC3DZIo4RBaFPeExY7RKlOiT+8qolbbi9Q2fqsJlrJmzpHo000KuOe5U6QwuptYWJwhBnylDIW5VAvBwKhe8iIFwd4GuaL03mG9ibTNMJ3bSk9zlw7UZ4s/ikdM5pBv7xZdobw0RG16rU7Ozqglm1BMlWgrOrv6+nLOSlTXHitZPOhG7fuDAS0qaMbUY2L7bIeza8PfbKGUpUXOZ4sjuXyhBD0si+Ho6GI0puoYzNuRsjLZd4Im/ese1N7afqt0G18N2GRcax9BGNS1XVFsXNDl2mco96/HmnLkhin+i2pYGrrjgw1yk6TedX1Zwb+KyzuqbPDR+ikkmE4fNsw10e8PYxRnvQzSWsfY7sugN+CIjRPdv0wyz0Ufstwf1BDPfQywes+lR1a3RGL1qQ1Wcm4MU/bbt7ye7/+3QQT9fY5dqH0uHcK7XnhcUD1f9v9QNgdqu6pkmYAk9cV61ambM4hsJ62j32vNN+zz9Sl5pvqDg1Ia/Z7TU3Z+cgxnfvnQCbUtP6fYPY9TBCWtf/AwdUVXc=",sidebar_class_name:"get api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},sidebar:"api",previous:{title:"Get LoRaWAN gateways in edge gateway",permalink:"/api/rest/edge-gateways-get-lo-ra-wan-gateways-in-edge-gateway"},next:{title:"List edge gateways",permalink:"/api/rest/edge-gateways-list-edge-gateways"}},w={},b=[{value:"Request",id:"request",level:2}],_={toc:b},v="wrapper";function N(e){let{components:a,...s}=e;return(0,t.yg)(v,(0,m.A)({},_,s,{components:a,mdxType:"MDXLayout"}),(0,t.yg)("h1",{className:"openapi__heading"},"Get network metric with edge gateway"),(0,t.yg)(r(),{method:"get",path:"/organizations/{organizationId}/edge-gateways/{edgeGatewayId}/metrics/network",mdxType:"MethodEndpoint"}),(0,t.yg)("p",null,"Get network metric with edge gateway"),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.yg)("summary",{style:{}},(0,t.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,t.yg)("div",null,(0,t.yg)("ul",null,(0,t.yg)(l.A,{className:"paramsItem",param:{name:"organizationId",description:"The ID of organization.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,t.yg)(l.A,{className:"paramsItem",param:{name:"edgeGatewayId",description:"Edge Gateway ID",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,t.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,t.yg)("summary",{style:{}},(0,t.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,t.yg)("div",null,(0,t.yg)("ul",null,(0,t.yg)(l.A,{className:"paramsItem",param:{name:"period",description:"Period of metric. (unit: sec)",in:"query",schema:{type:"number",enum:["60","300","900","3600","86400","604800","2592000"],default:300},required:!1},mdxType:"ParamsItem"}),(0,t.yg)(l.A,{className:"paramsItem",param:{name:"periodTime",description:"Period time of metric. (unit: sec)",in:"query",schema:{type:"number",minimum:1,maximum:129600,default:60},required:!1},mdxType:"ParamsItem"}),(0,t.yg)(l.A,{className:"paramsItem",param:{name:"statistic",description:"Statistic of metric.",in:"query",schema:{type:"string",enum:["Average","Minimum","Maximum"],default:"Average"},required:!1},mdxType:"ParamsItem"})))),(0,t.yg)("div",null,(0,t.yg)("div",null,(0,t.yg)(i.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,t.yg)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,t.yg)("div",null),(0,t.yg)("div",null,(0,t.yg)(p.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,t.yg)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,t.yg)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,t.yg)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,t.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,t.yg)("strong",null,"Schema")),(0,t.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.yg)("ul",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"data"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingMax"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingMin"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingAverage"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingMdev"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingTotalPackets"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))),(0,t.yg)(c.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,t.yg)("details",{style:{},className:"openapi-markdown__details"},(0,t.yg)("summary",{style:{}},(0,t.yg)("span",{className:"openapi-schema__container"},(0,t.yg)("strong",{className:"openapi-schema__property"},"pingLossPackets"),(0,t.yg)("span",{className:"openapi-schema__name"}," object"),(0,t.yg)("span",{className:"openapi-schema__divider"}),(0,t.yg)("span",{className:"openapi-schema__required"},"required"))),(0,t.yg)("div",{style:{marginLeft:"1rem"}},(0,t.yg)(c.A,{collapsible:!1,name:"timestamps",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"}),(0,t.yg)(c.A,{collapsible:!1,name:"values",required:!0,schemaName:"number[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"number"}},mdxType:"SchemaItem"})))))))))),(0,t.yg)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,t.yg)(y.A,{responseExample:'{\n  "data": {\n    "pingMax": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    },\n    "pingMin": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    },\n    "pingAverage": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    },\n    "pingMdev": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    },\n    "pingTotalPackets": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    },\n    "pingLossPackets": {\n      "timestamps": [\n        0\n      ],\n      "values": [\n        0\n      ]\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,t.yg)(g.default,{label:"400",value:"400",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"The request has not permission.")),(0,t.yg)("div",null)),(0,t.yg)(g.default,{label:"422",value:"422",mdxType:"TabItem"},(0,t.yg)("div",null,(0,t.yg)("p",null,"The input data has invalid.")),(0,t.yg)("div",null))))))}N.isMDXComponent=!0}}]);