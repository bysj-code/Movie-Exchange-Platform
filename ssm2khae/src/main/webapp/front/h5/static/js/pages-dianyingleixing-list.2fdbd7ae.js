(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dianyingleixing-list"],{1820:function(n,e,t){var i=t("e6a6");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var r=t("4f06").default;r("22d32454",i,!0,{sourceMap:!1,shadowMode:!1})},4081:function(n,e,t){"use strict";var i={"mescroll-uni":t("f05e").default},r=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("mescroll-uni",{attrs:{up:n.upOption,down:n.downOption},on:{init:function(e){arguments[0]=e=n.$handleEvent(e),n.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=n.$handleEvent(e),n.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=n.$handleEvent(e),n.upCallback.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"cu-bar bg-white search",style:[{top:n.CustomBar+"px"}]},[n.queryList.length>1?t("v-uni-picker",{staticStyle:{"padding-left":"20upx"},attrs:{mode:"selector",range:n.queryList,"range-key":"queryName",value:n.queryIndex},on:{change:function(e){arguments[0]=e=n.$handleEvent(e),n.queryChange.apply(void 0,arguments)}}},[t("v-uni-view",[t("v-uni-image",{staticStyle:{width:"20upx",height:"33upx"},attrs:{src:"../../static/center/to.png"}})],1)],1):n._e(),0==n.queryIndex?t("v-uni-view",{staticClass:"search-form round"},[t("v-uni-text",{staticClass:"cuIcon-search"}),t("v-uni-input",{attrs:{type:"text",placeholder:"电影类型"},model:{value:n.searchForm.dianyingleixing,callback:function(e){n.$set(n.searchForm,"dianyingleixing",e)},expression:"searchForm.dianyingleixing"}})],1):n._e(),t("v-uni-view",{staticClass:"action"},[t("v-uni-button",{staticClass:"cu-btn shadow-blur round",style:{width:"auto",borderRadius:"0",height:"80rpx",fontSize:"28rpx",color:"#fff",backgroundColor:n.btnColor[0],borderColor:n.btnColor[0]},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.search.apply(void 0,arguments)}}},[n._v("搜索")])],1)],1),t("v-uni-view",{style:"display: flex;"},[t("v-uni-view",{staticClass:"uni-product-list",staticStyle:{"box-sizing":"border-box"},style:{padding:"0",boxShadow:"0 0 12rpx rgba(255,0,0,0)",margin:"20rpx 0 0",borderColor:"red",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:0,borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},n._l(n.list,(function(e,i){return t("v-uni-view",{key:i,staticClass:"uni-product",style:{padding:"0",boxShadow:"0 0 12rpx rgba(255,0,0,0)",margin:"0 1% 20rpx 2%",borderColor:"rgba(147, 129, 142, 1)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"8rpx",width:"47%",borderStyle:"solid",height:"auto"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.onDetailTap(e)}}},[t("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between"}},[n.userid&&n.isAuth("dianyingleixing","修改")?t("v-uni-text",{staticClass:"cuIcon-edit",on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onUpdateTap(e.id)}}},[n._v("修改")]):n._e(),!n.userid&&n.isAuthFront("dianyingleixing","修改")?t("v-uni-text",{staticClass:"cuIcon-edit",on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onUpdateTap(e.id)}}},[n._v("修改")]):n._e(),n.userid&&n.isAuth("dianyingleixing","删除")?t("v-uni-text",{staticClass:"cuIcon-delete",on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onDeleteTap(e.id)}}},[n._v("删除")]):n._e(),!n.userid&&n.isAuthFront("dianyingleixing","删除")?t("v-uni-text",{staticClass:"cuIcon-delete",on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onDeleteTap(e.id)}}},[n._v("删除")]):n._e()],1)],1)})),1)],1),n.userid&&n.isAuth("dianyingleixing","新增")?t("v-uni-button",{staticClass:"add-btn",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(147, 129, 142, 1)",borderColor:"#409EFF",borderRadius:"0",color:"#fff",borderWidth:"0",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.onAddTap()}}},[n._v("新增")]):n._e(),!n.userid&&n.isAuthFront("dianyingleixing","新增")?t("v-uni-button",{staticClass:"add-btn",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(147, 129, 142, 1)",borderColor:"#409EFF",borderRadius:"0",color:"#fff",borderWidth:"0",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.onAddTap()}}},[n._v("新增")]):n._e()],1)},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},"6cf2":function(n,e,t){"use strict";t.r(e);var i=t("a189"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},"8b7e":function(n,e,t){"use strict";t.r(e);var i=t("4081"),r=t("6cf2");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("ee7f");var o,s=t("f0c5"),l=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"174257f6",null,!1,i["a"],o);e["default"]=l.exports},a189:function(n,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("55dd"),t("96cf");var r=i(t("3b8d")),a={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"电影类型"}],sactiveItem:{padding:"0 28rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 4rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"rgba(147, 129, 142, 1)",color:"#fff",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 4rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"rgba(225, 225, 225, 1)",color:"#333",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},queryIndex:0,list:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll();case 3:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),onLoad:function(n){n.userid?this.userid=n.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(n){this.queryIndex=n.detail.value,this.searchForm.dianyingleixing=""},mescrollInit:function(n){this.mescroll=n},downCallback:function(n){this.hasNext=!0,n.resetUpScroll()},upCallback:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(e){var t,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t={page:e.num,limit:e.size},this.searchForm.dianyingleixing&&(t["dianyingleixing"]="%"+this.searchForm.dianyingleixing+"%"),i={},!this.userid){n.next=9;break}return n.next=6,this.$api.page("dianyingleixing",t);case 6:i=n.sent,n.next=12;break;case 9:return n.next=11,this.$api.list("dianyingleixing",t);case 11:i=n.sent;case 12:1==e.num&&(this.list=[]),this.list=this.list.concat(i.data.list),0==i.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 16:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),onDetailTap:function(n){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onUpdateTap:function(n){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(n))},onAddTap:function(){uni.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var e=this;uni.showModal({title:"提示",content:"是否确认删除",success:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i.confirm){t.next=5;break}return t.next=3,e.$api.del("dianyingleixing",JSON.stringify([n]));case 3:e.hasNext=!0,e.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function i(n){return t.apply(this,arguments)}return i}()})},search:function(){var n=(0,r.default)(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.mescroll.num=1,e={page:this.mescroll.num,limit:this.mescroll.size},this.searchForm.dianyingleixing&&(e["dianyingleixing"]="%"+this.searchForm.dianyingleixing+"%"),t={},!this.userid){n.next=10;break}return n.next=7,this.$api.page("dianyingleixing",e);case 7:t=n.sent,n.next=13;break;case 10:return n.next=12,this.$api.list("dianyingleixing",e);case 12:t=n.sent;case 13:1==this.mescroll.num&&(this.list=[]),this.list=this.list.concat(t.data.list),0==t.data.list.length&&(this.hasNext=!1),this.mescroll.endSuccess(this.mescroll.size,this.hasNext);case 17:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}()}};e.default=a},e6a6:function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t/* product */uni-page-body[data-v-174257f6]{background:#eee}uni-view[data-v-174257f6]{font-size:%?28?%}.uni-product-list[data-v-174257f6]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:%?0?%\n\t\t/* justify-content: space-around; */}.uni-product[data-v-174257f6]{padding:%?10?%;margin:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background:#fff}.image-view[data-v-174257f6]{height:%?330?%;width:%?330?%;margin:%?12?% 0}.uni-product-image[data-v-174257f6]{height:%?330?%;width:%?330?%}.uni-product-title[data-v-174257f6]{width:%?300?%;word-break:break-all;display:-webkit-box;overflow:hidden;line-height:1.5;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2}.uni-product-price[data-v-174257f6]{margin-top:%?10?%;font-size:%?28?%;line-height:1.5;position:relative}.uni-product-price-original[data-v-174257f6]{color:#e80080}.uni-product-price-favour[data-v-174257f6]{color:#888;text-decoration:line-through;margin-left:%?10?%}.uni-product-tip[data-v-174257f6]{position:absolute;right:%?10?%;background-color:#f33;color:#fff;padding:0 %?10?%;border-radius:%?5?%}uni-image > div[data-v-174257f6], uni-image > img[data-v-174257f6]{width:100%;height:140px;object-fit:cover}.add-btn[data-v-174257f6]{position:fixed;left:%?30?%;right:%?30?%;\n\t\tbottom:%?106?%;\n\t\t\n\t\tz-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:red;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.list[data-v-174257f6]{padding:%?20?% %?20?% %?20?%}.listm[data-v-174257f6]{background:#fff;border-radius:%?15?%;box-shadow:0 0 %?2?% rgba(0,0,0,.1);margin-bottom:%?20?%;padding:%?30?%}.listmpic[data-v-174257f6]{border-radius:%?10?%;width:%?166?%;margin-right:%?20?%}.listmr[data-v-174257f6]{\n\t\t/* width: 460upx; */display:inline-block;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.news-box6 .dian[data-v-174257f6]::before{content:"";display:block;width:8px;height:8px;background-color:red;position:absolute;top:-4px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:100%;z-index:1}.hide1[data-v-174257f6]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;line-clamp:1;-webkit-box-orient:vertical}.hide2[data-v-174257f6]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.hide4[data-v-174257f6]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}body.?%PAGE?%[data-v-174257f6]{background:#eee}',""]),n.exports=e},ee7f:function(n,e,t){"use strict";var i=t("1820"),r=t.n(i);r.a}}]);