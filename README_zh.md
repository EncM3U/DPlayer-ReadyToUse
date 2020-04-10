<b>[English](https://github.com/MoChanBW/DPlayer-Ready-to-use/blob/master/README.md) | [中文]</b>

<h1 align="center">DPlayer-ReadToUse</h1>

> 您能够轻松使用DPlayer播放单个链接

 [![MIT 许可证](https://img.shields.io/github/license/MoChanBW/DPlayer-prepacked)](https://github.com/MoChanBW/DPlayer-prepacked/blob/master/LICENSE)

## 介绍

* 将 [DPlayer](https://github.com/MoePlayer/DPlayer) 打包成单独的HTML文件

* 用单个链接访问DPlayer

* 在MarkDown中轻松使用DPlayer

## 设置

您可以通过这些变量自定义播放器实例。

> 范例 : <https://example.com/DPlayer/?[Name1]=[value1]&[Name2]=[value2]> 
>
> 演示 : <https://dplayer.mochanbw.cn/>
 
|    名称    |           默认值           |                                                            描述                                                              |
|:----------:|:--------------------------:|:----------------------------------------------------------------------------------------------------------------------------:|
|  autoplay  |           false            |                                                   视频自动播放 , 值: 1 , 0                                                   |
|  danmaku   |          等待更新          |                                                                                                                              |
|    live    |           false            |                      启用直播模式, 值: 1 , 0. 另请参阅 [#直播](https://dplayer.js.org/guide.html#live)                       |
|   picurl   |  请参阅 [#默认图片链接]()  |                                                          视频封面                                                            |
| playerlogo |          等待更新          |                                                      在左上角显示图标                                                        |
|   suburl   | 'asset/demoSubtitle_*.vtt' |                                                                                                                              |
|  thumburl  |            true            |                      由[DPlayer缩略图](https://github.com/MoePlayer/DPlayer-thumbnails)生成的视频缩略图                      |
|  vidqlty   |          等待更新          |                                                                                                                              |
|  vidtype   |           'auto'           |          值: auto , hls , flv , dash , normal , <b>webtorrent</b>*(需要base64编码，且不能在'auto'中使用)*(等待更新)          |
|   vidurl   | 请参阅 [#defaultVidurl]s() |                                                           视频链接                                                           |
|  webicon   |          等待更新          |                                                  配置网页图标 , 值 :  字符串                                                 |
|  webtitle  |         'DPlayer'          |                                                  配置网页标题 , 值 :  字符串                                                 |

## 用法

> 待添加

## 为什么创建这个仓库?

> 第一次使用DPlayer时，我是个真正的菜鸡
因此我想为像我这样的新手创建这个仓库，并轻松使用DPlayer————这个出色的HTML5播放器

## 作者的话

> 本人不才,翻译之处如有错误,还望大佬们指正

> 译者:[Klpy-Shuai](https://github.com/Klpy-Shuai)

> 另：不知道为什么另一个作者要先搞个英文版的README而把翻译工作丢给我做