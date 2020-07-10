# Vue笔记14 路由router
---

### 基本使用
1. 导包
```
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```
2. 定义路由组件
3. 定义路由规则对象（VueRouter）
4. Vue实例的router属性指向路由规则对象
5. 在页面上放容器（占位符）
    ```
    <router-view></router-view>
    ```
### router-link
1. 如果不想用a标签（因为a标签路由要加‘#’），可用router自带的标签router-link(默认渲染为a标签)
```
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
```
2. 如果想修改router-link所渲染出来的标签 可用tag属性
```
        <router-link to="/login" tag="span">登录</router-link>
```
### 重定向
- 在路由规则中添加
```
 {path:'/',redirect:'/login'}
```

### 路由高亮
- 定义 router-link-active vue-router提供的一个类的样式
- 默认被激活的标签就会应用这个类
```
<style>
        .router-link-active{
          color: purple;
          font-weight: 800;  
          font-style:  italic;
        }
</style>
```
### 路由规则定义参数
##### query 传参
- 直接在路由中？XXX可传参
```
<router-link to="/login?id=10" tag="span">登录</router-link>
```
- 此时在$route对象中 有个query对象 对象里面会有个对象存放着 {id：'10'}
- 通过`this.$route.query.id`可拿到id
`<h1>--{{ $route.query.id }}--</h1>`

##### params 传参
- 在定义路由规则的时候 用:id（类似占位符） 表示以后使用该路由地址时会传入一个id
`{path:'/register/:id',component:register}`
`<router-link to="/register/12">注册</router-link>`
- 此时点击注册按钮 url 地址会变成拼接上一个'12'
- 此时在$route对象中 有个params对象 对象里面会有个对象存放着 {id：'12'}
- 通过`this.$route.params.id`可拿到id
`<h1>--{{ $route.params.id }}--</h1>`