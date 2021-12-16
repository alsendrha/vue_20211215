
<template>
  <div>
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
      <router-link to="/Admin">관리자</router-link>
    </div> 
    
   <router-view></router-view>
    

    <hr />
    <h3>footer</h3>
  </div>

</template>

<script>
export default {

}
</script>

<style>
    @import './assets/css/mystyle1.css';
</style>
