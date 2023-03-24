# 原生 HTTP API 接口

## 接口文档  
- ”中国科技云对象存储服务“服务单元  
   API在线说明与测试文档： https://obs.cstcloud.cn/apidocs/
- ”运维大数据平台对象存储“服务单元  
   暂不提供
## 认证方式  
API访问需要身份认证，安全凭证是用于用户身份认证的凭证，对象存储服务支持多种安全认证方式。  
获取身份认证凭证，可参考[web页面使用方法](../web/)”web页面管理HTTP API访问凭证”章节。  
### 用户身份认证方式
- Auth Token认证（**推荐**）  
Token密钥认证方式，使用简单，安全性相对较低，推荐内网使用。每个用户同一时刻只有一个有效的token，token永久有效。   
Token应包含在Authorization HTTP标头中，密钥应以字符串文字“Token”为前缀，空格分隔两个字符串。   
例如：**Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b**
- JWT认证  
（1）原生JWT认证  
Json web token认证方式，使用简单，包括access jwt和refresh jwt，access jwt有效期为8h，旧的access jwt失效前可以通过对应API携带refresh jwt在有效时限（2天）内刷新获取新的access jwt。 jwt应包含在Authorization HTTP标头中，密钥应以字符串文字“Bearer”为前缀，空格分隔两个字符串。  
例如：**Authorization: Bearer eyJhbGciOiAiSFMyNTYiLCAidHlwIj**  
（2）科技云通行证JWT认证  
jwt应包含在Authorization HTTP标头中，密钥应以字符串文字“AAI-JWT”为前缀，空格分隔两个字符串。  
例如：**Authorization: AAI-JWT eyJhbGciOiAiSFMyNTYiLCAidHlwIj** 
- 访问密钥  
访问密钥是一个密钥对（AccessKey和SecretKey），AccessKey会在网络中传输，SecretKey不在网络上传输，需要用户妥善保管。 密钥对用于[安全凭证的生成](http://obs.cstcloud.cn/docs/#/security)，通过一些签名算法，以SecretKey为加密参数，对一些适当的数据内容进行加密生成安全凭证。访问密钥认证方式安全性高，使用会复杂一些。  
安全凭证auth_key的格式为evhb-auth {access_key}:{hmac_sha1}:{data_base64}，包含在HTTP标头Authorization中，凭证应以字符串文字“evhb-auth”为前缀，空格分隔两个字符串。  
例如：**Authorization: evhb-auth xxx:xxx:xxx**
### 存储桶认证方式
每个存储桶t都可以创建2个存储桶Token，BucketToken有2种访问权限，只读和可读可写。
BucketToken应包含在Authorization HTTP标头中，密钥应以字符串文字“BucketToken”为前缀，空格分隔两个字符串。  
例如：**Authorization: BucketToken 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b**  


