(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{424:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"bean生命周期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期"}},[e._v("#")]),e._v(" Bean生命周期")]),e._v(" "),t("h2",{attrs:{id:"bean生命周期-创建到销毁的过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期-创建到销毁的过程"}},[e._v("#")]),e._v(" "),t("strong",[e._v("bean生命周期（创建到销毁的过程）")])]),e._v(" "),t("p",[e._v("可以先讲一下从xml或者注解开始的整个流程")]),e._v(" "),t("p",[e._v("1、被xml或者注解标记的类，会先通过BeanDefinitionReader生成一个BeanDefinition对象，然后通过BeanFactoryPostProcessor增强类进行拓展，这里面有一个"),t("strong",[e._v("PropertySources")]),e._v("的类可以将${jdbc.username}替换成相应的代码,还有"),t("strong",[e._v("Configuration")]),e._v("类可以把@Configuration ，还有 扫描包的代码进行处理")]),e._v(" "),t("p",[e._v("2、就交给beanFactory进行一个对象的创建，是通过反射来创建对象，调用的是createBeanInstance()方法 ，通过getConstruction，newInstance来创建对象，进行一个实例化。")]),e._v(" "),t("p",[e._v("3、实例化完成后属性都是默认值，这时候就给bean进行一个赋值，bean的属性有两种类型，第一种是设置我们自定义的属性name、age这种，第二种设置是spring容器的属性.\n先讲一下第一种就是把xml的property的属性或者注解里面的@Autowired、@Resource。这种自定义的属性，还有"),t("strong",[e._v("循环依赖")]),e._v("的问题，这个后面再讲。\n然后第二种给bean赋值spring容器的属性，像applicationContext、beanFacotry这种属性会调用invokeAwareMethods方法来进行赋值")]),e._v(" "),t("p",[e._v("4、调用BeanPostProcessor 前置增强类, 如")]),e._v(" "),t("p",[e._v("5、看有没写init-methods(不一定有),如果实现了会调用AfterPropertiesSet()方法最后一次手动设置bean对象属性")]),e._v(" "),t("p",[e._v("6.调用BeanPostProcessor 后置增强类，AOP就是在这一步执行的AOP实现的是AbstractAutoProxyCreate")]),e._v(" "),t("p",[e._v("7.就有了一个完整对象， 通过getBean()的方法对这个bean进行获取和使用\n8.容器关闭的时候，会销毁对象，首先会判断有没有实现DispoableBean接口，然后调用destroyMethod方法")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230516200247.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);