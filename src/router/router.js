import {createRouter, createWebHistory} from 'vue-router';

// 导航栏组件
import Index from "../components/index/IndexProprietaryPage.vue"
import Variety from "@/components/varietyView/VarietyPage.vue";
import Toy from "@/components/toyView/ToyPage.vue";
import BuyDog from "@/components/buyDogView/BuyDogPage.vue"
import Food from "@/components/foodView/FoodPage.vue";
import Information from "@/components/informationView/InformationPage.vue";
import Drugstore from "@/components/drugstoreView/DrugstorePage.vue";
import OnlineServer from "@/components/server/OnlineServer.vue";
import PhoneServer from "@/components/server/PhoneServer.vue";
import SuggestServer from "@/components/server/SuggestServer.vue";
import ShoppingCar from "@/components/buyDogView/ShoppingCar.vue";
import MemberServer from "@/components/server/MemberServer.vue";
import AttentionServer from "@/components/server/AttentionServer.vue";
import LoginServer from "@/components/server/LoginServer.vue";
import RegisterServer from "@/components/server/RegisterServer.vue";

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
    // 快捷导航栏路由
    {
        path: '/onlineServer',
        name: 'onlineServer',
        components: {
            windowContent: OnlineServer
        }
    },
    {
        path: '/phoneServer',
        name: 'phoneServer',
        components: {
            windowContent: PhoneServer
        }
    },
    {
        path: '/suggest',
        name: 'suggest',
        components: {
            windowContent: SuggestServer
        }
    },
    {
        path: '/shoppingCar',
        name: 'shoppingCar',
        component: ShoppingCar
    },
    {
        path: '/member',
        name: 'member',
        components: {
            windowContent: MemberServer
        }
    },
    {
        path: '/attention',
        name: 'attention',
        components: {
            windowContent: AttentionServer
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            windowContent: LoginServer
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            windowContent: RegisterServer
        }
    }
];

var router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;