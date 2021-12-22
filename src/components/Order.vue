<template>
    <div>
        <h4>Order.vue</h4>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-image :src="item.img" style="width:100%"/>
            </el-col>
            
            <el-col :span="12">
                <p>물품명 : {{item.name}}</p>
                <p>가격   : {{item.price}}</p>

                <el-input-number v-model="num" 
                    :min="1" :max="item.qty" />

                <el-button type="primary" @click="handleOrderAction">주문하기</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        created(){
            this.handleData();
        },
        
        data(){
            return{
                /* query로 전달되는 값은 string */
                code : Number(this.$route.query.icode-1),
                key  : this.$route.params.key,
                item : null,
                num  : 1,
            }
        },

        methods:{
           handleOrderAction(){
                // 페이지 이동
                this.$router.push({
                    name   : 'OrderAction',
                    params : { 
                        code  : this.item.code, 
                        count : this.num  
                    }
                });
            },
            handleData(){
                this.item = {
                    code  : this.code,
                    name  : '사과' + this.code,
                    price : 1000+ this.code,
                    qty   : 1000- this.code,
                    img   : `https://picsum.photos/500/300?image=${(1+this.code)}`
                }
            }
        }
    }
</script>

<style scoped>

</style>