<template>
  <div id="app" class="clearfix">
    <loading v-if="isloading" />
    <div >这是员工端</div>
    <transition :name="transitionName" >
    	<router-view class="child-view clearfix" ></router-view>
    </transition>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import loading from '../components/loading/isloading.vue';
  export default {
		name: 'app',
		data(){
			return {
				transitionName: 'slide-left'
			}
		},
		components: {
			loading
    },
    methods: {
    gostores() {
      window.location = "http://localhost:8085/index.html";
      },
    },
		watch: {
			'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
        		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
				window.scrollTo(0,0);
			}
		},
		computed:{
			...mapState([
				'isloading'
			])
		},
};
</script>

<style lang="less">
#app{
		width: 100%;
		height: 100%;
	}
	html,body{
		width: 100%;
		height: 100%;
		content:"";
		display:block;
		clear:both;
	}
	
	@import url("../assets/home.css");

	/*====================*/
	.child-view {
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
			height: 100%;
      -moz-box-sizing: border-box;
             box-sizing: border-box;
    transition: all .6s  cubic-bezier(0.42, 0, 0.58, 1.0);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(10px, 0);
    transform: translate(10px, 0);
}
.clearfix::after{
    content:"";
    display:block;
    height:0;
    clear:both;
    overflow:hidden;
    visibility:hidden;
}

	section.widget>header,
	.bar,
	.segment,
	section.full-height,
	section.full-height>header,
	section.full-height>footer,
	section.widget {
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: -moz-box;
		display: flex;
	}

	/**
 * 简单1px解决方案
 */
	/* Base Application Styles */
	*,
	*:after,
	*:before {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	html {
		font-size: 20px;
	}

	@media only screen and (min-width: 320px) {
		html {
			font-size: 17.067px;
		}
	}

	@media only screen and (min-width: 360px) {
		html {
			font-size: 19.2px;
		}
	}

	@media only screen and (min-width: 375px) {
		html {
			font-size: 20px;
		}
	}

	@media only screen and (min-width: 414px) {
		html {
			font-size: 22.08px;
		}
	}

	@media only screen and (min-width: 480px) {
		html {
			font-size: 25.6px;
		}
	}

	@media only screen and (min-width: 640px) {
		html {
			font-size: 34.13px;
		}
	}

	@media only screen and (min-width: 720px) {
		html {
			font-size: 38.918px;
		}
	}

	@media only screen and (min-width: 750px) {
		html {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 800px) {
		html {
			font-size: 22.08px;
		}
	}

	/* ----------- Non-Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 1) {
		html {
			font-size: 20px;
		}
	}

	/* ----------- Retina Screens ----------- */
	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (-webkit-min-device-pixel-ratio: 2),
	screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (-o-min-device-pixel-ratio: 2/1),
	screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
		html {
			font-size: 20px;
		}
	}

	html {
		width: 100%;
	}

	html>* {
		font-family: "PingHei", "Helvetica Neue", "Helvetica", "Arial", "Verdana", "sans-serif";
		font-size: 0.8rem;
	}

	html body {
		width: 100%;
		margin: auto;
	}

	@media only screen and (min-width: 800px) {
		html body {
			max-width: 414px;
		}
	}

	a {
		text-decoration: none;
		color: #1a1a1a;
	}

	b {
		color: #bd9d62;
		font-weight: normal;
	}

	ul,
	li,
	dl {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.float-right {
		float: right;
	}

	button {
		background: none;
		border: none;
		outline: none;
	}

	button>*,
	a>* {
		pointer-events: none;
	}

	.btn {
		display: inline-block;
		padding: 0.5rem;
		line-height: 1.5;
		border: 1px solid #ccc;
	}

	.btn-primary {
		display: inline-block;
		padding: 0.5rem;
		line-height: 1.5;
		background: #BD9D62;
		color: #fff;
	}

	.no-scroll {
		overflow: hidden;
	}

	body.no-scroll #app {
		pointer-events: none;
	}

	html.no-scroll {
		height: 100%;
		position: fixed;
	}

	/** animations **/
	@-webkit-keyframes slide-from-right {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
	}

	@keyframes slide-from-right {
		0% {
			-webkit-transform: translateX(100%);
			transform: translateX(100%);
		}
	}

	@-webkit-keyframes slide-from-bottom {
		0% {
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
		}
	}

	@keyframes slide-from-bottom {
		0% {
			-webkit-transform: translateY(100%);
			transform: translateY(100%);
		}
	}

	#app {
		width: 100%;
		/* position: relative; */
	}

	@media screen and (min-width: 800px) {
		#app {
			-webkit-box-shadow: 0 -10px 10px #aaa;
			box-shadow: 0 -10px 10px #aaa;
		}
	}

	.SVGInline {
		line-height: 1;
		vertical-align: middle;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: inline-block ;
	}

	.SVGInline-svg {
		height: auto;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	input:focus {
		outline: 0;
	}

	input::-webkit-input-placeholder {
		padding-left: 4px;
	}

	.block-level {
		display: block;
		width: 100%;
	}

	.muted {
		color: #999;
	}

	.button {
		color: #666;
		background: #fff;
		border: 1px solid rgba(102, 102, 102, 0.3);
	}

	.button.primary {
		color: #C3902C;
		border-color: #C3902C;
	}

	.button.primary.inverted {
		color: #fff;
		background: -webkit-gradient(linear,  from(right), color-stop(#E7C269), to(#C3902C));
		background: -webkit-linear-gradient(left, #E7C269, #C3902C);
		background: -o-linear-gradient(left, #E7C269, #C3902C);
		background: linear-gradient(to, right, #E7C269, #C3902C);
		border: 0;
	}

	.button.disabled,
	.button[disabled] {
		pointer-events: none;
		background: #fff;
		color: #b9b9b9;
	}

	.button.disabled.inverted,
	.button[disabled].inverted {
		background: #b9b9b9;
		color: #fff;
	}

	section.widget>header,
	.bar {
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-moz-box-align: center;
		align-items: center;
		line-height: 2;
		padding: 0 .3rem;
		background: #fff;
		color: #999;
		border-bottom: 1px solid #f7f7f7;
		height: 2.5rem;
		position: relative;
	}

	section.widget>header.inverted,
	.bar.inverted {
		background: #000;
		color: #fff;
	}

	section.widget>header.inverted h1,
	.bar.inverted h1 {
		color: #fff;
	}

	section.widget>header.inverted .primary.button,
	.bar.inverted .primary.button {
		background: none;
		border: 0;
	}

	section.widget>header.inverted input[type=text],
	.bar.inverted input[type=text] {
		background: #383838;
		color: #fff;
	}

	section.widget>header button:first-child,
	.bar button:first-child {
		padding: .5em;
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	section.widget>header h1,
	.bar h1 {
		margin: 0;
		font-size: 100%;
		font-weight: normal;
		color: #1a1a1a;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: center;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}

	section.widget>header input[type=text],
	.bar input[type=text] {
		border: 0;
		padding: 0;
		display: inline-block;
		border-radius: 2px;
	}

	section.widget>header .button,
	.bar .button {
		border: none;
	}

	section.widget>header .SVGInline,
	section.widget>header .SVGInline-svg,
	.bar .SVGInline,
	.bar .SVGInline-svg {
		display: block;
	}

	.segments {
		padding-left: .75rem;
		margin-bottom: 0.5rem;
		color: #1a1a1a;
		background: #fff;
	}

	.segment {
		-webkit-box-direction: normal;
		-webkit-box-orient: horizontal;
		-webkit-flex-direction: row;
		-moz-flex-direction: row;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		/* 防止 sass 优化后造成问题 */
		-moz-box-orient: horizontal !important;
		-moz-box-direction: normal !important;
		flex-direction: row !important;
		position: relative;
		height: 2.5rem;
		line-height: 2.5rem;
		padding-right: .75em;
		border-bottom: 1px solid #e6e6e6;
	}

	.segment:last-child {
		border-bottom: none;
	}

	.segment label {
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
	}

	.segment .info-line {
		padding-right: 1em;
		white-space: nowrap;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		text-align: right;
		-webkit-align-self: center;
		-ms-flex-item-align: center;
		align-self: center;
		display: block;
	}

	.segment .full-width {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
	}

	.segment.primary {
		background: #e6e6e6;
		font-size: 80%;
		margin-left: -.75rem;
		padding-left: .75rem;
		height: auto;
		line-height: 2.5;
		color: #999;
	}

	.segment.multi-line {
		padding-top: .75rem;
		padding-bottom: .75rem;
		height: auto;
		line-height: 1.25;
	}

	.segment.multi-line .info-line {
		white-space: inherit;
	}


	section.full-height {
		-webkit-box-direction: normal;
		-webkit-box-orient: vertical;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		-moz-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		-webkit-flex-wrap: nowrap;
		-moz-flex-wrap: nowrap;
		-ms-flex-wrap: none;
		flex-wrap: nowrap;
		-webkit-box-align: stretch;
		-ms-flex-align: stretch;
		-webkit-align-items: stretch;
		-moz-align-items: stretch;
		-moz-box-align: stretch;
		align-items: stretch;
		/* 防止 sass 优化后造成问题 */
		-moz-box-orient: vertical !important;
		-moz-box-direction: normal !important;
		flex-direction: column !important;
		height: 100%;
		overflow: auto;
		background: #f7f7f7;
		color: #1a1a1a;
		padding-bottom: 2.5rem;
	}

	section.full-height:after {
		content: '';
		position: fixed;
		top: 0;
	}

	/* ====================================================== */
	/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */

	/* Document
   ========================================================================== */

	/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

	html {
		line-height: 1.15;
		/* 1 */
		-webkit-text-size-adjust: 100%;
		/* 2 */
	}

	/* Sections
   ========================================================================== */

	/**
 * Remove the margin in all browsers.
 */

	body {
		margin: 0;
	}

	/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

	h1 {
		font-size: 2em;
		margin: 0.67em 0;
	}

	/* Grouping content
   ========================================================================== */

	/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

	hr {
		-webkit-box-sizing: content-box;
		-moz-box-sizing: content-box;
		box-sizing: content-box;
		/* 1 */
		height: 0;
		/* 1 */
		overflow: visible;
		/* 2 */
	}

	/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

	pre {
		font-family: monospace, monospace;
		/* 1 */
		font-size: 1em;
		/* 2 */
	}

	/* Text-level semantics
   ========================================================================== */

	/**
 * Remove the gray background on active links in IE 10.
 */

	a {
		background-color: transparent;
	}

	/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

	abbr[title] {
		border-bottom: none;
		/* 1 */
		text-decoration: underline;
		/* 2 */
		-webkit-text-decoration: underline dotted;
		-moz-text-decoration: underline dotted;
		text-decoration: underline dotted;
		/* 2 */
	}

	/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

	b,
	strong {
		font-weight: bolder;
	}

	/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

	code,
	kbd,
	samp {
		font-family: monospace, monospace;
		/* 1 */
		font-size: 1em;
		/* 2 */
	}

	/**
 * Add the correct font size in all browsers.
 */

	small {
		font-size: 80%;
	}

	/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/* Embedded content
   ========================================================================== */

	/**
 * Remove the border on images inside links in IE 10.
 */

	img {
		border-style: none;
	}

	/* Forms
   ========================================================================== */

	/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		/* 1 */
		font-size: 100%;
		/* 1 */
		line-height: 1.15;
		/* 1 */
		margin: 0;
		/* 2 */
	}

	/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

	button,
	input {
		/* 1 */
		overflow: visible;
	}

	/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

	button,
	select {
		/* 1 */
		text-transform: none;
	}

	/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	/**
 * Remove the inner border and padding in Firefox.
 */

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}

	/**
 * Restore the focus styles unset by the previous rule.
 */

	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
		outline: 1px dotted ButtonText;
	}

	/**
 * Correct the padding in Firefox.
 */

	fieldset {
		padding: 0.35em 0.75em 0.625em;
	}

	/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

	legend {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		/* 1 */
		color: inherit;
		/* 2 */
		display: table;
		/* 1 */
		max-width: 100%;
		/* 1 */
		padding: 0;
		/* 3 */
		white-space: normal;
		/* 1 */
	}

	/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

	progress {
		vertical-align: baseline;
	}

	/**
 * Remove the default vertical scrollbar in IE 10+.
 */

	textarea {
		overflow: auto;
	}

	/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

	[type="checkbox"],
	[type="radio"] {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		/* 1 */
		padding: 0;
		/* 2 */
	}

	/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
		height: auto;
	}

	/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

	[type="search"] {
		-webkit-appearance: textfield;
		/* 1 */
		outline-offset: -2px;
		/* 2 */
	}

	/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

	::-webkit-file-upload-button {
		-webkit-appearance: button;
		/* 1 */
		font: inherit;
		/* 2 */
	}

	/* Interactive
   ========================================================================== */

	/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

	details {
		display: block;
	}

	/*
 * Add the correct display in all browsers.
 */

	summary {
		display: list-item;
	}

	/* Misc
   ========================================================================== */

	/**
 * Add the correct display in IE 10+.
 */

	template {
		display: none;
	}

	/**
 * Add the correct display in IE 10.
 */

	[hidden] {
		display: none;
	}
</style>
