# react
greenplant shopping website
功能：首页，商品展示页，商品详情页，购物车，登录注册页
使用技术：
react+dva+express+mongoose+mock+less
实现功能：
商品多重筛选，商品查找，加购，购物车商品数量的加减及删除，登录注册等
项目结构：
│  app.js
│  mock.js
│  package.json
│  README.md
│  webpack.config.js
│  项目运行方法.txt
│
├─models
│      Product.js
│      Shopcar.js
│      User.js
│
└─www
    │  index.html
    │
    ├─app
    │  │  App.js
    │  │  main.js
    │  │  router.js
    │  │
    │  ├─components
    │  │  │  Duorou.js
    │  │  │  Homepage.js
    │  │  │  Login.js
    │  │  │  ProductDetail.js
    │  │  │  ProductPicker.js
    │  │  │  Regist.js
    │  │  │  Shopcar.js
    │  │  │
    │  │  └─productcomponents
    │  │          Footer.js
    │  │          Lunbo.js
    │  │          Lunbo2.js
    │  │          Nav.js
    │  │          Product.js
    │  │          Tags.js
    │  │          toubu.js
    │  │
    │  ├─models
    │  │      loginModel.js
    │  │      productallModel.js
    │  │      productdetailModel.js
    │  │      productshowModel.js
    │  │      shopcarshowModel.js
    │  │
    │  └─styles
    │          footer.less
    │          header.less
    │          homepage.less
    │          login.less
    │          productdetail.less
    │          productpicker.less
    │          shopcar.less
    │
    ├─dist
    │      bundle.js
    │      styles.css
    │
    ├─images
    │         
    │
    └─lib
            antd.min.css
            echarts.common.min.js
            jquery-3.2.1.min.js
            jquery-ui.min.js
            swiper-3.4.2.min.css
            swiper-3.4.2.min.js

项目运行方法，cmd窗口cnpm install 安装依赖，然后 npm start









