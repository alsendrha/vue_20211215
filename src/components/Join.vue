<template>
    <div class="container">
        <h3>회원가입</h3>
        <hr />
        <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text" ref="userid" placeholder="아이디" v-model="userid" />
            <input type="button" value="중복확인" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" ref="userpw" placeholder="암호" v-model="userpw" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호확인</label>
            <input type="password" ref="userpw1" placeholder="암호확인" v-model="userpw1" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">이름</label>
            <input type="text" ref="username" placeholder="이름" v-model="username" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">이메일 </label>
            <input type="text" ref="usermail" placeholder="이메일" v-model="usermail" />
            <label>@</label>
            <select>
                <option>naver.com</option>
                <option>daum.net</option>
                <option>gmail.com</option>
            </select>
        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="checkbox" ref="chk1" v-model="chk1" />
            <label>약관동의</label>
        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="button" value="회원가입" @click="handleLogin" />
            <input type="button" value="로그인" />
        </div>
    </div>
</template>

<script>
    export default {
        methods :{
            handleLogin(){
                if(this.userid === ""){
                    alert('아이디를 입력하세요.');
                    this.$refs.userid.focus();
                    return false
                }
                if(this.userpw === ""){
                    alert('암호를 입력하세요.');
                    this.$refs.userpw.focus();
                    return false
                }
                if(this.userpw1 === ""){
                    alert('암호확인을 입력하세요.');
                    this.$refs.userpw1.focus();
                    return false
                }
                if(this.userpw !== this.userpw1){
                    alert('암호가 일치하지 않습니다.');
                    this.$refs.userpw1.focus();
                    return false;
                }
                if(this.username === ""){
                    alert('이름을 입력하세요.');
                    this.$refs.username.focus();
                    return false
                }
                if(this.usermail === ""){
                    alert('이메일을 입력하세요.');
                    this.$refs.usermail.focus();
                    return false
                }
                if(this.chk1 === ""){
                    alert('약관에 동의하세요.');
                    return false
                }
                //이 위치에서 벡엔드로 값을 전송해서 로그인 처리
            }
        },
        data(){
            return{
                userid : '',
                userpw : '',
                userpw1 : '',
                username : '',
                usermail : '',
                chk1 : ''
            }
        },
        watch : {
            userid : {
                handler(e) {
                    console.log('watch-userid', e);
                }
            },
            userpw : {
                handler(e) {
                    console.log('watch-userpw', e);
                }
            },
            userpw1 : {
                handler(e) {
                    console.log('watch-userpw1', e);
                }
            },
            username : {
                handler(e) {
                    console.log('watch-username', e);
                }
            },
            usermail : {
                handler(e) {
                    console.log('watch-usermail', e);
                }
            },
            chk1 : {
                handler(e){
                    console.log('chk1', e);
                }
            }
        } 
    }
</script>

<style scoped>
    @import '../assets/css/mystyle1.css';
</style>