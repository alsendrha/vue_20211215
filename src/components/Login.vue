<template>
    <div class="container">
        <h3>로그인</h3>
        <hr />
        <el-form label-width="120px">

            <el-form-item label="아이디">
                <el-input ref="userpw" v-model="member.userid" ></el-input>
            </el-form-item>
 
            <el-form-item label="암호">
                <el-input ref="userpw" v-model="member.userpw"  show-password></el-input>
            </el-form-item>

            <el-form-item aria-label="">
                <el-button type="primary" @click="handleLogin" >로그인</el-button>
            </el-form-item>
        </el-form>
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
        // watch : {
        //     userid : {
        //         handler(e) {
        //             console.log('watch-userid', e);
        //         }
        //     },
        //     userpw : {
        //         handler(e) {
        //             console.log('watch-userpw :', e);
        //         }
        //     }
        // },
    }
</script>
<style scoped>
</style>