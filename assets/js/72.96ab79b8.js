(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{478:function(_,v,t){"use strict";t.r(v);var s=t(1),a=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"tcp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp"}},[_._v("#")]),_._v(" TCP")]),_._v(" "),v("h2",{attrs:{id:"tcp-传输控制协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-传输控制协议"}},[_._v("#")]),_._v(" TCP 传输控制协议")]),_._v(" "),v("p",[_._v("TCP报文段 = 首部 + 数据\n首部 = 20字节 + 可选 （4n字节）\n因此最小TCP报文段为20字节")]),_._v(" "),v("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151040.png"}}),_._v(" "),v("h2",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[_._v("#")]),_._v(" 特点")]),_._v(" "),v("p",[_._v("1、TCP是"),v("strong",[_._v("面向连接")]),_._v("的传输层协议，（发送数据之前要建立连接，传输完毕后释放连接）\n2、提供"),v("strong",[_._v("可靠的交付")]),_._v("服务（无差错、不丢失、不重复、按序到达）\n3、连接是"),v("strong",[_._v("点对点")]),_._v("的，（只能一对一）\n4、"),v("strong",[_._v("面向字节流")])]),_._v(" "),v("p",[_._v("​\t消息是「没有报文边界」概念的，可以将大块的数据分割成报文段进行传输")]),_._v(" "),v("p",[_._v("​\tTCP有一个缓冲，当应用程序传送的数据块太长，TCP就可以把它划分短一些再传送。如果应用程序一次只发送一个字节，TCP也可以等待积累有足够多的字节后再构成报文段发送出去。")]),_._v(" "),v("p",[_._v("​\t当「前⼀个」消息没有收到的时候，即使它先收到了后⾯的字节，那么也不能扔给应⽤层去处理，同时对「重复」的报⽂会⾃动丢弃。")]),_._v(" "),v("p",[_._v("5、提供"),v("strong",[_._v("全双工通信")]),_._v("，（通信双方在任何时候都能发送数据）")]),_._v(" "),v("h2",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[_._v("#")]),_._v(" 应用场景")]),_._v(" "),v("p",[_._v("要求数据可靠的（文件传输、邮件传输、远程登录）")]),_._v(" "),v("h2",{attrs:{id:"tcp三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[_._v("#")]),_._v(" TCP三次握手")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("浏览器：你好服务器，我是浏览器A。\n服务器：你好浏览器A，我是服务器B。\n浏览器：服务器B 你好。\n")])])]),v("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151502.png"}}),_._v(" "),v("h3",{attrs:{id:"三次握手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手过程"}},[_._v("#")]),_._v(" 三次握手过程")]),_._v(" "),v("p",[_._v("("),v("strong",[_._v("初始状态")]),_._v(")\t一开始，客户端和服务端都处于  "),v("code",[_._v("CLOSED")]),_._v("  状态。")]),_._v(" "),v("p",[_._v("("),v("strong",[_._v("第一次握手")]),_._v(")\t先是服务端主动监听某个端口，处于  "),v("code",[_._v("LISTEN")]),_._v(" 状态客户端会随机初始化序号（"),v("code",[_._v("client_isn")]),_._v("），将此序号置于TCP首部的「序号」字段中，同时把  "),v("code",[_._v("SYN")]),_._v("  标志位置为"),v("code",[_._v("1")]),_._v("，表示  "),v("code",[_._v("SYN")]),_._v("  报文。接着把第一个SYN报文发送给服务端，表示向服务端发起连接，该报文不包含应用层数据，之后客户端处于  "),v("code",[_._v("SYN-SENT")]),_._v("  状态。")]),_._v(" "),v("p",[_._v("("),v("strong",[v("u",[_._v("第二次握手")])]),_._v(")\t服务端收到客户端的  "),v("code",[_._v("SYN")]),_._v("  报文后，首先服务端也随机初始化自己的序号  ("),v("code",[_._v("server_isn")]),_._v("），将此序号填入TCP首部的「序号」字段中，其次把TCP首部的「确认应答号」字段填入"),v("code",[_._v("client_isn＋1")]),_._v("，接着把  "),v("code",[_._v("SYN")]),_._v("和 "),v("code",[_._v("ACK")]),_._v("  标志位置为"),v("code",[_._v("1")]),_._v("。最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于  "),v("code",[_._v("SYN-RCVD")]),_._v("（已接收）状态。")]),_._v(" "),v("p",[_._v("("),v("strong",[_._v("第三次握手")]),_._v(")\t客户端收到服务端报文后，还要向服务端回应最后一个应答报文，首先该应答报文TCP首部  "),v("code",[_._v("ACK")]),_._v("  标志位 置为"),v("code",[_._v("1")]),_._v("，其次「确认应答号」字段填入"),v("code",[_._v("server_isn 1")]),_._v("，最后把报文发送给服务端，这次报文可以携带客户到服务器的数据，之后客户端处于"),v("code",[_._v("ESTABLISHED")]),_._v("状态。 服务器收到客户端的应答报文后，也进入"),v("code",[_._v("ESTABLISHED")]),_._v("(已建立)状态。")]),_._v(" "),v("p",[_._v("("),v("strong",[_._v("成功建立连接")]),_._v(")一旦完成三次握手，双方都处于"),v("code",[_._v("ESTABLISHED")]),_._v("状态，此时连接就已建立完成，客户端和服务端就可以相互发送数据了。")]),_._v(" "),v("h2",{attrs:{id:"为什么三次握手-不是两次"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么三次握手-不是两次"}},[_._v("#")]),_._v(" 为什么三次握手，不是两次？")]),_._v(" "),v("ol",[v("li",[_._v("三次握手才可以阻止重复历史连接的初始化，也就是"),v("strong",[_._v("脏连接")]),_._v("（主要原因）")]),_._v(" "),v("li",[_._v("三次握手才可以同步双方的初始序列号")]),_._v(" "),v("li",[_._v("三次握手才可以避免资源浪费")])]),_._v(" "),v("p",[v("strong",[_._v("1.脏连接")])]),_._v(" "),v("p",[_._v("客户端连续发送多次SYN建立连接的报文，在网络拥堵情况下：")]),_._v(" "),v("p",[_._v("​\t一个「旧 SYN报文』比「最新的 SYN」报文早到达了服务端;")]),_._v(" "),v("p",[_._v("​\t那么此时服务端就会回一个SYN ＋ ACK  报文给客户端；")]),_._v(" "),v("p",[_._v("​\t客户端收到后可以根据自身的上下文，判断这是一个历史连接（序列号过期或超时），那么客户端就会发送  RST  报文给服务端，表示中止这一次连接。")]),_._v(" "),v("p",[_._v("如果是两次握手连接，就不能判断当前连接是否是历史连接，三次握手则可以在客户端（发送方）准备发送第三次报文时，客户端因有足够的上下文来判断当前连接是否是历史连接：")]),_._v(" "),v("p",[_._v("​\t如果是历史连接（序列号过期或超时），则第三次握手发送的报文是  RST  报文，以此中止历史连接；")]),_._v(" "),v("p",[_._v("​\t如果不是历史连接，则第三次发送的报文是  ACK  报文，通信双方就会成功建立连接；")]),_._v(" "),v("p",[_._v("所以，TCP使用三次握手建立连接的最主要原因是防止历史连接初始化了连接。")]),_._v(" "),v("p",[v("strong",[_._v("2、同步序列号")])]),_._v(" "),v("p",[_._v("若是两次握手的话，服务端发送的序列号得不到确认（客户端可以接收到序列号，但是没有确认收到的回应发送给服务器）")]),_._v(" "),v("p",[v("strong",[_._v("3、避免资源浪费")])]),_._v(" "),v("p",[_._v("如果只有「两次握手」，当客户端的  SYN  请求连接在网络中阻塞，客户端没有接收到  ACK  报文，就会重新发送 SYN，")]),_._v(" "),v("p",[_._v("由于没有第三次握手，服务器不清楚客户端是否收到了自己发送的建立连接的  ACK  确认信号，所以每收到一个SYN  就只能先主动建立一个连接，")]),_._v(" "),v("p",[_._v("这会造成什么情况呢？")]),_._v(" "),v("p",[_._v("如果客户端的  SYN  阻塞了，重复发送多次SYN报文，那么服务器在收到请求后就会建立多个亢余的无效链接，造成不必要的资源浪费。")])])}),[],!1,null,null,null);v.default=a.exports}}]);