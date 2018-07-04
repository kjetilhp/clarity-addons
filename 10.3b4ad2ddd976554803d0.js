(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{m81k:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=function(){},t=u("zl1X"),i=u("+Xo0"),o=u("0G9f"),s=u("8KBR"),c=u("5lT0"),d=u("gIcY"),r=u("QkwE"),g=u("vAyd"),m=u("KZfJ"),p=u("mrSG"),b='\n<div class="col-xs-12 col-lg-6">\n    <clr-view-edit-section [clrTitle]="sectionTitle" (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()">\n        <div view-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{first || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{last || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{email || "&nbsp;"}}</span>\n                </div>\n            </div>\n        </div>\n        <div edit-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="first" class="form-control" type="text" [(ngModel)]="editFirst" name="first">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="last" class="form-control" type="text" [(ngModel)]="editLast" name="last">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="email" class="form-control" type="text" [(ngModel)]="editEmail" name="email">\n                </div>\n            </div>\n        </div>\n    </clr-view-edit-section>\n</div>\n',h='\n<div class="col-xs-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon" (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()">\n        <div view-block>\n            ...\n        </div>\n        <div edit-block>\n            ...\n        </div>\n    </clr-view-edit-section>\n</div>\n',f='\ncompEditIcon: string = "cog";\n',v=function(l){function n(){var n=l.call(this,"view-edit-section")||this;return n.htmlExampleSideBySide=b,n.htmlExampleFullIcon=h,n.htmlExampleFullIconAngular=f,n.birthdate="06/14/2018",n.gender="male",n.status="Active",n.editBirthdate=n.birthdate,n.editGender=n.gender,n.editStatus=1,n.first="Max",n.last="Mustermann",n.email="m.mustermann@mail.com",n.editFirst=n.first,n.editLast=n.last,n.editEmail=n.email,n.compSectionTitle="Different components",n.sectionTitle="Personal Data",n.addSectionTitle="Additional Data",n.compEditIcon="cog",n}return Object(p.b)(n,l),n.prototype.compSectionSubmitted=function(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms},n.prototype.compSectionCancelled=function(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms},n.prototype.getTermsText=function(){return this.terms?"I agreed":"I disagreed"},n.prototype.sectionSubmitted=function(){this.first=this.editFirst,this.last=this.editLast,this.email=this.editEmail},n.prototype.sectionCancelled=function(){this.editFirst=this.first,this.editLast=this.last,this.editEmail=this.email},n.prototype.addSectionSubmitted=function(){this.hobby=this.editHobby,this.licence=this.editLicence},n.prototype.addSectionCancelled=function(){this.editHobby=this.hobby,this.editLicence=this.licence},n}(u("N+3j").a),N=a.La({encapsulation:2,styles:[],data:{}});function C(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,268,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),a.Ma(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),a.Na(2,0,null,0,266,"article",[],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,3,"h5",[["class","component-summary"],["id","view-edit-section-header"]],null,null,null,null,null)),(l()(),a.fb(-1,null,[" The View-Edit Section (VES) is a basic component used to display and edit data. "])),(l()(),a.Na(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "])),(l()(),a.Na(7,0,null,null,14,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),a.Na(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["View-mode"])),(l()(),a.Na(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "])),(l()(),a.Na(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Edit-mode"])),(l()(),a.Na(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. "])),(l()(),a.Na(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Multiple View-Edit Sections"])),(l()(),a.Na(18,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "])),(l()(),a.Na(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" The user needs to actively end the edit-mode by saving or cancelling the changes."])),(l()(),a.Na(22,0,null,null,246,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),a.Na(23,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Code & Examples"])),(l()(),a.Na(25,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" To layout the view-mode of the component simply add an element with attribute "])),(l()(),a.Na(27,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["view-block"])),(l()(),a.fb(-1,null,[" and for the edit-mode of the component add an element with attribute "])),(l()(),a.Na(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["edit-block"])),(l()(),a.fb(-1,null,[". Those blocks will get rendered into the body of the view-edit section in their corresponding modes. "])),(l()(),a.Na(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" Following interactions are available: "])),(l()(),a.Na(35,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),a.Na(36,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" To define the title add a "])),(l()(),a.Na(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["[clrTitle]"])),(l()(),a.fb(-1,null,[" input to the component. "])),(l()(),a.Na(41,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" To define the edit icon add a "])),(l()(),a.Na(43,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["[clrEditIcon]"])),(l()(),a.fb(-1,null,[" input to the component. Every shape from clr-icon can be used. "])),(l()(),a.Na(46,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" To react to submit clicks, bind to the event "])),(l()(),a.Na(48,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["(clrSectionSubmitted)"])),(l()(),a.fb(-1,null,[". "])),(l()(),a.Na(51,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" To react to cancel clicks, bind to the event "])),(l()(),a.Na(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["(clrSectionEditCancelled)"])),(l()(),a.fb(-1,null,[". "])),(l()(),a.Na(56,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Side by side example"])),(l()(),a.Na(58,0,null,null,100,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Na(59,0,null,null,58,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),a.Na(60,0,null,null,57,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.sectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.sectionCancelled()&&a),a},s.p,s.h)),a.Ma(61,49152,null,0,c.p,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Na(62,0,null,0,21,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Na(63,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(64,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(65,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["First name"])),(l()(),a.Na(67,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(68,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),a.fb(69,null,["",""])),(l()(),a.Na(70,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(71,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(72,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Last name"])),(l()(),a.Na(74,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(75,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),a.fb(76,null,["",""])),(l()(),a.Na(77,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(78,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(79,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["E-mail"])),(l()(),a.Na(81,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(82,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),a.fb(83,null,["",""])),(l()(),a.Na(84,0,null,1,33,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Na(85,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(86,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(87,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["First name"])),(l()(),a.Na(89,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(90,0,null,null,5,"input",[["class","form-control"],["id","first"],["name","first"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,91)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,91).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,91)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,91)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editFirst=u)&&e),e},null,null)),a.Ma(91,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(93,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(95,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(96,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(97,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(98,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Last name"])),(l()(),a.Na(100,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(101,0,null,null,5,"input",[["class","form-control"],["id","last"],["name","last"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,102)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,102).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,102)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,102)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editLast=u)&&e),e},null,null)),a.Ma(102,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(104,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(106,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(107,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(108,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(109,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["E-mail"])),(l()(),a.Na(111,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(112,0,null,null,5,"input",[["class","form-control"],["id","email"],["name","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,113)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,113).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,113)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,113)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editEmail=u)&&e),e},null,null)),a.Ma(113,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(115,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(117,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(118,0,null,null,40,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),a.Na(119,0,null,null,39,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.addSectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.addSectionCancelled()&&a),a},s.p,s.h)),a.Ma(120,49152,null,0,c.p,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Na(121,0,null,0,14,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Na(122,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(123,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(124,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Hobby"])),(l()(),a.Na(126,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(127,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),a.fb(128,null,["",""])),(l()(),a.Na(129,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(130,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(131,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Driving licence number"])),(l()(),a.Na(133,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(134,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),a.fb(135,null,["",""])),(l()(),a.Na(136,0,null,1,22,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Na(137,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(138,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(139,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Hobby"])),(l()(),a.Na(141,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(142,0,null,null,5,"input",[["class","form-control"],["id","hobby"],["name","hobby"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,143)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,143).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,143)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,143)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editHobby=u)&&e),e},null,null)),a.Ma(143,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(145,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(147,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(148,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),a.Na(149,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),a.Na(150,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Driving licence number"])),(l()(),a.Na(152,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),a.Na(153,0,null,null,5,"input",[["class","form-control"],["id","licence"],["name","licence"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,154)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,154).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,154)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,154)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(t.editLicence=u)&&e),e},null,null)),a.Ma(154,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(156,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(158,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(159,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.Ma(160,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Na(161,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Custom icon"])),(l()(),a.Na(163,0,null,null,88,"div",[["class","row"]],null,null,null,null,null)),(l()(),a.Na(164,0,null,null,87,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),a.Na(165,0,null,null,86,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var a=!0,e=l.component;return"clrSectionSubmitted"===n&&(a=!1!==e.compSectionSubmitted()&&a),"clrSectionEditCancelled"===n&&(a=!1!==e.compSectionCancelled()&&a),a},s.p,s.h)),a.Ma(166,49152,null,0,c.p,[],{_title:[0,"_title"],_editIcon:[1,"_editIcon"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),a.Na(167,0,null,0,20,"div",[["view-block",""]],null,null,null,null,null)),(l()(),a.Na(168,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(169,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Date of birth"])),(l()(),a.Na(171,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.fb(172,null,["",""])),(l()(),a.Na(173,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(174,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Gender"])),(l()(),a.Na(176,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.fb(177,null,["",""])),(l()(),a.Na(178,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(179,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Status"])),(l()(),a.Na(181,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.fb(182,null,["",""])),(l()(),a.Na(183,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(184,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Terms & Conditions"])),(l()(),a.Na(186,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),a.fb(187,null,["",""])),(l()(),a.Na(188,0,null,1,63,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),a.Na(189,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(190,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Date of birth"])),(l()(),a.Na(192,16777216,null,null,6,"input",[["clrDate",""],["id","birthdate"],["name","birthdate"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"date-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,193)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,193).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,193)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,193)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Xa(l,198).onValueChange(u.target)&&e),"ngModelChange"===n&&(e=!1!==(t.editBirthdate=u)&&e),e},null,null)),a.Ma(193,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.d]),a.Ma(195,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(197,16384,null,0,d.h,[[4,d.g]],null,null),a.Ma(198,4407296,null,0,m.H,[[2,m.G],a.O,a.k,a.D,[6,d.g],[2,m.Eb],[2,m.ad],[2,m.Fb],[2,m.bd],a.z],{id:[0,"id"],date:[1,"date"]},null),(l()(),a.Na(199,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(200,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Gender"])),(l()(),a.Na(202,0,null,null,14,"div",[["class","select"]],null,null,null,null,null)),(l()(),a.Na(203,0,null,null,13,"select",[["id","gender"],["name","gender"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,t=l.component;return"change"===n&&(e=!1!==a.Xa(l,204).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,204).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editGender=u)&&e),e},null,null)),a.Ma(204,16384,null,0,d.n,[a.D,a.k],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.n]),a.Ma(206,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(208,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(209,0,null,null,3,"option",[],null,null,null,null,null)),a.Ma(210,147456,null,0,d.l,[a.k,a.D,[2,d.n]],null,null),a.Ma(211,147456,null,0,d.s,[a.k,a.D,[8,null]],null,null),(l()(),a.fb(-1,null,["male"])),(l()(),a.Na(213,0,null,null,3,"option",[],null,null,null,null,null)),a.Ma(214,147456,null,0,d.l,[a.k,a.D,[2,d.n]],null,null),a.Ma(215,147456,null,0,d.s,[a.k,a.D,[8,null]],null,null),(l()(),a.fb(-1,null,["female"])),(l()(),a.Na(217,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(218,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Status"])),(l()(),a.Na(220,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),a.Na(221,0,null,null,6,"input",[["id","status_1"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,222)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,222).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,222)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,222)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Xa(l,223).onChange()&&e),"blur"===n&&(e=!1!==a.Xa(l,223).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editStatus=u)&&e),e},null,null)),a.Ma(222,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Ma(223,212992,null,0,d.m,[a.D,a.k,d.r,a.p],{name:[0,"name"],value:[1,"value"]},null),a.cb(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),a.Ma(225,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(227,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(228,0,null,null,1,"label",[["for","status_1"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Active"])),(l()(),a.Na(230,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),a.Na(231,0,null,null,6,"input",[["id","status_2"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0,t=l.component;return"input"===n&&(e=!1!==a.Xa(l,232)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==a.Xa(l,232).onTouched()&&e),"compositionstart"===n&&(e=!1!==a.Xa(l,232)._compositionStart()&&e),"compositionend"===n&&(e=!1!==a.Xa(l,232)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==a.Xa(l,233).onChange()&&e),"blur"===n&&(e=!1!==a.Xa(l,233).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editStatus=u)&&e),e},null,null)),a.Ma(232,16384,null,0,d.d,[a.D,a.k,[2,d.a]],null,null),a.Ma(233,212992,null,0,d.m,[a.D,a.k,d.r,a.p],{name:[0,"name"],value:[1,"value"]},null),a.cb(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),a.Ma(235,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(237,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(238,0,null,null,1,"label",[["for","status_2"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Inactive"])),(l()(),a.Na(240,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),a.Na(241,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["Terms & Conditions"])),(l()(),a.Na(243,0,null,null,8,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),a.Na(244,0,null,null,5,"input",[["id","terms"],["name","terms"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,t=l.component;return"change"===n&&(e=!1!==a.Xa(l,245).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==a.Xa(l,245).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(t.editTerms=u)&&e),e},null,null)),a.Ma(245,16384,null,0,d.b,[a.D,a.k],null,null),a.cb(1024,null,d.f,function(l){return[l]},[d.b]),a.Ma(247,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),a.cb(2048,null,d.g,null,[d.k]),a.Ma(249,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),a.Na(250,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["I agree to the terms and conditions"])),(l()(),a.Na(252,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.Ma(253,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),a.Na(254,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),a.Ma(255,4243456,null,0,g.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),a.Na(256,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),a.fb(-1,null,["Tips"])),(l()(),a.Na(258,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),a.Na(259,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" Use class "])),(l()(),a.Na(261,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,["text-truncate"])),(l()(),a.fb(-1,null,[" in view-block to prevent long texts from destroying your layout. "])),(l()(),a.Na(264,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),a.fb(-1,null,[" Use pipe "])),(l()(),a.Na(266,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),a.fb(-1,null,['|| "&nbsp;"'])),(l()(),a.fb(-1,null,[" in view-block so the span element always has a correct height. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,61,0,u.sectionTitle),l(n,93,0,"first",u.editFirst),l(n,104,0,"last",u.editLast),l(n,115,0,"email",u.editEmail),l(n,120,0,u.addSectionTitle),l(n,145,0,"hobby",u.editHobby),l(n,156,0,"licence",u.editLicence),l(n,160,0,u.htmlExampleSideBySide),l(n,166,0,u.compSectionTitle,u.compEditIcon),l(n,195,0,"birthdate",u.editBirthdate),l(n,198,0,"birthdate",""),l(n,206,0,"gender",u.editGender),l(n,223,0,"status",1),l(n,225,0,"status",u.editStatus),l(n,233,0,"status",2),l(n,235,0,"status",u.editStatus),l(n,247,0,"terms",u.editTerms),l(n,253,0,u.htmlExampleFullIcon),l(n,255,0,u.htmlExampleFullIconAngular,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,69,0,u.first||"\xa0"),l(n,76,0,u.last||"\xa0"),l(n,83,0,u.email||"\xa0"),l(n,90,0,a.Xa(n,95).ngClassUntouched,a.Xa(n,95).ngClassTouched,a.Xa(n,95).ngClassPristine,a.Xa(n,95).ngClassDirty,a.Xa(n,95).ngClassValid,a.Xa(n,95).ngClassInvalid,a.Xa(n,95).ngClassPending),l(n,101,0,a.Xa(n,106).ngClassUntouched,a.Xa(n,106).ngClassTouched,a.Xa(n,106).ngClassPristine,a.Xa(n,106).ngClassDirty,a.Xa(n,106).ngClassValid,a.Xa(n,106).ngClassInvalid,a.Xa(n,106).ngClassPending),l(n,112,0,a.Xa(n,117).ngClassUntouched,a.Xa(n,117).ngClassTouched,a.Xa(n,117).ngClassPristine,a.Xa(n,117).ngClassDirty,a.Xa(n,117).ngClassValid,a.Xa(n,117).ngClassInvalid,a.Xa(n,117).ngClassPending),l(n,128,0,u.hobby||"\xa0"),l(n,135,0,u.licence||"\xa0"),l(n,142,0,a.Xa(n,147).ngClassUntouched,a.Xa(n,147).ngClassTouched,a.Xa(n,147).ngClassPristine,a.Xa(n,147).ngClassDirty,a.Xa(n,147).ngClassValid,a.Xa(n,147).ngClassInvalid,a.Xa(n,147).ngClassPending),l(n,153,0,a.Xa(n,158).ngClassUntouched,a.Xa(n,158).ngClassTouched,a.Xa(n,158).ngClassPristine,a.Xa(n,158).ngClassDirty,a.Xa(n,158).ngClassValid,a.Xa(n,158).ngClassInvalid,a.Xa(n,158).ngClassPending),l(n,172,0,u.birthdate||"\xa0"),l(n,177,0,u.gender||"\xa0"),l(n,182,0,u.status||"\xa0"),l(n,187,0,u.getTermsText()),l(n,192,1,[a.Xa(n,197).ngClassUntouched,a.Xa(n,197).ngClassTouched,a.Xa(n,197).ngClassPristine,a.Xa(n,197).ngClassDirty,a.Xa(n,197).ngClassValid,a.Xa(n,197).ngClassInvalid,a.Xa(n,197).ngClassPending,!0,a.Xa(n,198).id,a.Xa(n,198).placeholderText,a.Xa(n,198).inputType]),l(n,203,0,a.Xa(n,208).ngClassUntouched,a.Xa(n,208).ngClassTouched,a.Xa(n,208).ngClassPristine,a.Xa(n,208).ngClassDirty,a.Xa(n,208).ngClassValid,a.Xa(n,208).ngClassInvalid,a.Xa(n,208).ngClassPending),l(n,221,0,a.Xa(n,227).ngClassUntouched,a.Xa(n,227).ngClassTouched,a.Xa(n,227).ngClassPristine,a.Xa(n,227).ngClassDirty,a.Xa(n,227).ngClassValid,a.Xa(n,227).ngClassInvalid,a.Xa(n,227).ngClassPending),l(n,231,0,a.Xa(n,237).ngClassUntouched,a.Xa(n,237).ngClassTouched,a.Xa(n,237).ngClassPristine,a.Xa(n,237).ngClassDirty,a.Xa(n,237).ngClassValid,a.Xa(n,237).ngClassInvalid,a.Xa(n,237).ngClassPending),l(n,244,0,a.Xa(n,249).ngClassUntouched,a.Xa(n,249).ngClassTouched,a.Xa(n,249).ngClassPristine,a.Xa(n,249).ngClassDirty,a.Xa(n,249).ngClassValid,a.Xa(n,249).ngClassInvalid,a.Xa(n,249).ngClassPending)})}var X=a.Ja("clr-view-edit-section-demo",v,function(l){return a.hb(0,[(l()(),a.Na(0,0,null,null,1,"clr-view-edit-section-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,C,N)),a.Ma(1,49152,null,0,v,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),S=u("Ip0R"),M=u("XPsC"),y=u("ZYCi"),V=u("JsA7");u.d(n,"ViewEditSectionDemoModuleNgFactory",function(){return w});var w=a.Ka(e,[],function(l){return a.Ua([a.Va(512,a.j,a.Aa,[[8,[t.o,t.a,t.n,X]],[3,a.j],a.v]),a.Va(4608,S.q,S.p,[a.s,[2,S.F]]),a.Va(4608,m.Ab,m.Ab,[]),a.Va(4608,d.r,d.r,[]),a.Va(5120,m.qc,m.rc,[[3,m.qc]]),a.Va(4608,c.d,c.d,[]),a.Va(1073742336,S.b,S.b,[]),a.Va(1073742336,m.W,m.W,[]),a.Va(1073742336,m.Bb,m.Bb,[]),a.Va(1073742336,m.Pc,m.Pc,[]),a.Va(1073742336,m.P,m.P,[]),a.Va(1073742336,m.d,m.d,[]),a.Va(1073742336,m.R,m.R,[]),a.Va(1073742336,m.n,m.n,[]),a.Va(1073742336,m.Wc,m.Wc,[]),a.Va(1073742336,m.Yc,m.Yc,[]),a.Va(1073742336,m.I,m.I,[]),a.Va(1073742336,m.S,m.S,[]),a.Va(1073742336,d.o,d.o,[]),a.Va(1073742336,d.e,d.e,[]),a.Va(1073742336,m.Da,m.Da,[]),a.Va(1073742336,m.Ib,m.Ib,[]),a.Va(1073742336,m.ic,m.ic,[]),a.Va(1073742336,m.B,m.B,[]),a.Va(1073742336,m.Xa,m.Xa,[]),a.Va(1073742336,m.ib,m.ib,[]),a.Va(1073742336,m.s,m.s,[]),a.Va(1073742336,m.Ha,m.Ha,[]),a.Va(1073742336,m.Ca,m.Ca,[]),a.Va(1073742336,m.i,m.i,[]),a.Va(1073742336,m.j,m.j,[]),a.Va(1073742336,m.Ya,m.Ya,[]),a.Va(1073742336,m.q,m.q,[]),a.Va(1073742336,m.Fa,m.Fa,[]),a.Va(1073742336,m.Ka,m.Ka,[]),a.Va(1073742336,m.sc,m.sc,[]),a.Va(1073742336,m.db,m.db,[]),a.Va(1073742336,m.nb,m.nb,[]),a.Va(1073742336,m.Aa,m.Aa,[]),a.Va(1073742336,m.Qa,m.Qa,[]),a.Va(1073742336,m.gb,m.gb,[]),a.Va(1073742336,m.La,m.La,[]),a.Va(1073742336,m.rb,m.rb,[]),a.Va(1073742336,m.a,m.a,[]),a.Va(1073742336,M.a,M.a,[]),a.Va(1073742336,y.o,y.o,[[2,y.t],[2,y.l]]),a.Va(1073742336,V.a,V.a,[]),a.Va(1073742336,c.q,c.q,[]),a.Va(1073742336,c.o,c.o,[]),a.Va(1073742336,c.m,c.m,[]),a.Va(1073742336,c.f,c.f,[]),a.Va(1073742336,c.c,c.c,[]),a.Va(1073742336,c.k,c.k,[]),a.Va(1073742336,c.i,c.i,[]),a.Va(1073742336,c.a,c.a,[]),a.Va(1073742336,e,e,[]),a.Va(1024,y.j,function(){return[[{path:"",component:v}]]},[])])})}}]);