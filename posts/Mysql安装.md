# Mysql（docker）



> ## 1.我的云服务器

```shell
IP   <121.37.170.193>
PS   <without #>
```



> ## 2.拉取镜像

```shell
docker pull mysql:5.7
```



> ## 3.运行镜像

```
  docker run -d \
  --name mysql-shanghai2024 \
  -p 3306:3306 \
  -e TZ=Asia/Shanghai  \
  -e MYSQL_ROOT_PASSWORD=shanghai123 \
  mysql
```

