
import { createWebHistory, createRouter } from "vue-router";

// 1. 컴포넌트 HelloWorld
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';
import Join from '@/components/Join.vue';
import Board from '@/components/Board.vue';
import Form from '@/components/Form.vue';
import Iris from '@/components/Iris.vue';
import Iris1 from '@/components/Iris1.vue';
import Exam10 from '@/components/Exam10.vue';
import Exam21 from '@/components/Exam21.vue';
import Admin from '@/components/Admin.vue';
import Titanic from '@/components/Titanic.vue';
import Table1 from '@/components/Table1.vue';
import Table2 from '@/components/Table2.vue';
import Table3 from '@/components/Table3.vue';
import CompProp from '@/components/CompProp.vue';
import Admin1 from '@/components/Admin1.vue';
import CompSlot from '@/components/CompSlot.vue';


// 2. URL과 함께 사용할 컴포넌트 연결
const routes = [
    // localhost:8080/
    { path:'/', name:"HelloWorld", component:HelloWorld },

    // localhost:8080/Login
    { path:'/Login', name:"Login", component:Login },

    // localhost:8080/Join
    { path:'/Join', name:"Join", component:Join },

    // localhost:8080/Board
    { path:'/Board', name:"Board", component:Board },
    
    // localhost:8080/Form
    { path:'/Form', name:"Form", component:Form },

    // localhost:8080/Iris
    { path:'/Iris', name:"Iris", component:Iris },

    // localhost:8080/Iris1
    { path:'/Iris1', name:"Iris1", component:Iris1 },

    // localhost:8080/Iris1
    { path:'/Exam10', name:"Exam10", component:Exam10 },

    // localhost:8080/Exam21
    { path:'/Exam21', name:"Exam21", component:Exam21 },

    // localhost:8080/Admin
    { path:'/Admin', name:"Admin", component:Admin },

    // localhost:8080/Titanic
    { path:'/Titanic', name:"Titanic", component:Titanic },

    // localhost:8080/Table1
    { path:'/Table1', name:"Table1", component:Table1 },

    // localhost:8080/Table2
    { path:'/Table2', name:"Table2", component:Table2 },

    // localhost:8080/Table3
    { path:'/Table3', name:"Table3", component:Table3 },

    // localhost:8080/CompProp
    { path:'/CompProp', name:"CompProp", component:CompProp },

    // localhost:8080/Admin1
    { path:'/Admin1', name:"Admin1", component:Admin1 },

    // localhost:8080/CompSlot
    { path:'/CompSlot', name:"CompSlot", component:CompSlot },


];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;
