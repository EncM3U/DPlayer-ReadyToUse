function getQueryVariable(variable) { //获取参数(function from https://www.runoob.com )
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function getVariable(variable) //返回变量字符串
{
    if (getQueryVariable(variable) && variable != "urlofvid") //检查url中变量是否存在，存在即返回值，否则执行else
    {
        return getQueryVariable(variable);
    } else {
        if (variable == "vidtype") {
            if (getQueryVariable("magurl")) //存在magurl时返回“webtorrent”
            {
                var vidtype = "webtorrent"; //when test we use auto,when we use it,it should be "webtorrent"
                return vidtype;
            } else //vidtype未指定时返回“自动”
            {
                var vidtype = "auto";
                return vidtype;
            }
        } else if (variable == "urlofvid") //获得vidurl 或magurl（base64 encoded）链接
        {
            if (getQueryVariable("magurl")) {
                var decodedmagurl = base64Decoder(getQueryVariable("magurl"));
                return decodedmagurl;
            } else if (getQueryVariable("vidurl")) //vidurl的值存在时返回的链接
            {
                return getQueryVariable("vidurl");
            } else //vidurl和magurl的值未指定时返回的链接（默认播放）
            {
                var defaultVidUrl = gTH.defaultVidUrl;
                return defaultVidUrl;
            }

        } else if (variable == "picurl" && getDefault()) //picurl的值未指定时返回的链接（默认展示图）
        {
            var defaultPicUrl = gTH.defaultPicUrl;
            return defaultPicUrl;
        } else if (variable == "playerlogo" && getDefault()) //播放器左上角logo相关
        {
            var defaultPlayerLogo = "assets/Cloud_Play_128px.png";
            return defaultPlayerLogo;
        } else if (variable == "suburl") {
            if (variable == "suburl" && getDefault()) //demo字幕相关,可用cdn加速
            {
                var defaultSubUrl = gTH.defaultSubUrl; // Internationalization
                return defaultSubUrl;
            } else {
                let videourl = getVariable('vidurl');
                let SubUrl = videourl.replace('.mp4', '.vtt');
                videourl = null;
                SubUrl = SubUrl.replace('.m3u8', '.vtt');
                SubUrl = SubUrl.replace('.mpd', '.vtt');
                SubUrl = SubUrl.replace('.flv', '.vtt');
                SubUrl = SubUrl.replace('.webm', '.vtt');
                return SubUrl; //默认字幕
            }
        } else if (variable == "webtitle") //页面title相关
        {
            var defaultWebTitle = 'DPlayer-ReadyToUse';
            return defaultWebTitle;
        } else if (variable == "favicon") //favicon用下面的函数指定
        {
            return "assets/Cloud_Play.svg";
        } else if (variable == "preload") //preload相关
        {
            return "auto";
        } else {
            return null;
        }
    }
}

function getDefault() //查看url中的vidurl和magurl是否定义，是，即非默认状态
{
    if (getQueryVariable("vidurl") == false && getQueryVariable("magurl") == false) {
        return true;
    } else {
        return false;
    }
}

function getContextMenu() //返回右键的自定义功能目录（数组）
{
    var contextMenu = [];
    if (getDefault()) //如果url中的vidurl和magurl的参数为空，则返回默认menu
    {
        contextMenu[0] = {
            text: gTH.contextMenu0text,
            click: (player) => {
                dp.notice(gTH.contextMenuSwitchText + gTH.contextMenu0text, 2000); //显示通知（string，time）时间单位毫秒
                dp.switchVideo({
                    url: gTH.contextMenu0Url,
                    pic: gTH.contextMenu0Pic,
                    //thumbnails: 'example.jpg',
                }, {
                    //id: 'test',
                    //api: 'https://api.prprpr.me/dplayer/',
                    //maximum: 3000,
                    //user: 'DIYgod',
                });
            },
        };
        contextMenu[1] = {
            text: gTH.contextMenu1text,
            click: (player) => {
                dp.notice(gTH.contextMenuSwitchText + gTH.contextMenu1text, 2000); //显示通知（string，time）时间单位毫秒
                dp.switchVideo({
                    url: gTH.contextMenu1Url,
                    pic: gTH.contextMenu1Pic,
                    //thumbnails: 'example.jpg',
                }, {
                    //id: 'test',
                    //api: 'https://api.prprpr.me/dplayer/',
                    maximum: 1000,
                    user: 'DPlayer-ReadyToUse',
                });
            },

        };
        contextMenu[2] = {
            text: gTH.contextMenu2text,
            click: (player) => {
                dp.notice(gTH.contextMenuSwitchText + gTH.contextMenu2text, 2000); //显示通知（string，time）时间单位毫秒
                dp.switchVideo({
                    url: gTH.contextMenu2Url,
                    pic: gTH.contextMenu2Pic,
                    //thumbnails: 'example.jpg',
                }, {
                    //id: 'test',
                    //api: 'https://api.prprpr.me/dplayer/',
                    //maximum: 3000,
                    //user: 'DIYgod',
                });
            },

        };
        contextMenu[3] = {
            text: gTH.Manual,
            link: "https://github.com/MoChanBW/DPlayer-ReadyToUse/",
        };
        var maxIndex = contextMenu.length - 1;
        var length = contextMenu.length;
        var k = 0;
        while (k < length) {
            if (contextMenu[k] != null && contextMenu[k].text == undefined) {
                var count = k;
                while (count < maxIndex) {
                    contextMenu[count] = contextMenu[count + 1]; //后面的传递上来
                    count++;
                }
                contextMenu.pop(); //删除数组的最后一个元素
            } else {
                k++;
            }
        }
        maxIndex = null,
            length = null,
            k = null;
        return contextMenu;
    } else //返回一个空数组
    {
        return contextMenu;
    }
}

function getTrueorF(key) { //根据url中的1或0返回布伦值,默认true
    if (getQueryVariable(key) == "1") {
        return (true);
    } else {
        return (false);
    }
}

function getTorFalse(key) { //根据url中的1或0返回布伦值,默认false
    if (getQueryVariable(key) == "0") {
        return (false);
    } else {
        return (true);
    }
}

(function writeWebTitle() { //获取url中webtitle的参数并写入<title>（立即执行）
    var webTitle = getVariable("webtitle");
    document.title = webTitle;
})();

(function urlChangeFavicon() { //用js更改favicon（立即执行）
    document.head = document.head || document.getElementsByTagName('head')[0];
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'icon';
    link.href = getVariable("favicon");
    if (getVariable("favicon")) { //如果favicon未指定且oldlink存在
        // document.head.removeChild(oldLink);
        document.head.appendChild(link);
    }
})(); //暂无法实现此功能

/*
window.onfocus = function () { //标签页焦点更改
    if (blurYet == 1) {
        document.title = '恢复正常了...';
        this.setTimeout("document.title = getVariable('webtitle')", 2333)//delay 2333ms

    }
};
window.onblur = function () {
    blurYet = 1;
    document.title = '快回来~页面崩溃了';
};
*/

function base64Decoder(encodedString) { //可以用 https://tool.oschina.net/encrypt?type=3  加密
    let Base64 = { //from https://www.jianshu.com/p/82afa633033e
        encode(str) {
            // first we use encodeURIComponent to get percent-encoded UTF-8,
            // then we convert the percent encodings into raw bytes which
            // can be fed into btoa.
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
                function toSolidBytes(match, p1) {
                    return String.fromCharCode('0x' + p1);
                }));
        },
        decode(str) {
            // Going backwards: from bytestream, to percent-encoding, to original string.
            return decodeURIComponent(atob(str).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        }
    };

    //let encoded = Base64.encode(nonEncodedString); 
    let decoded = Base64.decode(encodedString);
    return decoded;
}

function getLang() { //获得语言,若未指定则返回浏览器语言
    if (getQueryVariable("lang")) {
        var lang = getQueryVariable("lang")
        if (lang == 'zh-tw' || lang == 'zh-hk') {
            return 'zh-tw';
        } else if (lang.substring(0, 2) == 'zh') {
            return 'zh-cn';
        } else {
            return 'en'
        }
    } else //from https://blog.csdn.net/qq_26212731/java/article/details/78457198
    {
        var lang = navigator.language || navigator.userLanguage; //常规浏览器语言和IE浏览器
        if (lang == 'zh-tw' || lang == 'zh-hk') {
            return 'zh-tw';
        } else if (lang.substring(0, 2) == 'zh') {
            return 'zh-cn';
        } else {
            return 'en'
        }
    }
}

//国际化
function getTextHolder() {
    if (getLang() == "zh-cn") {
        return textHolder_zh_cn;
    } else if (getLang() == "zh-tw") {
        return textHolder_zh_tw;
    } else {
        return textHolder_en;
    }
}
//弹幕
if (getDefault()) {
    var abid = "aid=882531009";
} else {
    var abid = getQueryVariable("aid") ? 'aid=' + getQueryVariable("aid") : null;
    var abid = getQueryVariable("bvid") ? 'bvid=' + getQueryVariable("bvid") : null;
    var part = getQueryVariable("part") ? '&p=' + getQueryVariable("part") : null;
}
var DanMaku = {
    id: 'HUAWEITECHNB',
    api: 'https://danmu.u2sb.top/api/danmu/dplayer/',
    token: 'HUAWEITECHNB',
    maximum: 1000,
    addition: ['https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?' + abid + part],
    user: 'DPlayer-ReadyToUse',
    bottom: '15%',
    unlimited: true,
};

function getDanMaku() {
    if (getDefault() || getQueryVariable("bvid") || getQueryVariable("aid")) {
        return DanMaku;
    } else {
        return null;
    }
}

var textHolder_en = {
    Manual: "Manual",
    contextMenuSwitchText: "Switch to : ",
    contextMenu0text: "HUAWEI Vision X65",
    //contextMenu1text: "HUAWEI MatePad Pro",
    //contextMenu2text: "HUAWEI P40 Pro+",
    contextMenu0Url: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/media/tvc.mp4',
    //contextMenu1Url: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro/img/video/huawei-matepad-pro-all-video.mp4',
    //contextMenu2Url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/intro/tvc/video-e-plus.webm",
    contextMenu0Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/img/pc/huawei-vision-x65.jpg',
    //contextMenu1Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/tablets/matepad-pro/img/pc/huawei-matepad-pro-kv-pc-1@2x.jpg',
    //contextMenu2Pic: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p40-pro/images/design/design-intro-e-cn@2x.webp',
    defaultVidUrl: "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.0/huawei-p40pro/index.m3u8",
    defaultPicUrl: 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.1/huawei-p40pro/index.jpg',
    defaultSubUrl: 'assets/demoSubtitle_en.vtt',
};

var textHolder_zh_tw = {
    Manual: "使用說明",
    contextMenuSwitchText: "切換到 : ",
    contextMenu0text: "華為智慧屏 X65",
    //contextMenu1text: "華為 MatePad Pro",
    //contextMenu2text: "華為 P40 Pro+",
    contextMenu0Url: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/media/tvc.mp4',
    //contextMenu1Url: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro/img/video/huawei-matepad-pro-all-video.mp4",
    //contextMenu2Url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/intro/tvc/video-e-plus.webm",
    contextMenu0Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/img/pc/huawei-vision-x65.jpg',
    //contextMenu1Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/tablets/matepad-pro/img/pc/huawei-matepad-pro-kv-pc-1@2x.jpg',
    //contextMenu2Pic: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p40-pro/images/design/design-intro-e-cn@2x.webp',
    defaultVidUrl: "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.0/huawei-p40pro/index.m3u8",
    defaultPicUrl: 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.1/huawei-p40pro/index.jpg',
    defaultSubUrl: 'assets/demoSubtitle_zh_tw.vtt',
};

var textHolder_zh_cn = {
    Manual: "使用说明",
    contextMenuSwitchText: "切换到 : ",
    contextMenu0text: "华为智慧屏 X65",
    //contextMenu1text: "华为 MatePad Pro",
    //contextMenu2text: "华为 P40 Pro+",
    contextMenu0Url: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/media/tvc.mp4',
    //contextMenu1Url: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro/img/video/huawei-matepad-pro-all-video.mp4",
    //contextMenu2Url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/intro/tvc/video-e-plus.webm",
    contextMenu0Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/visions/plato/img/pc/huawei-vision-x65.jpg',
    //contextMenu1Pic: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/tablets/matepad-pro/img/pc/huawei-matepad-pro-kv-pc-1@2x.jpg',
    //contextMenu2Pic: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/mkt/pdp/phones/p40-pro/images/design/design-intro-e-cn@2x.webp',
    defaultVidUrl: "https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.0/huawei-p40pro/index.m3u8",
    defaultPicUrl: 'https://cdn.jsdelivr.net/gh/MoChanBW/CDN@1.0.1/huawei-p40pro/index.jpg',
    defaultSubUrl: 'assets/demoSubtitle_zh_cn.vtt',
};

var gTH = getTextHolder(); //缩写
console.log("MoChanBW/DPlayer-ReadyToUse")