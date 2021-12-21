<template>
    <div class="container">
        <h3 class="htext">회원가입</h3>
        <hr />
        <el-form label-width="80px">
            <el-form-item label="아이디">
                <el-col :span="15">
                    <el-input ref="userid" v-model="userid"></el-input>
                </el-col>
                <el-row>
                    <el-button type="primary">중복확인</el-button>
                </el-row>
            </el-form-item>
            <el-form-item label="암호">
                <el-col :span="15">
                <el-input ref="userpw" v-model="userpw" type="password"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="암호확인">
                <el-col :span="15">
                <el-input ref="userpw1" v-model="userpw1" type="password"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="이름">
                <el-col :span="15">
                <el-input ref="username" v-model="username" type="text"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="이메일">
                <el-col :span="15">
                <el-input ref="usermail" v-model="usermail" type="text"></el-input>
                </el-col>
            <label>@</label>
            <el-select v-model="value" placeholder="Select">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div>
        <input type="checkbox" v-model="chk1" /><label>약관동의</label>  
        </div>
        <el-row>
        <el-button type="success" @click="handleLogin">회원가입</el-button>
        <el-button type="success">로그인</el-button>
        </el-row>
    </div>
</template>

<script>
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        setup() {

            return {

            options: ref([
                {
                value: 'naver.com',
                label: 'naver.com',
                },
                {
                value: 'daum.net',
                label: 'daum.net',
                },
                {
                value: 'gmail.com',
                label: 'gmail.com',
                },
                

            ]),
            value: ref(''),
            }
            
        },
    
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
    });
</script>

<style scoped>
    @import '../assets/css/mystyle1.css';
</style>