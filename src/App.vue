
<template>
  <div>

    <el-container>
      <el-header>
         <el-menu :default-active="defaultactive"
          class="el-menu-demo" mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect">

          <el-menu-item index="1">홈</el-menu-item>
          <el-menu-item index="100">로그인</el-menu-item>
          <el-menu-item index="101">회원가입</el-menu-item>
          <el-menu-item index="102">마이페이지</el-menu-item>
          <el-menu-item index="103">예제</el-menu-item>
          <el-sub-menu index="2">
              <template #title>주문목록</template>
              <el-menu-item index="2-1">테이블</el-menu-item>
              <el-menu-item index="2-2">테이블2</el-menu-item>
              <el-menu-item index="2-3">테이블3</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="104">관리자</el-menu-item>
          <el-menu-item index="3" disabled>Info</el-menu-item>
          <el-menu-item index="4">Orders</el-menu-item>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">Aside</el-aside>

        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>

    </el-container>


    <h3>header</h3>
    <hr />

    <div>
      <router-link to="/">홈화면</router-link> /
      <router-link to="/Login">로그인</router-link> /
      <router-link to="/Join">회원가입</router-link> /
      <router-link to="/Board">게시판</router-link> /
      <router-link to="/Form">form 실습</router-link>/
      <router-link to="/Iris">Iris</router-link>/
      <router-link to="/Exam10">예제</router-link>/
      <router-link to="/Admin">관리자</router-link>/
      <router-link to="/Table1">테이블</router-link>/
      <router-link to="/Table2">테이블2</router-link>/
      <router-link to="/Table3">테이블3</router-link>/
      <router-link to="/CompProp">CompProp</router-link>/
      <router-link to="/Admin1">Admin1</router-link>/
      <router-link to="/CompSlot">CompSlot</router-link>/
      <router-link to="/Upload1">Upload1</router-link>/
      <router-link to="/CompSlotScope">CompSlotScope</router-link>
    </div> 
    
    <hr />
    <h3>footer</h3>
  </div>

</template>

<script>
export default {
  data(){
    return{
      defaultactive:'4',
    }
  },
  methods:{
    handleSelect(idx){
      console.log('App.vue => handleSelect', idx);
      if(idx === '1'){
        this.$router.push({path:'/'});
      }
      else if(idx === '100'){
        this.$router.push({path:'Login'});
      }
      else if(idx === '101'){
        this.$router.push({path:'Join'});
      }
      else if(idx === '102'){
        this.$router.push({path:'Join'});
      }
      else if(idx === '103'){
        this.$router.push({path:'Iris'});
      }
      else if(idx === '2-1'){
        this.$router.push({path:'Table1'});
      }
      else if(idx === '2-2'){
        this.$router.push({path:'Table2'});
      }
      else if(idx === '2-3'){
        this.$router.push({path:'Table3'});
      }
      else if(idx === '104'){
        this.$router.push({path:'Admin'});
      }
      
    }
  }
}
</script>

<style>
.el-header{
  background-color: #545c64;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: left;
  line-height: 30px;
}

body > .el-container {
  margin-bottom: 10px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
