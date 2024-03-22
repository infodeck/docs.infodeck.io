"use strict";(self.webpackChunkinfodeck_docs=self.webpackChunkinfodeck_docs||[]).push([[540],{25446:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>u,default:()=>_,frontMatter:()=>g,metadata:()=>h,toc:()=>b});var t=s(58168),i=(s(96540),s(15680)),m=s(91366),l=(s(6050),s(57742)),n=s.n(l),d=(s(67792),s(27362)),o=s(36683),p=s(81124),r=s(60674),c=s(23397),y=(s(26651),s(77675),s(19365));const g={id:"deck-create-deck",title:"Create Deck",description:"Create Deck",sidebar_label:"Create Deck",hide_title:!0,hide_table_of_contents:!0,api:"eJytVtuO2zYQ/RWCTw3gtexFLoBQFEjWSbBpgAaJgz5s9mEsjSVmJVElKWcdQf/eGUqydXHSFqgNyBQ5Nx6eM3QtY7SRUaVTupChvDEIDsUGowe5kLpEA7xyG9MaTy5bg27dQWJleOdX5P1ClmAgR4eGZ2tZ0Av5aZNAob73gRaTlNsUxe1G6L0YGi7JTvFyCS6lscG/KmWQ6nCmwoW0UYo5yLCW7lhyFuuMKhLZNPetMVr3SsdHtoh04bBwPISyzFTkMwRfLeev56H07itGjpKWhhFwCq1fVS7DecZL+/GmvKWYMZPNxObfhBjMjAJ9Q5WkbhCjqPIdmosxWtuxu4oTdHbgD8bAkdF2mNt/RKEZHsXd/XRnbdo2xyDv2Kvfw7kajoOPkJcdwC3S8nazveqoNs7SL9DjPH3GRq4HsZmJivm7frFenT5kQLTYq6RqGe7JYS06T3W46scLmesYf0ciEtWwhypzs+OUG2XLDI4CaL8HFaGwDlxlyTkxKn4PR135E0tluH5GSNPPi3MpK6pVhs8X8tE/KdOKMvQYbMCBuNH5ThXQbbM7oM8u3kSymZ/BBG8WjJ+wpS5sy+VrQuD/U0ZMNf5n5kw44WPQLM8/baubM6sTtkjBikI7QdFzZa3vF+x3fX3ZTxVl5QSn8K6qOECm4paYFqPKKHf0RKksSYmroy5CnSzVzIZSW78b7kShDIZtygb1uL01AVOej54iHfpOWJmMPFPnShsGAUG9VMVee3EoTe9KcsK+kk8Me4tsW88JWY4gu+bH7zsE47XfDt5okwPz/92f25lm3qITREQjXn64FU4/YCEOCsSHPz5tRQCVS4kIHQFs4Netx4fJ8PHcUF/PZfqDLnaa7mW5GonSE5dhGCn+DMtc9Oc1ceV3EeuoyqnsXhiMd2u7Xq6WK6YEn10Ons3ddTS+4iZ9+SSIiVmHv8NHF5DU6Wai2P5U644Xd6N7jgkQXrj4mBp00ikzilzqegcWP5usaXiaQDbMQxoewCjYMSZEn1hZHhMX95BZ/EnVv3zsJPVE/PhevbiZ/jYo+C4geVT8RsMH3/omW/FnlyLEXi11Z3TTlnG15VDnILPO0ix6j5dRhKX7qe1QiMxVJnt3r3NnplkD3/gPAj1D+YW+/o9Lewhk5OdrmUGRVJCwfRuXqc2sH6hroia/s4uw/PrKG4gtq+S3E0heNIxN0/wNCzYq/Q==",sidebar_class_name:"post api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},u=void 0,h={unversionedId:"api/rest/deck-create-deck",id:"api/rest/deck-create-deck",title:"Create Deck",description:"Create Deck",source:"@site/docs/api/rest/deck-create-deck.api.mdx",sourceDirName:"api/rest",slug:"/api/rest/deck-create-deck",permalink:"/api/rest/deck-create-deck",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"deck-create-deck",title:"Create Deck",description:"Create Deck",sidebar_label:"Create Deck",hide_title:!0,hide_table_of_contents:!0,api:"eJytVtuO2zYQ/RWCTw3gtexFLoBQFEjWSbBpgAaJgz5s9mEsjSVmJVElKWcdQf/eGUqydXHSFqgNyBQ5Nx6eM3QtY7SRUaVTupChvDEIDsUGowe5kLpEA7xyG9MaTy5bg27dQWJleOdX5P1ClmAgR4eGZ2tZ0Av5aZNAob73gRaTlNsUxe1G6L0YGi7JTvFyCS6lscG/KmWQ6nCmwoW0UYo5yLCW7lhyFuuMKhLZNPetMVr3SsdHtoh04bBwPISyzFTkMwRfLeev56H07itGjpKWhhFwCq1fVS7DecZL+/GmvKWYMZPNxObfhBjMjAJ9Q5WkbhCjqPIdmosxWtuxu4oTdHbgD8bAkdF2mNt/RKEZHsXd/XRnbdo2xyDv2Kvfw7kajoOPkJcdwC3S8nazveqoNs7SL9DjPH3GRq4HsZmJivm7frFenT5kQLTYq6RqGe7JYS06T3W46scLmesYf0ciEtWwhypzs+OUG2XLDI4CaL8HFaGwDlxlyTkxKn4PR135E0tluH5GSNPPi3MpK6pVhs8X8tE/KdOKMvQYbMCBuNH5ThXQbbM7oM8u3kSymZ/BBG8WjJ+wpS5sy+VrQuD/U0ZMNf5n5kw44WPQLM8/baubM6sTtkjBikI7QdFzZa3vF+x3fX3ZTxVl5QSn8K6qOECm4paYFqPKKHf0RKksSYmroy5CnSzVzIZSW78b7kShDIZtygb1uL01AVOej54iHfpOWJmMPFPnShsGAUG9VMVee3EoTe9KcsK+kk8Me4tsW88JWY4gu+bH7zsE47XfDt5okwPz/92f25lm3qITREQjXn64FU4/YCEOCsSHPz5tRQCVS4kIHQFs4Netx4fJ8PHcUF/PZfqDLnaa7mW5GonSE5dhGCn+DMtc9Oc1ceV3EeuoyqnsXhiMd2u7Xq6WK6YEn10Ons3ddTS+4iZ9+SSIiVmHv8NHF5DU6Wai2P5U644Xd6N7jgkQXrj4mBp00ikzilzqegcWP5usaXiaQDbMQxoewCjYMSZEn1hZHhMX95BZ/EnVv3zsJPVE/PhevbiZ/jYo+C4geVT8RsMH3/omW/FnlyLEXi11Z3TTlnG15VDnILPO0ix6j5dRhKX7qe1QiMxVJnt3r3NnplkD3/gPAj1D+YW+/o9Lewhk5OdrmUGRVJCwfRuXqc2sH6hroia/s4uw/PrKG4gtq+S3E0heNIxN0/wNCzYq/Q==",sidebar_class_name:"post api-method",info_path:"api/rest/infodeck-io",custom_edit_url:null},sidebar:"api",previous:{title:"List Decks",permalink:"/api/rest/deck-list-decks"},next:{title:"Update Deck",permalink:"/api/rest/deck-update-deck"}},k={},b=[{value:"Request",id:"request",level:2}],f={toc:b},T="wrapper";function _(e){let{components:a,...s}=e;return(0,i.yg)(T,(0,t.A)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{className:"openapi__heading"},"Create Deck"),(0,i.yg)(n(),{method:"post",path:"/organizations/{organizationId}/decks",mdxType:"MethodEndpoint"}),(0,i.yg)("p",null,"Create Deck"),(0,i.yg)("h2",{id:"request"},"Request"),(0,i.yg)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{}},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.yg)("div",null,(0,i.yg)("ul",null,(0,i.yg)(o.A,{className:"paramsItem",param:{name:"organizationId",description:"The ID of organization.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.yg)(d.A,{className:"openapi-tabs__mime",mdxType:"MimeTabs"},(0,i.yg)(y.default,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.yg)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.yg)("strong",{className:"openapi-schema__required"},"required")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(r.A,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The title of deck."},mdxType:"SchemaItem"}),(0,i.yg)(r.A,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The description of deck."},mdxType:"SchemaItem"}),(0,i.yg)(r.A,{collapsible:!1,name:"weight",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",description:"The weight of deck."},mdxType:"SchemaItem"}),(0,i.yg)(r.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"widgets"),(0,i.yg)("span",{className:"openapi-schema__name"}," object[]"),(0,i.yg)("span",{className:"openapi-schema__divider"}),(0,i.yg)("span",{className:"openapi-schema__required"},"required"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}},(0,i.yg)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.yg)("p",null,"The widgets of deck.")),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.yg)("li",null,(0,i.yg)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,i.yg)("div",null,(0,i.yg)("div",null,(0,i.yg)(m.A,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.yg)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.yg)("div",null),(0,i.yg)("div",null,(0,i.yg)(d.A,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.yg)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.yg)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.yg)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.yg)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.yg)("strong",null,"Schema")),(0,i.yg)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.yg)("ul",{style:{marginLeft:"1rem"}},(0,i.yg)(r.A,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.yg)("details",{style:{},className:"openapi-markdown__details"},(0,i.yg)("summary",{style:{}},(0,i.yg)("span",{className:"openapi-schema__container"},(0,i.yg)("strong",{className:"openapi-schema__property"},"data"),(0,i.yg)("span",{className:"openapi-schema__name"}," object"),(0,i.yg)("span",{className:"openapi-schema__divider"}),(0,i.yg)("span",{className:"openapi-schema__required"},"required"))),(0,i.yg)("div",{style:{marginLeft:"1rem"}})))))),(0,i.yg)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.yg)(p.A,{responseExample:'{\n  "data": {}\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.yg)(y.default,{label:"400",value:"400",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The request has not permission.")),(0,i.yg)("div",null)),(0,i.yg)(y.default,{label:"422",value:"422",mdxType:"TabItem"},(0,i.yg)("div",null,(0,i.yg)("p",null,"The input data has invalid.")),(0,i.yg)("div",null))))))}_.isMDXComponent=!0}}]);