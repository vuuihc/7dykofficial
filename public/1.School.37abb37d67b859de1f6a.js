webpackJsonp([1],{15:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAARxJREFUOBFjZEADpqam2v///08BYjeglBxU+hEjI+MuIJ5z+vTpq8haGGGc0NBQtvv37/cBNWYCxZhg4mj0P6Ah0xUVFYtWr179CyQHNgCk+d69e9uBfCc0Dbi4+5SUlDxBhjCDVHBxcU0EUuG4VGMRV/zw4YPQs2fPtjGC/Pzv379LQEW4nI1FP1joHxMTkx4TKMDI0AwyAawXRIBCmywA0gtyNiyqyDFEjlR/Y1gCMuARhijxAo+YQCmMePWoKkF6QQbMAQr/Q5UiigdKlXOYgYnhtbS0tBhQixlR2qCKgJqnnTlzZiE4EEFpGyi+jwQD9kH1MICT8rVr1/7a2NisACVPoCEmQAzPZGiGgpw9DZgP4lAyE7IiUrMzACDVaaAGRDhYAAAAAElFTkSuQmCC"},29:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),r=A(12),i=n(r),g=(A(21),function(e){function t(e){a(this,t);var A=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return A.state={offsetTops:[],curSection:0},A.moving=!1,A.handleScroll=A.handleScroll.bind(A),console.log("here"),A}return c(t,e),o(t,[{key:"componentDidMount",value:function(){console.log("mounted"),this.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,this.moving=!0,this.changeSlide(0),document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=this;this.moving||window.requestAnimationFrame(function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;e-t.beforeScrollTop>0&&t.state.curSection<t.props.children.length-1?(t.changeSlide(t.state.curSection+1),t.moving=!0):e-t.beforeScrollTop<0&&t.state.curSection>0&&(t.changeSlide(t.state.curSection-1),t.moving=!0),t.beforeScrollTop=e})}},{key:"getElementTop",value:function(e){e=document.getElementById(e.props.id);for(var t=e.offsetTop,A=e.offsetParent;null!=A;)t+=A.offsetTop,A=A.offsetParent;return t}},{key:"changeSlide",value:function(e){var t=this,A=document.getElementById(this.props.children[e].props.id);Velocity(A,"scroll",{duration:1e3,offset:-60,complete:function(){t.moving=!1,t.beforeScrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,t.setState({curSection:e})}})}},{key:"handleTab",value:function(e){this.moving=!0,this.changeSlide(e)}},{key:"render",value:function(){var e=this;return i["default"].createElement("div",{className:""},i["default"].createElement("div",{className:"carousel"},this.props.children.map(function(t,n){return i["default"].createElement("div",{key:n,className:"item"+(e.state.curSection===n?" active":""),onClick:e.handleTab.bind(e,n)},e.state.curSection===n?"":i["default"].createElement("img",{src:A(15)}))})),this.props.children)}}]),t}(r.Component));t["default"]=g},30:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAARVJREFUOBGllD0OwjAMhV+QOABzZ87AREGCnQUJIWDkVIyAqkos7CDRMnEGZmYOUIng1yT8VkCJlziO/dV17CgUySLqiHkAqFDWwLqcAJ2KHmM83FrbbVE3jcpyVcclm4nWerK/bxJUqlOM+kd3dAfNoyYU1tCoucOPq8JZfHuYDPf0MyBmorPDzxD3BcJUtcHMKrmNv/NrJg7ClTGmFJIRC6uxeTwvrSt0mZHcjrcMBJRfsSdJhczI9YkPLDDF9kHYWIKkY73lJKC87T1JOmVGsSeF4bHp7Hm0k823+WJAkSQyJm1TbA4g272sMIaxIgbEKeYAloHRlzH2BTAgIjnFHEAg4faLJLmvnXz6mhq9Rv3xsF0BHLpKKugxOMkAAAAASUVORK5CYII="},89:function(e,t,A){e.exports=A.p+"0310263fb6149a2563c660cb41740eb8.jpg"},90:function(e,t,A){e.exports=A.p+"1dd696067d0bbaf93fa8b7e5ab5da496.jpg"},91:function(e,t,A){e.exports=A.p+"e555190bdd80f68cbe06906d15a9c81a.jpg"},92:function(e,t,A){e.exports=A.p+"5124fb1ad041577c61b16e4b33957331.jpg"},186:function(e,t,A){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=A(12),l=n(a),c=A(21),o=A(29),r=n(o),i=function(){var e=[{url:"导师经验丰富.png",name:"导师经验丰富",des:"3年以上工作经历"},{url:"全面实战训练.png",name:"全面实战训练",des:"反复实战模拟、评审"},{url:"导师专业性强.png",name:"导师专业性强",des:"全部扎根行业"},{url:"团队有同理心.png",name:"团队有同理心",des:"带你实现从菜鸟到专家的蜕变"}],t=[{des:"“在听倪老师的课之前，对产品有一些了解，但对产品经理的职业发展没有什么概念，课程中讲述的产品经理的晋升路线让我清晰地认识到了其中的关联性。从而更好地规划职业发展。非常感谢倪老师。”"},{des:"“我是北邮的一名研究生，最开始接触龙云老师是听了他的一场讲座，当场便产生了很大的触动。龙云老师从小白讲到总监的路径，让我有了全面的认识。接下来便要进入实战模式，相信我的产品路可以走的更好。”"},{des:"“一个优秀的产品经理一定是对人性有比较深刻的认识，与其说倪老师讲述的是产品相关的内容，不如说是在教大家剖析人性。倪老师结合美团、滴滴等产品来解析人性，使我对产品的设计把握程度变得更加灵活、简单，产品的用户体验也提升不少。”"}];return l["default"].createElement("main",{className:"school"},l["default"].createElement(r["default"],null,l["default"].createElement("section",{className:"screen-1",id:"screen-1"},l["default"].createElement("div",{className:"title-1"},"产品经理训练营—7点学院"),l["default"].createElement("div",{className:"title-2"},"学院集中培养期望入职名企产品经理职位的学生",l["default"].createElement("br",null),"第一期80%的学员在培养后拿到了腾讯、阿里、滴滴等名企的offer"),l["default"].createElement("div",{className:"title-3"},"7点学院的特色"),l["default"].createElement("div",{className:"title-4"},">"),l["default"].createElement("div",{className:"features"},e.map(function(e,t){return l["default"].createElement("div",{className:"feature-item",key:t},l["default"].createElement("img",{src:A(220)("./"+e.url),alt:e.name}),l["default"].createElement("div",{className:"name"},l["default"].createElement("img",{src:A(30),alt:"·"}),e.name),l["default"].createElement("div",{className:"des"},e.des))}))),l["default"].createElement("section",{className:"screen-2",id:"screen-2"},l["default"].createElement("img",{className:"background",src:A(91),alt:"Bitmap.jpg"}),l["default"].createElement("div",{className:"title-1"},l["default"].createElement("div",{className:"big"},"PM学院"),l["default"].createElement("div",{className:"en"},"(Product Manager)")),l["default"].createElement("div",{className:"title-2"},"集中培养期望入职名企产品经理职位的学生")),l["default"].createElement("section",{className:"screen-3",id:"screen-3"},l["default"].createElement("img",{className:"pm",src:A(90),alt:"7点学院pm.jpg"}),l["default"].createElement("img",{className:"nm",src:A(89),alt:"7点学院nm.jpg"}),l["default"].createElement("div",{className:"title-1"},"学员评价"),l["default"].createElement("div",{className:"remarks"},t.map(function(e,t){return l["default"].createElement("div",{className:"remark-item",key:t},l["default"].createElement("img",{src:A(30),alt:"·"}),l["default"].createElement("div",{className:"des"},e.des))}))),l["default"].createElement("section",{className:"screen-4",id:"screen-4"},l["default"].createElement("img",{className:"background",src:A(92),alt:"职场.jpg"}),l["default"].createElement("div",{className:"text"},l["default"].createElement("div",{className:"title-1 title"},"面试如何准备？"),l["default"].createElement("div",{className:"title-2 title"},"产品经理需要掌握哪些技能？"),l["default"].createElement("div",{className:"title-3 title"},"如何拿到互联网公司的offer？"),l["default"].createElement("div",{className:"button"},l["default"].createElement(c.Link,{to:"/"},"立即报名"))))))};t["default"]=i},200:function(e,t,A){e.exports=A.p+"f8f69fa4094370ef888e25c81bbbf783.png"},201:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAALtJREFUKBWNUkEKwjAQnI3gHzx68KK/EH8giGA9qVdfpCcriOAPpJ+Q+gPxDx5cZ1MqhdCyewjJZHayuxNBHaqC83UL/W4gMomwagkJR6wWB2JqmMSL020AfHLup/GcLgXQz7CevwNMuZts6RSiILk9jMY7QPepaIIM8Xi++AJr9ga54d+gJ4nDCB5ek2NNl02gc08uS+KcvUGuxLHmlztz2jyo5Qpky5k1TQdpCkBzWqMyjtzKaeM5v8YPrM1A5eDb4rYAAAAASUVORK5CYII="},202:function(e,t,A){e.exports=A.p+"615088f57d16a2f1620cec8004200f75.png"},203:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAABMCAYAAAC4YxTzAAAAAXNSR0IArs4c6QAAA09JREFUeAHt1cENACAMAzFgpK7F/n8kpriHO0HkVMqembscAQIECBAgkBA4iRRCECBAgAABAl/AMHsEAgQIECAQEjDMoTJEIUCAAAEChtkPECBAgACBkIBhDpUhCgECBAgQMMx+gAABAgQIhAQMc6gMUQgQIECAgGH2AwQIECBAICRgmENliEKAAAECBAyzHyBAgAABAiEBwxwqQxQCBAgQIGCY/QABAgQIEAgJGOZQGaIQIECAAAHD7AcIECBAgEBIwDCHyhCFAAECBAgYZj9AgAABAgRCAoY5VIYoBAgQIEDAMPsBAgQIECAQEjDMoTJEIUCAAAEChtkPECBAgACBkIBhDpUhCgECBAgQMMx+gAABAgQIhAQMc6gMUQgQIECAgGH2AwQIECBAICRgmENliEKAAAECBAyzHyBAgAABAiEBwxwqQxQCBAgQIGCY/QABAgQIEAgJGOZQGaIQIECAAAHD7AcIECBAgEBIwDCHyhCFAAECBAgYZj9AgAABAgRCAoY5VIYoBAgQIEDAMPsBAgQIECAQEjDMoTJEIUCAAAEChtkPECBAgACBkIBhDpUhCgECBAgQMMx+gAABAgQIhAQMc6gMUQgQIECAgGH2AwQIECBAICRgmENliEKAAAECBAyzHyBAgAABAiEBwxwqQxQCBAgQIGCY/QABAgQIEAgJGOZQGaIQIECAAAHD7AcIECBAgEBIwDCHyhCFAAECBAgYZj9AgAABAgRCAoY5VIYoBAgQIEDAMPsBAgQIECAQEjDMoTJEIUCAAAEChtkPECBAgACBkIBhDpUhCgECBAgQMMx+gAABAgQIhAQMc6gMUQgQIECAgGH2AwQIECBAICRgmENliEKAAAECBAyzHyBAgAABAiEBwxwqQxQCBAgQIGCY/QABAgQIEAgJGOZQGaIQIECAAAHD7AcIECBAgEBIwDCHyhCFAAECBAgYZj9AgAABAgRCAoY5VIYoBAgQIEDAMPsBAgQIECAQEjDMoTJEIUCAAAEChtkPECBAgACBkIBhDpUhCgECBAgQMMx+gAABAgQIhAQMc6gMUQgQIECAgGH2AwQIECBAICRgmENliEKAAAECBAyzHyBAgAABAiEBwxwqQxQCBAgQIPAAhC8BmWRG4q8AAAAASUVORK5CYII="},204:function(e,t,A){e.exports=A.p+"89c6baad06a71140e3f824b7af276569.png"},205:function(e,t,A){e.exports=A.p+"c4a19cdd9c4f2707cdc339ccfd5ca563.png"},206:function(e,t,A){e.exports=A.p+"ff29fc3f62f32bcf820e6b7d39008725.png"},207:function(e,t,A){e.exports=A.p+"62b0463df9d3b5019f8d9baf4dfb8024.png"},208:function(e,t){e.exports="data:image/png;base64,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"},209:function(e,t,A){e.exports=A.p+"5e889231e2c0417d307fe0cbbf95e3ea.png"},220:function(e,t,A){function n(e){return A(a(e))}function a(e){return l[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var l={"./(Product Manager).png":200,"./7点学院nm.jpg":89,"./7点学院pm.jpg":90,"./Bitmap.jpg":91,"./Oval 10.png":201,"./PM学院.png":202,"./Rectangle.png":203,"./全面实战训练.png":204,"./团队有同理心.png":205,"./导师专业性强.png":206,"./导师经验丰富.png":207,"./立即报名.png":208,"./职场.jpg":92,"./集中培养期望入职名企产品经理职位的学生.png":209};n.keys=function(){return Object.keys(l)},n.resolve=a,e.exports=n,n.id=220}});