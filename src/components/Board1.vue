<template>
    <div>
        <h3>Board1.vue</h3>
        <el-table :data="items" style="width: 100%; cursor:pointer;" @row-click="rowclick">
            <el-table-column prop="no" label="글번호" width="120" />
            <el-table-column prop="title" label="제목" width="150" />
            <el-table-column prop="writer" label="작성자" width="120" />
            <el-table-column prop="hit" label="조회수" width="120" />
            <el-table-column prop="regdate" label="날짜" />
        </el-table>

        <el-pagination layout="prev, pager, next" :total="1000"
            @current-change="currentchange"></el-pagination>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handleData();

            
        },
        data(){
            return{
                items : [],
                page : 1,
            }
        },
        methods:{
            rowclick(row){
                console.log('board1 =>rowclick', row);
                this.$router.push({
                    name:'Board1One',
                    query : {no : row.no}
                });
            },
            currentchange(page){
                console.log('board1 => currentchange', page);
                this.page = page;
                this.handleData();
            },
            async handleData(){
                const url =`http://ihongss.com/json/board.json?page=${this.page}`;
                const headers = {"Content-Type":"application/json"};

                const response = await axios.get(url, {headers:headers});
                console.log(response);
                if(response.data.ret === 'y');
                this.items = response.data.data;
              }
        }

        
    }
</script>

<style scoped>

</style>