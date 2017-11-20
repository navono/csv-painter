# csv-painter
`csv-painter`是使用`Electron`和`React`构建的桌面App。
## 总体目的：
- 可设置`csv`文件所在机器的IP以及呈现数据的各种配置
- 能够作为一个`RPC` Clinet从`RPC` Server（暂时假设使用`Golang`实现的一个微服务）获取数据
- 将数据通过[Echarts](https://github.com/ecomfe/echarts)呈现

## csv文件格式
目前是从另外一个工具指定周期采集指定进程的性能数据。包括`cpu`、`内存`、`IO`等数据。


# 参考
- electron与react构建
[blog](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)


# LICENSE
MIT
