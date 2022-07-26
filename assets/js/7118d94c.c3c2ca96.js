"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[884],{59593:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(88746),c=["components"],p={sidebar_position:2,title:"Organization"},s=void 0,l={unversionedId:"Organization",id:"Organization",title:"Organization",description:"The VRS documentation has different parts:",source:"@site/docs/Organization.md",sourceDirName:".",slug:"/Organization",permalink:"/vrs/docs/Organization",draft:!1,editUrl:"https://github.com/facebookresearch/vrs/edit/main/website/docs/Organization.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Organization"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/vrs/docs/Overview"},next:{title:"File Structure",permalink:"/vrs/docs/FileStructure"}},m={},u=[],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The VRS documentation has different parts:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"This documentation, which describes the concepts, features, and principles of VRS."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)(i.default,{target:"_blank",to:"/doxygen/index.html",mdxType:"Link"},"API Documentation"),", generated using Doxygen.",(0,o.mdx)("br",{parentName:"li"}),"To generate the API documentation from the VRS code, run:",(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"  cd <vrs_repo_top_level_folder>\n  doxygen vrs/Doxyfile\n")),"You'll find the API documentation in html at ",(0,o.mdx)("inlineCode",{parentName:"li"},"website/static/doxygen/index.html"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/tree/main/sample_code"},"Sample code"),", which is not functional, but demonstrates how to use the APIs.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleRecordAndPlay.cpp"},"SampleRecordAndPlay.cpp")," demonstrates different ways to create a file, by dumping the whole content from memory to disk after creating all the records in memory, or by writing the record to disk while continuing to create records."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleImageReader.cpp"},"SampleImageReader.cpp")," demonstrates how to read typical image records, that is, records containing metadata and an image."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_code/SampleRecordFormatDataLayout.cpp"},"SampleRecordFormatDataLayout.cpp")," demonstrates how to read metadata blocks."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/tree/main/sample_apps"},"Sample apps"),", which are runnable apps (though not actually useful). ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_apps/SampleRecordingApp.cpp"},"The first app")," generates a VRS file with different record types containing made-up data. ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/facebookresearch/vrs/blob/main/sample_apps/SamplePlaybackApp.cpp"},"The second app")," reads that VRS file and verifies that the record content is as expected.")))}f.isMDXComponent=!0},3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return l}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){return function(t){var r=m(t.components);return n.createElement(e,o({},t,{components:r}))}},m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=m(r),u=a,f=l["".concat(i,".").concat(u)]||l[u]||d[u]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);