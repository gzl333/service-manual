# 对象存储介绍

## 简介

一体化云服务平台对象存储提供海量数据存储、异地容灾备份和计量计费功能。

目前，平台对接了“**中国科技云对象存储服务**”和“**运维大数据平台对象存储**”2个服务单元为用户提供PB级数据存储和异地容灾备份功能。每个服务单元建设在不同机房，底层均采用“32+4”纠删码，构建高可用、高性能的分布式存储服务，具有**稳定**、**简单易用**、**安全**、**集约**等优势。



## 怎么管理和使用对象存储？

- [**web页面**](../web/)：一体化云服务平台(https://service.cstcloud.cn) 

- [**FTP(FTPS)**](../ftp/)：使用标准FTP客户端访问，比如：FileZilla、LFTP(命令行)等

- [**原生HTTP API**](../api/)：RESTful风格标准用户接口，支持3种用户认证方式、1种存储桶认证方式

- [**兼容AWS S3接口**](../s3/)：兼容18个接口的部分参数的调用

- **s3 tools**：兼容s3cmd、s3fs、S3 Browser

- [**mount**](../rclone/)：可挂载客户端rclone，将存储桶挂载到本地目录，支持Windows和Linux操作系统

## 使用对象存储能做什么？

- **大量视频、图片等媒体材料备份存储**。使用FTP客户端批量上传、下载文件，结合web页面查看及综合检索

- **网站运营者**。调用原生HTTP API从对象存储桶实时在线读写数据

- **大数据科研工作者**。推荐程序调用原生HTTP API或兼容AWS S3 API接口在线处理数据。或者使用s3 tools直接访问

- **针对多端用户，实时同步两地数据**。将对象存储桶作为中转，使用rclone客户端将存储桶同时挂载到2台或多台主机(支持Windows系统和Linux系统），数据通过存储桶实现实时同步  

- **数据共享**。通过web页面的"公开共享"功能分享整个存储桶、某个文件目录或某个文件  