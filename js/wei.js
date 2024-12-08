 if (/aliApp|dingtalk/gi.test(navigator.appVersion)) {
 window.document.body.innerHTML = ''
 window.document.write(`<div class="weui_msg"><div class="weui_icon_area"><i class=weui_icon_info weui_icon_msg"></i></div ><div class="weui_text_area"><h4 class="weui_msg_title"><br></h4></div><br><br><div class="copy-inner"><a href=""><span class="icopy"></span></a></div>`)
}
