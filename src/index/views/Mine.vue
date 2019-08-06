<template>
	<div data-reactroot="" class="tab-page">
		<Xnavbar />
		<XsecUser />
		<XsecAllorder />
		<XsecOrder />
		<div class="friends-promotion"><div class="line"></div></div>
		<XsecProperty />
		<XbrowseHistory />
		<!-- <Xrecommend status="Mine"/> -->
	</div>
</template>
<script>
import Xnavbar from "../../components/home/Xnavbar1.vue";
import XsecUser from "../../components/Mine/XsecUser.vue";
import XsecAllorder from "../../components/Mine/XsecAllorder.vue";
import XsecOrder from "../../components/Mine/XsecOrder.vue";
import XsecProperty from "../../components/Mine/XsecProperty.vue";
import XbrowseHistory from "../../components/Mine/XbrowseHistory.vue";
export default {
  components: {
    Xnavbar,
    XsecUser,
    XsecAllorder,
    XsecOrder,
    XsecProperty,
    XbrowseHistory
  }
};
</script>
<style>
.fl {
  float: left;
  padding: 0 0.66rem;
}
.tab-page {
  background: #f7f7f7;
  padding-bottom: 2.5rem;
}

.tab-page .title {
  padding: 0.4rem 0.5rem;
  overflow: hidden;
  display: block;
  line-height: 1rem;
  font-size: 0.7rem;
}

.tab-page .title .right {
  /* color: #999; */
  font-size: 0.6rem;
  float: right;
}

.tab-page .title .right .SVGInline {
  margin-left: 0.2rem;
  vertical-align: middle;
  margin-bottom: 0.1rem;
}

.tab-page .sec-user {
  height: 7rem;
  overflow: hidden;
  background: url(https://img-ucdn-static.helijia.com/lego/uploads/user/images/original_beff44742ada78fa332cdd68de1d1d8f.png)
    center center;
}

.tab-page .sec-user .bg {
  width: 100%;
}

.tab-page .sec-user .icon-group {
  text-align: right;
  position: absolute;
  width: 100%;
  right: 0.75rem;
  top: 0.5rem;
}

.tab-page .sec-user .icon-group .msg {
  position: relative;
  display: inline-block;
}

.tab-page .sec-user .icon-group .msg i {
  position: absolute;
  top: -0.1rem;
  right: -0.1rem;
  width: 0.5rem;
  height: 0.5rem;
  background: #f00;
  display: block;
  border-radius: 50%;
}

.tab-page .sec-user .icon-group .SVGInline {
  margin-left: 1rem;
}

.tab-page .sec-user .user {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 1.5rem 0.75rem 0;
}

.tab-page .sec-user .user .box-avatar {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  position: relative;
  background: #999;
  border: 1px solid #565654;
  border-radius: 50%;
}

.tab-page .sec-user .user .box-avatar .avatar {
  -webkit-background-size: cover;
  background-size: cover;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.tab-page .sec-user .user .box-avatar .svip-icon {
  position: absolute;
  top: -0.55rem;
  right: -0.55rem;
  width: 1.1rem;
  height: 1.15rem;
}

.tab-page .sec-user .user .box-avatar .SVGInline {
  margin: 0.7rem;
}

.tab-page .sec-user .user .intro {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #fff;
  word-break: break-word;
  overflow: hidden;
  padding-left: 1rem;
}

.tab-page .sec-user .user .intro .name {
  padding: 0.35rem 0;
  line-height: 1.3;
}

.tab-page .sec-user .user .intro .level {
  height: 0.95rem;
  vertical-align: middle;
  margin-left: 0.35rem;
}

.tab-page .sec-user .user .intro .btn-member {
  color: #1a1a1a;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 100rem;
  padding: 0.1rem 0.25rem;
  font-size: 0.55rem;
  line-height: 1;
}

.tab-page .sec-user .user .intro .btn-member .right-arrow {
  width: 0.25rem;
  height: 0.45rem;
}

.tab-page .sec-user .user .intro .btn-member > div {
  margin: 0 0.1rem;
}

.tab-page .sec-user .user .intro .btn-member.svip-member {
  background-image: -webkit-linear-gradient(315deg, #e7c269 0%, #c3902c 100%);
  background-image: -o-linear-gradient(315deg, #e7c269 0%, #c3902c 100%);
  background-image: linear-gradient(135deg, #e7c269 0%, #c3902c 100%);
  background-color: #e7c269;
}

.tab-page .sec-user .user .intro .btn-member.svip-member .black-crown {
  width: 0.5rem;
  height: 0.4rem;
}

.tab-page .sec-user .user .intro .btn-member.normal-member {
  background-image: -webkit-linear-gradient(225deg, #c1c8d7 0%, #93a1b5 100%);
  background-image: -o-linear-gradient(225deg, #c1c8d7 0%, #93a1b5 100%);
  background-image: linear-gradient(-135deg, #c1c8d7 0%, #93a1b5 100%);
  background-color: #c1c8d7;
}

.tab-page .sec-all-order {
  margin-bottom: 0.5rem;
  background: #fff;
}
.tab-page .sec-all-order {
  width: 17.375rem;
  /* height: 6.75rem; */
  margin: -2rem 0.678rem 0.5rem;
  top: -2.375rem;
  border-radius: 5px 5px 0 0;
}

.tab-page .sec-all-order .title {
  border: 0;
}

.tab-page .sec-order {
  background: #fff;
}

.tab-page .sec-order .num {
  position: absolute;
  top: -10%;
  right: 15%;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
  font-style: normal;
  font-size: 0.5rem;
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.65rem;
  text-align: center;
  background: #d0021b;
}

.tab-page .sec-order .maxNum {
  font-size: 0.35rem;
}

.tab-page .sec-order .SVGInline-svg {
  width: 1rem;
  height: 1rem;
}

.tab-page .sec-group {
  margin-top: 0.5rem;
  background: #fff;
}

.tab-page .sec-group .title {
  border: 0;
}

.tab-page .sec-property {
  background: #fff;
  position: relative;
}

.tab-page .sec-property .account {
  min-height: 0.75rem;
  display: inline-block;
  color: #c19e63;
}

.tab-page .sec-property .unit {
  font-size: 0.5rem;
  margin-top: 0.3rem;
  display: inline-block;
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  color: #c19e63;
}

.tab-page .sec-property .card-tip {
  position: absolute;
  width: 1.2rem;
  top: -0.3rem;
}

.tab-page .friends-promotion {
  background-color: white;
}

.tab-page .friends-promotion a {
  display: block;
  padding: 0 0.75rem;
}

.tab-page .friends-promotion .line {
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
}

.tab-page .sec-mixed {
  background: #fff;
  border-top: 0.05rem solid #f3f3f3;
}

.tab-page .sec-mixed .list {
  background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#e6e6e6),
      to(#e6e6e6)
    )
    left center no-repeat;
  background: -webkit-linear-gradient(#e6e6e6, #e6e6e6) left center no-repeat;
  background: -o-linear-gradient(#e6e6e6, #e6e6e6) left center no-repeat;
  background: linear-gradient(#e6e6e6, #e6e6e6) left center no-repeat;
  -webkit-background-size: 100% 1px;
  background-size: 100% 1px;
}

.tab-page .sec-mixed .list li .SVGInline-svg,
.tab-page .sec-mixed .list a .SVGInline-svg {
  width: 1.25rem;
  height: 1.25rem;
}

.tab-page .sec-mixed .list li .box-num,
.tab-page .sec-mixed .list a .box-num {
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  color: #c19e63;
  display: inline-block;
}

.tab-page .sec-mixed .list li strong,
.tab-page .sec-mixed .list a strong {
  margin-top: 0.4rem;
}

.tab-page .browse-history {
  background: #fff;
  margin-top: 0.5rem;
}

.tab-page .browse-history .title {
  border: 0;
}

.tab-page .browse-history .browse-num {
  height: 6rem;
  overflow: hidden;
}

.tab-page .browse-history .browse-num .num {
  width: 22%;
  float: left;
  margin-left: 10px;
  text-align: center;
}

.tab-page .browse-history .browse-num .num .image {
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 0.1rem;
}

.tab-page .browse-history .browse-num .num .dec-name {
  font-size: 0.6rem;
  margin-top: 0.3rem;
  line-height: 0.7rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tab-page .browse-history .browse-num .num .price {
  font-size: 0.6rem;
  margin-top: 0.3rem;
  color: #d0021b;
}

.tab-page .list {
  overflow: hidden;
}

.tab-page .list li,
.tab-page .list a {
  padding: 0.75rem 0;
  width: 25%;
  text-align: center;
  float: left;
  position: relative;
}

.tab-page .list li strong,
.tab-page .list a strong {
  display: block;
  font-weight: normal;
  font-size: 0.6rem;
  margin-top: 0.25rem;
}

.tab-page .list-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0.75rem 0;
	margin: 0 0.675rem;
}

.tab-page .list-item li,
.tab-page .list-item a {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  position: relative;
}

.tab-page .list-item li strong,
.tab-page .list-item a strong {
  display: block;
  font-weight: normal;
  font-size: 0.6rem;
  margin-top: 0.25rem;
}

.popup-component.feedback .content {
  background: transparent;
}
</style>
