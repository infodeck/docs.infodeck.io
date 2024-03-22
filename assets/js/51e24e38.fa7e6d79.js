"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[1024],{54743:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>I,frontMatter:()=>v,metadata:()=>g,toc:()=>T});var t=i(58168),s=(i(96540),i(15680)),n=i(91366),l=(i(6050),i(57742)),m=i.n(l),d=(i(67792),i(27362)),c=i(36683),o=i(81124),p=i(60674),r=i(23397),y=(i(26651),i(77675),i(19365));const v={id:"lns-device-create-device-activation",title:"Create Device Activation",description:"Create device activation",sidebar_label:"Create Device Activation",hide_title:!0,hide_table_of_contents:!0,api:"eJytV21v2zYQ/isEv2wDXEtxnMIzhgFpkg7ehq6oXexDFgy0REdsZFIjKSeGoP++O1KWKb/V6ZYCCXW8e468e+54rWjKTaJFYYWSdExvNGeWk5SvRMIJS6xYMbfVo6rg2q0nKSj+/mH6963T6nsb/3EdWlj2aOj4HnWJ36YPPVowzZbcco17FZXwAXiWSyYtQPd2TjTLOJncErUgXqUPGgI3CmYzWGv+Tyk0hzNZXfIeNUnGl4yOK2rXBSIbq4V8pHXda52xoshFsrnMcY+B3re7ffDK3Nh3Kl2jRqIk3MXiMvAQfTHovtqHUvMvPLHgtNCYBCu4wV1I0l0p9l0ev49Pa5/WqLK6TlN9nnWjvIUImOHQ4BrT3/j6PLRG+TiafH6a3snkbMCt/nFM8wGUJtKeDRoYHEddvBZ1cRbqjbSfiwBQlss514cBne6JWL4HhVv1LM+Da9VP5Pp1iOxriHVYTPcbVj+AmL+wZZHzkOt0MOQXg+HV5dX88mI0eDugAZVpHF++5fHoigaMpD+O5qOLl6M/nHYJR+d8lPLT+h0ynWOweLVBQ4G4k8G4E/243o33TjCxMzmBKZQ0vmkM4vj/bEHMfl2rm+CHvYQjBkhRPvSn22dR00FJxgyRyhJAXwpjNpwcxsNjdkaVGigHhvI7SxaqlKk3GQwOmwhZlJbgqZw3IVcsF6knquFJqYVdu5erNEB5vBB0eHjQMoXvYqGMCwC+EmMa5dJE/t0yUbV54+ooiDnIO89RHfkiMc3fSRpty8Ug+bhebR7PUufgJbO2MOMIUftCLlTKk6e+UPAtKB5uc+opZtUnzp+9TRwi0OYR446hTLt69ov3Si8ZkIX++udsr8h/4ZasIcjk+uOEWPXEJVkJRj7+MZ2RiJU2A561d3X7xsUSufZp+zDeHSj2oJFuSrwVbQu8FXXKuJV2i7UVL46Izyw8jLMLoLB4aDrZxn0vQsEeeePClKqkXEJcNpMSJtTrXvTjfoz8RCItmavGZmppZjM/SZHOpNXxF1T3qXmuSb3lLzYqcgbDDXh1hKoa+t7T3DGuITCsxsGYFnIYt/aHKkfjduWNAioDMzOsFvBTVXNm+Ged1zWKgRQaawyWK6YFm2OIge6pMLiGOluw3PAT9/7+U9NhfiCHBsiDd2+ETK4xIywv8QuWT44h7c1xjvyPB9mZK7/hNN1g1/haZpylriFVjc6NP8SbGSJtMfb6PV7IW1wnCS/sSd2w12GJY49oxtolkBykmj3jfAy/x/Qv+Of+6+AzDkpOXtGcyceSPaK+x8WOgM0iaEo7Tcjd7GBUfnrnFMgMm8vP24zhJ8amrv8FRr1w4A==",sidebar_class_name:"post api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},u=void 0,g={unversionedId:"api/rest/lns-device-create-device-activation",id:"api/rest/lns-device-create-device-activation",title:"Create Device Activation",description:"Create device activation",source:"@site/docs/api/rest/lns-device-create-device-activation.api.mdx",sourceDirName:"api/rest",slug:"/api/rest/lns-device-create-device-activation",permalink:"/api/rest/lns-device-create-device-activation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"lns-device-create-device-activation",title:"Create Device Activation",description:"Create device activation",sidebar_label:"Create Device Activation",hide_title:!0,hide_table_of_contents:!0,api:"eJytV21v2zYQ/isEv2wDXEtxnMIzhgFpkg7ehq6oXexDFgy0REdsZFIjKSeGoP++O1KWKb/V6ZYCCXW8e468e+54rWjKTaJFYYWSdExvNGeWk5SvRMIJS6xYMbfVo6rg2q0nKSj+/mH6963T6nsb/3EdWlj2aOj4HnWJ36YPPVowzZbcco17FZXwAXiWSyYtQPd2TjTLOJncErUgXqUPGgI3CmYzWGv+Tyk0hzNZXfIeNUnGl4yOK2rXBSIbq4V8pHXda52xoshFsrnMcY+B3re7ffDK3Nh3Kl2jRqIk3MXiMvAQfTHovtqHUvMvPLHgtNCYBCu4wV1I0l0p9l0ev49Pa5/WqLK6TlN9nnWjvIUImOHQ4BrT3/j6PLRG+TiafH6a3snkbMCt/nFM8wGUJtKeDRoYHEddvBZ1cRbqjbSfiwBQlss514cBne6JWL4HhVv1LM+Da9VP5Pp1iOxriHVYTPcbVj+AmL+wZZHzkOt0MOQXg+HV5dX88mI0eDugAZVpHF++5fHoigaMpD+O5qOLl6M/nHYJR+d8lPLT+h0ynWOweLVBQ4G4k8G4E/243o33TjCxMzmBKZQ0vmkM4vj/bEHMfl2rm+CHvYQjBkhRPvSn22dR00FJxgyRyhJAXwpjNpwcxsNjdkaVGigHhvI7SxaqlKk3GQwOmwhZlJbgqZw3IVcsF6knquFJqYVdu5erNEB5vBB0eHjQMoXvYqGMCwC+EmMa5dJE/t0yUbV54+ooiDnIO89RHfkiMc3fSRpty8Ug+bhebR7PUufgJbO2MOMIUftCLlTKk6e+UPAtKB5uc+opZtUnzp+9TRwi0OYR446hTLt69ov3Si8ZkIX++udsr8h/4ZasIcjk+uOEWPXEJVkJRj7+MZ2RiJU2A561d3X7xsUSufZp+zDeHSj2oJFuSrwVbQu8FXXKuJV2i7UVL46Izyw8jLMLoLB4aDrZxn0vQsEeeePClKqkXEJcNpMSJtTrXvTjfoz8RCItmavGZmppZjM/SZHOpNXxF1T3qXmuSb3lLzYqcgbDDXh1hKoa+t7T3DGuITCsxsGYFnIYt/aHKkfjduWNAioDMzOsFvBTVXNm+Ged1zWKgRQaawyWK6YFm2OIge6pMLiGOluw3PAT9/7+U9NhfiCHBsiDd2+ETK4xIywv8QuWT44h7c1xjvyPB9mZK7/hNN1g1/haZpylriFVjc6NP8SbGSJtMfb6PV7IW1wnCS/sSd2w12GJY49oxtolkBykmj3jfAy/x/Qv+Of+6+AzDkpOXtGcyceSPaK+x8WOgM0iaEo7Tcjd7GBUfnrnFMgMm8vP24zhJ8amrv8FRr1w4A==",sidebar_class_name:"post api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},sidebar:"api",previous:{title:"Create Device",permalink:"/api/rest/lns-device-create-device"},next:{title:"Enqueue Device Queue Item",permalink:"/api/rest/lns-device-enqueue-device-queue-item"}},h={},T=[{value:"Request",id:"request",level:2}],f={toc:T},b="wrapper";function I(e){let{components:a,...i}=e;return(0,s.yg)(b,(0,t.A)({},f,i,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{className:"openapi__heading"},"Create Device Activation"),(0,s.yg)(m(),{method:"post",path:"/lns/tenants/{tenantId}/applications/{applicationId}/devices/deviceId/activations",mdxType:"MethodEndpoint"}),(0,s.yg)("p",null,"Create device activation"),(0,s.yg)("h2",{id:"request"},"Request"),(0,s.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{}},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,s.yg)("div",null,(0,s.yg)("ul",null,(0,s.yg)(c.A,{className:"paramsItem",param:{name:"tenantId",description:"The ID of tenant.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.yg)(c.A,{className:"paramsItem",param:{name:"applicationId",description:"The ID of application.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.yg)(d.A,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,s.yg)(y.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,s.yg)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,s.yg)("strong",{className:"openapi-schema__required"},"required")),(0,s.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.yg)("ul",{style:{marginLeft:"1rem"}},(0,s.yg)(p.A,{collapsible:!1,name:"devEui",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of device."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"devAddr",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The devAddr of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"appSKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The appSKey of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"nwkSEncKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The nwkSEncKey of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"sNwkSIntKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The sNwkSIntKey of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"fNwkSIntKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The fNwkSIntKey of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"fCntUp",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The fCntUp of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"nFCntDown",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The nFCntDown of device activation."},mdxType:"SchemaItem"}),(0,s.yg)(p.A,{collapsible:!1,name:"aFCntDown",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The aFCntDown of device activation."},mdxType:"SchemaItem"}))))),(0,s.yg)("div",null,(0,s.yg)("div",null,(0,s.yg)(n.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,s.yg)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,s.yg)("div",null),(0,s.yg)("div",null,(0,s.yg)(d.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,s.yg)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.yg)(r.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,s.yg)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,s.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,s.yg)("strong",null,"Schema")),(0,s.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.yg)("ul",{style:{marginLeft:"1rem"}},(0,s.yg)(p.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.yg)("details",{style:{},className:"openapi-markdown__details"},(0,s.yg)("summary",{style:{}},(0,s.yg)("span",{className:"openapi-schema__container"},(0,s.yg)("strong",{className:"openapi-schema__property"},"data"),(0,s.yg)("span",{className:"openapi-schema__name"}," object"),(0,s.yg)("span",{className:"openapi-schema__divider"}),(0,s.yg)("span",{className:"openapi-schema__required"},"required"))),(0,s.yg)("div",{style:{marginLeft:"1rem"}})))))),(0,s.yg)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.yg)(o.A,{responseExample:'{\n  "data": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.yg)(y.default,{label:"400",value:"400",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The request has not permission.")),(0,s.yg)("div",null)),(0,s.yg)(y.default,{label:"404",value:"404",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The resource hasn't found.")),(0,s.yg)("div",null)),(0,s.yg)(y.default,{label:"422",value:"422",mdxType:"TabItem"},(0,s.yg)("div",null,(0,s.yg)("p",null,"The input data has invalid.")),(0,s.yg)("div",null))))))}I.isMDXComponent=!0}}]);