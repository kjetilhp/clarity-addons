(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{rYuD:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),a=u("zl1X"),b=u("pMnS"),o=u("8KBR"),c=u("+Xo0"),i=u("0G9f"),r=u("gIcY"),s=u("xLE1"),d=u("Ip0R"),g=u("6/Z3"),p=u("QkwE"),m=u("vAyd"),h=u("mrSG"),E=u("N+3j"),v='\n<div class="clr-row" *ngFor="let item of pagedItems">\n    <div class="clr-col-lg-6 clr-col-md-8 clr-col-12">\n        <div class="card">\n            <div class="card-header">\n                {{item}}\n            </div>\n            <div class="card-block">\n                <div class="card-text">\n                    This is an example card.\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="margin-top-24">\n    <clr-pager [clrPage]="currentPage"\n               [clrPageSize]="pageSize"\n               [clrTotalItems]="totalItems"\n               (clrPageChange)="onPageChanged($event)"></clr-pager>\n</div>\n',G=function(l){function n(){var n=l.call(this,"generic-pager")||this;return n.htmlExample=v,n.allItems=[],n.pagedItems=[],n.totalItems=30,n.pageSize=3,n.currentPage=1,n}return Object(h.c)(n,l),n.prototype.onPageChanged=function(l){var n=this,u=(l-1)*this.pageSize,e=Math.min(u+this.pageSize-1,this.allItems.length-1);setTimeout(function(){return n.pagedItems=n.allItems.slice(u,e+1)},0)},n.prototype.createItems=function(){this.allItems=[];for(var l=0;l<this.totalItems;l++)this.allItems[l]="Card "+(l+1);this.onPageChanged(this.currentPage)},n.prototype.ngOnInit=function(){this.createItems()},n}(E.a),f=e.sb({encapsulation:2,styles:[],data:{}});function C(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,7,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,6,"div",[["class","clr-col-lg-6 clr-col-md-8 clr-col-12"]],null,null,null,null,null)),(l()(),e.ub(2,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ob(4,null,[" "," "])),(l()(),e.ub(5,0,null,null,2,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"div",[["class","card-text"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" This is an example card. "]))],null,function(l,n){l(n,4,0,n.context.$implicit)})}function I(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,92,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,c.b,c.a)),e.tb(1,49152,null,0,i.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,90,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The Generic Pager is a basic component that can be used to show a simple pagination bar."])),(l()(),e.ub(5,0,null,null,7,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Usage"])),(l()(),e.ub(8,0,null,null,4,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.ub(9,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Use the Generic Pager component whenever you have to show data over multiple pages, e.g. a list of Cards. "])),(l()(),e.ub(11,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Do not use the Generic Pager component when you are showing your data in a clr-datagrid, instead use the existing clr-dg-pagination component. "])),(l()(),e.ub(13,0,null,null,79,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.ub(14,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code & Examples"])),(l()(),e.ub(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Following interactions are available: "])),(l()(),e.ub(18,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),e.ub(19,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" To define the page size add a "])),(l()(),e.ub(21,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrPageSize]"])),(l()(),e.Ob(-1,null,[" input to the component. "])),(l()(),e.ub(24,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" To define the number of total items add a "])),(l()(),e.ub(26,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrTotalItems]"])),(l()(),e.Ob(-1,null,[" input to the component. "])),(l()(),e.ub(29,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" To react to page changes, bind to the event "])),(l()(),e.ub(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["(clrPageChange)"])),(l()(),e.Ob(-1,null,[". "])),(l()(),e.ub(34,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Optionally you can set the current page by adding a "])),(l()(),e.ub(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrPage]"])),(l()(),e.Ob(-1,null,[" input to the component. "])),(l()(),e.ub(39,0,null,null,1,"h3",[["id","demo"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Demo"])),(l()(),e.ub(41,0,null,null,44,"form",[["clrForm",""],["clrLayout","horizontal"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,43).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,43).onReset()&&t),t},null,null)),e.tb(42,16384,null,0,r.G,[],null,null),e.tb(43,4210688,null,0,r.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,r.c,null,[r.r]),e.tb(45,16384,null,0,r.q,[[4,r.c]],null,null),e.Lb(512,null,s.Mc,s.Mc,[]),e.Lb(512,null,s.Pc,s.Pc,[]),e.tb(48,16384,null,0,s.cb,[s.Mc,s.Pc],null,null),e.tb(49,81920,null,0,s.nb,[s.Mc],{layout:[0,"layout"]},null),(l()(),e.ub(50,0,null,null,17,"clr-input-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,a.T,a.x)),e.Lb(512,null,s.Nc,s.Nc,[]),e.Lb(131584,null,s.Oc,s.Oc,[s.Nc]),e.Lb(512,null,s.Sc,s.Sc,[]),e.tb(54,180224,null,1,s.kb,[s.Oc,[2,s.Mc],s.Sc,s.Nc],null,null),e.Mb(603979776,1,{label:0}),e.Lb(512,null,s.Lc,s.Lc,[]),(l()(),e.ub(57,0,null,0,2,"label",[["for","totalItems"]],[[1,"for",0]],null,null,null,null)),e.tb(58,212992,[[1,4]],0,s.mb,[[2,s.Lc],[2,s.Mc],[2,s.Nc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Total Items"])),(l()(),e.ub(60,16777216,null,1,7,"input",[["class","clr-col-1"],["clrInput",""],["id","totalItems"],["min","0"],["name","totalItems"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-input",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.Gb(l,61)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,61).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Gb(l,61)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Gb(l,61)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Gb(l,62).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Gb(l,62).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,62).onTouched()&&t),"blur"===n&&(t=!1!==e.Gb(l,67).triggerValidation()&&t),"ngModelChange"===n&&(t=!1!==(a.totalItems=u)&&t),"ngModelChange"===n&&(t=!1!==a.createItems()&&t),t},null,null)),e.tb(61,16384,null,0,r.d,[e.H,e.l,[2,r.a]],null,null),e.tb(62,16384,null,0,r.v,[e.H,e.l],null,null),e.Lb(1024,null,r.n,function(l,n){return[l,n]},[r.d,r.v]),e.tb(64,671744,null,0,r.s,[[2,r.c],[8,null],[8,null],[6,r.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,r.o,null,[r.s]),e.tb(66,16384,null,0,r.p,[[4,r.o]],null,null),e.tb(67,212992,null,0,s.jb,[e.S,e.s,[6,r.o],e.H,e.l],{id:[0,"id"]},null),(l()(),e.ub(68,0,null,null,17,"clr-input-container",[],[[2,"clr-form-control",null],[2,"clr-form-control-disabled",null],[2,"clr-row",null]],null,null,a.T,a.x)),e.Lb(512,null,s.Nc,s.Nc,[]),e.Lb(131584,null,s.Oc,s.Oc,[s.Nc]),e.Lb(512,null,s.Sc,s.Sc,[]),e.tb(72,180224,null,1,s.kb,[s.Oc,[2,s.Mc],s.Sc,s.Nc],null,null),e.Mb(603979776,2,{label:0}),e.Lb(512,null,s.Lc,s.Lc,[]),(l()(),e.ub(75,0,null,0,2,"label",[["for","pageSize"]],[[1,"for",0]],null,null,null,null)),e.tb(76,212992,[[2,4]],0,s.mb,[[2,s.Lc],[2,s.Mc],[2,s.Nc],e.H,e.l],{forAttr:[0,"forAttr"]},null),(l()(),e.Ob(-1,null,["Page Size"])),(l()(),e.ub(78,16777216,null,1,7,"input",[["class","clr-col-1"],["clrInput",""],["id","pageSize"],["min","0"],["name","pageSize"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-input",null],[8,"id",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,a=l.component;return"input"===n&&(t=!1!==e.Gb(l,79)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,79).onTouched()&&t),"compositionstart"===n&&(t=!1!==e.Gb(l,79)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e.Gb(l,79)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e.Gb(l,80).onChange(u.target.value)&&t),"input"===n&&(t=!1!==e.Gb(l,80).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e.Gb(l,80).onTouched()&&t),"blur"===n&&(t=!1!==e.Gb(l,85).triggerValidation()&&t),"ngModelChange"===n&&(t=!1!==(a.pageSize=u)&&t),"ngModelChange"===n&&(t=!1!==a.createItems()&&t),t},null,null)),e.tb(79,16384,null,0,r.d,[e.H,e.l,[2,r.a]],null,null),e.tb(80,16384,null,0,r.v,[e.H,e.l],null,null),e.Lb(1024,null,r.n,function(l,n){return[l,n]},[r.d,r.v]),e.tb(82,671744,null,0,r.s,[[2,r.c],[8,null],[8,null],[6,r.n]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Lb(2048,null,r.o,null,[r.s]),e.tb(84,16384,null,0,r.p,[[4,r.o]],null,null),e.tb(85,212992,null,0,s.jb,[e.S,e.s,[6,r.o],e.H,e.l],{id:[0,"id"]},null),(l()(),e.kb(16777216,null,null,1,null,C)),e.tb(87,278528,null,0,d.p,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ub(88,0,null,null,2,"div",[["class","margin-top-24"]],null,null,null,null,null)),(l()(),e.ub(89,0,null,null,1,"clr-pager",[],[[2,"pager",null]],[[null,"clrPageChange"]],function(l,n,u){var e=!0;return"clrPageChange"===n&&(e=!1!==l.component.onPageChanged(u)&&e),e},o.S,o.s)),e.tb(90,49152,null,0,g.L,[],{pageSize:[0,"pageSize"],totalItems:[1,"totalItems"],page:[2,"page"]},{pageChange:"clrPageChange"}),(l()(),e.ub(91,0,null,null,1,"clr-code-snippet",[],null,null,null,p.b,p.a)),e.tb(92,4243456,null,0,m.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,49,0,"horizontal"),l(n,58,0,"totalItems"),l(n,64,0,"totalItems",u.totalItems),l(n,67,0,"totalItems"),l(n,76,0,"pageSize"),l(n,82,0,"pageSize",u.pageSize),l(n,85,0,"pageSize"),l(n,87,0,u.pagedItems),l(n,90,0,u.pageSize,u.totalItems,u.currentPage),l(n,92,0,u.htmlExample)},function(l,n){l(n,0,0,!0),l(n,41,0,e.Gb(n,45).ngClassUntouched,e.Gb(n,45).ngClassTouched,e.Gb(n,45).ngClassPristine,e.Gb(n,45).ngClassDirty,e.Gb(n,45).ngClassValid,e.Gb(n,45).ngClassInvalid,e.Gb(n,45).ngClassPending,!0,e.Gb(n,48).layoutService.isHorizontal(),e.Gb(n,48).layoutService.isCompact()),l(n,50,0,!0,null==e.Gb(n,54).control?null:e.Gb(n,54).control.disabled,e.Gb(n,54).addGrid()),l(n,57,0,e.Gb(n,58).forAttr),l(n,60,0,e.Gb(n,66).ngClassUntouched,e.Gb(n,66).ngClassTouched,e.Gb(n,66).ngClassPristine,e.Gb(n,66).ngClassDirty,e.Gb(n,66).ngClassValid,e.Gb(n,66).ngClassInvalid,e.Gb(n,66).ngClassPending,!0,e.Gb(n,67).id),l(n,68,0,!0,null==e.Gb(n,72).control?null:e.Gb(n,72).control.disabled,e.Gb(n,72).addGrid()),l(n,75,0,e.Gb(n,76).forAttr),l(n,78,0,e.Gb(n,84).ngClassUntouched,e.Gb(n,84).ngClassTouched,e.Gb(n,84).ngClassPristine,e.Gb(n,84).ngClassDirty,e.Gb(n,84).ngClassValid,e.Gb(n,84).ngClassInvalid,e.Gb(n,84).ngClassPending,!0,e.Gb(n,85).id),l(n,89,0,!0)})}function O(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"clr-generic-pager-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,I,f)),e.tb(1,114688,null,0,G,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0)})}var S=e.qb("clr-generic-pager-demo",G,O,{},{},[]),y=u("XPsC"),P=u("ZYCi"),z=u("JsA7");u.d(n,"GenericPagerDemoModuleNgFactory",function(){return L});var L=e.rb(t,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[a.ab,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.bb,a.cb,a.db,a.eb,b.a,o.a,S]],[3,e.j],e.z]),e.Eb(4608,d.s,d.r,[e.w,[2,d.K]]),e.Eb(4608,r.D,r.D,[]),e.Eb(4608,g.f,g.f,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,r.C,r.C,[]),e.Eb(1073742336,r.k,r.k,[]),e.Eb(1073742336,s.gb,s.gb,[]),e.Eb(1073742336,s.Hc,s.Hc,[]),e.Eb(1073742336,s.Ge,s.Ge,[]),e.Eb(1073742336,s.Y,s.Y,[]),e.Eb(1073742336,s.i,s.i,[]),e.Eb(1073742336,s.ab,s.ab,[]),e.Eb(1073742336,s.u,s.u,[]),e.Eb(1073742336,s.Qc,s.Qc,[]),e.Eb(1073742336,s.s,s.s,[]),e.Eb(1073742336,s.Tc,s.Tc,[]),e.Eb(1073742336,s.O,s.O,[]),e.Eb(1073742336,s.lb,s.lb,[]),e.Eb(1073742336,s.Bb,s.Bb,[]),e.Eb(1073742336,s.Fb,s.Fb,[]),e.Eb(1073742336,s.Jb,s.Jb,[]),e.Eb(1073742336,s.dc,s.dc,[]),e.Eb(1073742336,s.db,s.db,[]),e.Eb(1073742336,s.rb,s.rb,[]),e.Eb(1073742336,s.dd,s.dd,[]),e.Eb(1073742336,s.gd,s.gd,[]),e.Eb(1073742336,s.S,s.S,[]),e.Eb(1073742336,s.H,s.H,[]),e.Eb(1073742336,s.Tb,s.Tb,[]),e.Eb(1073742336,s.jc,s.jc,[]),e.Eb(1073742336,s.y,s.y,[]),e.Eb(1073742336,s.vb,s.vb,[]),e.Eb(1073742336,s.qb,s.qb,[]),e.Eb(1073742336,s.n,s.n,[]),e.Eb(1073742336,s.o,s.o,[]),e.Eb(1073742336,s.tb,s.tb,[]),e.Eb(1073742336,s.yb,s.yb,[]),e.Eb(1073742336,s.ee,s.ee,[]),e.Eb(1073742336,s.ac,s.ac,[]),e.Eb(1073742336,s.oc,s.oc,[]),e.Eb(1073742336,s.ob,s.ob,[]),e.Eb(1073742336,s.Mb,s.Mb,[]),e.Eb(1073742336,s.gc,s.gc,[]),e.Eb(1073742336,s.Cb,s.Cb,[]),e.Eb(1073742336,s.sc,s.sc,[]),e.Eb(1073742336,s.te,s.te,[]),e.Eb(1073742336,s.se,s.se,[]),e.Eb(1073742336,s.a,s.a,[]),e.Eb(1073742336,y.a,y.a,[]),e.Eb(1073742336,P.p,P.p,[[2,P.u],[2,P.l]]),e.Eb(1073742336,z.a,z.a,[]),e.Eb(1073742336,g.cb,g.cb,[]),e.Eb(1073742336,g.M,g.M,[]),e.Eb(1073742336,g.s,g.s,[]),e.Eb(1073742336,g.K,g.K,[]),e.Eb(1073742336,g.h,g.h,[]),e.Eb(1073742336,g.e,g.e,[]),e.Eb(1073742336,g.w,g.w,[]),e.Eb(1073742336,g.o,g.o,[]),e.Eb(1073742336,g.C,g.C,[]),e.Eb(1073742336,g.u,g.u,[]),e.Eb(1073742336,g.c,g.c,[]),e.Eb(1073742336,g.F,g.F,[]),e.Eb(1073742336,g.T,g.T,[]),e.Eb(1073742336,g.Y,g.Y,[]),e.Eb(1073742336,g.O,g.O,[]),e.Eb(1073742336,g.j,g.j,[]),e.Eb(1073742336,g.q,g.q,[]),e.Eb(1073742336,g.Q,g.Q,[]),e.Eb(1073742336,g.lb,g.lb,[]),e.Eb(1073742336,g.z,g.z,[]),e.Eb(1073742336,g.a,g.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,P.j,function(){return[[{path:"",component:G}]]},[])])})}}]);