<template>
  <section class="shortcut" id="top">
        <div class="w">
            <div class="fl">
                <ul>
                    <li>狗狗网欢迎您！&nbsp;</li>
                    <li>请&nbsp;&nbsp;<router-link to="/login" class="style_black"><strong>登录</strong></router-link> &nbsp;
                        <router-link to="/register" class="style_red">免费注册</router-link>
                    </li>
                </ul>
            </div>
            <div class="fr">
                <ul>
                    <li>
                        <a href="javascript:;" class="service">客户服务</a>
                        <div class="small_list">
                            <div>
                              <router-link to="/onlineServer">在线客服</router-link>
                            </div>
                            <div>
                              <router-link to="/phoneServer">电话客服</router-link>
                            </div>
                        </div>
                    </li>
                    <li></li>
                    <li>
                      <router-link to="/member">狗狗网会员</router-link>
                    </li>
                    <li></li>
                    <li>
                      <router-link to="/shoppingCar">心动萌宠</router-link>
                    </li>
                    <li></li>
                    <li>
                      <router-link to="/attention">关注我们</router-link>
                    </li>
                    <li></li>
                    <li>
                      <router-link to="/suggest">留言/建议</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name:'ShortcutNavigation'
}
</script>

<style>
/* 快捷导航模块 */
.shortcut {
    height: 31px;
    line-height: 31px;
    background-color: #f1f1f1;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.shortcut ul li {
    float: left;
}

.shortcut .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
}

.fr ul>li {
    position: relative;
    height: 100px;
}

.service::after {
    font-family: "iconfont";
    content: "\e687";
}

.small_list {
    position: absolute;
    visibility: hidden;
}

.fr ul>li:hover .small_list {
    visibility: visible;
    z-index: 100;
}
</style>