import {createRouter, createWebHistory} from 'vue-router';

// 导航栏组件
import Index from "../components/index/IndexProprietaryPage.vue"
import Variety from "@/components/varietyView/VarietyPage.vue";
import Toy from "@/components/toyView/ToyPage.vue";
import BuyDog from "@/components/buyDogView/BuyDogPage.vue"
import Food from "@/components/foodView/FoodPage.vue";
import Information from "@/components/informationView/InformationPage.vue";
import Drugstore from "@/components/drugstoreView/DrugstorePage.vue";
import ShoppingCar from "@/components/buyDogView/ShoppingCar.vue";

// 服务窗口

const routes = [
    {
        path: '/',
        components: {
            mainContent: Index,
        },
        meta: {
            active: 'index'
        }
    },
    {
        path: '/index',
        components: {
            mainContent: Index,
        },
        meta: {
            active: 'index'
        }
    },
    {
        path: '/variety',
        components: {
            mainContent: Variety,
        },
        meta: {
            active: 'variety'
        }
    },
    {
        path: '/information',
        components: {
            mainContent: Information,
        },
        meta: {
            active: 'information'
        }
    },
    {
        path: '/buyDog',
        components: {
            mainContent: BuyDog,
        },
        meta: {
            active: 'buyDog'
        }
    },
    {
        path: '/drugstore',
        components: {
            mainContent: Drugstore,
        },
        meta: {
            active: 'drugstore'
        }
    },
    {
        path: '/food',
        components: {
            mainContent: Food,
        },
        meta: {
            active: 'food'
        }
    },
    {
        path: '/toy',
        components: {
            mainContent: Toy,
        },
        meta: {
            active: 'toy'
        }
    },
    {
        path: '/shoppingCar',
        name: 'shoppingCar',
        components: {
            mainContent: ShoppingCar,
        },
        meta: {
            active: 'shoppingCar'
        }
    },
];

var router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 如果有保存的位置信息，则滚动到保存的位置
        if (savedPosition) {
            return savedPosition;
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ left: 0, top: 0 });
                }, 100); // 添加延迟时间，单位为毫秒
            });
        }
    }
});

export default router;