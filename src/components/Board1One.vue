<template>
    <div>
        <h4>게시판 상세 내용</h4>
        <hr />
        <el-row :gutter="20">
            <el-col :span="12">
                <el-image :src="item.img" style="width:100%"/>
            </el-col>
            
            <el-col :span="12">
               <p>번호 : {{item.no}}</p>
               <p>제목 : {{item.title}}</p>
               <p>작성자 :{{item.writer}}</p>
               <p>조회수 : {{item.hit}}</p>
               <p>날짜 : {{item.regdate}}</p>
               <p>내용 : {{item.content}}</p>
            </el-col>
        </el-row>

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
                no : this.$route.query.no,
                item : '',
            }
        },
        
        methods:{
            
            async handleData(){
                const url = `http://ihongss.com/json/boardone.json?no=${this.no}`;
                const headers = {"Content-Type":"application/json"};
                const response = await axios.get(url, {headers:headers});
                console.log(response);
                if(response.data.ret === 'y'){
                this.item = response.data.data;
                }
            }

        }
        
    }
</script>

<style scoped>

</style>