<b>[English](./README.md) | 中文</b>

<p align="center">
<img src="https://cdn.jsdelivr.net/gh/MoChanBW/DPlayer-ReadyToUse@0.0.4/assets/Cloud_Play_128px.png" alt="Cloud-Play-icon" width="100" >
</p>
<h1 align="center">DPlayer-ReadyToUse</h1>

> :dart: 通过简单的链接轻松使用DPlayer

  [![jsDelivr-count](https://img.shields.io/jsdelivr/gh/hm/MoChanBW/DPlayer-ReadyToUse?color=%23e84d3d&logo=jsDelivr&style=flat-square)](https://www.jsdelivr.com/package/gh/MoChanBW/DPlayer-ReadyToUse) [![release](https://img.shields.io/github/v/release/MoChanBW/DPlayer-ReadyToUse?include_prereleases&style=flat-square&logo=Github)](https://github.com/MoChanBW/DPlayer-ReadyToUse/releases/) [![MIT license](https://img.shields.io/github/license/MoChanBW/DPlayer-ReadyToUse?style=flat-square)](https://github.com/MoChanBW/DPlayer-ReadyToUse/blob/master/LICENSE)

## 表中内容

- [表中内容](#table-of-content)
- [介绍](#introduction)
- [设置](#options)
- [用法](#usage)
  - [磁力链](#magnet-link)
- [作者](#author)

## 介绍

:balloon:**DPlayer-ReadyToUse** 是一个简单的包，能够帮助我们轻松使用DPlayer

* :rocket:用简单的URL访问高级设置 [![DPlayer](https://img.shields.io/badge/Github-MoePlayer%2FDPlayer-FFAF00?logo=Github&style=flat-square)](https://github.com/MoePlayer/DPlayer/)

* :beginner: 在MarkDown中轻松使用DPlayer
  
## 设置

:white_check_mark:您能够使用这些变量自定义播放器

:pencil:**变量格式：纯文本，除非明确声明**

> :arrow_right:[示例](https://dplayer.mochanbw.cn/demo/) (稳定) [![DEMO on Cloudflare Workers](https://img.shields.io/badge/DEMO%20on-Cloudflare%20Workers-f38020?logo=cloudflare&logoColor=f38020&style=flat-square)](https://dplayer.mochanbw.cn/demo/) [![DEMO Status](https://img.shields.io/uptimerobot/status/m784729343-649b372cd0c06203a3e597ca?label=DEMO%20status&logo=statuspage&logoColor=44CC11&style=flat-square)](https://stats.mochanbw.cn)
>
> :arrow_right:[测试](https://dplayer.mochanbw.cn/) (较慢) [![BETA Status](https://img.shields.io/uptimerobot/status/m784624816-909fad502274ad089ac56ba8?label=BETA%20status&logo=statuspage&logoColor=44CC11&style=flat-square)](https://stats.mochanbw.cn)

|    名称    |            默认值             |                                              Description                                              |
|:----------:|:-----------------------------:|:-----------------------------------------------------------------------------------------------------:|
|  autoplay  |             false             |                                    视频自动播放 , values: 1 , 0                                       |
|  danmaku   |            等待更新           |                                                                                                       |
|    lang    |      navigator.language       |                                      values: zh-cn , zh-tw , en                                       |
|    live    |             false             |          启用直播模式 , values: 1 , 0. 请参阅 [#live](https://dplayer.js.org/guide.html#live)         |
|   magurl   |               -               |                                   请参阅 [#Magnet Link](#magnet-link)                                 |
|   picurl   |   [default picurl][picurl]    |                                            视频封面的链接                                             |
| playerlogo | 'assets/Cloud_Play_128px.png' |                                        DPlayer左上角图标的链接                                        |
|  preload   |            'auto'             |                            values: none , metadata , auto(等待更新)                                   |
|   suburl   |  'assets/demoSubtitle_*.vtt'  |                              external subtitle url (format webvtt only)                               |
|  thumburl  |               -               |               由[DPlayer缩略图](https://github.com/MoePlayer/DPlayer-thumbnails)生成的视频缩略图      |
|   vidqs    |            等待更新           |                                                                                                       |
|  vidtype   |            'auto'             |                                values: auto , hls , flv , dash , normal                               |
|   vidurl   | [default video url][videourl] |                                               视频链接                                                |
|  webicon   |    'assets/Cloud_Play.svg'    |                                           网页图标链接(等待更新)                                      |
|  webtitle  |           'DPlayer'           |                                               网页标题                                                |

## 用法

`/?{Name1}={Value1}&{Name2}={Value2}`

像这样: [https://dplayer.mochanbw.cn/demo/?vidurl=https://t.cn/A6w5s7xn&autoplay=1](https://dplayer.mochanbw.cn/demo/?vidurl=https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/intro/tvc/video-e-plus.webm&autoplay=1)

### 磁力链

基于 [![webtorrent](https://img.shields.io/badge/Github-webtorrent%2Fwebtorrent-35B44F?logo=Github&style=flat-square)](https://github.com/webtorrent/webtorrent)播放磁力链

链接格式 比如：`https://yourdomain/?magurl={base64EncodedMagnetLinkHere}`

> :warning: 请改用Base64编码的磁力链（字符集UTF-8）
>
> :heavy_exclamation_mark: **您应该先删除已编码链接的末尾的所有"`=`"，再将其放入链接中**.

webtorrect示例视频: **[Sintel](https://dplayer.mochanbw.cn/demo/?magurl=bWFnbmV0Oj94dD11cm46YnRpaDowOGFkYTVhN2E2MTgzYWFlMWUwOWQ4MzFkZjY3NDhkNTY2MDk1YTEwJmRuPVNpbnRlbCZ0cj11ZHAlM2ElMmYlMmZ0cmFja2VyLm9wZW50cmFja3Iub3JnJTNhMTMzNyZ0cj11ZHAlM2ElMmYlMmZleHBsb2RpZS5vcmclM2E2OTY5JnRyPXVkcCUzYSUyZiUyZnRyYWNrZXIuZW1waXJlLWpzLnVzJTNhMTMzNyZ0cj13c3MlM2ElMmYlMmZ0cmFja2VyLmJ0b3JyZW50Lnh5eiZ0cj13c3MlM2ElMmYlMmZ0cmFja2VyLm9wZW53ZWJ0b3JyZW50LmNvbSZ0cj13c3MlM2ElMmYlMmZ0cmFja2VyLmZhc3RjYXN0Lm56JndzPWh0dHBzJTNhJTJmJTJmd2VidG9ycmVudC5pbyUyZnRvcnJlbnRzJTJm)**

[在线Base64编码器(oschina)](https://tool.oschina.net/encrypt?type=3)

[在线Base64编码器(base64encode.org)](https://www.base64encode.org/)

> 等待更新

## 作者

**DPlayer-ReadyToUse** © [MoChanBW](https://github.com/MoChanBW/). 根据 [MIT License](./LICENSE) 发行

与README中文版译者[KLPY-CaiDeYiPi](https://github.com/KLPY-Shuai/)合作

译者是一个咕咕怪，中文版README更新会比较慢，望谅解

[图片链接]:https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/design/design-intro-e-plus.jpg
[视频链接]:https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p40-pro-plus/images/intro/tvc/video-e-plus.webm
