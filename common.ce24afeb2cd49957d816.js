(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Xo0":function(n,l,t){"use strict";var u=t("CcnG"),e=t("Ip0R"),i=t("ZYCi"),r=function(){function n(n){this.renderer=n,this.anchors=[],this.throttle=!1}return Object.defineProperty(n.prototype,"links",{set:function(n){var l=this;this.anchors=n.map(function(n){return"#"+n.fragment}),this.sub=n.changes.subscribe(function(){l.anchors=n.map(function(n){return"#"+n.fragment})})},enumerable:!0,configurable:!0}),n.prototype.handleEvent=function(){var n=this;this.scrollPosition=this.scrollable.scrollTop,this.throttle||window.requestAnimationFrame(function(){var l=n.findCurrentAnchor()||0;n.linkElements.forEach(function(t,u){n.renderer.setElementClass(t.nativeElement,"active",u===l)}),n.throttle=!1}),this.throttle=!0},n.prototype.findCurrentAnchor=function(){for(var n=this.anchors.length-1;n>=0;n--){var l=this.anchors[n];if(this.scrollable.querySelector(l)&&this.scrollable.querySelector(l).offsetTop<=this.scrollPosition)return n}},n.prototype.ngOnInit=function(){this.scrollable.addEventListener("scroll",this)},n.prototype.ngOnDestroy=function(){this.scrollable&&this.scrollable.removeEventListener("scroll",this),this.sub&&this.sub.unsubscribe()},n}(),o=function(){function n(n,l){var t=this;this.route=n,this.platformId=l,this.sub=this.route.fragment.subscribe(function(n){t.scrollToAnchor(n,!1)})}return n.prototype.ngOnInit=function(){this.scrollToAnchor(this.route.snapshot.fragment,!1)},n.prototype.scrollToAnchor=function(n,l){if(void 0===l&&(l=!0),n&&Object(e.E)(this.platformId)){var t=document.querySelector("#"+n);t&&t.scrollIntoView({behavior:l?"smooth":"instant",block:"start"})}},n.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},n}();t("0G9f"),t.d(l,"a",function(){return s}),t.d(l,"b",function(){return d});var s=u.sb({encapsulation:2,styles:[],data:{}});function c(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),u.Ob(1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.component.description)})}function a(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,1,"span",[["class","bug bug-ng"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,1,0,u.yb(1,"assets/images/bugs/badge_ng",t.ngInProgress?"_inprogress":"",".svg"),u.yb(1,"",t.uiInProgress?"Development in Progress":"Angular",""),u.yb(1,"",t.uiInProgress?"Development in Progress":"Angular",""))})}function b(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"div",[["class","component-workstream-bugs"]],null,null,null,null,null)),(n()(),u.ub(1,0,null,null,1,"span",[["class","bug bug-html"]],[[2,"hidden",null]],null,null,null,null)),(n()(),u.ub(2,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(n()(),u.ub(3,0,null,null,1,"span",[["class","bug bug-css"]],[[2,"hidden",null]],null,null,null,null)),(n()(),u.ub(4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0],[8,"title",0]],null,null,null,null)),(n()(),u.kb(16777216,null,null,1,null,a)),u.tb(6,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,6,0,t.ngDone||t.ngInProgress)},function(n,l){var t=l.component;n(l,1,0,!t.uiDone&&!t.uiInProgress),n(l,2,0,u.yb(1,"assets/images/bugs/badge_html5",t.uiInProgress?"_inprogress":"",".svg"),u.yb(1,"",t.uiInProgress?"Development in Progress":"HTML5",""),u.yb(1,"",t.uiInProgress?"Development in Progress":"HTML5","")),n(l,3,0,!t.uiDone&&!t.uiInProgress),n(l,4,0,u.yb(1,"assets/images/bugs/badge_css3",t.uiInProgress?"_inprogress":"",".svg"),u.yb(1,"",t.uiInProgress?"Development in Progress":"CSS3",""),u.yb(1,"",t.uiInProgress?"Development in Progress":"CSS3",""))})}function f(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),u.ub(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,[[4,4],[1,4]],0,i.o,[i.l,i.a,e.n],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),u.tb(3,1720320,null,2,i.n,[i.l,u.l,u.H,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Mb(603979776,3,{links:1}),u.Mb(603979776,4,{linksWithHrefs:1}),(n()(),u.Ob(-1,null,[" Examples & Code "]))],function(n,l){n(l,2,0,"top","."),n(l,3,0,"active")},function(n,l){n(l,1,0,u.Gb(l,2).target,u.Gb(l,2).href)})}function g(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),u.ub(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","guidelines"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,[[6,4],[1,4]],0,i.o,[i.l,i.a,e.n],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),u.tb(3,1720320,null,2,i.n,[i.l,u.l,u.H,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Mb(603979776,5,{links:1}),u.Mb(603979776,6,{linksWithHrefs:1}),(n()(),u.Ob(-1,null,[" Design Guidelines "]))],function(n,l){n(l,2,0,"guidelines","."),n(l,3,0,"active")},function(n,l){n(l,1,0,u.Gb(l,2).target,u.Gb(l,2).href)})}function h(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),u.ub(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","top"],["id","topTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,[[8,4],[1,4]],0,i.o,[i.l,i.a,e.n],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),u.tb(3,1720320,null,2,i.n,[i.l,u.l,u.H,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Mb(603979776,7,{links:1}),u.Mb(603979776,8,{linksWithHrefs:1}),(n()(),u.Ob(-1,null,[" Design Guidelines "]))],function(n,l){n(l,2,0,"top","."),n(l,3,0,"active")},function(n,l){n(l,1,0,u.Gb(l,2).target,u.Gb(l,2).href)})}function p(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),u.ub(1,0,[[2,0]],null,5,"a",[["class","clrweb-tablink"],["fragment","examples"],["id","guidelinesTabLink"],["routerLink","."],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==u.Gb(n,2).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.tb(2,671744,[[10,4],[1,4]],0,i.o,[i.l,i.a,e.n],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),u.tb(3,1720320,null,2,i.n,[i.l,u.l,u.H,[2,i.m],[2,i.o]],{routerLinkActive:[0,"routerLinkActive"]},null),u.Mb(603979776,9,{links:1}),u.Mb(603979776,10,{linksWithHrefs:1}),(n()(),u.Ob(-1,null,[" Code & Examples "]))],function(n,l){n(l,2,0,"examples","."),n(l,3,0,"active")},function(n,l){n(l,1,0,u.Gb(l,2).target,u.Gb(l,2).href)})}function d(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,20,"div",[["class","dox-wrapper dox-header"]],[[2,"new-component-layout",null]],null,null,null,null)),(n()(),u.ub(1,0,null,null,19,"section",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),u.Ob(3,null,["",""])),(n()(),u.kb(16777216,null,null,1,null,c)),u.tb(5,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,b)),u.tb(7,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.ub(8,0,null,null,12,"div",[["class","dox-tabs"]],null,null,null,null,null)),(n()(),u.ub(9,0,null,null,11,"ul",[["class","list-unstyled"]],null,null,null,null,null)),u.tb(10,212992,null,2,r,[u.G],{scrollable:[0,"scrollable"]},null),u.Mb(603979776,1,{links:1}),u.Mb(603979776,2,{linkElements:1}),(n()(),u.kb(16777216,null,null,1,null,f)),u.tb(14,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,g)),u.tb(16,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,h)),u.tb(18,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,p)),u.tb(20,16384,null,0,e.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.ub(21,0,[["scrollable",1]],null,4,"section",[["class","dox-content"],["hash-listener",""]],null,null,null,null,null)),u.tb(22,212992,null,0,o,[i.a,u.D],null,null),(n()(),u.ub(23,0,null,null,2,"div",[["class","dox-content-wrapper"]],null,null,null,null,null)),(n()(),u.ub(24,0,null,null,0,"a",[["id","top"]],null,null,null,null,null)),u.Fb(null,0)],function(n,l){var t=l.component;n(l,5,0,t.description),n(l,7,0,!t.useNewLayout),n(l,10,0,u.Gb(l,21)),n(l,14,0,!t.useNewLayout),n(l,16,0,!t.useNewLayout),n(l,18,0,t.useNewLayout),n(l,20,0,t.useNewLayout),n(l,22,0)},function(n,l){var t=l.component;n(l,0,0,t.useNewLayout),n(l,3,0,t.title)})}},"0G9f":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){function n(){this.title="",this.newLayout=!1,this.ui=0,this.ng=0,this.description=""}return Object.defineProperty(n.prototype,"useNewLayout",{get:function(){return!!this.newLayout},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uiInProgress",{get:function(){return 4<this.ui&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"uiDone",{get:function(){return this.ui>19},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ngInProgress",{get:function(){return 4<this.ng&&this.ui<20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"ngDone",{get:function(){return this.ng>19},enumerable:!0,configurable:!0}),n}()},JsA7:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var u=function(){return function(){}}()},"N+3j":function(n,l,t){"use strict";for(var u=t("qwhO"),e=new Map,i=0,r=u.list;i<r.length;i++){var o=r[i];e.set(o.url,o)}t.d(l,"a",function(){return s});var s=function(){function n(n){this.ui=-1,this.ng=-1,this.title="",this.newLayout=!1;var l=e.get(n);this.populateComponentDetails(l.text,l.ui,l.ng,l.newLayout)}return n.prototype.populateComponentDetails=function(n,l,t,u){this.ui=l,this.ng=t,this.title=n,this.newLayout=u},n}()},QBgc:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var u=t("Ip0R"),e=function(){function n(n,l,t){this._el=n,this.renderer=l,this.platformId=t,this._highlight=""}return n.prototype.ngAfterContentInit=function(){this.redraw()},n.prototype.redraw=function(){this._el&&this._el.nativeElement&&Object(u.E)(this.platformId)&&Prism.highlightElement(this._el.nativeElement)},Object.defineProperty(n.prototype,"highlight",{get:function(){return this._highlight},set:function(n){n&&""!==n.trim()&&(this._highlight=n,this.renderer.addClass(this._el.nativeElement,this._highlight))},enumerable:!0,configurable:!0}),n}()},QkwE:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t.d(l,"b",function(){return c});var u=t("CcnG"),e=t("QBgc"),i=t("Ip0R"),r=(t("vAyd"),u.sb({encapsulation:0,styles:["pre[_ngcontent-%COMP%] {\n            background: transparent;\n            padding: 12px;\n        }"],data:{}}));function o(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),u.ub(1,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,2,"code",[],null,null,null,null,null)),u.tb(3,1064960,[[1,4]],0,e.a,[u.l,u.H,u.D],{highlight:[0,"highlight"]},null),(n()(),u.Ob(4,null,["",""]))],function(n,l){n(l,3,0,"language-"+l.component.language)},function(n,l){n(l,4,0,l.component.code.trim())})}function s(n){return u.Qb(0,[(n()(),u.ub(0,0,null,null,3,null,null,null,null,null,null,null)),(n()(),u.ub(1,0,null,null,2,"pre",[],null,null,null,null,null)),(n()(),u.ub(2,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(n()(),u.Ob(3,null,["",""]))],null,function(n,l){n(l,3,0,l.component.code.trim())})}function c(n){return u.Qb(0,[u.Mb(671088640,1,{codeHighlight:0}),(n()(),u.kb(16777216,null,null,1,null,o)),u.tb(2,16384,null,0,i.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null),(n()(),u.kb(16777216,null,null,1,null,s)),u.tb(4,16384,null,0,i.q,[u.S,u.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,!t.disablePrism),n(l,4,0,t.disablePrism)},null)}},vAyd:function(n,l,t){"use strict";t.d(l,"a",function(){return u}),t("QBgc");var u=function(){function n(){this.language="html",this.disablePrism=!1}return n.prototype.ngAfterViewInit=function(){this.codeHighlight&&this.codeHighlight.redraw()},n}()}}]);