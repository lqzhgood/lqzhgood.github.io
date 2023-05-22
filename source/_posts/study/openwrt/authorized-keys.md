---
title: 蛋疼的 dropbear 自动登录
categories:
  - study
  - openwrt
tags:
  - openwrt
  - lede
  - ssh
  - dropbear
date: 2019-01-11 12:06:44
---

say hi


# 先说结论： dropbear sshkey 登录

``` shell
# A 设备
dropbearkey -t rsa -f /root/.ssh/id_dropbear
dropbearkey -y -f /root/.ssh/id_dropbear | grep ssh-rsa > /root/.ssh/id_dropbear.pub
chmod 700 /root/.ssh


# B 设备
# A 的公钥写入
/etc/dropbear/authorized_keys
chmod 600 /etc/dropbear/authorized_keys

ssh root@HOST_B
```

# 需求

家里两台路由，都是 openwrt ，一台网关，一台Ap。网关上 64G 的 U盘快满了，想把 NAS 这些重任务从网关搬到 AP 上去，网关只承担 web 和 FQ 的任务。就买了个硬盘盒，装上闲置的 3.5/HDD 挂载在 Ap 上。
但是这样文件就分离两处了。从外部访问的话就很麻烦，两个 Ftp 服务器~ 想着把 Ap 的硬盘远程挂载到 网关上去，这样从外部看就只有 1个 sFTP 服务器了。那么首先要搞定的就是 ssh 自动连接。
插一句，用 linux 原生的 NFS 挂载性能更好，但是我这里因为 openwrt 编译时没有包含 NFS 相关包，所以还是选择了 sFtp。

不得不提的是。一般而言 sshkey 访问是以下步骤

``` shell
# A设备
ssh-keygen -t rsa
# 在 ~.ssh 目录会生成  id_rsa 和 id_rsa.pub 两个文件，前者私钥后者公钥。

# B设备
# 公钥写入 B 设备 以下文件即可
~.ssh/authorized_keys

#当然还可以通过创建 ~.ssh/config 指定 key 的连接，默认 id_rsa
# 例如
Host github.com
    HostName github.com
    IdentityFile ~/.ssh/github

```

然而操作下来死活连接不通。查了下才知道 <code>openwrt</code> 用的是 <code>dropbear</code>, <code>authorized_keys</code> 位置在 <code>/etc/dropbear/</code> 下面~ 但是依然 ssh 不通。但是我用 PC 又可以连上去…… 网上查询也只有连 <code>dropbear</code> 的帖子，没有 <code>dropbear</code> 连 <code>dropbear</code> 的。中间的过程不想多说了…… 首先，<code>dropbear</code> ssh 默认使用的是 <code>.ssh/id_dropbear</code>；第二 <code>dropbear</code> 的使用的 sshkey 不和 openSSH 通用~ 需要使用 <code>dropbear</code> 单独生成一个文件，公钥再从这个文件提取。。。。。

一上午就这么没了，哎 蛋疼。。。。
