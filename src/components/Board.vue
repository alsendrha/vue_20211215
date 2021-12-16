<template>
    <div class="container">
        <h3>게시판목록</h3>
        <hr />

        <table border="1">
            <thead>
                <tr>
                  <th>번호</th>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>연락처</th>
                  <th>이메일</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>{{( idx+1 )}}</td>
                    <td>{{ tmp.id }}</td>
                    <td>{{ tmp.name }}</td>
                    <td>{{ tmp.tel }}</td>
                    <td v-text="tmp.email"></td>
                </tr>
            </tbody>
        </table>

        <div>
            <label v-for="tmp in pages" v-bind:key="tmp">
                <button @click="handleBord(tmp)">{{ tmp }}</button>
            </label>
        </div>

    </div>
</template>

<script>
    export default {

        //생명주기(자동으로 호출되는 역할)
        created(){
            // 벡엔드에서 필요한 데이터를 받는경우
            console.log('1. created');
            this.handleBord(1); //메소드 호출 : this.메소드명칭
        },
        mounted(){
            // 화면의 변화를 주기위해
            console.log('2. mounted');
        },

        //상태변수(state)
        data(){
            return{
                pages : 12,
                items : [],
            }
        },

        // 호출되어지는 함수, 메소드, 기능
        methods : {
            handleBord(page) {
                console.log('handleBord 메소드',page);
                //[{   },{   },{   },{   }]
                // 벡엔드에서 데이터를 받음
                // state변수 items에 데이터를 넣음
                this.items = [
                    {id:'a', name:'가', tel:page, email:'a@a.com'},
                    {id:'b', name:'나', tel:page, email:'b@a.com'},
                    {id:'c', name:'다', tel:page, email:'c@a.com'},
                ];
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/mystyle1.css';
</style>