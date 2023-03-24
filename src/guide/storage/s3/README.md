# 兼容AWS S3 API

## 说明
1. 对象存储服务兼容AWS S3部分接口，对桶和文件操作与原生HTTP API接口功能相同；

2. 对象存储服务有目录的概念，同一路径下不支持同名的对象和目录存在，不支持删除非空目录；

3. 使用AWS S3多部分上传UploadPart接口限制：

    (a) 必须先上传编号为 1 的块；

    (b) 上传的每一块的大小必须与编号为 1 的块的大小一致，最后一块除外；

    (c) 块可以无序上传（编号为1的块除外）；

4. 使用AWS S3 合并CompleteMultipartUpload接口注意点： 

    (a) 上传的块信息编号从1开始，编号必须是连续的，并且升序，否则无法合并文件；

5. 目前不支持对象锁，同时上传同一个对象，可能产生脏数据。

## 域名endpoint
只支持**virtual-hosted style URL**访问bucket的方式，不支持path style URL访问bucket的方式，无region。  
- “中国科技云对象存储服务”服务单元  
endpoint格式：**http://BUCKET.s3.obs.cstcloud.cn**  
- “运维大数据平台对象存储”服务单元  
暂不提供

## 存储类型  
对象存储服务只支持标准（STANDARD）一种存储类型, 默认为STANDARD。  

## 签名认证  
兼容AWS Signature Version 4，支持请求头签名和参数签名方式。   
数据上传方式只支持单个块传输，不支持多块传输方式(Content-Encoding:aws-chunked)。  
获取访问密钥凭证，可参考[web页面使用方法](../web/)”web页面管理HTTP API访问凭证”章节。  

## 公共标头  
|       标头       | 说明 | 
|:-----:| :----: |
| Authorization  | 兼容 |  
| Content-Length | 兼容 |  
|  Content-Type  | 兼容 |  
|  Content-MD5   | 兼容 |  
|      Date      | 兼容 |  
|      Host      | 兼容 |
| ETag | 兼容 |
| x-amz-request-id | 不支持 |
| x-amz-id-2| 不支持|
| x-amz-version-id| 不支持 |
## 兼容接口及参数列表
| API                     | 请求                                                                                                                 | 响应           | 说明 |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------|:-------------|:---|
| ListBuckets             | 兼容                                                                                                                 | 兼容           |    |
| CreateBucket            | 不支持区域指定，不需要请求体；参数x-amz-acl部分支持，有效值: private，public-read，public-read-write；其他参数不支持；                                 | 兼容           |    |
| DeleteBucket            | 兼容                                                                                                                 | 兼容           |    |
| HeadBucket              | 兼容                                                                                                                 | 兼容           |    |
| PutObject               | 支持请求头；x-amz-storage-class只能取值STANDARD，默认STANDARD；x-amz-acl部分支持，有效值: private，public-read，public-read-write；其他参数不支持； | 仅兼容ETag      | 只支持基础上传功能，目录创建   |
| DeleteObject            | 	VersionId参数不支持，标头x-amz-*不支持；                                                                                      | 标头x-amz-*不支持； |  只支持基础删除功能，删除对象或目录，此请求会直接物理永久删除对象  |
| DeleteObjects           | 标头x-amz-*不支持；                                                                                                      | 标头x-amz-*不支持； |    |
| ListObjects             | 标头x-amz-*不支持；                                                                                                      | 兼容           |    |
| ListObjectsV2           | 兼容| 兼容 |    |
| GetObject               | 支持标头：Range, If-*；仅支持参数：partNumber，response-content-disposition，response-content-type，response-content-encoding， response-content-language；| 兼容标头：Last-Modified, Content-Length, ETag, Content-Disposition, Content-Encoding，Content-Language，Content-Range，Content-Type； |    |
| HeadObject              | 支持标头：Range, If-*；支持参数：partNumber；| 兼容标头：Last-Modified, Content-Length, ETag, Content-Range，Content-Type； |    |
| CopyObject    | x-amz-acl部分支持，有效值: private，public-read，public-read-write；支持标头：x-amz-copy-source; x-amz-copy-source-if*|标头x-amz-*不支持； | 复制对象仅支持2GiB大小以内对象|
| CreateMultipartUpload   | 标头x-amz-acl部分支持，有效值: private，public-read，public-read-write；标头x-amz-storage-class默认并只能为STANDARD, 其他参数不支持；| 标头x-amz-*不兼容 |  仅支持基础功能  |
| AbortMultipartUpload    | 标头x-amz-request-payer不支持；| 标头x-amz-request-payer不支持； |   |
| CompleteMultipartUpload | 标头参数不支持；| 标头x-amz-*不兼容 | 仅支持基础功能；part越多，大小越大，合并一个对象需要的时间越长; 如果已请求合并未响应之前，重试发起第二次请求，会得到一个CompleteMultipartAlreadyInProgress错误码； |
| UploadPart              | 支持x-amz-content-sha256 数据校验; 标头x-amz-*不支持| 标头x-amz-*不支持 | 仅支持基础上传功能 |
| ListMultipartUploads    | 不支持参数delimiter| |  |
| ListParts    | 标头 x-amz* 不支持| |  
