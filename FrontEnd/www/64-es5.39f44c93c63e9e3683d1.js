!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{PA3a:function(e,o,i){"use strict";i.r(o),i.d(o,"CrpostPageModule",function(){return y});var r,c=i("ofXK"),a=i("3Pt+"),b=i("TEn/"),l=i("tyNb"),s=i("vkgz"),u=i("fXoL"),p=i("P7CE"),d=i("mrSG"),f=i("tk/3"),g=((r=function(){function e(n){t(this,e),this.http=n,this.images=[],this.url="https://api.imgur.com/3/image",this.clientId="9a8b2ba9a503b48"}return n(e,[{key:"uploadImage",value:function(t,e){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t,t.name),o=new f.c({authorization:"Client-ID "+this.clientId}),e.next=5,this.http.post(this.url,n,{headers:o}).toPromise();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}))}}]),e}()).\u0275fac=function(t){return new(t||r)(u.Sb(f.a))},r.\u0275prov=u.Fb({token:r,factory:r.\u0275fac,providedIn:"root"}),r);function m(t,e){if(1&t){var n=u.Pb();u.Mb(0),u.Ob(1,"form",16),u.Ob(2,"ion-row"),u.Ob(3,"ion-col",0),u.Ob(4,"ion-input",17),u.Wb("ngModelChange",function(t){return u.hc(n),u.ac().title=t}),u.Nb(),u.Nb(),u.Nb(),u.Ob(5,"ion-row"),u.Ob(6,"ion-col",0),u.Kb(7,"ion-textarea",18),u.Nb(),u.Nb(),u.Ob(8,"ion-row"),u.Ob(9,"ion-col",19),u.Ob(10,"ion-button",20),u.Wb("click",function(){u.hc(n);var t=u.ac();return t.submit(t.tform)}),u.lc(11," Post "),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Lb()}if(2&t){var o=u.ac();u.zb(1),u.dc("formGroup",o.tform),u.zb(3),u.dc("ngModel",o.title)}}function h(t,e){if(1&t){var n=u.Pb();u.Mb(0),u.Ob(1,"form",16),u.Ob(2,"ion-row"),u.Ob(3,"ion-col",0),u.Ob(4,"ion-input",17),u.Wb("ngModelChange",function(t){return u.hc(n),u.ac().title=t}),u.Nb(),u.Nb(),u.Nb(),u.Ob(5,"ion-row"),u.Ob(6,"ion-col",0),u.Ob(7,"div",21),u.Ob(8,"input",22,23),u.Wb("change",function(){u.hc(n);var t=u.gc(9);return u.ac().imageInputChange(t)}),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(10,"ion-row"),u.Ob(11,"ion-col",19),u.Ob(12,"ion-button",20),u.Wb("click",function(){u.hc(n);var t=u.ac();return t.submitImg(t.iform)}),u.lc(13," Post "),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Lb()}if(2&t){var o=u.ac();u.zb(1),u.dc("formGroup",o.iform),u.zb(3),u.dc("ngModel",o.title)}}function O(t,e){if(1&t){var n=u.Pb();u.Mb(0),u.Ob(1,"form",16),u.Ob(2,"ion-row"),u.Ob(3,"ion-col",0),u.Ob(4,"ion-input",17),u.Wb("ngModelChange",function(t){return u.hc(n),u.ac().title=t}),u.Nb(),u.Nb(),u.Nb(),u.Ob(5,"ion-row"),u.Ob(6,"ion-col",0),u.Kb(7,"ion-textarea",24),u.Nb(),u.Nb(),u.Ob(8,"ion-row"),u.Ob(9,"ion-col",0),u.Kb(10,"ion-input",25),u.Nb(),u.Nb(),u.Ob(11,"ion-row"),u.Ob(12,"ion-col",0),u.Ob(13,"ion-item"),u.Ob(14,"ion-label"),u.lc(15,"Date"),u.Nb(),u.Kb(16,"ion-datetime",26),u.Nb(),u.Nb(),u.Nb(),u.Ob(17,"ion-row"),u.Ob(18,"ion-col",19),u.Ob(19,"ion-button",20),u.Wb("click",function(){u.hc(n);var t=u.ac();return t.submit(t.invform)}),u.lc(20," Post "),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Lb()}if(2&t){var o=u.ac();u.zb(1),u.dc("formGroup",o.invform),u.zb(3),u.dc("ngModel",o.title)}}var N,v,x,C=[{path:"",component:(N=function(){function e(n,o,i,r,c,a){t(this,e),this.formBuilder=n,this.route=o,this.feedService=i,this.imageService=r,this.navCtrl=c,this.alertCtrl=a,this.ptype="text",this.title="",this.topicId="",this.tform=n.group({title:[""],text:[""],type:0}),this.iform=n.group({title:[""],url:[""],type:1}),this.invform=n.group({title:[""],description:[""],location:[""],date:Date,type:2})}return n(e,[{key:"ngOnInit",value:function(){this.topicId=this.route.snapshot.paramMap.get("id")}},{key:"changeType",value:function(t){this.ptype=t,console.log(this.ptype)}},{key:"disableSegment",value:function(){return!(!(this.tform.dirty||this.iform.dirty||this.invform.dirty)||""==this.tform.value.text&&""==this.iform.value.url&&""==this.invform.value.description)}},{key:"addImage",value:function(){this.imageService.uploadImage(this.imageFile,{title:this.title}).then(function(t){return console.log(t),!!t.success}),this.title=""}},{key:"imageInputChange",value:function(t){this.imageFile=t.files[0]}},{key:"submit",value:function(t){var e=this;this.feedService.createPost(t,this.topicId).subscribe(function(t){console.log(t),t.success&&e.alertCtrl.create({header:"Success",message:"Post Created Successfully",buttons:["Ok"]}).then(function(t){t.present()}).then(function(){e.navCtrl.back()})}),console.log(t.value)}},{key:"submitImg",value:function(t){var e=this;this.imageService.uploadImage(this.imageFile,{title:this.title}).then(function(n){console.log(n),n.success?(t.value.url=n.data.link,e.feedService.createPost(t,e.topicId).pipe(Object(s.a)(function(t){console.log("feedservice.createpost : ",t),t.success&&e.alertCtrl.create({header:"Success",message:"Post Created Successfully",buttons:["Ok"]}).then(function(t){t.present()}).then(function(){e.navCtrl.back()})})).subscribe()):console.log("there's an error somewhere")})}}]),e}(),N.\u0275fac=function(t){return new(t||N)(u.Jb(a.b),u.Jb(l.a),u.Jb(p.a),u.Jb(g),u.Jb(b.H),u.Jb(b.a))},N.\u0275cmp=u.Db({type:N,selectors:[["app-crpost"]],decls:50,vars:4,consts:[["size","12"],["size","7","offset","1",2,"--ion-background-color","#fff"],["fixed",""],["fixed","",1,"ion-padding"],[1,"crpost"],[2,"background-color","#aaa9a9"],["value","text",3,"disabled","ionChange"],["segment",""],["value","text"],["value","image"],["value","invit"],[4,"ngIf"],["size","3"],[1,"widget"],[1,"regles","w-center"],[1,"ion-no-padding","ion-no-margin"],[3,"formGroup"],["formControlName","title","placeholder","Title",1,"ion-padding",3,"ngModel","ngModelChange"],["formControlName","text","placeholder","Put your text here (optional)."],["offset","10","size","2"],["expand","block","fill","clear",1,"postbtn",3,"click"],[1,"imgup","ion-align-items-center","ion-padding"],["type","file","accept","image/*",3,"change"],["imageInput",""],["formControlName","description","placeholder","Description"],["formControlName","location","type","text","placeholder","Location"],["formControlName","date","displayFormat","MMM DD YYYY","placeholder","Select Date"]],template:function(t,e){if(1&t){var n=u.Pb();u.Ob(0,"ion-header"),u.Kb(1,"ion-toolbar"),u.Nb(),u.Ob(2,"ion-content"),u.Ob(3,"ion-grid"),u.Ob(4,"ion-row"),u.Kb(5,"ion-col",0),u.Nb(),u.Ob(6,"ion-row"),u.Ob(7,"ion-col",1),u.Ob(8,"ion-grid",2),u.Ob(9,"ion-row"),u.Ob(10,"ion-col"),u.Ob(11,"ion-card"),u.Ob(12,"ion-grid",3),u.Ob(13,"ion-row"),u.Ob(14,"ion-col",0),u.Ob(15,"p",4),u.lc(16,"Create a new post"),u.Nb(),u.Kb(17,"hr",5),u.Nb(),u.Nb(),u.Ob(18,"ion-row"),u.Ob(19,"ion-col",0),u.Ob(20,"ion-segment",6,7),u.Wb("ionChange",function(){u.hc(n);var t=u.gc(21);return e.ptype=t.value}),u.Ob(22,"ion-segment-button",8),u.Ob(23,"ion-label"),u.lc(24,"Text"),u.Nb(),u.Nb(),u.Ob(25,"ion-segment-button",9),u.Ob(26,"ion-label"),u.lc(27,"Image"),u.Nb(),u.Nb(),u.Ob(28,"ion-segment-button",10),u.Ob(29,"ion-label"),u.lc(30,"Invitation"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.kc(31,m,12,2,"ng-container",11),u.kc(32,h,14,2,"ng-container",11),u.kc(33,O,21,2,"ng-container",11),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(34,"ion-col",12),u.Ob(35,"div",13),u.Ob(36,"h4",14),u.lc(37,"Posting rules"),u.Nb(),u.Kb(38,"hr"),u.Ob(39,"ion-list",15),u.Ob(40,"ion-item"),u.lc(41," 1- Respect the general order. "),u.Nb(),u.Ob(42,"ion-item"),u.lc(43," 2- Act as a human being. "),u.Nb(),u.Ob(44,"ion-item"),u.lc(45," 3- Avoid RACISM. "),u.Nb(),u.Ob(46,"ion-item"),u.lc(47," 4- Avoid fanaticism. "),u.Nb(),u.Ob(48,"ion-item"),u.lc(49," 5- Take care ! "),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb()}2&t&&(u.zb(20),u.dc("disabled",e.disableSegment()),u.zb(11),u.dc("ngIf","text"==e.ptype),u.zb(1),u.dc("ngIf","image"==e.ptype),u.zb(1),u.dc("ngIf","invit"==e.ptype))},directives:[b.p,b.D,b.m,b.o,b.x,b.l,b.h,b.z,b.K,b.A,b.u,c.i,b.v,b.t,a.p,a.j,a.d,b.s,b.L,a.i,a.c,b.B,b.f,b.n],styles:["h4.regles[_ngcontent-%COMP%]{background-color:#dd4e35;margin:0;padding-top:10px;padding-bottom:10px;color:#fff}#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]{--ion-background-color:#f2f2f2}ion-card[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #bbb;margin:0 0 0 10px;border-radius:0;text-decoration:none}ion-title[_ngcontent-%COMP%]{font-size:17px}.widget[_ngcontent-%COMP%]{float:left;width:100%;background-color:#fff;border-left:1px solid #e4e4e4;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;margin-bottom:20px;-ms-box-shadow:0 2px #e4e4e4;-o-box-shadow:0 2px #e4e4e4;box-shadow:0 2px #e4e4e4;--ion-background-color:#fff}.w-center[_ngcontent-%COMP%]{text-align:center}p.crpost[_ngcontent-%COMP%]{padding:0 0 5px 20px;font-size:medium}ion-select[_ngcontent-%COMP%]::part(icon){display:none!important}ion-select[_ngcontent-%COMP%]{max-width:100%}.popover-content[_ngcontent-%COMP%]{left:0!important;width:100%}ion-button.postbtn[_ngcontent-%COMP%]{border:2px solid #3880ff;font-weight:700;border-radius:5px}ion-textarea[_ngcontent-%COMP%]{height:150px}ion-input[_ngcontent-%COMP%], ion-textarea[_ngcontent-%COMP%]{font-size:medium;border-radius:5px;border:1px solid #bebebe;padding-left:5px}.imgup[_ngcontent-%COMP%]{border:1px dashed #bebebe}"]}),N)}],w=((x=function e(){t(this,e)}).\u0275mod=u.Hb({type:x}),x.\u0275inj=u.Gb({factory:function(t){return new(t||x)},imports:[[l.j.forChild(C)],l.j]}),x),y=((v=function e(){t(this,e)}).\u0275mod=u.Hb({type:v}),v.\u0275inj=u.Gb({factory:function(t){return new(t||v)},imports:[[c.b,a.e,b.E,w,a.m]]}),v)}}])}();