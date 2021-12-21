<template>
    <div>
        <h4>메뉴2</h4>
        <h5>물품관리</h5>
        <el-table :data="items" size="mini" style="width: 100%"> 
            <el-table-column label="아이디">
                <template #default="scope">
                    <el-input size="mini" type="text" v-model="scope.row.id" />
                </template>
            </el-table-column>

            <el-table-column label="이름">
                <template #default="scope">
                    <el-input size="mini" type="text" v-model="scope.row.name" />
                </template>
            </el-table-column>

            <el-table-column label="나이">
                <template #default="scope">
                    <el-input size="mini" type="text" v-model="scope.row.age" />
                </template>
            </el-table-column>
        </el-table>
        
        <el-button type="primary" size="mini">일괄수정</el-button>


    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handleItem();
        },

        data(){
            return {
                items : [],
            }
        },

        methods:{
            async handleItem(){
                const url ="http://ihongss.com/json/exam13.json"
                const hearders = { 'Content-type':'application/json'}
                const response = await axios.get(url, hearders);
                console.log(response);
                if(response.status === 200){
                    this.items = response.data.data;
                }
            },
        } 
    }
</script>

<style scoped>

</style>