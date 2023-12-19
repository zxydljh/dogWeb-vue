<template>
  <div class="right-side">
        <div class="right-box">
            <div class="top_img">
                <a href="#top" title="回到顶部">返回顶部</a>
            </div>
            <div class="car">
                <a href="../html/shoppingcar.html" title="购物车">返回顶部</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'SidebarModule'
}
</script>

<style>
/* 侧边栏 模块 */
/* 返回顶部 */
.right-side {
    position: relative;
}

.right-box {
    position: fixed;
    right: 100px;
    bottom: 100px;
}

.right-box div {
    margin-top: 3px;
    height: 50px;
    width: 50px;
    background-color: #f1f1f1;
}

.right-box a {
    font-size: 0;
}

.right-box a:hover {
    color: #ecb11b;
}

.right-box .top_img a::before {
    display: inline-block;
    text-align: center;
    line-height: 50px;
    width: 50px;
    font-size: 38px;
    font-family: "iconfont";
    content: "\e68b";
}

.right-side .car a::before {
    content: '\e63c';
    display: inline-block;
    text-align: center;
    line-height: 50px;
    width: 50px;
    font-size: 38px;
    font-family: "iconfont";
}

/* 购物车小红点 */
.right-side .car {
    position: relative;
}

.right-side .car #sum {
    font-size: 10px;
    content: "";
    text-align: center;
    display: inline-block;
    position: absolute;
    height: 16px;
    line-height: 14px;
    border-radius: 5px;
    background: red;
    color: #fff;
    left: -10px;
    top: 0;
    padding: 2px;
}
</style>