import {createRouter, createWebHistory} from 'vue-router';

import Index from "../components/index/IndexProprietaryPage.vue"
import Variety from "@/components/varietyView/VarietyPage.vue";
import Toy from "@/components/toyView/ToyPage.vue";
import BuyDog from "@/components/buyDogView/BuyDogPage.vue"
import Food from "@/components/foodView/FoodPage.vue";
import Information from "@/components/informationView/InformationPage.vue";
import Drugstore from "@/components/drugstoreView/DrugstorePage.vue";


const routes = [
    {
        path: '/',
        component: Index,
        meta: {
            active: 'index'
        }
    },
    {
        path: '/index',
        component: Index,
        meta: {
            active: 'index'
        }
    },
    {
        path: '/variety',
        component: Variety,
        meta: {
            active: 'variety'
        }
    },
    {
        path: '/information',
        component: Information,
        meta: {
            active: 'information'
        }
    },
    {
        path: '/buyDog',
        component: BuyDog,
        meta: {
            active: 'buyDog'
        }
    },
    {
        path: '/drugstore',
        component: Drugstore,
        meta: {
            active: 'drugstore'
        }
    },
    {
        path: '/food',
        component: Food,
        meta: {
            active: 'food'
        }
    },
    {
        path: '/toy',
        component: Toy,
        meta: {
            active: 'toy'
        }
    }
];

var router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;