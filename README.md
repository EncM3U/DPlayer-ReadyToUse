<b>English | [中文](./README_zh.md)</b>

<p align="center">
<img src="https://cdn.jsdelivr.net/gh/MoChanBW/DPlayer-ReadyToUse@latest/assets/Cloud_Play_128px.png" alt="Cloud-Play-icon" width="100" >
</p>
<h1 align="center">DPlayer-ReadyToUse</h1>

> :dart: Use DPlayer easily with a simple link.

  [![jsDelivr-count](https://img.shields.io/jsdelivr/gh/hm/MoChanBW/DPlayer-ReadyToUse?color=%23e84d3d&logo=jsDelivr&style=flat-square&cacheSeconds=3600)](https://www.jsdelivr.com/package/gh/MoChanBW/DPlayer-ReadyToUse) [![Latest Release](https://img.shields.io/github/v/release/MoChanBW/DPlayer-ReadyToUse?include_prereleases&style=flat-square&logo=GitHub&cacheSeconds=3600)](https://github.com/MoChanBW/DPlayer-ReadyToUse/releases/) [![PRs_Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/MoChanBW/DPlayer-ReadyToUse/commit/master/) [![MIT license](https://img.shields.io/github/license/MoChanBW/DPlayer-ReadyToUse?style=flat-square&cacheSeconds=36000)](https://github.com/MoChanBW/DPlayer-ReadyToUse/blob/master/LICENSE)

## Table Of Content

- [Table Of Content](#table-of-content)
- [Introduction](#introduction)
- [Options](#options)
- [Usage](#usage)
  - [Magnet Link](#magnet-link)
  - [Danmaku Settings](#danmaku-settings)
  - [Video Quality Switch](#video-quality-switch)
- [Author](#author)

## Introduction

:balloon:**DPlayer-ReadyToUse** is a simple pack to help people use DPlayer more easily.

- :rocket:Using simple URL to access advanced settings for [![DPlayer](https://img.shields.io/badge/GitHub-MoePlayer%2FDPlayer-FFAF00?logo=GitHub&style=flat-square&cacheSeconds=36000)](https://github.com/MoePlayer/DPlayer/)

- :beginner: Using DPlayer in Markdown easily
  
## Options

:white_check_mark:You can custom your player instance with those variables.

:pencil:**Variable Format : Plain Text , unless clearly declared.**

> :arrow_right: [![DEMO](https://img.shields.io/badge/DEMO%20on-Cloudflare%20Workers-f38020?logo=cloudflare&logoColor=f38020&style=flat-square&cacheSeconds=36000)](https://dplayer.mochanbw.cn/) [![DEMO Status](https://img.shields.io/uptimerobot/status/m784729343-649b372cd0c06203a3e597ca?label=DEMO%20status&logo=statuspage&logoColor=44CC11&style=flat-square)](https://stats.mochanbw.cn)
>
> :arrow_right: [![BETA](https://img.shields.io/badge/BETA%20RProxy%20by-Cf%20Workers-f38020?logo=cloudflare&logoColor=f38020&style=flat-square&cacheSeconds=36000)](https://dplayer.mochanbw.cn/beta/) [![BETA Status](https://img.shields.io/uptimerobot/status/m784624816-909fad502274ad089ac56ba8?label=BETA%20status&logo=statuspage&logoColor=44CC11&style=flat-square)](https://stats.mochanbw.cn)

|    Name    |      Default       |                                              Description                                              |
|:----------:|:------------------:|:-----------------------------------------------------------------------------------------------------:|
|  airplay   |        true        |                                         Use airplay in Safari                                         |
|  autoplay  |       false        |                                    video autoplay , values: 1 , 0                                     |
|  danmaku   |       false        |                                   see [#Danmaku](#Danmaku-Settings)                                   |
|  favicon   |         ''         |                                              favicon url                                              |
|    lang    | navigator.language |                         player instance language , values: zh-cn , zh-tw , en                         |
|    live    |       false        |          live mode , values: 1 , 0. Also see [#live](https://dplayer.js.org/guide.html#live)          |
|    loop    |       false        |                              video loop , values: 1 , 0(wait for update)                              |
|   magurl   |         -          |                                   see [#Magnet Link](#magnet-link)                                    |
|   picurl   |         ''         |                                          url of video poster                                          |
| playerlogo |         ''         |                             url of logo in the top left corner in dplayer                             |
|  preload   |       'auto'       |                                    values: none , metadata , auto                                     |
|   suburl   |  {video name}.vtt  |                              external subtitle url (format webvtt only)                               |
|  thumburl  |         -          | video thumbnails, generated by [DPlayer-thumbnails](https://github.com/MoePlayer/DPlayer-thumbnails/) |
|   vidqs    |         -          |                          see,[#Video Quality Switch](#Video-Quality-Switch)                           |
|  vidtype   |       'auto'       |                         values: auto , hls , flv , dash , normal ,webtorrent                          |
|   vidurl   | default video url  |                                               video url                                               |

## Usage

`/?{Name1}={Value1}&{Name2}={Value2}`

DPlayer-RTU Easy-Gen : [here](https://dplayer.mochanbw.cn/generator/)(Beta Now)

### Magnet Link

Play magnet video based on [![webtorrent](https://img.shields.io/badge/GitHub-webtorrent%2Fwebtorrent-35B44F?logo=GitHub&style=flat-square&cacheSeconds=36000)](https://github.com/webtorrent/webtorrent)

Link Format e.g.`https://yourdomain/?magurl={base64EncodedMagnetLinkHere}`

> :warning: Use base64 encoded Magnet link (charset UTF-8) .
>
> :heavy_exclamation_mark: **you should delete all "`=`" at the end of the encoded link before you put it into URL**.

[Online Base64 Encoder(oschina)](https://tool.oschina.net/encrypt?type=3)

[Online Base64 Encoder(base64encode.org)](https://www.base64encode.org/)

### Danmaku Settings

|     Name     | Default |              Description               |
|:------------:|:-------:|:--------------------------------------:|
|     aid      |   ''    | (addition danmaku) bilibili video aid  |
|     bvid     |   ''    |    (addition danmaku) bilibili bvid    |
|   danmaku    |  false  |              values: 0,1               |
|  danmakuapi  |    -    |        api for sending danmaku         |
|  danmakuid   |    -    |    The only id represents the Video    |
| danmakutoken |    -    |       token for sending danmaku        |
|     part     |   ''    | (addition danmaku) bilibili video part |

> You should build a backend to receive danmaku requests by yourself.
>
> e.g. [dplayer-live-backend](https://github.com/Izumi-kun/dplayer-live-backend)

### Video Quality Switch

> Switching Video Qualities in DPlayer-ReadyToUse

|      Name      | Default |                     Description                      |
|:--------------:|:-------:|:----------------------------------------------------:|
| qsname{number} |    -    |   THe name displayed in the chart (must be given)    |
| qstype{number} | "auto"  | values: auto , hls , flv , dash , normal ,webtorrent |
| qsurl{number}  |    -    |        Video URL of a quality (must be given)        |
|     vidqs      |  false  |       Quality Switch Mode ON/OFF,values: 1 , 0       |



## Author

**DPlayer-ReadyToUse** © [MoChanBW](https://github.com/MoChanBW/). Released under the [MIT License](./LICENSE).

Cooprate with [KLPY](https://github.com/KLPY-shuai/)

