!function(){function o(o,n){if(!(o instanceof n))throw new TypeError("Cannot call a class as a function")}function n(o,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{Z1fz:function(t,e,i){"use strict";i.r(e),i.d(e,"SearchPageModule",function(){return w});var r=i("ofXK"),c=i("3Pt+"),b=i("TEn/"),a=i("tyNb"),s=i("fXoL"),f=i("P7CE"),d=function(o){return["/topic",o]};function p(o,n){if(1&o&&(s.Mb(0),s.Ob(1,"ion-card"),s.Ob(2,"ion-grid",5),s.Ob(3,"ion-row"),s.Ob(4,"ion-col",6),s.Ob(5,"h5",7),s.Ob(6,"a",8),s.lc(7),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Lb()),2&o){var t=n.$implicit;s.zb(6),s.dc("routerLink",s.ec(2,d,t.id)),s.zb(1),s.nc("t/",t.title,"")}}var l,u,h,g=[{path:"",component:(l=function(){function t(n,e){o(this,t),this.route=n,this.feedService=e,this.found=!1,this.searchtop="",this.listOfTopics=[]}var e,i,r;return e=t,(i=[{key:"ngOnInit",value:function(){var o=this;this.searchtop=this.route.snapshot.paramMap.get("srch"),this.feedService.searchTopic(this.searchtop).subscribe(function(n){n.success&&(o.found=!0,o.listOfTopics=n.listOfTopics)})}}])&&n(e.prototype,i),r&&n(e,r),t}(),l.\u0275fac=function(o){return new(o||l)(s.Jb(a.a),s.Jb(f.a))},l.\u0275cmp=s.Db({type:l,selectors:[["app-search"]],decls:15,vars:1,consts:[["size","8","offset","2"],[1,"widget"],[1,"about"],["size","8","offset","2",2,"--ion-background-color","#fff"],[4,"ngFor","ngForOf"],["fixed",""],["size","9"],[1,"topiclink"],[3,"routerLink"]],template:function(o,n){1&o&&(s.Ob(0,"ion-header"),s.Kb(1,"ion-toolbar"),s.Nb(),s.Ob(2,"ion-content"),s.Ob(3,"ion-grid"),s.Ob(4,"ion-row"),s.Ob(5,"ion-col",0),s.Ob(6,"div",1),s.Ob(7,"h4",2),s.lc(8,"Search Result"),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(9,"ion-row"),s.Ob(10,"ion-col",3),s.Ob(11,"ion-grid"),s.Ob(12,"ion-row"),s.Ob(13,"ion-col"),s.kc(14,p,8,4,"ng-container",4),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&o&&(s.zb(14),s.dc("ngForOf",n.listOfTopics))},directives:[b.p,b.D,b.m,b.o,b.x,b.l,r.h,b.h,a.i,b.J],styles:["ion-content[_ngcontent-%COMP%]{--ion-background-color:#f2f2f2}ion-card[_ngcontent-%COMP%]{box-shadow:none;border:1px solid #bbb;margin:0 0 0 10px;border-radius:0;text-decoration:none}.widget[_ngcontent-%COMP%]{float:left;width:100%;background-color:#fff;border-left:1px solid #e4e4e4;border-right:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4;margin-bottom:20px;-ms-box-shadow:0 2px #e4e4e4;-o-box-shadow:0 2px #e4e4e4;box-shadow:0 2px #e4e4e4;text-align:center}ion-card[_ngcontent-%COMP%]{margin-top:10px}h5.topiclink[_ngcontent-%COMP%]{padding:5px 0 0 15px;margin:0}h5.topiclink[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:600;color:#4b4b4b;text-decoration:none}.about[_ngcontent-%COMP%]{background-color:#dd4e35;margin:0;padding-top:10px;padding-bottom:10px;color:#fff}"]}),l)}],O=((h=function n(){o(this,n)}).\u0275mod=s.Hb({type:h}),h.\u0275inj=s.Gb({factory:function(o){return new(o||h)},imports:[[a.j.forChild(g)],a.j]}),h),w=((u=function n(){o(this,n)}).\u0275mod=s.Hb({type:u}),u.\u0275inj=s.Gb({factory:function(o){return new(o||u)},imports:[[r.b,c.e,b.E,O]]}),u)}}])}();