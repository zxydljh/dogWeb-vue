<template>
    <div class="w">
        <div class="index">
            <div class="index_content">
                <!-- 旋转木狗 -->
                <div class="revolve">
                    <div><img src="../assets/uploadImages/chaiquan_1.jpeg" alt=""></div>
                    <div><img src="../assets/uploadImages/hashiqi_1.jpeg" alt=""></div>
                    <div><img src="../assets/uploadImages/luoweinaquan_1.png" alt=""></div>
                    <div><img src="../assets/uploadImages/bianjingmuyangquan_1.png" alt=""></div>
                    <div><img src="../assets/uploadImages/yingguodouniuquan_1.png" alt=""></div>
                    <div><img src="../assets/uploadImages/keji_1.jpeg" alt=""></div>
                </div>
                <!-- 本月热门 -->
                <div class="month">
                    <h1>本月热门话题</h1>
                    <div class="title_box">
                        <div class="title_l">
                            <ul>
                                <li><a href="./symptom.html">狗狗感染沙门氏菌的症状、原因和治疗方法</a></li>
                                <li><a href="javascript:;">狗狗可以吃蜂蜜吗？蜂蜜对狗狗安全吗？</a></li>
                                <li><a href="javascript:;">五大原因告诉你为什么狗狗总爱咬衣物</a></li>
                                <li><a href="javascript:;">狗狗血小板病的症状、原因和治疗方法</a></li>
                                <li><a href="javascript:;">母狗生理构造 疾病防治注意事项</a></li>
                                <li><a href="javascript:;">狗狗眼眶疾病的症状、原因和治疗方法</a></li>
                            </ul>
                        </div>
                        <div class="title_r">
                            <ul>
                                <li><a href="javascript:;">狗狗肝病的凝血病的症状、原因和治疗</a></li>
                                <li><a href="javascript:;">应对狗狗攻击：警告信号、治疗和预防技巧</a></li>
                                <li><a href="javascript:;">狗狗意外中毒的10种最常见方式</a></li>
                                <li><a href="javascript:;">狗狗抑郁症的症状、原因和治疗方法</a></li>
                                <li><a href="javascript:;">蜂蜡是什么? 蜂蜡是自然界提供最好的礼物</a></li>
                                <li><a href="javascript:;">狗狗脑膜脑脊髓炎的症状、原因和治疗方法</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 养狗资料 -->
                <div class="dog_data">
                    <h1>养狗资料</h1>
                    <div class="partial_information">
                        <div>
                            <h3>狗狗喂养</h3>
                            <ul>
                                <li><a href="javascript:;">1.饲养吉娃娃要准备什么东西呢？</a></li>
                                <li><a href="javascript:;">2.饲养边境牧羊犬应该注意些什么事项</a></li>
                                <li><a href="javascript:;">3.苏格兰牧羊犬的饲养方法</a></li>
                                <li><a href="javascript:;">4.巴哥应该如何饲养</a></li>
                                <li><a href="javascript:;">5.泰迪犬饲养前应该需要准备些什么呢？</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>狗狗训练</h3>
                            <ul>
                                <li><a href="javascript:;">1.卧倒躺下训练</a></li>
                                <li><a href="javascript:;">2.初养狗狗要细心！十个注意事项说明</a></li>
                                <li><a href="javascript:;">3.关于边境牧羊犬饲养小技巧</a></li>
                                <li><a href="javascript:;">4.打造乖狗狗 纠正狗狗独处坏习惯</a></li>
                                <li><a href="javascript:;">5.握手训练</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>狗狗生育</h3>
                            <ul>
                                <li><a href="javascript:;">1.狗生育期间的注意事项</a></li>
                                <li><a href="javascript:;">2.京巴狗和蝴蝶狗生育的串串狗好不好</a></li>
                                <li><a href="javascript:;">3.狗狗几个月可以生？</a></li>
                                <li><a href="javascript:;">4.狗狗不生育有什么影响</a></li>
                                <li><a href="javascript:;">5.如何判断狗狗是否妊娠</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3>狗狗习性</h3>
                            <ul>
                                <li><a href="javascript:;">1.了解狗狗的本性</a></li>
                                <li><a href="javascript:;">2.喜乐蒂牧羊犬的养护常识</a></li>
                                <li><a href="javascript:;">3.狗最害怕什么</a></li>
                                <li><a href="javascript:;">4.狗为什么喜欢挠地板</a></li>
                                <li><a href="javascript:;">5.狗做错事时的状态</a></li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <!-- 狗狗图片 -->
                <div class="dog_photo">
                    <div class="type">
                        <h1>萌犬图片</h1>
                        <ul>
                            <li v-for="(item, index) in dogNameItems" :key="index" @click="changeTab(index)" :class="{ 'current': currentIndex === index }">
                                <span></span><a href="javascript:;">{{ item }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dog_photos">
                        <div class="big_boxs">
                            <div v-for="(tabImages, tabIndex) in dogImagesItems" :key="tabIndex" :class="'photo_' + ((tabImages.length === 5 ? 0 : 1) + 5)" :style="{ display: currentIndex === tabIndex ? 'block' : 'none' }">
                                <ul>
                                    <li v-for="(image, imageIndex) in tabImages" :key="imageIndex">
                                        <!-- 直接写图片地址会报404错误，要使用require方法才行 或 :src="require(`../assets/uploadImages${image}`)" -->
                                        <a href="javascript:;"><img :src="require('../assets/uploadImages'+image)" alt=""></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndexProprietaryPage',
    data() {
        return {
            dogNameItems: ["萨摩耶", "柴犬", "柯基", "哈士奇", "金毛", "边牧", "杜宾", "阿拉斯加", "法斗", "秋田犬", "拉布拉多"],
            currentIndex: 0, // 当前选中的索引
            dogImagesItems: [
                [
                    "/smy_photo_1.jpg",
                    "/smy_photo_5.jpg",
                    "/smy_photo_2.jpg",
                    "/smy_photo_4.jpg",
                    "/smy_photo_3.jpg",
                ],
                [
                    "/cq_photo_1.jpg",
                    "/cq_photo_4.jpg",
                    "/cq_photo_2.jpg",
                    "/cq_photo_5.jpg",
                    "/cq_photo_6.jpg",
                    "/cq_photo_3.jpg",
                ],
                [
                    "/keji_1.jpg",
                    "/keji_2.jpg",
                    "/keji_3.jpg",
                    "/keji_4.jpg",
                    "/keji_5.jpg",
                    "/keji_6.jpg",
                ],
                [
                    "/hashiqi_1.jpg",
                    "/hashiqi_2.jpg",
                    "/hashiqi_3.jpg",
                    "/hashiqi_4.jpg",
                    "/hashiqi_5.jpg",
                    "/hashiqi_6.jpg",
                ],
                [
                    "/jinmao_1.jpg",
                    "/jinmao_2.jpg",
                    "/jinmao_3.jpg",
                    "/jinmao_4.jpg",
                    "/jinmao_5.jpg",
                ],
                [
                    "/bianmu_1.jpg",
                    "/bianmu_2.jpg",
                    "/bianmu_3.jpg",
                    "/bianmu_4.jpg",
                    "/bianmu_5.jpg",
                ],
                [
                    "/dubin_1.jpg",
                    "/dubin_2.jpg",
                    "/dubin_3.jpg",
                    "/dubin_4.jpg",
                    "/dubin_5.jpg",
                ],
                [
                    "/alashijia_1.jpg",
                    "/alashijia_2.jpg",
                    "/alashijia_3.jpg",
                    "/alashijia_4.jpg",
                    "/alashijia_5.jpg",
                ],
                [
                    "/fadou_1.jpg",
                    "/fadou_2.jpg",
                    "/fadou_3.jpg",
                    "/fadou_4.jpg",
                    "/fadou_5.jpg",
                ],
                [
                    "/qiutianquan_photo_1.jpg",
                    "/qiutianquan_2.jpg",
                    "/qiutianquan_3.jpg",
                    "/qiutianquan_6.jpg",
                    "/qiutianquan_7.jpg",
                    "/qiutianquan_8.jpg",
                ],
                [
                    "/labuladuo_1.jpg",
                    "/labuladuo_2.jpg",
                    "/labuladuo_3.jpg",
                    "/labuladuo_4.jpg",
                    "/labuladuo_5.jpg",
                ]
            ],
        }
    },
    methods: {
        changeTab(index) {
            // 切换选项卡时更新currentIndex
            this.currentIndex = index;
        },
    },
}
</script>

<style>
/* 主页专有样式 */
/* 旋转木狗 */
.revolve {
    position: relative;
    width: 300px;
    height: 200px;
    margin: 200px auto;
    transform-style: preserve-3d;
    /* 添加动画效果 */
    animation: rotate 20s linear infinite;
    transform: rotateX(45deg);
}

.revolve:hover {
    /* 鼠标放入section 停止动画 */
    animation-play-state: paused;
}

@keyframes rotate {
    0% {
        transform: rotateY(0);
    }

    100% {
        transform: rotateY(360deg);
    }
}

.revolve div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../assets/uploadImages/chaiquan_1.jpeg) no-repeat;
}

.revolve div img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.revolve div:nth-child(1) {
    transform: translateZ(300px) rotateX(20deg);
}

.revolve div:nth-child(2) {
    /* 转动图片 坐标轴也会跟着转 */
    transform: rotateY(60deg) translateZ(300px) rotateX(20deg);
}

.revolve div:nth-child(3) {
    /* 转动图片 坐标轴也会跟着转 */
    transform: rotateY(120deg) translateZ(300px) rotateX(20deg);
}

.revolve div:nth-child(4) {
    /* 转动图片 坐标轴也会跟着转 */
    transform: rotateY(180deg) translateZ(300px) rotateX(20deg);
}

.revolve div:nth-child(5) {
    /* 转动图片 坐标轴也会跟着转 */
    transform: rotateY(240deg) translateZ(300px) rotateX(20deg);
}

.revolve div:nth-child(6) {
    /* 转动图片 坐标轴也会跟着转 */
    transform: rotateY(300deg) translateZ(300px) rotateX(20deg);
}

.index_content {
    font-size: 18px;
    text-align: center;
}

/* 标题左右骨头图片 */
.index_content h1:before,
.index_content h1:after {
    display: block;
    content: '';
    width: 442px;
    height: 20px;
    background: url(../assets/commonImages/gt_bg.png) repeat-x;
    position: absolute;
    left: -463px;
    top: 50%;
    margin-top: -10px;
}

.index_content h1:after {
    left: auto;
    right: -463px;
    transform: rotateY(-180deg);
}

/* 本月热门话题 */
.month {
    height: 400px;
}

.month h1 {
    position: relative;
    display: inline-block;
    color: #ecb11b;
    margin-bottom: 10px;
}

.month ul li a:hover {
    color: #ecb11b;
}

.month .title_box {
    padding: 10px 130px;
    margin-top: 50px;
    height: 235px;
    background-color: #eedead;
}

.month .title_l {
    float: left;
    text-align: left;
}

.month .title_r {
    float: right;
    text-align: left;
}

.month .title_box ul {
    width: 400px;
    height: 235px;
    border: 1px solid transparent;
    background-color: #eedead;
}

.month .title_box ul li {
    margin-top: 10px;
    margin-left: 50px;
}

.month .title_box ul li a {
    color: rgb(126, 177, 36);
}

.month .title_box ul li a:hover {
    color: rgb(231, 139, 19);
}

/* 养狗资料 */
.dog_data h1 {
    position: relative;
    display: inline-block;
    color: #ecb11b;
    margin-bottom: 30px;
}

.partial_information {
    text-align: left;
    margin-left: 110px;
}

.partial_information div {
    width: 500px;
    height: 300px;
    border: 1px solid orange;
    float: left;
    margin: -1px 0 0 -1px;
}

.partial_information div:nth-child(1) {
    background: url(../assets/uploadImages/feed.png) no-repeat;
}

.partial_information div:nth-child(2) {
    background: url(../assets/uploadImages/train.png) no-repeat;
}

.partial_information div:nth-child(3) {
    background: url(../assets/uploadImages/birth.png) no-repeat;
}

.partial_information div:nth-child(4) {
    background: url(../assets/uploadImages/habit.png) no-repeat;
}

.dog_data h3 {
    margin-bottom: 15px;
    color: #dbb000;
}

.dog_data ul {
    margin: 15px 100px;
    float: left;
}

.dog_data ul li {
    margin-top: 5px;
}

.dog_data ul li a {
    color: rgb(151, 232, 9);
}

.dog_data ul li a:hover {
    color: rgb(231, 139, 19);
}

/* 狗狗照片 */
.dog_photo .type h1 {
    position: relative;
    display: inline-block;
    margin: 30px auto 20px;
    color: #ecb11b;
    margin-top: 80px;
}

.dog_photo .type ul {
    margin-left: 60px;
    height: 60px;
    margin-top: 20px;
}

.dog_photo .type ul li {
    position: relative;
    border: 1px solid #ecb11b;
    float: left;
    width: 100px;
    height: 50px;
    line-height: 50px;
    background-color: rgb(233, 205, 153);
    margin-left: -1px;
}

.dog_photo .type ul li span {
    position: absolute;
    /* 小三角 */
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    border: 10px solid transparent;
    border-top-color: #ecb11b;
    /* 位于中下角 */
    left: 40px;
    bottom: 0;
    margin-bottom: -20px;
    /* 隐藏 */
    visibility: hidden;
}

.type ul li:hover span {
    /* 鼠标经过 小三角显示 */
    visibility: visible;
}

.type li:hover a {
    color: #fff;
}

/* 第一个为鼠标经过的样式 */
.type ul .current a {
    color: #fff;
}

.type ul .current span {
    visibility: visible !important;
}

/* 各种狗狗照片 */
.dog_photos {
    height: 600px;
    width: 100%;
    margin-bottom: 100px;
    top: 0;
    left: 0;
    overflow: hidden;
}

.dog_photos .big_boxs {
    margin-left: 5.5rem;
}

.dog_photos li {
    float: left;
}

/* 5图片布局 */
/* 小于等于第三个li */
.dog_photos li:nth-child(-n+3) img {
    width: 340px;
    height: 290px;
    margin-bottom: 5px;
}

/* 第二个图片左右间距 */
.dog_photos li:nth-child(2) img {
    margin: 0 5px;
}

/* 后面两个图片 */
.dog_photos .photo_5 li:nth-child(n+4) img {
    width: 500px;
    height: 290px;
    margin-left: 0.58rem;
}

/* 6图片布局 */
.dog_photos .photo_6 li:nth-child(n+3) img {
    width: 340px;
    height: 290px;
    margin-bottom: 5px;
}

.dog_photos .photo_6 li:nth-child(2) img,
.dog_photos .photo_6 li:nth-child(5) img {
    margin: 0 5px;
}
</style>