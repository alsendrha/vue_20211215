<template>
    <div class="container">
        <h3 class="htext">회원가입</h3>
        <hr />
        <el-form label-width="80px">
            <el-form-item label="아이디">
                <el-col :span="11">
                    <el-input ref="userid" v-model="userid"></el-input>
                </el-col>
                <el-row>
                    <el-button type="primary">중복확인</el-button>
                </el-row>
            </el-form-item>
            <el-form-item label="암호">
                <el-col :span="11">
                <el-input ref="userpw" v-model="userpw" type="password"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="암호확인">
                <el-col :span="11">
                <el-input ref="userpw1" v-model="userpw1" type="password"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="이름">
                <el-col :span="11">
                <el-input ref="username" v-model="username" type="text"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="이메일">
                <el-col :span="11">
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
        <el-checkbox v-model="checked1" disabled>약관동의</el-checkbox>
        <el-checkbox v-model="checked2">약관동의</el-checkbox>
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
            const checked1 = ref(false)

            return {
                checked1,

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
                if(this.checked2 === ""){
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
                checked2 : ''
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
            checked2 : {
                handler(e){
                    console.log('checked2', e);
                }
            }
        } 
    });
</script>

<style scoped>
    @import '../assets/css/mystyle1.css';
</style>