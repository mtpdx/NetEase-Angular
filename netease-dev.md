# NetEaseAngular



## 1. Initialization

```
ng new NetEase-Angular

ng add ng-zorro-antd

npm install minireset.css
```



```
// 
ng g module core
// 公用模块
ng g module share
// 页面模块
ng g module pages
// 服务模块
ng g module services
```



### 1.1 首页

```
ng g module pages/home --routing

ng g component pages/home

ng g service services/home

ng g component pages/home/components/wy-carousel

ng g component pages/home/components/member-card

// https://angular.cn/guide/router#resolve-pre-fetching-component-data
ng g service pages/home/home-resolve
```



### 1.2 首页通用组件

```
ng g module share/wy-ui

ng g component share/wy-ui/single-sheet

ng g pipe share/play-count

ng g service services/singer
```



### 2.1 播放器

```
ng g m share/wy-ui/wy-player

ng g c share/wy-ui/wy-player

ng g s services/sheet

ng g s services/song
```

