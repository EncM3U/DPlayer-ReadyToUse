const dp = new DPlayer({ //DPlayer主控制函数,详见 http://dplayer.js.org
    container: document.getElementById('dplayer'),
    screenshot: getTrueorF("screenshot"),
    live: getTorFalse("live"), //是否开启直播模式
    autoplay: getTorFalse("autoplay"), //自动播放 参数autoplay 值为1或0 默认false
    theme: '#8470FF',
    loop: getTorFalse("loop"),
    lang: getLang(), //DPlayer 自带有获取browser lang的功能，这个函数可以给自定义
    hotkey: true,
    preload: getVariable("preload"),
    logo: getVariable("playerlogo"), //67% 不透明度左上角icon
    volume: 0.7,
    mutex: true,
    video: getVideoQualitySelect(),
    subtitle: {
        url: getVariable("suburl"), //字幕链接，vtt格式
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff',
    },
    danmaku: getDanMaku(), //弹幕，在写了在写了（新建文件夹）
    contextmenu: getContextMenu(), //默认contextMenu,自定义功能稍后(很久以后)添加
    //highlight: [
    //    {
    //        text: 'marker for 20s',
    //         time: 20,
    //   },
    //   {
    //        text: 'marker for 2mins',
    //        time: 120,
    //    },
    // ],
});

//修复手机横屏问题  from https://dandoc.u2sb.top/danmu/install.html#dplayer-%E7%9A%84%E7%AE%80%E5%8D%95%E5%BA%94%E7%94%A8
/*dp.on("fullscreen", function () {
    fullScreenNow = 1;
    if (
        /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
        screen.orientation.lock("landscape");
    }
});*/
