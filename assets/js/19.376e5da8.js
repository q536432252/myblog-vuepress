(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{427:function(t,s,n){"use strict";n.r(s);var r=n(1),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"springioc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#springioc"}},[t._v("#")]),t._v(" SpringIOC")]),t._v(" "),s("h2",{attrs:{id:"对springioc的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对springioc的理解"}},[t._v("#")]),t._v(" "),s("strong",[t._v("对SpringIOC的理解")])]),t._v(" "),s("p",[t._v("IOC：控制反转，一种设计思想，把创建对象的过程交给容器来帮我们实现")]),t._v(" "),s("p",[t._v("DI：依赖注入，通过xml或者注解(@Autowired,@Resource) 来调用populateBean()的方法 给对象赋值")]),t._v(" "),s("p",[t._v("具体实现： 有一个spring容器，是map的形式来存储对象，用了3个map来存，也就是三级缓存。")]),t._v(" "),s("ul",[s("li",[t._v("第一级（singletonObjects）存放完整对象、")]),t._v(" "),s("li",[t._v("第二级(earlySinletonObject)用来存储半成品对象、"),s("strong",[t._v("（循环依赖两级就能解决）")])]),t._v(" "),s("li",[t._v("第三级(singletonFactory)用来存一个lambda表达式。"),s("strong",[t._v("(解决AOP代理对象的问题)")])])]),t._v(" "),s("p",[t._v("整个bean的"),s("strong",[t._v("生命周期")]),t._v("，创建、使用、销毁，都是容器来帮我们控制的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230516200247.png",alt:""}})])])}),[],!1,null,null,null);s.default=a.exports}}]);