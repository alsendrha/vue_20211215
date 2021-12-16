<template>
    <div class="container">
        <h3>로그인</h3>
        <hr />
     
        <div class="mydiv1">
            <label class="lbl1">아이디</label>
            <input type="text" v-model="member.userid" ref="userid" placeholder="아이디" />
        </div>

        <div class="mydiv1">
            <label class="lbl1">암호</label>
            <input type="password" v-model="member.userpw" ref="userpw" placeholder="암호" />

        </div>

        <div class="mydiv1">
            <label class="lbl1"></label>
            <input type="button" value="로그인" @click="handleLogin" />
        </div>
    </div>
</template>

<script>
    export default {
        // 메소드 == 함수 == 기능 구현
        methods :{
            handleLogin(){
                if(this.member.userid === ""){
                    alert('아이디를 입력하세요.');
                    this.$refs.userid.focus();
                    return false
                }
                if(this.member.userpw === ""){
                    alert('암호를 입력하세요,');
                    this.$refs.userpw.focus();
                    return false
                }

                //이 위치에서 벡엔드로 값을 전송해서 로그인 처리
            }
        },
                //상태(state 변수 설정)
        data(){
            return{
 
                member : {
                    userid : 'aaa',
                    userpw : 'bbb',
                }
            }
        },

        // 상태변수의 변화를 감지
        watch : {
            member : {
                handler(e) {
                    console.log('watch-userid', e);
                }
            },
        },
    }
</script>
<style scoped>
    @import '../assets/css/mystyle1.css';
</style>