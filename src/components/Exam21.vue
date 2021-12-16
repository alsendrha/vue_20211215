<template>
    <div>
        <h3><h3>일별 박스오피스</h3></h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>랭크</th>
                        <th>영화제목</th>
                        <th>상영날짜</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                        <td>{{ idx+1 }}</td>
                        <td>{{ tmp.rank }}</td>
                        <td>{{ tmp.movieNm }}</td>
                        <td>{{ tmp.openDt }}</td>
                    </tr>
                </tbody>
            </table>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handeData();
        },

        data(){
            return{
                items : [],

            }
        },

        methods:{
            async handeData(){
                const url = "http://ihongss.com/json/exam21.json";
                const hearders = { 'Content-type':'application/json'}
                const response = await axios.get(url, hearders);
                console.log(response);
                if(response.status === 200){
                    this.items = response.data.boxOfficeResult.dailyBoxOfficeList;
                    console.log(this.items)
                }
            }
        }
        
    }
</script>

<style scoped>

</style>