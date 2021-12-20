<template>
    <div>
        <h4>Comp2 컴포넌트</h4>
        <span>{{s1}}</span>
        <span v-text="n1"></span>
        <span v-text="k1"></span>
        <input type="button" value="num1의 값 감소" @click="handleNum1()" />
    </div>
</template>

<script>
    export default {
        methods:{
            handleNum1(){
                console.log('Comp2.vue => handleNum1');

                //컴포넌트를 사용했던 부모의 이벤트롤 호출함.
                this.$emit('addNum1');
            }
        },
         props:{
            s1 :{
                type : String,
                default : ''
            },
            n1 :{
                type : Number,
                default : 0
            },
            k1 : {
               type : String,
                default : '' 
            }

        },
    }
</script>

<style scoped>

</style>