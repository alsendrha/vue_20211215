<template>
    <div>
        <h3>Iris</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>꽃받침 길이</th>
                        <th>꽃받침 너비</th>
                        <th>꽃잎 길이</th>
                        <th>꽃잎 너비</th>
                        <th>꽃의 품종</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                        <td>{{ idx+1 }}</td>
                        <td>
                            <!-- localhost:8080/iris1?no=34 -->
                            <router-link :to="{ path:'/iris1', query : { no:(idx+1), key:'asdf', name:'def'}}">
                            {{ tmp.sepalLength }}
                            </router-link>
                        </td>
                        <td>{{ tmp.sepalWidth }}</td>
                        <td>{{ tmp.petalLength }}</td>
                        <td>{{ tmp.petalWidth }}</td>
                        <td>{{ tmp.species }}</td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    //fetch, axios
    import axios from 'axios';
    export default {
        created() { //life cycle생명주기
            this.handeIris(); //메소드 호출하기
        },
        data(){ //state변수
            return{
                items : [],
            }

        },
        methods:{ //method 메소드(함수)
            async handeIris(){ //async적기 규칙임
                // 벡엔드의 서버 주소
                const url = 'https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json'
                // 호출하는 데이터의 종류가 json 헤드 정의
                const hearders = { 'Content-type':'application/jason'}

                //호출하기
                const response = await axios.get(url, hearders);
                //결과값 확인하기
                console.log(response);
                if(response.status === 200){
                    this.items = response.data;
                    //[{},{}....]
                    console.log(this.items)
                }
            
            }
        }
    }
</script>

<style scoped>

</style>