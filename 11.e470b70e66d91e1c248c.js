(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gFsD:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),c=function(){return function(){}}(),a=u("zl1X"),b=u("pMnS"),t=u("8KBR"),d=u("Ip0R"),o=u("xLE1"),i=u("+Xo0"),r=u("0G9f"),s=u("QkwE"),v=u("vAyd"),p=u("mrSG"),h=u("N+3j"),E='\n<div class="clr-row">\n    <div class="clr-col-4">\n        <div class="card card-active clickable">\n            <div class="card-header">\n                I am an active card\n            </div>\n            <div class="card-block">\n                I am also clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card clickable">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                But I am clickable\n            </div>\n        </div>\n    </div>\n    <div class="clr-col-4">\n        <div class="card">\n            <div class="card-header">\n                I am a non active card\n            </div>\n            <div class="card-block">\n                And I am also not clickable\n            </div>\n        </div>\n    </div>\n</div>\n',m='\n<div class="card card-placeholder">\n    <div class="card-header">\n        Placeholder card\n    </div>\n    <div class="card-block">\n        Card block\n        <div>\n            <a class="btn btn-link">Action</a>\n        </div>\n    </div>\n</div>\n',f='\n<div class="card">\n    <div class="card-header">\n        Card header with custom actions\n        <clr-dropdown class="card-actions">\n            <button type="button" class="btn btn-icon btn-link card-action dropdown-toggle" clrDropdownTrigger>\n                <clr-icon shape="ellipsis-vertical"></clr-icon>\n            </button>\n            <clr-dropdown-menu clrPosition="bottom-right" *clrIfOpen>\n                ...\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n    <div class="card-block">\n        Card Block\n    </div>\n</div>\n',O=function(l){function n(){var n=l.call(this,"cards")||this;return n.htmlExample=E,n.htmlExamplePlaceholder=m,n.htmlExampleCustomActions=f,n.cards=[{title:"Selectable card",active:!0},{title:"Selectable card",active:!1},{title:"Selectable card",active:!1}],n}return Object(p.c)(n,l),n.prototype.activateCard=function(l){for(var n=0,u=this.cards;n<u.length;n++)u[n].active=!1;this.cards[l].active=!0},n}(h.a),g=e.sb({encapsulation:2,styles:[],data:{}});function w(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Click to select me "]))],null,null)}function k(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" I am the selected card "]))],null,null)}function y(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,7,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(1,0,null,null,6,"div",[["class","card selectable"]],[[2,"card-active",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.activateCard(l.context.index)&&e),e},null,null)),(l()(),e.ub(2,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ob(3,null,[" "," "])),(l()(),e.kb(16777216,null,null,1,null,w)),e.tb(5,16384,null,0,d.q,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(l()(),e.kb(16777216,null,null,1,null,k)),e.tb(7,16384,null,0,d.q,[e.S,e.P],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,5,0,!n.context.$implicit.active),l(n,7,0,n.context.$implicit.active)},function(l,n){l(n,1,0,n.context.$implicit.active),l(n,3,0,n.context.$implicit.title)})}function C(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,17,"clr-dropdown-menu",[["clrPosition","bottom-right"]],[[2,"dropdown-menu",null],[1,"role",0],[2,"is-off-screen",null]],null,null,a.Q,a.v)),e.tb(1,9617408,null,1,o.X,[e.s,[2,o.xe],[3,o.X],o.Ae],{position:[0,"position"]},null),e.Mb(603979776,1,{items:1}),(l()(),e.ub(3,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0],[1,"aria-disabled",0]],null,null,null,null)),e.Lb(1024,null,o.Be,o.Ce,[]),e.Lb(512,[[1,4]],o.De,o.Fe,[o.Be,e.l,e.H,e.D]),e.tb(6,4341760,null,0,o.W,[o.V,e.l,o.Zd,e.H,o.De],null,null),(l()(),e.Ob(-1,null,[" Edit "])),(l()(),e.ub(8,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0],[1,"aria-disabled",0]],null,null,null,null)),e.Lb(1024,null,o.Be,o.Ce,[]),e.Lb(512,[[1,4]],o.De,o.Fe,[o.Be,e.l,e.H,e.D]),e.tb(11,4341760,null,0,o.W,[o.V,e.l,o.Zd,e.H,o.De],null,null),(l()(),e.Ob(-1,null,[" Duplicate "])),(l()(),e.ub(13,0,null,0,4,"button",[["clrDropdownItem",""],["type","button"]],[[2,"dropdown-item",null],[1,"role",0],[1,"aria-disabled",0]],null,null,null,null)),e.Lb(1024,null,o.Be,o.Ce,[]),e.Lb(512,[[1,4]],o.De,o.Fe,[o.Be,e.l,e.H,e.D]),e.tb(16,4341760,null,0,o.W,[o.V,e.l,o.Zd,e.H,o.De],null,null),(l()(),e.Ob(-1,null,[" Delete "]))],function(l,n){l(n,1,0,"bottom-right")},function(l,n){l(n,0,0,!0,"menu",e.Gb(n,1).isOffScreen),l(n,3,0,!0,"menuitem",e.Gb(n,6).disabled),l(n,8,0,!0,"menuitem",e.Gb(n,11).disabled),l(n,13,0,!0,"menuitem",e.Gb(n,16).disabled)})}function D(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,100,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),e.tb(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,98,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"],["id","cards-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The Addons extend the default Clarity cards by providing following additional types:"])),(l()(),e.ub(5,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Selectable card. The selected stays visually highlighted."])),(l()(),e.ub(8,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Placeholder card. Represents an empty card which can be filled by user actions."])),(l()(),e.ub(10,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Selectable card"])),(l()(),e.ub(12,0,null,null,34,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.ub(13,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Behavior"])),(l()(),e.ub(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Only one card at the time can have the selection indicator. Compare this behavior to a radio button. Note the different hover style in the example below."])),(l()(),e.ub(17,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default clickable card (Standard Clarity)"])),(l()(),e.ub(19,0,null,null,9,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(20,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(21,0,null,null,7,"div",[["class","card clickable"]],null,null,null,null,null)),(l()(),e.ub(22,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Default card "])),(l()(),e.ub(24,0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" See the official "])),(l()(),e.ub(26,0,null,null,1,"a",[["href","https://clarity.design/documentation/cards"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Clarity documentation"])),(l()(),e.Ob(-1,null,[" for details. "])),(l()(),e.ub(29,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Selectable card (Clarity Addons)"])),(l()(),e.ub(31,0,null,null,2,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.kb(16777216,null,null,1,null,y)),e.tb(33,278528,null,0,d.p,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(l()(),e.ub(34,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Usage"])),(l()(),e.ub(36,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" On contrast to the default clickable-cards, the selectable card does not start an action, it is only marked as selected. Note that multiple selection is not supported. If you depend on multi-selection, use a different element such as a checkbox. A selectable card should have the class "])),(l()(),e.ub(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["selectable"])),(l()(),e.Ob(-1,null,[" instead of the clarity-default "])),(l()(),e.ub(41,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["clickable"])),(l()(),e.Ob(-1,null,[" class. Use the "])),(l()(),e.ub(44,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["card-active"])),(l()(),e.Ob(-1,null,[" class to mark the currently selected one. "])),(l()(),e.ub(47,0,null,null,2,"div",[["id","examples"]],null,null,null,null,null)),(l()(),e.ub(48,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.tb(49,4243456,null,0,v.a,[],{code:[0,"code"]},null),(l()(),e.ub(50,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Placeholder card"])),(l()(),e.Ob(-1,null,[" The placeholder card represents an empty card by a dashed border. The style is provided by class "])),(l()(),e.ub(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["card-placeholder"])),(l()(),e.Ob(-1,null,[". All buttons inside a placeholder card should be flat (btn-link). "])),(l()(),e.ub(56,0,null,null,9,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(57,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(58,0,null,null,7,"div",[["class","card card-placeholder"]],null,null,null,null,null)),(l()(),e.ub(59,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Placeholder card "])),(l()(),e.ub(61,0,null,null,4,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Card block "])),(l()(),e.ub(63,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,1,"a",[["class","btn btn-link"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Action"])),(l()(),e.ub(66,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.tb(67,4243456,null,0,v.a,[],{code:[0,"code"]},null),(l()(),e.ub(68,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Card with custom actions"])),(l()(),e.Ob(-1,null,[" To use a card with custom actions, use the classes "])),(l()(),e.ub(71,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["card-actions"])),(l()(),e.Ob(-1,null,[" on the dropdown itself and "])),(l()(),e.ub(74,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["card-action"])),(l()(),e.Ob(-1,null,[" on the dropdown-toggle. "])),(l()(),e.ub(77,0,null,null,21,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(78,0,null,null,20,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(79,0,null,null,19,"div",[["class","card"]],null,null,null,null,null)),(l()(),e.ub(80,0,null,null,16,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Card header with custom actions "])),(l()(),e.ub(82,0,null,null,14,"clr-dropdown",[["class","card-actions"]],[[2,"dropdown",null],[2,"open",null]],null,null,a.R,a.u)),e.Lb(6144,null,o.xe,null,[e.l]),e.Lb(6144,null,o.De,null,[o.Ae]),e.Lb(512,null,o.Fd,o.Fd,[]),e.Lb(1024,null,o.Zd,o.ve,[[3,o.Zd]]),e.tb(87,180224,null,0,o.V,[[3,o.V],o.Fd,e.h,o.Zd],null,null),e.Lb(1024,null,o.Be,o.Ce,[]),e.Lb(1024,null,o.ye,o.ze,[[3,o.ye],e.H]),e.Lb(512,null,o.Ae,o.Ae,[o.Be,e.H,[3,o.Ae],o.Fd,o.ye,e.D]),(l()(),e.ub(91,0,null,0,3,"button",[["class","btn btn-icon btn-link card-action dropdown-toggle"],["clrDropdownTrigger",""],["type","button"]],[[2,"dropdown-toggle",null],[2,"dropdown-item",null],[2,"expandable",null],[2,"active",null],[1,"aria-haspopup",0],[1,"aria-expanded",0]],[[null,"click"]],function(l,n,u){var c=!0;return"click"===n&&(c=!1!==e.Gb(l,92).onDropdownTriggerClick(u)&&c),c},null,null)),e.tb(92,16384,null,0,o.Z,[o.V,o.Fd,e.l,o.Ae],null,null),(l()(),e.ub(93,0,null,null,1,"clr-icon",[["shape","ellipsis-vertical"]],null,null,null,null,null)),e.tb(94,16384,null,0,o.fb,[],null,null),(l()(),e.kb(16777216,null,0,1,null,C)),e.tb(96,147456,null,0,o.ib,[o.Fd,e.P,e.S],{open:[0,"open"]},null),(l()(),e.ub(97,0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Card Block "])),(l()(),e.ub(99,0,null,null,1,"clr-code-snippet",[],null,null,null,s.b,s.a)),e.tb(100,4243456,null,0,v.a,[],{code:[0,"code"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,33,0,u.cards),l(n,49,0,u.htmlExample),l(n,67,0,u.htmlExamplePlaceholder),l(n,96,0,null),l(n,100,0,u.htmlExampleCustomActions)},function(l,n){l(n,0,0,!0),l(n,82,0,!0,!0),l(n,91,0,e.Gb(n,92).isRootLevelToggle,!e.Gb(n,92).isRootLevelToggle,!e.Gb(n,92).isRootLevelToggle,e.Gb(n,92).active,"menu",e.Gb(n,92).active)})}function x(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"clr-cards-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,D,g)),e.tb(1,49152,null,0,O,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})}var L=e.qb("clr-cards-demo",O,x,{},{},[]),I=u("gIcY"),A=u("6/Z3"),F=u("XPsC"),S=u("ZYCi"),T=u("JsA7");u.d(n,"CardsDemoModuleNgFactory",function(){return B});var B=e.rb(c,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[a.ab,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.bb,a.cb,a.db,a.eb,b.a,t.a,L]],[3,e.j],e.z]),e.Eb(4608,d.s,d.r,[e.w,[2,d.K]]),e.Eb(4608,I.D,I.D,[]),e.Eb(4608,A.f,A.f,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,I.C,I.C,[]),e.Eb(1073742336,I.k,I.k,[]),e.Eb(1073742336,o.gb,o.gb,[]),e.Eb(1073742336,o.Hc,o.Hc,[]),e.Eb(1073742336,o.Ge,o.Ge,[]),e.Eb(1073742336,o.Y,o.Y,[]),e.Eb(1073742336,o.i,o.i,[]),e.Eb(1073742336,o.ab,o.ab,[]),e.Eb(1073742336,o.u,o.u,[]),e.Eb(1073742336,o.Qc,o.Qc,[]),e.Eb(1073742336,o.s,o.s,[]),e.Eb(1073742336,o.Tc,o.Tc,[]),e.Eb(1073742336,o.O,o.O,[]),e.Eb(1073742336,o.lb,o.lb,[]),e.Eb(1073742336,o.Bb,o.Bb,[]),e.Eb(1073742336,o.Fb,o.Fb,[]),e.Eb(1073742336,o.Jb,o.Jb,[]),e.Eb(1073742336,o.dc,o.dc,[]),e.Eb(1073742336,o.db,o.db,[]),e.Eb(1073742336,o.rb,o.rb,[]),e.Eb(1073742336,o.dd,o.dd,[]),e.Eb(1073742336,o.gd,o.gd,[]),e.Eb(1073742336,o.S,o.S,[]),e.Eb(1073742336,o.H,o.H,[]),e.Eb(1073742336,o.Tb,o.Tb,[]),e.Eb(1073742336,o.jc,o.jc,[]),e.Eb(1073742336,o.y,o.y,[]),e.Eb(1073742336,o.vb,o.vb,[]),e.Eb(1073742336,o.qb,o.qb,[]),e.Eb(1073742336,o.n,o.n,[]),e.Eb(1073742336,o.o,o.o,[]),e.Eb(1073742336,o.tb,o.tb,[]),e.Eb(1073742336,o.yb,o.yb,[]),e.Eb(1073742336,o.ee,o.ee,[]),e.Eb(1073742336,o.ac,o.ac,[]),e.Eb(1073742336,o.oc,o.oc,[]),e.Eb(1073742336,o.ob,o.ob,[]),e.Eb(1073742336,o.Mb,o.Mb,[]),e.Eb(1073742336,o.gc,o.gc,[]),e.Eb(1073742336,o.Cb,o.Cb,[]),e.Eb(1073742336,o.sc,o.sc,[]),e.Eb(1073742336,o.te,o.te,[]),e.Eb(1073742336,o.se,o.se,[]),e.Eb(1073742336,o.a,o.a,[]),e.Eb(1073742336,F.a,F.a,[]),e.Eb(1073742336,S.p,S.p,[[2,S.u],[2,S.l]]),e.Eb(1073742336,T.a,T.a,[]),e.Eb(1073742336,A.cb,A.cb,[]),e.Eb(1073742336,A.M,A.M,[]),e.Eb(1073742336,A.s,A.s,[]),e.Eb(1073742336,A.K,A.K,[]),e.Eb(1073742336,A.h,A.h,[]),e.Eb(1073742336,A.e,A.e,[]),e.Eb(1073742336,A.w,A.w,[]),e.Eb(1073742336,A.o,A.o,[]),e.Eb(1073742336,A.C,A.C,[]),e.Eb(1073742336,A.u,A.u,[]),e.Eb(1073742336,A.c,A.c,[]),e.Eb(1073742336,A.F,A.F,[]),e.Eb(1073742336,A.T,A.T,[]),e.Eb(1073742336,A.Y,A.Y,[]),e.Eb(1073742336,A.O,A.O,[]),e.Eb(1073742336,A.j,A.j,[]),e.Eb(1073742336,A.q,A.q,[]),e.Eb(1073742336,A.Q,A.Q,[]),e.Eb(1073742336,A.lb,A.lb,[]),e.Eb(1073742336,A.z,A.z,[]),e.Eb(1073742336,A.a,A.a,[]),e.Eb(1073742336,c,c,[]),e.Eb(1024,S.j,function(){return[[{path:"",component:O}]]},[])])})}}]);