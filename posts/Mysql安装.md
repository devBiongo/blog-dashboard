<!-- @format -->

# xxxxxxxxxx 

```
docker run \
-p 19000:9000 \
-p 9090:9090 \
--net=host \
--name minio \
-d --restart=always \
-e "MINIO_ACCESS_KEY=minioadmin" \
-e "MINIO_SECRET_KEY=qingdao123#" \
-v /opt/minio/data:/data \
-v /opt/minio/config:/root/.minio \
 minio/minio server \
/data --console-address ":9090" -address ":19000"
```

[Docker 搭建 Minio 容器 (完整详细版)\_docker minio-CSDN 博客](https://blog.csdn.net/qq_54673740/article/details/134731886)

created user: qingdao qingdao123

access key : zHqGOtuQyydhsCkYk8tk

secret key : xXmWWhBZ0CMWLxJ1PIvPrC6DdvLsWMTLxAD1wQiw

![image-20240206170522690](C:\Users\pc\AppData\Roaming\Typora\typora-user-images\image-20240206170522690.png)

[MinIO Console](http://47.104.170.155:9090/)
