import{f as e,l as t,o as n,r,s as i,t as a}from"./app-ClwYa3vi.js";var o=e(t(),1);function s(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){if(Array.isArray(e))return e}function l(e){if(Array.isArray(e))return s(e)}function u(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,te(r.key),r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=re(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function m(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function g(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function _(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?y(Object(n),!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(e,t){return c(e)||g(e,t)||re(e,t)||_()}function S(e){return l(e)||h(e)||re(e)||v()}function ee(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function te(e){var t=ee(e,`string`);return typeof t==`symbol`?t:t+``}function ne(e){"@babel/helpers - typeof";return ne=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ne(e)}function re(e,t){if(e){if(typeof e==`string`)return s(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}var ie=function(){},ae={},oe={},se=null,ce={mark:ie,measure:ie};try{typeof window<`u`&&(ae=window),typeof document<`u`&&(oe=document),typeof MutationObserver<`u`&&(se=MutationObserver),typeof performance<`u`&&(ce=performance)}catch{}var le=(ae.navigator||{}).userAgent,ue=le===void 0?``:le,C=ae,w=oe,de=se,fe=ce;C.document;var T=!!w.documentElement&&!!w.head&&typeof w.addEventListener==`function`&&typeof w.createElement==`function`,pe=~ue.indexOf(`MSIE`)||~ue.indexOf(`Trident/`),me,he=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ge=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,_e={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ve={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ye=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],E=`classic`,D=`duotone`,be=`sharp`,xe=`sharp-duotone`,Se=`chisel`,Ce=`etch`,we=`graphite`,Te=`jelly`,Ee=`jelly-duo`,De=`jelly-fill`,Oe=`notdog`,ke=`notdog-duo`,Ae=`slab`,je=`slab-press`,Me=`thumbprint`,Ne=`utility`,Pe=`utility-duo`,Fe=`utility-fill`,Ie=`whiteboard`,Le=`Classic`,Re=`Duotone`,ze=`Sharp`,Be=`Sharp Duotone`,Ve=`Chisel`,He=`Etch`,Ue=`Graphite`,We=`Jelly`,Ge=`Jelly Duo`,Ke=`Jelly Fill`,qe=`Notdog`,Je=`Notdog Duo`,Ye=`Slab`,Xe=`Slab Press`,Ze=`Thumbprint`,Qe=`Utility`,$e=`Utility Duo`,et=`Utility Fill`,tt=`Whiteboard`,nt=[E,D,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie];me={},m(m(m(m(m(m(m(m(m(m(me,E,Le),D,Re),be,ze),xe,Be),Se,Ve),Ce,He),we,Ue),Te,We),Ee,Ge),De,Ke),m(m(m(m(m(m(m(m(m(me,Oe,qe),ke,Je),Ae,Ye),je,Xe),Me,Ze),Ne,Qe),Pe,$e),Fe,et),Ie,tt);var rt={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},it={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},at=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),ot={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},st=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ct={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},lt=[`kit`];m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ut={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},dt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ft={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},pt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},mt,ht={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},gt=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];mt={},m(m(m(m(m(m(m(m(m(m(mt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),m(m(m(m(m(m(m(m(m(mt,`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),m(m({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var _t={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},vt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},yt={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},bt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(gt,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),xt=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],St=[1,2,3,4,5,6,7,8,9,10],Ct=St.concat([11,12,13,14,15,16,17,18,19,20]),wt=[].concat(S(Object.keys(vt)),xt,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY],St.map(function(e){return`${e}x`}),Ct.map(function(e){return`w-${e}`})),Tt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},O=`___FONT_AWESOME___`,Et=16,Dt=`fa`,Ot=`svg-inline--fa`,k=`data-fa-i2svg`,kt=`data-fa-pseudo-element`,At=`data-fa-pseudo-element-pending`,jt=`data-prefix`,Mt=`data-icon`,Nt=`fontawesome-i2svg`,Pt=`async`,Ft=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],It=[`::before`,`::after`,`:before`,`:after`],Lt=function(){try{return!0}catch{return!1}}();function Rt(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[E]}})}var zt=b({},_e);zt[E]=b(b(b(b({},{"fa-duotone":`duotone`}),_e[E]),ct.kit),ct[`kit-duotone`]);var Bt=Rt(zt),Vt=b({},ot);Vt[E]=b(b(b(b({},{duotone:`fad`}),Vt[E]),pt.kit),pt[`kit-duotone`]);var Ht=Rt(Vt),Ut=b({},yt);Ut[E]=b(b({},Ut[E]),ft.kit);var Wt=Rt(Ut),Gt=b({},_t);Gt[E]=b(b({},Gt[E]),ut.kit),Rt(Gt);var Kt=he,qt=`fa-layers-text`,Jt=ge;Rt(b({},rt));var Yt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Xt=ve,Zt=[].concat(S(lt),S(wt)),A=C.FontAwesomeConfig||{};function Qt(e){var t=w.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function $t(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}w&&typeof w.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=x(e,2),n=t[0],r=t[1],i=$t(Qt(n));i!=null&&(A[r]=i)});var en={styleDefault:`solid`,familyDefault:E,cssPrefix:Dt,replacementClass:Ot,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A.familyPrefix&&(A.cssPrefix=A.familyPrefix);var j=b(b({},en),A);j.autoReplaceSvg||(j.observeMutations=!1);var M={};Object.keys(en).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(t){j[e]=t,tn.forEach(function(e){return e(M)})},get:function(){return j[e]}})}),Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){j.cssPrefix=e,tn.forEach(function(e){return e(M)})},get:function(){return j.cssPrefix}}),C.FontAwesomeConfig=M;var tn=[];function nn(e){return tn.push(e),function(){tn.splice(tn.indexOf(e),1)}}var N=Et,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function rn(e){if(!(!e||!T)){var t=w.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=w.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return w.head.insertBefore(t,r),e}}var an=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function on(){for(var e=12,t=``;e-- >0;)t+=an[Math.random()*62|0];return t}function F(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function sn(e){return e.classList?F(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function cn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${cn(e[n])}" `},``).trim()}function un(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function dn(e){return e.size!==P.size||e.x!==P.x||e.y!==P.y||e.rotate!==P.rotate||e.flipX||e.flipY}function fn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function pn(e){var t=e.transform,n=e.width,r=n===void 0?Et:n,i=e.height,a=i===void 0?Et:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&pe?c+=`translate(${t.x/N-r/2}em, ${t.y/N-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/N}em), calc(-50% + ${t.y/N}em)) `:c+=`translate(${t.x/N}em, ${t.y/N}em) `,c+=`scale(${t.size/N*(t.flipX?-1:1)}, ${t.size/N*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var mn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function hn(){var e=Dt,t=Ot,n=M.cssPrefix,r=M.replacementClass,i=mn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var gn=!1;function _n(){M.autoAddCss&&!gn&&(rn(hn()),gn=!0)}var vn={mixout:function(){return{dom:{css:hn,insertCss:_n}}},hooks:function(){return{beforeDOMElementCreation:function(){_n()},beforeI2svg:function(){_n()}}}},I=C||{};I[O]||(I[O]={}),I[O].styles||(I[O].styles={}),I[O].hooks||(I[O].hooks={}),I[O].shims||(I[O].shims=[]);var L=I[O],yn=[],bn=function(){w.removeEventListener(`DOMContentLoaded`,bn),xn=1,yn.map(function(e){return e()})},xn=!1;T&&(xn=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),xn||w.addEventListener(`DOMContentLoaded`,bn));function Sn(e){T&&(xn?setTimeout(e,0):yn.push(e))}function R(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?cn(e):`<${t} ${ln(r)}>${a.map(R).join(``)}</${t}>`}function Cn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var wn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Tn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:wn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function En(e){return S(e).length===1?e.codePointAt(0).toString(16):null}function Dn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function On(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Dn(t);typeof L.hooks.addPack==`function`&&!r?L.hooks.addPack(e,Dn(t)):L.styles[e]=b(b({},L.styles[e]||{}),i),e===`fas`&&On(`fa`,t)}var z=L.styles,kn=L.shims,An=Object.keys(Wt),jn=An.reduce(function(e,t){return e[t]=Object.keys(Wt[t]),e},{}),Mn=null,Nn={},Pn={},Fn={},In={},Ln={};function Rn(e){return~Zt.indexOf(e)}function zn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Rn(i)?i:null}var Bn=function(){var e=function(e){return Tn(z,function(t,n,r){return t[r]=Tn(n,e,{}),t},{})};Nn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Pn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Ln=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in z||M.autoFetchSvg,n=Tn(kn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Fn=n.names,In=n.unicodes,Mn=qn(M.styleDefault,{family:M.familyDefault})};nn(function(e){Mn=qn(e.styleDefault,{family:M.familyDefault})}),Bn();function Vn(e,t){return(Nn[e]||{})[t]}function Hn(e,t){return(Pn[e]||{})[t]}function B(e,t){return(Ln[e]||{})[t]}function Un(e){return Fn[e]||{prefix:null,iconName:null}}function Wn(e){var t=In[e],n=Vn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function V(){return Mn}var Gn=function(){return{prefix:null,iconName:null,rest:[]}};function Kn(e){var t=E,n=An.reduce(function(e,t){return e[t]=`${M.cssPrefix}-${t}`,e},{});return nt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return jn[r].includes(e)}))&&(t=r)}),t}function qn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?E:t,r=Bt[n][e];if(n===D&&!e)return`fad`;var i=Ht[n][e]||Ht[n][r],a=e in L.styles?e:null;return i||a||null}function Jn(e){var t=[],n=null;return e.forEach(function(e){var r=zn(M.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Yn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Xn=bt.concat(st);function Zn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Yn(e.filter(function(e){return Xn.includes(e)})),a=Yn(e.filter(function(e){return!Xn.includes(e)})),o=x(i.filter(function(e){return r=e,!ye.includes(e)}),1)[0],s=o===void 0?null:o,c=Kn(i),l=b(b({},Jn(a)),{},{prefix:qn(s,{family:c})});return b(b(b({},l),tr({values:e,family:c,styles:z,config:M,canonical:l,givenPrefix:r})),Qn(n,r,l))}function Qn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Un(i):{},o=B(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!z.far&&z.fas&&!M.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var $n=nt.filter(function(e){return e!==E||e!==D}),er=Object.keys(yt).filter(function(e){return e!==E}).map(function(e){return Object.keys(yt[e])}).flat();function tr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===D,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&$n.includes(n)&&(Object.keys(s).find(function(e){return er.includes(e)})||l.autoFetchSvg)&&(r.prefix=at.get(n).defaultShortPrefixId,r.iconName=B(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=V()||`fas`),r}var nr=function(){function e(){u(this,e),this.definitions={}}return f(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=b(b({},e.definitions[n]||{}),t[n]),On(n,t[n]);var r=Wt[E][n];r&&On(r,t[n]),Bn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),rr=[],H={},U={},ir=Object.keys(U);function ar(e,t){var n=t.mixoutsTo;return rr=e,H={},Object.keys(U).forEach(function(e){ir.indexOf(e)===-1&&delete U[e]}),rr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ne(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){H[e]||(H[e]=[]),H[e].push(r[e])})}e.provides&&e.provides(U)}),n}function or(e,t){var n=[...arguments].slice(2);return(H[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function W(e){var t=[...arguments].slice(1);(H[e]||[]).forEach(function(e){e.apply(null,t)})}function G(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return U[e]?U[e].apply(null,t):void 0}function sr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||V();if(t)return t=B(n,t)||t,Cn(cr.definitions,n,t)||Cn(L.styles,n,t)}var cr=new nr,K={noAuto:function(){M.autoReplaceSvg=!1,M.observeMutations=!1,W(`noAuto`)},config:M,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(W(`beforeI2svg`,e),G(`pseudoElements2svg`,e),G(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Sn(function(){lr({autoReplaceSvgRoot:t}),W(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ne(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=qn(e[0]);return{prefix:n,iconName:B(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${M.cssPrefix}-`)>-1||e.match(Kt))){var r=Zn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||V(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=V();return{prefix:i,iconName:B(i,e)||e}}}},library:cr,findIconDefinition:sr,toHtml:R},lr=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?w:e;(Object.keys(L.styles).length>0||M.autoFetchSvg)&&T&&M.autoReplaceSvg&&K.dom.i2svg({node:t})};function ur(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return R(e)})}}),Object.defineProperty(e,"node",{get:function(){if(T){var t=w.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function dr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(dn(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=un(b(b({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function fr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${M.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:b(b({},i),{},{id:o}),children:r}]}]}function pr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function mr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[M.replacementClass,a?`${M.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:b(b({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!pr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[k]=``);var _=b(b({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:b({},l.styles)}),v=r.found&&n.found?G(`generateAbstractMask`,_)||{children:[],attributes:{}}:G(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,x=v.attributes;return _.children=y,_.attributes=x,s?fr(_):dr(_)}function hr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=b(b({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[k]=``);var l=b({},a.styles);dn(i)&&(l.transform=pn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=un(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function gr(e){var t=e.content,n=e.extra,r=b(b({},n.attributes),{},{class:n.classes.join(` `)}),i=un(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var _r=L.styles;function vr(e){var t=e[0],n=e[1],r=x(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${M.cssPrefix}-${Xt.GROUP}`},children:[{tag:`path`,attributes:{class:`${M.cssPrefix}-${Xt.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${M.cssPrefix}-${Xt.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var yr={found:!1,width:512,height:512};function br(e,t){!Lt&&!M.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function xr(e,t){var n=t;return t===`fa`&&M.styleDefault!==null&&(t=V()),new Promise(function(r,i){if(n===`fa`){var a=Un(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&_r[t]&&_r[t][e]){var o=_r[t][e];return r(vr(o))}br(e,t),r(b(b({},yr),{},{icon:M.showMissingIcons&&e&&G(`missingIconAbstract`)||{}}))})}var Sr=function(){},Cr=M.measurePerformance&&fe&&fe.mark&&fe.measure?fe:{mark:Sr,measure:Sr},q=`FA "7.2.0"`,wr=function(e){return Cr.mark(`${q} ${e} begins`),function(){return Tr(e)}},Tr=function(e){Cr.mark(`${q} ${e} ends`),Cr.measure(`${q} ${e}`,`${q} ${e} begins`,`${q} ${e} ends`)},Er={begin:wr,end:Tr},Dr=function(){};function Or(e){return typeof(e.getAttribute?e.getAttribute(k):null)==`string`}function kr(e){var t=e.getAttribute?e.getAttribute(jt):null,n=e.getAttribute?e.getAttribute(Mt):null;return t&&n}function Ar(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function jr(){return M.autoReplaceSvg===!0?Ir.replace:Ir[M.autoReplaceSvg]||Ir.replace}function Mr(e){return w.createElementNS(`http://www.w3.org/2000/svg`,e)}function Nr(e){return w.createElement(e)}function Pr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Mr:Nr:t;if(typeof e==`string`)return w.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Pr(e,{ceFn:n}))}),r}function Fr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Ir={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Pr(e),t)}),t.getAttribute(k)===null&&M.keepOriginalSource){var n=w.createComment(Fr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~sn(t).indexOf(M.replacementClass))return Ir.replace(e);var r=RegExp(`${M.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===M.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return R(e)}).join(`
`);t.setAttribute(k,``),t.innerHTML=a}};function Lr(e){e()}function Rr(e,t){var n=typeof t==`function`?t:Dr;if(e.length===0)n();else{var r=Lr;M.mutateApproach===Pt&&(r=C.requestAnimationFrame||Lr),r(function(){var t=jr(),r=Er.begin(`mutate`);e.map(t),r(),n()})}}var zr=!1;function Br(){zr=!0}function Vr(){zr=!1}var Hr=null;function Ur(e){if(de&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Dr:t,r=e.nodeCallback,i=r===void 0?Dr:r,a=e.pseudoElementsCallback,o=a===void 0?Dr:a,s=e.observeMutationsRoot,c=s===void 0?w:s;Hr=new de(function(e){if(!zr){var t=V();F(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Or(e.addedNodes[0])&&(M.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&M.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Or(e.target)&&~Yt.indexOf(e.attributeName))if(e.attributeName===`class`&&kr(e.target)){var r=Zn(sn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(jt,a||t),s&&e.target.setAttribute(Mt,s)}else Ar(e.target)&&i(e.target)})}}),T&&Hr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Wr(){Hr&&Hr.disconnect()}function Gr(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Kr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Zn(sn(e));return i.prefix||=V(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Hn(i.prefix,e.innerText)||Vn(i.prefix,En(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function qr(e){return F(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Jr(){return{iconName:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Kr(e),r=n.iconName,i=n.prefix,a=n.rest,o=qr(e),s=or(`parseNodeAttributes`,{},e);return b({iconName:r,prefix:i,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Gr(e):[],attributes:o}},s)}var Xr=L.styles;function Zr(e){var t=M.autoReplaceSvg===`nest`?Yr(e,{styleParser:!1}):Yr(e);return~t.extra.classes.indexOf(qt)?G(`generateLayersText`,e,t):G(`generateSvgReplacementMutation`,e,t)}function Qr(){return[].concat(S(st),S(bt))}function $r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var n=w.documentElement.classList,r=function(e){return n.add(`${Nt}-${e}`)},i=function(e){return n.remove(`${Nt}-${e}`)},a=M.autoFetchSvg?Qr():ye.concat(Object.keys(Xr));a.includes(`fa`)||a.push(`fa`);var o=[`.${qt}:not([${k}])`].concat(a.map(function(e){return`.${e}:not([${k}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=F(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Er.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Zr(t);n&&e.push(n)}catch(e){Lt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Rr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zr(e).then(function(e){e&&Rr([e],t)})}function ti(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:sr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:sr(i||{}),e(r,b(b({},n),{},{mask:i}))}}var ni=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?P:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return ur(b({type:`icon`},e),function(){return W(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),mr({icons:{main:vr(v),mask:s?vr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:b(b({},P),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},ri={mixout:function(){return{icon:ti(ni)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=$r,e.nodeCallback=ei,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?w:t,r=e.callback;return $r(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([xr(n,r),o.iconName?xr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=x(o,2),u=l[0],d=l[1];t([e,mr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=un(a);o.length>0&&(n.style=o);var s;return dn(i)&&(s=G(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},ii={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ur({type:`layer`},function(){W(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${M.cssPrefix}-layers`].concat(S(r)).join(` `)},children:n}]})}}}},ai={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ur({type:`counter`,content:e},function(){return W(`beforeDOMElementCreation`,{content:e,params:t}),gr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-counter`].concat(S(a))}})})}}}},oi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?P:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ur({type:`text`,content:e},function(){return W(`beforeDOMElementCreation`,{content:e,params:t}),hr({content:e,transform:b(b({},P),r),extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-text`].concat(S(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(pe){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,hr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},si=RegExp(`"`,`ug`),ci=[1105920,1112319],li=b(b(b(b({},{FontAwesome:{normal:`fas`,400:`fas`}}),it),Tt),dt),ui=Object.keys(li).reduce(function(e,t){return e[t.toLowerCase()]=li[t],e},{}),di=Object.keys(ui).reduce(function(e,t){var n=ui[t];return e[t]=n[900]||S(Object.entries(n))[0][1],e},{});function fi(e){return En(S(e.replace(si,``))[0]||``)}function pi(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(si,``),r=n.codePointAt(0),i=r>=ci[0]&&r<=ci[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function mi(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ui[n]||{})[i]||di[n]}function hi(e,t){var n=`${At}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=F(e.children).filter(function(e){return e.getAttribute(kt)===t})[0],o=C.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Jt),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=mi(s,l),p=fi(d),m=c[0].startsWith(`FontAwesome`),h=pi(o),g=Vn(f,p),_=g;if(m){var v=Wn(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(jt)!==f||a.getAttribute(Mt)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=Jr(),x=y.extra;x.attributes[kt]=t,xr(g,f).then(function(i){var a=mr(b(b({},y),{},{icons:{main:i,mask:Gn()},prefix:f,iconName:_,extra:x,watchable:!0})),o=w.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return R(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function gi(e){return Promise.all([hi(e,`::before`),hi(e,`::after`)])}function _i(e){return e.parentNode!==document.head&&!~Ft.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(kt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var vi=function(e){return!!e&&It.some(function(t){return e.includes(t)})},yi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=p(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(vi(a)){var o=It.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function bi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var n;if(t)n=e;else if(M.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=p(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=p(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=p(yi(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){M.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=F(n).filter(_i).map(gi),i=Er.begin(`searchPseudoElements`);Br(),Promise.all(r).then(function(){i(),Vr(),e()}).catch(function(){i(),Vr(),t()})})}}var xi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=bi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?w:t;M.searchPseudoElements&&bi(n)}}},Si=!1,Ci={mixout:function(){return{dom:{unwatch:function(){Br(),Si=!0}}}},hooks:function(){return{bootstrap:function(){Ur(or(`mutationObserverCallbacks`,{}))},noAuto:function(){Wr()},watch:function(e){var t=e.observeMutationsRoot;Si?Vr():Ur(or(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},wi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Ti={mixout:function(){return{parse:{transform:function(e){return wi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=wi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:b({},a.outer),children:[{tag:`g`,attributes:b({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:b(b({},t.icon.attributes),a.path)}]}]}}}},Ei={x:0,y:0,width:`100%`,height:`100%`};function Di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Oi(e){return e.tag===`g`?e.children:[e]}ar([vn,ri,ii,ai,oi,xi,Ci,Ti,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Zn(n.split(` `).map(function(e){return e.trim()})):Gn();return r.prefix||=V(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=fn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:b(b({},Ei),{},{fill:`white`})},p=c.children?{children:c.children.map(Di)}:{},m={tag:`g`,attributes:b({},d.inner),children:[Di(b({tag:c.tag,attributes:b(b({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:b({},d.outer),children:[m]},g=`mask-${a||on()}`,_=`clip-${a||on()}`,v={tag:`mask`,attributes:b(b({},Ei),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Oi(u)},v]};return t.push(y,{tag:`rect`,attributes:b({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ei)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;C.matchMedia&&(t=C.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:b(b({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=b(b({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:b(b({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:b(b({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:b(b({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:b(b({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:b(b({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:K}),K.noAuto;var J=K.config;K.library,K.dom;var ki=K.parse;K.findIconDefinition,K.toHtml;var Ai=K.icon;K.layer,K.text,K.counter;var Y=a();function ji(e){return e-=0,e===e}function Mi(e){return ji(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Ni=(e,t)=>o.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Pi(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,Fi=1e3;function Ii(e){if(X.has(e))return X.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Mi(n);t[e.startsWith(`webkit`)?Pi(e):e]=r}}}n=a+1}if(X.size===Fi){let e=X.keys().next().value;e&&X.delete(e)}return X.set(e,t),t}function Li(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Li(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ii(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Mi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Ni)))}return e(t.tag,{...a,...u},...r)}var Ri=Li.bind(null,o.createElement),zi=(e,t)=>{let n=(0,o.useId)();return e||(t?n:void 0)},Bi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Vi=`searchPseudoElementsFullScan`in J&&typeof J.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Hi=Number.parseInt(Vi)>=7,Ui=()=>Hi,Wi=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},Gi={left:`fa-pull-left`,right:`fa-pull-right`},Ki={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},qi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Ji={default:`fa-layers`};function Yi(e){let t=J.cssPrefix||J.familyPrefix||Wi;return t===Wi?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Wi}-`,`g`),`${t}-`)}function Xi(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Z.beat),n&&x.push(Z.fade),r&&x.push(Z.beatFade),i&&x.push(Z.bounce),a&&x.push(Z.shake),o&&x.push(Z.spin),c&&x.push(Z.spinReverse),s&&x.push(Z.spinPulse),l&&x.push(Z.pulse),u&&x.push(Q.fixedWidth),d&&x.push(Q.inverse),f&&x.push(Q.border),p===!0&&x.push(Q.flip),(p===`horizontal`||p===`both`)&&x.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Q.flipVertical),m!=null&&x.push(qi[m]),h!=null&&h!==0&&x.push(Ki[h]),g!=null&&x.push(Gi[g]),_&&x.push(Q.swapOpacity),Ui()?(v&&x.push(Q.rotateBy),y&&x.push(Q.widthAuto),(J.cssPrefix||J.familyPrefix||Wi)===Wi?x:x.map(Yi)):x}var Zi=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Qi(e){if(e)return Zi(e)?e:ki.icon(e)}function $i(e){return Object.keys(e)}var ea=new Bi(`FontAwesomeIcon`),ta={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},na=new Set(Object.keys(ta)),$=o.forwardRef((e,t)=>{let n={...ta,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=zi(c,!!i),d=zi(s,!!o),f=Qi(r);if(!f)return ea.error(`Icon lookup is undefined`,r),null;let p=Xi(n),m=typeof l==`string`?ki.transform(l):l,h=Qi(i),g=Ai(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return ea.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of $i(n))na.has(e)||(v[e]=n[e]);return Ri(_[0],v)});$.displayName=`FontAwesomeIcon`,`${Ji.default}${Q.fixedWidth}`;var ra={prefix:`fab`,iconName:`facebook-f`,icon:[320,512,[],`f39e`,`M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z`]},ia={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},aa={prefix:`fab`,iconName:`whatsapp`,icon:[448,512,[],`f232`,`M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z`]},oa={prefix:`fab`,iconName:`telegram`,icon:[512,512,[62462,`telegram-plane`],`f2c6`,`M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z`]},sa=[{label:`HVAC System Installation`,href:`/insights/hvac-system-installation`},{label:`Why MEP Design Matters`,href:`/insights/why-mep-design-matters`},{label:`Benefits of Preventive MEP`,href:`/insights/benefits-of-preventive-mep`},{label:`Energy-Efficient Air Conditioning`,href:`/insights/energy-efficient-air-conditioning`},{label:`Plumbing Design`,href:`/insights/plumbing-design`},{label:`How to Choose an MEP`,href:`/insights/how-to-choose-mep`}];function ca(){let{url:e,props:t}=n(),i=[{label:`Home`,href:`/`},{label:`About Us`,href:`/about`},{label:`Services`,href:`/services/mechanical`,dropdown:[{label:`Mechanical / HVAC`,href:`/services/mechanical`},{label:`Electrical & ELV`,href:`/services/electrical`},{label:`Plumbing`,href:`/services/plumbing`}]},{label:`Projects`,href:`/projects`},{label:`Maintenance`,href:`/maintenance`},{label:`Insights`,href:`/insights`,dropdown:t.navInsights?.length>0?t.navInsights:sa},{label:`Contact`,href:`/contact`}],[a,s]=(0,o.useState)(!1),[c,l]=(0,o.useState)(null),u=(0,o.useRef)(null),d=(0,o.useRef)(null);(0,o.useEffect)(()=>{l(null),s(!1)},[e]),(0,o.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&l(null)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f=t=>t===`/`?e===`/`:e.startsWith(t),p=e=>l(t=>t===e?null:e),m=e=>{clearTimeout(d.current),l(e)},h=()=>{d.current=setTimeout(()=>{l(null)},150)};return(0,Y.jsxs)(`header`,{className:`w-full`,ref:u,children:[(0,Y.jsxs)(`div`,{className:`flex items-center justify-between px-4 md:px-6 py-3 bg-white`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,Y.jsx)(`img`,{src:`/logo.png`,alt:`Master MEP`,className:`w-10 h-10 rounded-full object-cover`}),(0,Y.jsx)(`span`,{className:`text-lg font-bold tracking-wide text-[#1A3A5C]`,children:`MASTER MEP`})]}),(0,Y.jsxs)(`div`,{className:`hidden md:flex gap-4`,children:[(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:ra,className:`text-white`})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Telegram`,className:`w-11 h-11 rounded-full bg-[#179cda] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:oa,className:`text-white`})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`WhatsApp`,className:`w-11 h-11 rounded-full bg-[#0fd658] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:aa,className:`text-white`})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Instagram`,className:`w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition`,style:{background:`radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`},children:(0,Y.jsx)($,{icon:ia,className:`text-white`})})]}),(0,Y.jsx)(`button`,{className:`md:hidden flex flex-col justify-center items-center gap-1.5 p-2 text-[#1A3A5C]`,onClick:()=>s(!a),"aria-label":`Toggle menu`,children:a?(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,viewBox:`0 0 24 24`,children:[(0,Y.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,Y.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}):(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,viewBox:`0 0 24 24`,children:[(0,Y.jsx)(`line`,{x1:`3`,y1:`6`,x2:`21`,y2:`6`}),(0,Y.jsx)(`line`,{x1:`3`,y1:`12`,x2:`21`,y2:`12`}),(0,Y.jsx)(`line`,{x1:`3`,y1:`18`,x2:`21`,y2:`18`})]})})]}),(0,Y.jsx)(`nav`,{className:`hidden md:block`,style:{background:`linear-gradient(to right, #0C2D4F, #1E5BA8)`},children:(0,Y.jsx)(`ul`,{className:`flex items-center justify-center gap-1 md:gap-2 px-4 py-2.5 flex-wrap text-sm font-medium text-white`,children:i.map(t=>(0,Y.jsx)(`li`,{className:`relative`,onMouseEnter:()=>t.dropdown&&m(t.label),onMouseLeave:()=>t.dropdown&&h(),children:t.dropdown?(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`button`,{onClick:()=>p(t.label),className:`flex items-center px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-medium border ${c===t.label||f(t.href)?`border-white text-white font-bold bg-white/10`:`border-transparent text-white hover:bg-white/20`}`,children:t.label}),(0,Y.jsx)(`div`,{className:`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden z-50 border border-gray-100 transition-all duration-200 origin-top ${c===t.label?`opacity-100 scale-100 translate-y-0 pointer-events-auto`:`opacity-0 scale-95 -translate-y-2 pointer-events-none`}`,children:t.dropdown.map(t=>(0,Y.jsx)(r,{href:t.href,className:`block px-4 py-2.5 text-sm transition-colors border-b border-gray-50 last:border-0 ${e===t.href?`bg-[#E6F1FB] text-[#0C447C] font-medium border-l-[3px] border-[#093c6e]`:`text-blue-600 hover:bg-blue-600 hover:text-blue-900`}`,children:t.label},t.label))})]}):(0,Y.jsx)(r,{href:t.href,className:`px-4 py-1.5 rounded-full transition-all duration-200 text-sm font-medium border ${f(t.href)?`border-white text-white font-bold bg-white/10`:`border-transparent text-white hover:bg-white/20`}`,children:t.label})},t.label))})}),a&&(0,Y.jsx)(`nav`,{className:`md:hidden`,style:{background:`linear-gradient(to right, #0C2D4F, #1E5BA8)`},children:(0,Y.jsxs)(`ul`,{className:`flex flex-col px-4 py-3 gap-1`,children:[i.map(t=>(0,Y.jsx)(`li`,{children:t.dropdown?(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`button`,{onClick:()=>p(t.label),className:`w-full flex items-center px-4 py-2.5 rounded-full text-white text-sm font-medium border transition-all duration-200 ${c===t.label?`border-white bg-white/10`:`border-transparent hover:bg-white/20`}`,children:t.label}),(0,Y.jsx)(`div`,{className:`ml-4 mt-1 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-200 origin-top ${c===t.label?`opacity-100 scale-100 translate-y-0 max-h-96`:`opacity-0 scale-95 -translate-y-2 max-h-0 pointer-events-none`}`,children:t.dropdown.map(t=>(0,Y.jsx)(r,{href:t.href,className:`block px-4 py-2.5 text-sm transition-colors border-b border-gray-50 last:border-0 ${e===t.href?`bg-[#E6F1FB] text-[#0C447C] font-medium border-l-[3px] border-[#185FA5]`:`text-gray-600 hover:bg-gray-50 hover:text-gray-900`}`,children:t.label},t.label))})]}):(0,Y.jsx)(r,{href:t.href,className:`block px-4 py-2.5 rounded-full transition-all duration-200 text-sm font-medium border ${f(t.href)?`border-white text-white font-bold bg-white/10`:`border-transparent text-white hover:bg-white/20`}`,children:t.label})},t.label)),(0,Y.jsxs)(`li`,{className:`flex items-center gap-4 px-4 py-3 text-white text-lg`,children:[(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`hover:opacity-70 transition-opacity`,children:(0,Y.jsx)($,{icon:ra})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Telegram`,className:`hover:opacity-70 transition-opacity`,children:(0,Y.jsx)($,{icon:oa})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`WhatsApp`,className:`hover:opacity-70 transition-opacity`,children:(0,Y.jsx)($,{icon:aa})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Instagram`,className:`hover:opacity-70 transition-opacity`,children:(0,Y.jsx)($,{icon:ia})})]})]})})]})}function la(){return(0,Y.jsxs)(`footer`,{className:`text-white`,style:{background:`linear-gradient(to right, #0C2D4F, #1E5BA8)`},children:[(0,Y.jsxs)(`div`,{className:`w-full max-w-[1680px] mx-auto px-8 lg:px-16 py-14 grid lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-16`,children:[(0,Y.jsxs)(`div`,{className:`lg:pr-6`,children:[(0,Y.jsxs)(`div`,{className:`flex items-center gap-6 mb-8`,children:[(0,Y.jsx)(`img`,{src:`/logo.png`,alt:`Master MEP Solution`,className:`w-36 h-36 object-contain shrink-0`}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h2`,{className:`text-5xl font-bold tracking-[0.08em] leading-none`,children:`MASTER MEP`}),(0,Y.jsx)(`p`,{className:`mt-3 text-sm tracking-[0.8em] text-white/70 uppercase`,children:`SOLUTION`})]})]}),(0,Y.jsx)(`h4`,{className:`text-[22px] font-bold leading-tight max-w-[520px] mb-6`,children:`Professional MEP Engineering & Installation Company in Cambodia`}),(0,Y.jsx)(`p`,{className:`text-base text-white/85 leading-8 max-w-[560px] mb-10`,children:`Master MEP Solution Co., Ltd provides professional Mechanical, Electrical, Plumbing (MEP), HVAC, ELV, Fire Protection, and Maintenance Services for commercial buildings, villas, banks, restaurants, hospitals, and industrial projects across Cambodia.`}),(0,Y.jsxs)(`div`,{className:`flex gap-4`,children:[(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Facebook`,className:`w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:ra})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Telegram`,className:`w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:oa})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`WhatsApp`,className:`w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition`,children:(0,Y.jsx)($,{icon:aa})}),(0,Y.jsx)(`a`,{href:`#`,"aria-label":`Instagram`,className:`w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 transition`,style:{background:`radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)`},children:(0,Y.jsx)($,{icon:ia})})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`font-bold mb-6 text-lg`,children:`Company`}),(0,Y.jsxs)(`ul`,{className:`flex flex-col gap-4 text-base`,children:[(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/`,children:`Home`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/about`,children:`About Us`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/services/mechanical`,children:`Services`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/projects`,children:`Projects`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/maintenance`,children:`Maintenance`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/insights/hvac-system-installation`,children:`Insights`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(r,{href:`/contact`,children:`Contact`})})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`font-bold mb-6 text-lg`,children:`Contact`}),(0,Y.jsxs)(`div`,{className:`space-y-5 text-base`,children:[(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`p`,{className:`font-bold mb-2`,children:`Head Office Address`}),(0,Y.jsxs)(`p`,{children:[`#159A, Street No. 2011,`,(0,Y.jsx)(`br`,{}),`Phum Lorem, Sangkat Lorem,`,(0,Y.jsx)(`br`,{}),`Khan Lorem, Phnom Penh,`,(0,Y.jsx)(`br`,{}),`Cambodia.`]})]}),(0,Y.jsxs)(`p`,{children:[`089 911 988 Lorem`,(0,Y.jsx)(`br`,{}),`081 688 880 Lorem`]}),(0,Y.jsx)(`p`,{children:`lorem@gmail.com`}),(0,Y.jsx)(`p`,{className:`underline`,children:`www.Lorem.com.kh`}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`p`,{className:`font-bold mb-2`,children:`Business Hours`}),(0,Y.jsxs)(`p`,{children:[`Monday – Saturday`,(0,Y.jsx)(`br`,{}),`8:00 AM – 5:30 PM`]})]})]})]}),(0,Y.jsxs)(`div`,{children:[(0,Y.jsx)(`h3`,{className:`font-bold mb-6 text-lg text-center`,children:`Find Us`}),(0,Y.jsx)(`div`,{className:`overflow-hidden rounded-xl border border-white/20 shadow-lg`,children:(0,Y.jsx)(`iframe`,{title:`Master MEP Solution Location`,src:`https://maps.google.com/maps?q=159A%20Street%202011%20Phnom%20Penh%20Cambodia&t=&z=15&ie=UTF8&iwloc=&output=embed`,width:`100%`,height:`260`,style:{border:0},allowFullScreen:!0,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`})})]})]}),(0,Y.jsx)(`div`,{className:`bg-white text-[#1A3A5C] py-6`,children:(0,Y.jsxs)(`div`,{className:`max-w-[1680px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4`,children:[(0,Y.jsx)(`p`,{children:`MASTER MEP SOLUTIONS`}),(0,Y.jsx)(`p`,{children:`All rights reserved. 2026`})]})})]})}function ua({children:e}){return i(1e4),(0,Y.jsxs)(`div`,{className:`flex flex-col min-h-screen overflow-x-hidden`,children:[(0,Y.jsx)(ca,{}),(0,Y.jsx)(`main`,{className:`flex-1`,children:e}),(0,Y.jsx)(la,{})]})}export{ua as t};