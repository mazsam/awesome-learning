(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{252:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(224),l=(n(278),n(226)),c=(n(239),function(e){var t=e.tags,n=e.tagSlugs;return r.a.createElement("div",{className:"Tags"},r.a.createElement("ul",{className:"Tags-list"},n.map((function(e,n){return r.a.createElement("li",{className:"Tags-listItem",key:t[n]+"slug"},r.a.createElement(l.a,{variation:"pill",path:e},t[n]))}))))}),s=n(272),o=(n(240),function(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("li",{className:"CourseCard"},r.a.createElement(s.a,{is:"h3",mb:"16px"},t),r.a.createElement(s.a,{is:"p",mb:"16px"},n),r.a.createElement(l.a,{variation:"pill",path:a},"Learn ",t))}),u=n(271),m=(n(241),function(e){var t=e.course,n=t.frontmatter,a=n.tags,i=n.title,s=n.description,m=n.lessons,g=t.fields,f=g.tagSlugs,p=g.slug;return r.a.createElement("div",{className:"Course"},r.a.createElement("div",{className:"Course-backLink"},r.a.createElement(l.a,{variation:"tertiary",path:"/courses"},"Back to Courses")),r.a.createElement(u.a,{title:i},r.a.createElement("p",null,s)),r.a.createElement("ul",null,m.map((function(e){var t=e.link,n=e.title,a=e.description,i=""+p+t;return r.a.createElement(o,{key:n,title:n,link:i,description:a})}))),a.length>2&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Course-footer"}),r.a.createElement(u.a,{title:"Related Themes"},r.a.createElement(c,{tags:a,tagSlugs:f}))))}),g=n(225);n.d(t,"query",(function(){return f}));var f="309625229";t.default=function(e){var t=e.data,n=t.site.siteMetadata,a=n.title,l=n.subtitle,c=t.markdownRemark.frontmatter,s=c.title,o=c.description,u=null!==o?o:l;return r.a.createElement(i.a,{title:s+" - "+a,description:u},r.a.createElement(g.a,null,r.a.createElement(m,{course:t.markdownRemark})))}},271:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(63),l=n.n(i),c=(n(227),function(e){var t=e.className,n=e.children,a=e.title,i=e.subTitle,c=e.isLight,s=e.contentAlignment,o=e.titleAlignment,u=l()("ContentSection-title",{"ContentSection-title--alignCenter":"center"===o,"ContentSection-title--alignLeft":"left"===o,"ContentSection-title--textLight":c}),m=l()("ContentSection-content "+t,{"ContentSection-content--alignCenter":"center"===s,"ContentSection-content--alignLeft":"left"===s});return r.a.createElement("div",{className:"ContentSection"},a&&r.a.createElement("header",{className:u},r.a.createElement("h1",null,a),i&&r.a.createElement("h2",null,i)),r.a.createElement("div",{className:m},n))});c.defaultProps={className:"",title:null,subTitle:null,contentAlignment:"left",textAlignment:"left",isLight:!1};var s=c;n.d(t,"a",(function(){return s}))},272:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=function(e){var t=e.is,n=e.children,a=e.mt,i=e.mb,l=e.ml,c=e.mr,s=t;return r.a.createElement(s,{style:{marginTop:""+a,marginRight:""+c,marginBottom:""+i,marginLeft:""+l}},n)};i.defaultProps={is:"div",mb:"0px",mr:"0px",mt:"0px",ml:"0px"};var l=i;n.d(t,"a",(function(){return l}))},278:function(e,t,n){"use strict";n(299)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},299:function(e,t,n){var a=n(1),r=n(9),i=n(41),l=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(l,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);
//# sourceMappingURL=component---src-templates-course-template-js-84acd164355d456b70d0.js.map