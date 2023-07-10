(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{417:function(t,a,v){"use strict";v.r(a);var r=v(1),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java内存区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java内存区域"}},[t._v("#")]),t._v(" JAVA内存区域")]),t._v(" "),a("p",[t._v("如图所示")]),t._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151911.png"}}),t._v(" "),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151936.png"}}),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"程序计数器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器"}},[t._v("#")]),t._v(" 程序计数器")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152040.png",alt:""}})]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("​\t表示当前要运行哪一条字节码指令")]),t._v(" "),a("p",[t._v("​\tJava虚拟机中，多线程是靠着轮换或者分配时间实现的")]),t._v(" "),a("p",[t._v("​\t每一个线程每次只会执行一条指令， 为了保证切换线程后还能恢复到正确的执行位置，需要一个程序计数器记录当前执行位置，")]),t._v(" "),a("p",[t._v("​\t每条线程都有一个程序计数器，互不干扰。")]),t._v(" "),a("p",[t._v("​\t程序计数器私有主要是为了线程切换后能"),a("strong",[t._v("恢复到正确的执行位置")])]),t._v(" "),a("p",[t._v("我们把这一类线程之间互不干扰的内存区域 称之为“"),a("strong",[t._v("线程私有")]),t._v("”的内存")]),t._v(" "),a("h2",{attrs:{id:"java虚拟机栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java虚拟机栈"}},[t._v("#")]),t._v(" Java虚拟机栈")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("1、线程私有，生命周期和线程相同")]),t._v(" "),a("p",[t._v("2、描述的是Java方法执行的线程内存模型： 用来存放栈帧的")]),t._v(" "),a("p",[t._v("每个方法被执行的时候，Java虚拟机都会创建一个栈帧（Stack Frame）")]),t._v(" "),a("p",[t._v("栈帧用于存储局部变量表、操作数栈、动态连接、方法出口等信息。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("局部变量表存储了\n\n  **编译期可知的各种数据类型**（boolean、byte、char、short、int、float、long、double）、\n\n  对象引用（reference 类型，它不同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或其他与此对象相关的位置）\n")])])]),a("p",[t._v("每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/code-duck/p/13559193.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/code-duck/p/13559193.html"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("3、java虚拟机栈的两种异常状况：（栈溢出 内存溢出）")]),t._v(" "),a("p",[t._v("StackOverflowError: 如果线程请求的栈深度大于虚拟机所允许的深度，会发生StackOverflowError，")]),t._v(" "),a("p",[t._v("OutOfMemoryError:若虚拟机的栈容量支持动态扩展，栈扩展时无法申请到足够的内存抛出OutOfMemoryError情况")]),t._v(" "),a("p",[t._v("HotSpot虚拟机的栈容量是不可以动态扩展的，所以不会发生OutOfMemoryError（OOM）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152102.png",alt:""}})]),t._v(" "),a("p",[t._v("==虚拟机栈和本地方法栈为什么是私有的?==")]),t._v(" "),a("p",[t._v("为了==保证线程中的局部变量不被别的线程访问到==，虚拟机栈和本地方法栈是线程私有的")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/28654272",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/28654272"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"本地方法栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地方法栈"}},[t._v("#")]),t._v(" 本地方法栈")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152118.png",alt:""}})]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("为被native修饰的方法提供服务，与虚拟机栈类似")]),t._v(" "),a("h2",{attrs:{id:"java堆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java堆"}},[t._v("#")]),t._v(" Java堆")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/28654272",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/28654272"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("1、Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。")]),t._v(" "),a("p",[t._v("2、Java堆是虚拟机所管理的内存中最大的一块.")]),t._v(" "),a("p",[t._v("3、堆的唯一目的，"),a("strong",[t._v("存放对象实例")]),t._v(" ，所有对象实例以及数组都在堆上分配内存，也是垃圾回收器（GC）主要管理的内存区域")]),t._v(" "),a("p",[t._v("Java 的自动内存管理主要是针对对象内存的回收和对象内存的分配")]),t._v(" "),a("p",[t._v("从垃圾回收的角度，由于现在收集器基本都采用分代垃圾收集算法，所以 Java 堆还可以细分为：新生代和老年代；再细致一点有：Eden 空间、From Survivor、To Survivor 空间等。"),a("strong",[t._v("进一步划分的目的是更好地回收内存，或者更快地分配内存。")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152146.png"}}),t._v(" "),a("p",[t._v("上图所示的 Eden 区、两个 Survivor区都属于新生代（为了区分，这两个 Survivor区域按照顺序被命名为 from 和 to），中间一层属于老年代。")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152244.png"}}),t._v(" "),a("p",[t._v("4、当堆内存不够用时，会抛出OutOfMemoryError(OOM)")]),t._v(" "),a("p",[t._v("成员变量（非静态） 在堆")]),t._v(" "),a("p",[t._v("成员变量（静态）在方法区")]),t._v(" "),a("h2",{attrs:{id:"方法区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法区"}},[t._v("#")]),t._v(" 方法区")]),t._v(" "),a("p",[t._v("总结：")]),t._v(" "),a("p",[t._v("1、线程共享的区域")]),t._v(" "),a("p",[t._v("2、用于储存被虚拟机加载的类的一些信息：类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据")]),t._v(" "),a("p",[t._v("3、JDK1.8采用元空间来实现")]),t._v(" "),a("p",[t._v("为什么要元空间？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515152302.png",alt:""}})]),t._v(" "),a("p",[t._v("4、垃圾回收主要针对常量池的回收和类型卸载，但是类型卸载比较苛刻")]),t._v(" "),a("p",[t._v("4.1类型卸载的条件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("该类所有实例已经被回收\n\n加载该类的类加载器已经被回收（Java自带的三个类加载器不会被回收，那么只有我们自己创建的类加载器加载的类型能被回收）\n\n该类对应的java.lang.Class对象没有任何地方被引用，无法在任何地方通过反射访问该类的方法\n")])])]),a("p",[t._v("5、当方法区无法满足内存分配需求时，将会抛出OutOfMemoryError")]),t._v(" "),a("p",[t._v("成员变量（非静态） 在堆")]),t._v(" "),a("p",[t._v("成员变量（静态）在方法区")]),t._v(" "),a("hr")])}),[],!1,null,null,null);a.default=_.exports}}]);