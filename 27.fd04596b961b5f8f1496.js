(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{cK1b:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),a=u("zl1X"),r=u("pMnS"),c=u("8KBR"),b=u("+Xo0"),s=u("0G9f"),o=u("gIcY"),i=u("xLE1"),d=u("6/Z3"),g=u("QkwE"),m=u("vAyd"),p=u("mrSG"),E=u("N+3j"),h='\n<clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data1"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template1">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-input>\n<clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" [(ngModel)]="data2"\n    [ngModelOptions]="{ updateOn: \'blur\' }" clrRequiredAllMultilang clrControlClasses="clr-col-md-5" name="template2">\n    <label class="clr-col-md-2 required">Template</label>\n    <clr-control-error>Please translate in every language!</clr-control-error>\n    <clr-control-helper>Helper text</clr-control-helper>\n</clr-multilingual-textarea>\n',v='\ndata1 = new Map();\nthis.data1.set("EN", "english text");\nthis.data1.set("DE", "deutscher text");\nthis.data1.set("FR", "texte fran\xe7ais");\n',f='\n<form clrForm [formGroup]="exampleForm">\n    <clr-multilingual-input class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample1"\n        clrControlClasses="clr-col-md-5" name="reactive1">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-input>\n    <clr-multilingual-textarea class="clr-col-12 clr-row" clrSelectedLang="EN" formControlName="sample2"\n        clrControlClasses="clr-col-md-5" name="reactive2">\n\n        <label class="clr-col-md-2 required">Reactive</label>\n        <clr-control-helper>Helper text</clr-control-helper>\n        <clr-control-error>Please translate in every language!</clr-control-error>\n    </clr-multilingual-textarea>\n</form>\n',x='\nreactiveData1 = new Map();\nthis.reactiveData1.set("EN", "english text");\nthis.reactiveData1.set("DE", "deutscher text");\nthis.reactiveData1.set("FR", "texte fran\xe7ais");\n\nexampleForm = new FormGroup({\n  sample1: new FormControl(this.reactiveData1, {\n    updateOn: "blur",\n    validators: [ClrMultilingualInputValidators.requiredAll()]\n  })\n});\n',C=function(l){function n(){var n=l.call(this,"multilingual-input")||this;return n.templateExample=h,n.templateTSExample=v,n.reactiveExample=f,n.reactiveTSExample=x,n.data1=new Map,n.data2=new Map,n.reactiveData1=new Map,n.reactiveData2=new Map,n.exampleForm=new o.h({sample1:new o.f(n.reactiveData1,{updateOn:"blur",validators:[d.y.requiredAll()]}),sample2:new o.f(n.reactiveData2,{updateOn:"blur",validators:[d.y.requiredAll()]})}),n}return Object(p.c)(n,l),n.prototype.ngOnInit=function(){this.data1.set("EN","english text"),this.data1.set("DE","deutscher text"),this.data1.set("FR","texte fran\xe7ais"),this.data2.set("EN","english text\nSecond line with a little more text"),this.data2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.data2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte"),this.reactiveData1.set("EN","english text"),this.reactiveData1.set("DE","deutscher text"),this.reactiveData1.set("FR","texte fran\xe7ais"),this.reactiveData2.set("EN","english text\nSecond line with a little more text"),this.reactiveData2.set("DE","deutscher text\nZweite Zeile mit etwas mehr Text"),this.reactiveData2.set("FR","texte fran\xe7ais\nDeuxi\xe8me ligne avec un peu plus de texte")},n}(E.a),O=e.sb({encapsulation:2,styles:[],data:{}});function G(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,222,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,b.b,b.a)),e.tb(1,49152,null,0,s.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.ub(2,0,null,0,220,"article",[],null,null,null,null,null)),(l()(),e.ub(3,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["The multilingual input/textarea fields are used to enter texts in different languages."])),(l()(),e.ub(5,0,null,null,217,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.ub(6,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Code & Examples"])),(l()(),e.ub(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" The multilingual input/textarea components require you to use custom validators: "])),(l()(),e.ub(10,0,null,null,8,"ul",[],null,null,null,null,null)),(l()(),e.ub(11,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Reactive forms: "])),(l()(),e.ub(13,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["ClrMultilingualInputValidators"])),(l()(),e.ub(15,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,[" Template-driven forms: "])),(l()(),e.ub(17,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["clrRequiredOneMultilang, clrRequiredAllMultilang"])),(l()(),e.ub(19,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Angular Component"])),(l()(),e.ub(21,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Summary of Options"])),(l()(),e.ub(23,0,null,null,53,"table",[["class","table"]],null,null,null,null,null)),(l()(),e.ub(24,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),e.ub(25,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),e.ub(26,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Parameter"])),(l()(),e.ub(28,0,null,null,1,"th",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Values"])),(l()(),e.ub(30,0,null,null,1,"th",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default"])),(l()(),e.ub(32,0,null,null,1,"th",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Effect"])),(l()(),e.ub(34,0,null,null,42,"tbody",[],null,null,null,null,null)),(l()(),e.ub(35,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(36,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(37,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["value binding (ngModel or reactive)"])),(l()(),e.ub(39,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: Map<string, string>"])),(l()(),e.ub(41,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Default: null"])),(l()(),e.ub(43,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Map of language and translation"])),(l()(),e.ub(45,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["null"])),(l()(),e.ub(47,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Value binding for control represented by a map of language as key and translation as value."])),(l()(),e.ub(49,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(50,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrSelectedLang]"])),(l()(),e.ub(53,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(55,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['Default: ""'])),(l()(),e.ub(57,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Javascript String"])),(l()(),e.ub(59,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['""'])),(l()(),e.ub(61,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Defines the currently selected language."])),(l()(),e.ub(63,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),e.ub(64,0,null,null,6,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.ub(65,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["[clrControlClasses]"])),(l()(),e.ub(67,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Type: String"])),(l()(),e.ub(69,0,null,null,1,"div",[["class","clr-hidden-sm-up"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['Default: "clr-col-md-10"'])),(l()(),e.ub(71,0,null,null,1,"td",[["class","left clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Javascript String"])),(l()(),e.ub(73,0,null,null,1,"td",[["class","clr-hidden-xs-down"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,['"clr-col-md-10"'])),(l()(),e.ub(75,0,null,null,1,"td",[["class","left"]],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Defines the css classes applied to the input control."])),(l()(),e.ub(77,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Reactive forms"])),(l()(),e.ub(79,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Validation will happen on blur"])),(l()(),e.ub(81,0,null,null,60,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,83).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,83).onReset()&&t),t},null,null)),e.tb(82,16384,null,0,o.G,[],null,null),e.tb(83,540672,null,0,o.i,[[8,null],[8,null]],{form:[0,"form"]},null),e.Lb(2048,null,o.c,null,[o.i]),e.tb(85,16384,null,0,o.q,[[4,o.c]],null,null),e.Lb(512,null,i.Mc,i.Mc,[]),e.Lb(512,null,i.Pc,i.Pc,[]),e.tb(88,16384,null,0,i.cb,[i.Mc,i.Pc],null,null),(l()(),e.ub(89,0,null,null,15,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample1"],["name","reactive1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,c.N,c.n)),e.tb(90,4374528,null,0,d.x,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,o.n,function(l){return[l]},[d.x]),e.tb(92,671744,null,0,o.g,[[3,o.c],[8,null],[8,null],[6,o.n],[2,o.E]],{name:[0,"name"]},null),e.Lb(2048,null,o.o,null,[o.g]),e.tb(94,16384,null,0,o.p,[[4,o.o]],null,null),e.Lb(512,null,i.Nc,i.Nc,[]),(l()(),e.ub(96,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(97,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Reactive"])),(l()(),e.ub(99,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,a.K,a.o)),e.tb(100,49152,null,0,i.x,[],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(102,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,a.J,a.n)),e.tb(103,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(105,0,null,null,15,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrSelectedLang","EN"],["formControlName","sample2"],["name","reactive2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,c.O,c.o)),e.tb(106,4374528,null,0,d.A,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,o.n,function(l){return[l]},[d.A]),e.tb(108,671744,null,0,o.g,[[3,o.c],[8,null],[8,null],[6,o.n],[2,o.E]],{name:[0,"name"]},null),e.Lb(2048,null,o.o,null,[o.g]),e.tb(110,16384,null,0,o.p,[[4,o.o]],null,null),e.Lb(512,null,i.Nc,i.Nc,[]),(l()(),e.ub(112,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(113,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Reactive"])),(l()(),e.ub(115,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,a.K,a.o)),e.tb(116,49152,null,0,i.x,[],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(118,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,a.J,a.n)),e.tb(119,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(121,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(123,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(124,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(125,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input"])),(l()(),e.ub(127,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(128,null,[" EN: ",""])),(l()(),e.ub(129,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(130,null,[" DE: ",""])),(l()(),e.ub(131,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(132,null,[" FR: "," "])),(l()(),e.ub(133,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.ub(134,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Textarea"])),(l()(),e.ub(136,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(137,null,[" EN: ",""])),(l()(),e.ub(138,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(139,null,[" DE: ",""])),(l()(),e.ub(140,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(141,null,[" FR: "," "])),(l()(),e.ub(142,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.tb(143,4243456,null,0,m.a,[],{code:[0,"code"]},null),(l()(),e.ub(144,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.tb(145,4243456,null,0,m.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.ub(146,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Template driven"])),(l()(),e.ub(148,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Validation will happen on blur"])),(l()(),e.ub(150,0,null,null,68,"form",[["clrForm",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"clr-form",null],[2,"clr-form-horizontal",null],[2,"clr-form-compact",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Gb(l,152).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Gb(l,152).onReset()&&t),t},null,null)),e.tb(151,16384,null,0,o.G,[],null,null),e.tb(152,4210688,null,0,o.r,[[8,null],[8,null]],null,null),e.Lb(2048,null,o.c,null,[o.r]),e.tb(154,16384,null,0,o.q,[[4,o.c]],null,null),e.Lb(512,null,i.Mc,i.Mc,[]),e.Lb(512,null,i.Pc,i.Pc,[]),e.tb(157,16384,null,0,i.cb,[i.Mc,i.Pc],null,null),(l()(),e.ub(158,0,null,null,18,"clr-multilingual-input",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template1"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data1=u)&&e),e},c.N,c.n)),e.tb(159,16384,null,0,d.R,[],null,null),e.Lb(1024,null,o.m,function(l){return[l]},[d.R]),e.tb(161,4374528,null,0,d.x,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,o.n,function(l){return[l]},[d.x]),e.tb(163,671744,null,0,o.s,[[2,o.c],[6,o.m],[8,null],[6,o.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Jb(164,{updateOn:0}),e.Lb(2048,null,o.o,null,[o.s]),e.tb(166,16384,null,0,o.p,[[4,o.o]],null,null),e.Lb(512,null,i.Nc,i.Nc,[]),(l()(),e.ub(168,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(169,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Template"])),(l()(),e.ub(171,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,a.J,a.n)),e.tb(172,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(174,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,a.K,a.o)),e.tb(175,49152,null,0,i.x,[],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(177,0,null,null,18,"clr-multilingual-textarea",[["class","clr-col-12 clr-row"],["clrControlClasses","clr-col-md-5"],["clrRequiredAllMultilang",""],["clrSelectedLang","EN"],["name","template2"]],[[2,"clr-form-control",null],[2,"clr-multilingual",null],[2,"clr-error",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0;return"ngModelChange"===n&&(e=!1!==(l.component.data2=u)&&e),e},c.O,c.o)),e.tb(178,16384,null,0,d.R,[],null,null),e.Lb(1024,null,o.m,function(l){return[l]},[d.R]),e.tb(180,4374528,null,0,d.A,[e.s],{controlClasses:[0,"controlClasses"],selectedLang:[1,"selectedLang"]},null),e.Lb(1024,null,o.n,function(l){return[l]},[d.A]),e.tb(182,671744,null,0,o.s,[[2,o.c],[6,o.m],[8,null],[6,o.n]],{name:[0,"name"],model:[1,"model"],options:[2,"options"]},{update:"ngModelChange"}),e.Jb(183,{updateOn:0}),e.Lb(2048,null,o.o,null,[o.s]),e.tb(185,16384,null,0,o.p,[[4,o.o]],null,null),e.Lb(512,null,i.Nc,i.Nc,[]),(l()(),e.ub(187,0,null,0,2,"label",[["class","clr-col-md-2 required"]],[[1,"for",0]],null,null,null,null)),e.tb(188,212992,null,0,i.mb,[[2,i.Lc],[2,i.Mc],[2,i.Nc],e.H,e.l],null,null),(l()(),e.Ob(-1,null,["Template"])),(l()(),e.ub(190,0,null,2,2,"clr-control-error",[],[[2,"clr-subtext",null],[1,"aria-live",0],[1,"aria-describedby",0]],null,null,a.J,a.n)),e.tb(191,245760,null,0,i.w,[[2,i.Lc]],null,null),(l()(),e.Ob(-1,0,["Please translate in every language!"])),(l()(),e.ub(193,0,null,1,2,"clr-control-helper",[],[[2,"clr-subtext",null]],null,null,a.K,a.o)),e.tb(194,49152,null,0,i.x,[],null,null),(l()(),e.Ob(-1,0,["Helper text"])),(l()(),e.ub(196,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(198,0,null,null,18,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.ub(199,0,null,null,8,"div",[["class","clr-col-4"]],null,null,null,null,null)),(l()(),e.ub(200,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Input"])),(l()(),e.ub(202,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(203,null,[" EN: ",""])),(l()(),e.ub(204,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(205,null,[" DE: ",""])),(l()(),e.ub(206,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(207,null,[" FR: "," "])),(l()(),e.ub(208,0,null,null,8,"div",[["class","clr-col-8"]],null,null,null,null,null)),(l()(),e.ub(209,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Textarea"])),(l()(),e.ub(211,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(212,null,[" EN: ",""])),(l()(),e.ub(213,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(214,null,[" DE: ",""])),(l()(),e.ub(215,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Ob(216,null,[" FR: "," "])),(l()(),e.ub(217,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ob(-1,null,["Output texts"])),(l()(),e.ub(219,0,null,null,1,"clr-code-snippet",[],null,null,null,g.b,g.a)),e.tb(220,4243456,null,0,m.a,[],{code:[0,"code"]},null),(l()(),e.ub(221,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,g.b,g.a)),e.tb(222,4243456,null,0,m.a,[],{code:[0,"code"],language:[1,"language"]},null)],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,83,0,u.exampleForm),l(n,90,0,"clr-col-md-5","EN"),l(n,92,0,"sample1"),l(n,97,0),l(n,103,0),l(n,106,0,"clr-col-md-5","EN"),l(n,108,0,"sample2"),l(n,113,0),l(n,119,0),l(n,143,0,u.reactiveExample),l(n,145,0,u.reactiveTSExample,"typescript"),l(n,161,0,"clr-col-md-5","EN");var e=u.data1,t=l(n,164,0,"blur");l(n,163,0,"template1",e,t),l(n,169,0),l(n,172,0),l(n,180,0,"clr-col-md-5","EN");var a=u.data2,r=l(n,183,0,"blur");l(n,182,0,"template2",a,r),l(n,188,0),l(n,191,0),l(n,220,0,u.templateExample),l(n,222,0,u.templateTSExample,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,81,0,e.Gb(n,85).ngClassUntouched,e.Gb(n,85).ngClassTouched,e.Gb(n,85).ngClassPristine,e.Gb(n,85).ngClassDirty,e.Gb(n,85).ngClassValid,e.Gb(n,85).ngClassInvalid,e.Gb(n,85).ngClassPending,!0,e.Gb(n,88).layoutService.isHorizontal(),e.Gb(n,88).layoutService.isCompact()),l(n,89,0,e.Gb(n,90).formControl,e.Gb(n,90).multi,e.Gb(n,90).invalid,e.Gb(n,94).ngClassUntouched,e.Gb(n,94).ngClassTouched,e.Gb(n,94).ngClassPristine,e.Gb(n,94).ngClassDirty,e.Gb(n,94).ngClassValid,e.Gb(n,94).ngClassInvalid,e.Gb(n,94).ngClassPending),l(n,96,0,e.Gb(n,97).forAttr),l(n,99,0,!0),l(n,102,0,!0,"polite",e.Gb(n,103).describedByAttr),l(n,105,0,e.Gb(n,106).formControl,e.Gb(n,106).multi,e.Gb(n,106).invalid,e.Gb(n,110).ngClassUntouched,e.Gb(n,110).ngClassTouched,e.Gb(n,110).ngClassPristine,e.Gb(n,110).ngClassDirty,e.Gb(n,110).ngClassValid,e.Gb(n,110).ngClassInvalid,e.Gb(n,110).ngClassPending),l(n,112,0,e.Gb(n,113).forAttr),l(n,115,0,!0),l(n,118,0,!0,"polite",e.Gb(n,119).describedByAttr),l(n,128,0,u.exampleForm.get("sample1").value.get("EN")),l(n,130,0,u.exampleForm.get("sample1").value.get("DE")),l(n,132,0,u.exampleForm.get("sample1").value.get("FR")),l(n,137,0,u.exampleForm.get("sample2").value.get("EN")),l(n,139,0,u.exampleForm.get("sample2").value.get("DE")),l(n,141,0,u.exampleForm.get("sample2").value.get("FR")),l(n,150,0,e.Gb(n,154).ngClassUntouched,e.Gb(n,154).ngClassTouched,e.Gb(n,154).ngClassPristine,e.Gb(n,154).ngClassDirty,e.Gb(n,154).ngClassValid,e.Gb(n,154).ngClassInvalid,e.Gb(n,154).ngClassPending,!0,e.Gb(n,157).layoutService.isHorizontal(),e.Gb(n,157).layoutService.isCompact()),l(n,158,0,e.Gb(n,161).formControl,e.Gb(n,161).multi,e.Gb(n,161).invalid,e.Gb(n,166).ngClassUntouched,e.Gb(n,166).ngClassTouched,e.Gb(n,166).ngClassPristine,e.Gb(n,166).ngClassDirty,e.Gb(n,166).ngClassValid,e.Gb(n,166).ngClassInvalid,e.Gb(n,166).ngClassPending),l(n,168,0,e.Gb(n,169).forAttr),l(n,171,0,!0,"polite",e.Gb(n,172).describedByAttr),l(n,174,0,!0),l(n,177,0,e.Gb(n,180).formControl,e.Gb(n,180).multi,e.Gb(n,180).invalid,e.Gb(n,185).ngClassUntouched,e.Gb(n,185).ngClassTouched,e.Gb(n,185).ngClassPristine,e.Gb(n,185).ngClassDirty,e.Gb(n,185).ngClassValid,e.Gb(n,185).ngClassInvalid,e.Gb(n,185).ngClassPending),l(n,187,0,e.Gb(n,188).forAttr),l(n,190,0,!0,"polite",e.Gb(n,191).describedByAttr),l(n,193,0,!0),l(n,203,0,u.data1.get("EN")),l(n,205,0,u.data1.get("DE")),l(n,207,0,u.data1.get("FR")),l(n,212,0,u.data2.get("EN")),l(n,214,0,u.data2.get("DE")),l(n,216,0,u.data2.get("FR"))})}function y(l){return e.Qb(0,[(l()(),e.ub(0,0,null,null,1,"clr-multilingual-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,G,O)),e.tb(1,114688,null,0,C,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,!0,!0)})}var w=e.qb("clr-multilingual-demo",C,y,{},{},[]),L=u("Ip0R"),D=u("XPsC"),N=u("ZYCi"),M=u("JsA7");u.d(n,"MultilingualInputDemoModuleNgFactory",function(){return F});var F=e.rb(t,[],function(l){return e.Db([e.Eb(512,e.j,e.db,[[8,[a.ab,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.bb,a.cb,a.db,a.eb,r.a,c.a,w]],[3,e.j],e.z]),e.Eb(4608,L.s,L.r,[e.w,[2,L.K]]),e.Eb(4608,o.D,o.D,[]),e.Eb(4608,o.e,o.e,[]),e.Eb(4608,d.f,d.f,[]),e.Eb(1073742336,L.c,L.c,[]),e.Eb(1073742336,o.C,o.C,[]),e.Eb(1073742336,o.k,o.k,[]),e.Eb(1073742336,o.x,o.x,[]),e.Eb(1073742336,i.gb,i.gb,[]),e.Eb(1073742336,i.Hc,i.Hc,[]),e.Eb(1073742336,i.Ge,i.Ge,[]),e.Eb(1073742336,i.Y,i.Y,[]),e.Eb(1073742336,i.i,i.i,[]),e.Eb(1073742336,i.ab,i.ab,[]),e.Eb(1073742336,i.u,i.u,[]),e.Eb(1073742336,i.Qc,i.Qc,[]),e.Eb(1073742336,i.s,i.s,[]),e.Eb(1073742336,i.Tc,i.Tc,[]),e.Eb(1073742336,i.O,i.O,[]),e.Eb(1073742336,i.lb,i.lb,[]),e.Eb(1073742336,i.Bb,i.Bb,[]),e.Eb(1073742336,i.Fb,i.Fb,[]),e.Eb(1073742336,i.Jb,i.Jb,[]),e.Eb(1073742336,i.dc,i.dc,[]),e.Eb(1073742336,i.db,i.db,[]),e.Eb(1073742336,i.rb,i.rb,[]),e.Eb(1073742336,i.dd,i.dd,[]),e.Eb(1073742336,i.gd,i.gd,[]),e.Eb(1073742336,i.S,i.S,[]),e.Eb(1073742336,i.H,i.H,[]),e.Eb(1073742336,i.Tb,i.Tb,[]),e.Eb(1073742336,i.jc,i.jc,[]),e.Eb(1073742336,i.y,i.y,[]),e.Eb(1073742336,i.vb,i.vb,[]),e.Eb(1073742336,i.qb,i.qb,[]),e.Eb(1073742336,i.n,i.n,[]),e.Eb(1073742336,i.o,i.o,[]),e.Eb(1073742336,i.tb,i.tb,[]),e.Eb(1073742336,i.yb,i.yb,[]),e.Eb(1073742336,i.ee,i.ee,[]),e.Eb(1073742336,i.ac,i.ac,[]),e.Eb(1073742336,i.oc,i.oc,[]),e.Eb(1073742336,i.ob,i.ob,[]),e.Eb(1073742336,i.Mb,i.Mb,[]),e.Eb(1073742336,i.gc,i.gc,[]),e.Eb(1073742336,i.Cb,i.Cb,[]),e.Eb(1073742336,i.sc,i.sc,[]),e.Eb(1073742336,i.te,i.te,[]),e.Eb(1073742336,i.se,i.se,[]),e.Eb(1073742336,i.a,i.a,[]),e.Eb(1073742336,D.a,D.a,[]),e.Eb(1073742336,N.p,N.p,[[2,N.u],[2,N.l]]),e.Eb(1073742336,M.a,M.a,[]),e.Eb(1073742336,d.cb,d.cb,[]),e.Eb(1073742336,d.M,d.M,[]),e.Eb(1073742336,d.s,d.s,[]),e.Eb(1073742336,d.K,d.K,[]),e.Eb(1073742336,d.h,d.h,[]),e.Eb(1073742336,d.e,d.e,[]),e.Eb(1073742336,d.w,d.w,[]),e.Eb(1073742336,d.o,d.o,[]),e.Eb(1073742336,d.C,d.C,[]),e.Eb(1073742336,d.u,d.u,[]),e.Eb(1073742336,d.c,d.c,[]),e.Eb(1073742336,d.F,d.F,[]),e.Eb(1073742336,d.T,d.T,[]),e.Eb(1073742336,d.Y,d.Y,[]),e.Eb(1073742336,d.O,d.O,[]),e.Eb(1073742336,d.j,d.j,[]),e.Eb(1073742336,d.q,d.q,[]),e.Eb(1073742336,d.Q,d.Q,[]),e.Eb(1073742336,d.lb,d.lb,[]),e.Eb(1073742336,d.z,d.z,[]),e.Eb(1073742336,d.a,d.a,[]),e.Eb(1073742336,t,t,[]),e.Eb(1024,N.j,function(){return[[{path:"",component:C}]]},[])])})}}]);