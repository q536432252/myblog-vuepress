(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{416:function(v,_,a){"use strict";a.r(_);var s=a(1),p=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"map"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[v._v("#")]),v._v(" Map")]),v._v(" "),_("h2",{attrs:{id:"map-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#map-2"}},[v._v("#")]),v._v(" "),_("strong",[v._v("Map")])]),v._v(" "),_("p",[_("strong",[v._v("JDK1.8Map的了解")])]),v._v(" "),_("p",[v._v("Map是java里边的一个接口，常见的实现类有HashMap、LinkedHashMap、TreeMap和ConcurrentHashMap")]),v._v(" "),_("p",[v._v("HashMap底层数据结构是数组+链表/红黑树")]),v._v(" "),_("p",[v._v("LinkedHashMap底层数据结构是数组+链表+双向链表")]),v._v(" "),_("p",[v._v("TreeMap底层数据结构是红黑树")]),v._v(" "),_("p",[v._v("ConcurrentHashMap底层数据结构是数组+链表/红黑树")]),v._v(" "),_("p",[v._v("-------------------------------------------------")]),v._v(" "),_("h2",{attrs:{id:"hashmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[v._v("#")]),v._v(" "),_("strong",[v._v("HashMap")])]),v._v(" "),_("p",[_("strong",[v._v("创建new（HashMap有几个构造方法，最主要的是")]),v._v(" "),_("strong",[v._v("指定初始大小")]),v._v(" "),_("strong",[v._v("和")]),v._v(" "),_("strong",[v._v("负载因子大小）")])]),v._v(" "),_("p",[v._v("初始大小")]),v._v(" "),_("p",[v._v("如果我们不指定hashmap的大小，默认HashMap的大小为16，负载因子的大小为0.75")]),v._v(" "),_("p",[v._v("HashMap的大小只能是2次幂")]),v._v(" "),_("p",[v._v("假设传一个10进去，实际上最终HashMap大小为16，传7进去，HashMap最终大小为8，（即1.2.4.8.16.……）可以通过tableSizeFor看到")]),v._v(" "),_("p",[_("strong",[v._v("为什么HashMap大小是2次幂？")])]),v._v(" "),_("p",[v._v("我们把元素添加进HashMap的时候，需要算出这个元素在数组的位置（也就是Hash)，")]),v._v(" "),_("p",[v._v("在HashMap里面用的是位运算来代替取模（位运算效率要高于取余的运算）,大小为2次幂，才能合理用位运算替代取模")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151744.png"}}),v._v(" "),_("p",[_("strong",[v._v("负载因子")])]),v._v(" "),_("p",[v._v("负载因子的大小决定着哈希表的扩容和哈希冲突")]),v._v(" "),_("p",[v._v("比如默认HashMap大小为16，负载因子0.75，所以一旦超过12个元素，哈希表就需要扩容")]),v._v(" "),_("p",[_("strong",[v._v("扩容")])]),v._v(" "),_("p",[v._v("每次put元素进去的时候，都会检查HashMap大小有没有超过这个阈值，如果超过，就需要扩容")]),v._v(" "),_("p",[v._v("因为HashMap大小是2次幂，所以扩容的时候是扩容原来的2倍")]),v._v(" "),_("p",[v._v("扩容会调用resize()方法 ， 会遍历一遍所有的元素，要重新分配一次下标值， 尽量避免")]),v._v(" "),_("p",[v._v("不过不需要重新计算hash值，会多一个bit位，要么就是分配在"),_("strong",[v._v("原来的位置，"),_("strong",[v._v("要么就是")]),v._v("原位置+原来的容量位置")])]),v._v(" "),_("p",[_("strong",[v._v("因为扩容是耗时的，那么能不能把负载因子调高，比如1的时候才扩容？")])]),v._v(" "),_("p",[v._v("可以是可以，但不推荐，因为负载因子高了，哈系冲突的概率也会增加，会导致查找速度变慢，也会增加耗时")]),v._v(" "),_("p",[_("strong",[v._v("传递的key怎么算哈希值？")])]),v._v(" "),_("p",[_("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151758.png"}}),v._v("这样做的好处增加随机性，减少哈希碰撞的可能性")]),v._v(" "),_("p",[_("strong",[v._v("put()")])]),v._v(" "),_("p",[v._v("1、先通过 hash 值计算出 下标 ；")]),v._v(" "),_("p",[v._v("2、如果没有碰撞冲突，则直接插入；")]),v._v(" "),_("p",[v._v("3、如果出现碰撞冲突了，则需要处理冲突：")]),v._v(" "),_("p",[v._v("a 如果该桶使用红黑树处理冲突，则调用红黑树的方法插入数据；")]),v._v(" "),_("p",[v._v("b 否则采用传统的链式方法插入。如果链的长度达到临界值，则把链转变为红黑树；")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("数组大小大于64且链表的大小大于8的时候 将链表改为红黑树\n")])])]),_("p",[v._v("4、如果桶中存在重复的键，则为该键替换新值 value；")]),v._v(" "),_("p",[v._v("5、如果 size 大于阈值 容量*扩容因子 ，则进行扩容resize()；")]),v._v(" "),_("p",[_("strong",[v._v("hash值 & (数组length - 1) 有什么好处？")])]),v._v(" "),_("p",[v._v("最终目的让碰撞的几率降低，分布均匀")]),v._v(" "),_("p",[v._v("因为数组长度是2次幂，length - 1 之后 二进制表示都是除了第一位，后面都是1，进行位运算的时候")]),v._v(" "),_("p",[_("strong",[v._v("get()")])]),v._v(" "),_("p",[v._v("get的时候，计算出该key所在的index，然后判断是否有哈希冲突")]),v._v(" "),_("p",[v._v("假如没有hash冲突就直接返回，")]),v._v(" "),_("p",[v._v("如果有冲突就用equals判断 ，相等则返回")]),v._v(" "),_("p",[_("strong",[v._v("HashMap怎么判断一个元素是否相同？")])]),v._v(" "),_("p",[v._v("先比较下标值，随后用==运算符和equals()来判断元素是否相同")]),v._v(" "),_("p",[v._v("（hash相同说明，哈希冲突了，还得用==或者equals()来判断是否相同）")]),v._v(" "),_("p",[_("strong",[v._v("什么时候转换为红黑树？")])]),v._v(" "),_("p",[v._v("数组大小大于64且链表的大小大于8的时候 将链表改为红黑树，当红黑树大小为6，退化为链表")]),v._v(" "),_("p",[v._v("链表和红黑树的转换主要是 对 查询和插入性能的考虑")]),v._v(" "),_("p",[v._v("链表插入O(1) 查询O(N) ； 红黑树查询插入都是O(logN)；")]),v._v(" "),_("p",[_("strong",[v._v("解决hashQ冲突   (哈希冲突)  有以下四种方法：")])]),v._v(" "),_("ul",[_("li",[v._v("1.链地址法   hashmap")]),v._v(" "),_("li",[v._v("2.再哈希法  hash冲突，用第二个哈希算法")]),v._v(" "),_("li",[v._v("3.建立公共溢出区  将哈希表分为基本表和溢出表两部分，凡是和基本表发生冲突的元素，一律填入溢出表。")]),v._v(" "),_("li",[v._v("4.开放定址法  冲突，京  就找另一个不冲突的下标\n三种方法1、找下一个下标。2、左右跳跃式探测。3、随机数")])]),v._v(" "),_("p",[v._v("-------------------------------------------------")]),v._v(" "),_("p",[v._v("Hashtable和HashMap")]),v._v(" "),_("p",[v._v("初始容量不同：HashMap的初始容量为16，Hashtable为11，负载因子都是0.75")]),v._v(" "),_("p",[v._v("扩容机制不同：HashMap是翻2倍，Hashtable是翻两倍+1")]),v._v(" "),_("p",[v._v("Hashtable是"),_("strong",[v._v("线程安全")]),v._v("的，不允许为null")]),v._v(" "),_("p",[v._v("HashMap是非线程安全,允许为null,但 null 作为键只能有一个，null 作为值可以有多个")]),v._v(" "),_("p",[v._v("--------------------------------------.-----------")]),v._v(" "),_("h2",{attrs:{id:"linkedhashmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#linkedhashmap"}},[v._v("#")]),v._v(" "),_("strong",[v._v("LinkedHashMap")])]),v._v(" "),_("p",[v._v("底层是数组+链表+双向链表，继承了HashMap，在HashMap的基础上加了一个双向链表")]),v._v(" "),_("p",[v._v("有了双向链表，可以保证插入有序")]),v._v(" "),_("p",[v._v("-------------------------------------------------")]),v._v(" "),_("h2",{attrs:{id:"treemap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#treemap"}},[v._v("#")]),v._v(" "),_("strong",[v._v("TreeMap")])]),v._v(" "),_("p",[v._v("底层是红黑树，key不能为null（为null就不能排序了）")]),v._v(" "),_("p",[v._v("会对key进行排序，通过Comparator来进行比较")]),v._v(" "),_("p",[_("strong",[v._v("------------------------------------------")])]),v._v(" "),_("p",[_("strong",[v._v("HashMap还是TreeMap")])]),v._v(" "),_("p",[v._v("如果需要排序就用TreeMap")]),v._v(" "),_("p",[v._v("-------------------------------------")]),v._v(" "),_("p",[_("strong",[v._v("说一下 HashSet 的实现原理？")])]),v._v(" "),_("p",[v._v("HashSet底层由HashMap实现")]),v._v(" "),_("p",[v._v("HashSet的值存放于HashMap的key上")]),v._v(" "),_("p",[v._v("HashMap的value统一为PRESENT")]),v._v(" "),_("p",[_("strong",[v._v("为什么HashMap不安全？")]),_("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151814.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("在JDK1.8中，在并发执行put操作时会发生数据覆盖的情况。")])]),v._v(" "),_("p",[v._v("两个线程同时put操作的时候，")]),v._v(" "),_("p",[v._v("A线程执行完第6行，判断了当前索引是空的，时间片耗尽被挂起")]),v._v(" "),_("p",[v._v("B线程计算完索引是同一个位置，发现也是空的，就把数据put进来")]),v._v(" "),_("p",[v._v("这时候A线程获得时间片，由于之前已经判断过hash碰撞的问题，就直接插入数据，就会把B线程插入的数据覆盖")]),v._v(" "),_("p",[v._v("-------------------------------------------------")]),v._v(" "),_("p",[v._v("解决并发问题可以用HashTable或者Collections.synchronizedMap，但是效率不高，")]),v._v(" "),_("p",[v._v("所以要用concurrentHashMap")]),v._v(" "),_("h2",{attrs:{id:"线程安全concurrenthashmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程安全concurrenthashmap"}},[v._v("#")]),v._v(" "),_("strong",[v._v("线程安全ConcurrentHashMap")])]),v._v(" "),_("p",[v._v("HashMap不是线程安全的，Map的线程安全一般使用ConcurrentHashMap")]),v._v(" "),_("p",[v._v("线程安全还有Hashtable和用Collections工具类来变成一个线程安全的Map")]),v._v(" "),_("p",[v._v("但无论是Hashtable还是Collections包装出来的都比较低效（因为是直接在外层使用了synchronize）")]),v._v(" "),_("p",[v._v("所以需要线程安全的时候都是使用ConcurrentHashMap")]),v._v(" "),_("p",[v._v("https://blog.csdn.net/singwhatiwanna/article/details/104586114/")]),v._v(" "),_("p",[_("strong",[v._v("ConcurrentHashMap的底层数据结构是数组+链表/红黑树。")])]),v._v(" "),_("p",[v._v("1.7 ： 对数组进行了分段（Segment），每个锁只锁其中一段，多线程访问容器的时候，就不会存在竞争，提高并发访问率")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151827.png"}}),v._v(" "),_("p",[v._v("1.8 ：")]),v._v(" "),_("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151841.png"}}),v._v(" "),_("p",[v._v("取消了Segment分段锁")]),v._v(" "),_("p",[v._v("通过在部分加锁synchronized和CAS算法来实现同步，synchronized 只锁定当前链表或红黑二叉树的"),_("strong",[v._v("首节点")]),v._v("，这样只要 hash 不冲突，就不会产生并发，效率又提升 N 倍。")]),v._v(" "),_("p",[v._v("get时候不加锁,Node都用了volatile修饰")]),v._v(" "),_("p",[v._v("扩容时候会给每个线程分配对应的区间，为了防止putVal导致数据不一样，会给线程所负责的区间加锁")]),v._v(" "),_("p",[_("strong",[v._v("JDK1.7和1.8 HashMap和ConcurrentHashMap区别")])]),v._v(" "),_("p",[v._v("HashMap 1.7 -> 1.8")]),v._v(" "),_("p",[v._v("1.7的HashMap在扩容时候是头插法，1.8是尾插法，")]),v._v(" "),_("p",[v._v("1.7HashMap还没有红黑树")]),v._v(" "),_("p",[v._v("HashMap")]),v._v(" "),_("p",[v._v("在1.7版本中，并发场景下 有以下问题：")]),v._v(" "),_("p",[v._v("数据重复；")]),v._v(" "),_("p",[v._v("死循环")]),v._v(" "),_("p",[v._v("数据丢失")]),v._v(" "),_("p",[v._v("1.8版本的HashMap解决了两大问题：")]),v._v(" "),_("p",[v._v("死循环的问题")]),v._v(" "),_("p",[v._v("查询效率低的问题（通过红黑树）")]),v._v(" "),_("p",[v._v("ConcurrentHashMap 1.7 ->1.8")]),v._v(" "),_("p",[v._v("**锁方面：**分段锁（Segment） 升级为 CAS + synchronized实现")]),v._v(" "),_("p",[v._v("**问：**synchronized性能不好，为啥1.8还要多了synchronized？")]),v._v(" "),_("p",[v._v("**答：**synchronized之前一直是重量级的锁，性能很差，但是到了jdk6的时候，对synchronized进行了优化。")]),v._v(" "),_("p",[v._v("synchronized获取锁 是以锁升级的方式，先使用"),_("strong",[v._v("偏向锁")]),v._v("优先同一线程，然后再次获取锁，如果失败，就升级为"),_("strong",[v._v("CAS轻量级锁")]),v._v("，如果失败就会"),_("strong",[v._v("短暂自旋")]),v._v("，防止线程被系统挂起。以上都失败就升级为"),_("strong",[v._v("重量级锁")]),v._v("。是一步一步升级上去的，最初也是通过很多轻量级的方式锁定")]),v._v(" "),_("p",[v._v("（"),_("strong",[v._v("偏向锁->CAS轻量级锁->自旋->重量级锁")]),v._v("）")]),v._v(" "),_("p",[v._v("**数据结构方面：**将Segment变成Node，减小了锁的粒度，使每个Node独立，原来二并发度16变成了每个Node都独立，提高了并发度。")]),v._v(" "),_("p",[v._v("**hash冲突：**1.7采用链表存储，1.8先使用链表存储，满足条件就用红黑树存储")]),v._v(" "),_("p",[v._v("**查询复杂度：**1.7链表O（N） 1.8转化为红黑树后O（logN）")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151858.png"}}),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("红黑树特性")])]),v._v(" "),_("p",[v._v("性质1：每个节点要么是红色，要么是黑色。")]),v._v(" "),_("p",[v._v("性质2：根节点永远是黑色的。")]),v._v(" "),_("p",[v._v("性质3：所有的叶节点都是空节点（即 null），并且是黑色的。")]),v._v(" "),_("p",[v._v("性质4：每个红色节点的两个子节点都是黑色。（从每个叶子到根的路径上不会有两个连续的红色节点）")]),v._v(" "),_("p",[v._v("性质5：从任一节点到其子树中每个叶子节点的路径都包含相同数量的黑色节点。")])])}),[],!1,null,null,null);_.default=p.exports}}]);