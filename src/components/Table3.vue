<template>
    <div>
        <table border="1">
            <thead>
                <tr> 
                    <th>번호</th>
                    <th>숫자1</th>
                    <th>숫자2</th>
                    <th>숫자3</th>
                    <th>결과</th>
                    <th>버튼</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>{{ tmp.no }}</td>
                    <td>{{ tmp.num1 }}</td>
                    <td>{{ tmp.num2 }}</td>
                    <td>{{ tmp.num3 }}</td>
                    <td>{{ tmp.tot }}</td>
                    <td>
                        <input type="button" value="+" @click="handlePlus(idx)" />
                        <input type="button" value="-" @click="handleSub(idx)" />
                        <input type="button" value="*" @click="handleMul(idx)" />
                        <input type="button" value="/" @click="handleDiv(idx)" />
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<script>
    export default {
        created(){
            this.items=[
                {no :1, num1:3, num2:3, num3:2 },
                {no :1, num1:4, num2:6, num3:4 },
                {no :1, num1:6, num2:9, num3:5 },
            ];

            for(let tmp of this.items){
                tmp['tot'] = 0;
            }

            //테이블로 표시
            //번호, 숫자1, 숫자2, 숫자3, 결과버튼
            // 1,    3,      3,    34,   ??  [더하기, 곱하기, 나누기, 빼기]

        },
        data(){
            return{
                items : [],
            }
        },
        methods:{
            handleData(){

            },
            handlePlus(idx){
                console.log('Table3.vue => handlePlus',idx);

                this.items[idx]['tot']
                   = this.items[idx].num1 + this.items[idx].num2
                    + this.items[idx].num3
            
            },
            handleSub(idx){
                console.log('Table3.vue => handleSub',idx);

                this.items[idx]['tot']
                   = this.items[idx].num1 - this.items[idx].num2
                    - this.items[idx].num3
            
            },
            handleMul(idx){
                console.log('Table3.vue => handleMul',idx);

                this.items[idx]['tot']
                   = this.items[idx].num1 * this.items[idx].num2
                    * this.items[idx].num3
            
            },
            handleDiv(idx){
                console.log('Table3.vue => handleDiv',idx);

                this.items[idx]['tot']
                   = this.items[idx].num1 / this.items[idx].num2
                    / this.items[idx].num3
            
            },
            
        },
    }
</script>

<style scoped>

</style>