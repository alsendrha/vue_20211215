<template>
    <div>
        <h3>CompProp예제</h3>
        <comp-1 :num1="age" :str1="name" @addNum1="addNum1()"></comp-1>
        <hr />
        <comp-1 :num1="age+20" :str1="name+'aaa'" @addNum1="addNum1()"></comp-1>
        <hr />
        <comp-2 :s1="data" :n1="nom" :k1="sor" @addNum1="addNum2()"></comp-2>
    </div>
</template>

<script>
    import Comp1 from './comp/Comp1.vue';
    import Comp2 from './comp/Comp2.vue';

    export default {
        methods:{
            addNum1(){
             //this.age= this.age + 1;   
            this.age++;
            },
            addNum2(){
             //this.nom= this.nom - 1;   
            this.nom--;
            }
        },
        //사용할 컴포넌트 등록
        components:{
            'comp-1' : Comp1,
            'comp-2' : Comp2
        },
        //상태변수
        data(){
            return{
                //comp1
                name : '가나다',
                age  : 23,

                //comp2
                data : '가가가',
                nom  : 44,
                sor  : '나나나',

            }
        }
    }
</script>

<style scoped>

</style>