(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{477:function(v,_,t){"use strict";t.r(_);var s=t(1),p=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"udp用户数据报协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#udp用户数据报协议"}},[v._v("#")]),v._v(" "),_("strong",[v._v("UDP用户数据报协议")])]),v._v(" "),_("p",[v._v("UDP用户数据报 = 首部字段 + 数据字段")]),v._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151515.png"}}),v._v(" "),_("p",[_("strong",[v._v("首部 = 源端口 + 目的端口 + 长度 + 检验和")])]),v._v(" "),_("p",[v._v("8个字节")]),v._v(" "),_("p",[v._v("当没有数据部分的时候 UDP用户数据报最小长度为首部长度（为8字节）")]),v._v(" "),_("p",[v._v("UDP只在IP数据报上增加了一些功能，复用、分用、差错检测")]),v._v(" "),_("p",[v._v("主要特点是")]),v._v(" "),_("p",[v._v("1、无连接（发送数据时不需要建立连接）")]),v._v(" "),_("p",[v._v("2、UDP尽最大努力交付，（不保证可靠交付）")]),v._v(" "),_("p",[v._v("3、面向报文")]),v._v(" "),_("p",[v._v("在发送方的UDP ， 对应用层交下来的报文，不合并，也不拆分，加个UDP首部就发送出去了")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://lxzxz-club-myblog.oss-cn-guangzhou.aliyuncs.com/20230515151533.png",alt:""}})]),v._v(" "),_("p",[v._v("在接受方的UDP，对网络层交上来的UDP数据报，在去除首部后就原封不动的上交给上层的应用层")]),v._v(" "),_("p",[v._v("4、UDP没有拥塞控制")]),v._v(" "),_("p",[v._v("5、UDP支持一对一、一对多、多对一、多对多")]),v._v(" "),_("p",[v._v("6、UDP首部只有8字节")]),v._v(" "),_("p",[v._v("IP数据报的检验和只检验首部，UDP检验和是把"),_("strong",[v._v("首部和数据部分")]),v._v("一起检验")]),v._v(" "),_("p",[v._v("既"),_("strong",[v._v("检查了UDP数据报，又对IP数据报的源IP地址和目的IP地址进行了检验。")])]),v._v(" "),_("p",[v._v("只负责校验此数据是否有错，并不纠错，如果错了，就丢失。")]),v._v(" "),_("p",[v._v("应用场景：要求通信速度快的（即时通信qq，视频，直播")])])}),[],!1,null,null,null);_.default=p.exports}}]);