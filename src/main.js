import { createApp } from 'vue'
import App from './App.vue'
 
// 1. router 설정 가져오기
//npm i vue-router@next --save
import routes from './routes/index.js';

//element-plus 가져오기
//npm i element-plus --save
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

 // createApp(App).mount('#app')

const app = createApp(App);

// 2. 필요한 기능 사용하도록 설정
app.use(routes);
app.use(ElementPlus);

app.mount('#app')
