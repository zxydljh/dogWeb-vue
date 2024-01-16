<template>
     <nav>
        <div class="nav w">
            <ul>
                <li><a href="index.html">首页</a></li>
                <li><a href="variety.html">狗狗种类</a></li>
                <li><a href="information.html">狗狗资讯</a></li>
                <li><a href="buy_dog.html">购买小狗</a></li>
                <li>
                    <a href="classify.html">分类</a>
                    <div class="classify_list">
                        <div><a href="drugstore.html" target="_blank">狗狗药店</a></div>
                        <div><a href="food.html" target="_blank">狗狗零食</a></div>
                        <div><a href="toy.html" target="_blank">狗狗玩具</a></div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
name:'GeneralNavigation'
}
</script>

<style>
/* nav 模块 */
nav {
    border-bottom: 3px solid #f4b005;
}

.nav ul li:nth-child(1) a {
    color: #fff;
}

/* nav模块中 该页面的导航项 背景颜色改变 */
.nav ul li:nth-child(1) {
    background-color: #ecb11b;
}

.nav {
    height: 50px;
    padding: 0 50px;
    line-height: 50px;
}

.nav ul {
    margin-left: 300px;
}

.nav ul li {
    float: left;
    width: 120px;
    height: 50px;
    margin: 0 15px;
}

.nav ul li:hover>a {
    background-color: #ecb11b;
    color: #fff;
}

.nav ul li a {
    display: block;
    text-align: center;
    font-size: 20px;
}

.nav ul li:last-child {
    position: relative;
    /* 使下拉列表位于图片上面 */
    z-index: 100;
}

.nav ul li:last-child>a::after {
    position: absolute;
    font-family: "iconfont";
    content: "\e687";
    font-size: 20px;
    margin-left: 10px;
    transform: rotate(0deg);
    transition: all .4s linear;
}

.classify_list {
    visibility: hidden;
}

.nav ul li:last-child:hover .classify_list {
    visibility: visible;
}

.classify_list div {
    background-color: #ecb11b85;
}

.classify_list div:hover a {
    background-color: #ecb11b;
    color: #fff;
}

/* 鼠标经过 箭头旋转 */
.nav ul li:last-child a:hover::after {
    transform: rotate(180deg);
}
</style>