# vue-cli-plugin-micro-frontend


## 前言

本插件支持vue-cli 3.x，增加主应用时，内置qiankun2.x，方便qiankun微前端框架在主应用、子应用引入。

## 使用步骤

1. 准备主应用

```shell
vue create master-app

cd master-app

vue add vue-cli-plugin-micro-frontend --type master

```

2. 准备子应用

```shell
vue create child-app-1

cd child-app-1

vue add vue-cli-plugin-micro-frontend --type child --port 8301
```

3. 配置主应用

```javascript
<script>
export default {
    name: 'master',
    data() {
        return {
            ...
            apps: [
                /**
                 * name：子应用的应用名
                 * activeRule：'/子应用应用名'
                 */
                { name: 'child-app-1', entry: '//localhost:8301', container: '#appContainer', activeRule: '/child-app-1' }            
            ]   
            ...
        }
    },
    methods: {
        ...
        initQiankun() {
            // 设置默认跳转子应用路由
            setDefaultMountApp('/child-app-1')    
        }  
        ...
    }   
} 
</script>
```

4. 运行主应用与子应用

```shell
cd master-app
npm run serve
```

```shell
cd child-app-1
npm run serve
```

## 示例

```shell
cd examples

npm install

npm run install:all

npm run serve:all

```
