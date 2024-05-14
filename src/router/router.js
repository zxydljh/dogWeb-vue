import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

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
            active: 'shoppingCar',
            requiresAuth: true
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

// 全局路由守卫
router.beforeEach((to, from, next) => {
    // 检查路由是否需要登录权限
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 检查用户是否已登录，登录状态保存在 store 中的 loaded 变量中
        if (!store.state.loaded) {
            window.alert("请先登录");
        } else {
            next();
        }
    } else {
        // 路由不需要登录权限，直接放行
        next();
    }
});
export default router;