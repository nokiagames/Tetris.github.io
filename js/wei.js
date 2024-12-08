 if (/aliApp|dingtalk/gi.test(navigator.appVersion)) {
 window.document.body.innerHTML = ''
 window.document.write(`<div class="weui_msg"><div class="weui_icon_area"><i class=weui_icon_info weui_icon_msg"></i></div ><div class="weui_text_area"><h4 class="weui_msg_title">请点右上角分享到微信<br>在微信上打开本页体验更好</h4></div><br><br><div class="copy-inner"><a href="http://shop.moxuangenet.com/"><span class="icopy">解锁更多好玩</span></a></div>`)
}