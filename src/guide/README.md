---
index: true
---

# 使用指南

## 名词解释
- **机构**：一个实体，可以是法人单位、组织或实验室。
- **服务单元**：某个机构提供的一个云服务，指一个集群，对应一个URL。如：EVCloud集群、OpenStack集群、iharbor对象存储集群等。
- **项目组**：是云主机资源、人员、项目组代金券的整合，组内云主机资源由所有人员共享，组内有明确的权限划分。  
- **订单**：用户对不同类型云资源的订购，用户使用包年包月、按量付费这两种支付方式时均会产生订单。
- **包年包月**：按照当前价格预先支付某段时间某种配置云资源的全部费用；到期后，按照新的价格续费继续使用该云主机，或到期后云主机被删除。
- **按量计费**：按实时算费规则及云资源计量结果按日支付费用，适用于按量计费云主机和对象存储。
- **代金券**：有一定面值、与服务单元绑定，在有效期内可用于某种云资源的费用支付。云主机代金券可以兑换至个人或项目组账户中，对象存储代金券只能兑换至个人账户中。
- **余额**：个人或项目组账户中的可用金额，通过充值产生，可用于云平台中云资源的费用支付。
- **公网/私网**：公网可以直接连接互联网。私网是本地局域网，不能与互联网通信。
- **VPN**：一种虚拟专用网。利用公用网络建立一个临时的、安全的连接访问专用内部网络。比如：可以通过配置、连接VPN访问一体云云服务平台的云主机。

## 科研计算云主机使用手册

1. [个人云主机管理](./server/fundamental/)

1. [项目组及云主机管理](./server/group/)

1. [openVPN客户端安装配置](./server/vpn/)

1. [访问Windows云主机](./server/windows/)

1. [访问Linux云主机](./server/linux/)


## 科研大数据存储-对象存储使用手册

1. [对象存储介绍](./storage/obs/)

1. [web页面使用](./storage/web/)

1. [ftp使用](./storage/ftp/)

1. [HTTP API接口使用](./storage/api/)

1. [兼容AWS S3接口使用](./storage/s3/)

1. [rclone可挂载客户端使用](./storage/rclone/)
