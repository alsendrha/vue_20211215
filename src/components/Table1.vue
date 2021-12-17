<template>
    <div>
        <h3>주문목록</h3>
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>번호</th>
                    <th>아이디</th>
                    <th>나이</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td>
                        <input type="checkbox" v-model="tmp.chk" @change="handleCheck(idx)" />
                    </td>
                    <td>{{( idx+1 )}}</td>
                    <td>{{( tmp.id )}}</td>
                    <td>{{( tmp.age )}}</td>
                    <td>{{( tmp.price )}}</td>
                    <td>
                        
                        <select v-model="tmp.cnt1" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.cnt" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{( tmp.sum )}}</td>
                </tr>

                <tr>
                    <td colspan="3">합계</td>
                    <td>{{sumAge}}</td>
                    <td>{{sumprice}}</td>
                    <td></td>
                    <td>{{sumTotal}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        //생명주기(자동호출)
        created(){
            this.handleData();
        },
        
        mounted(){

        },

        //미리계산 (생명주기 + 메소드)
        computed : {
            sumAge(){
                let sum = 0
                for(let tmp of this.items) {
                    sum += tmp.age;
                }
                return sum;
            },
            sumprice(){
                let sum = 0
                for(let tmp of this.items) {
                    sum += tmp.price;
                }
                return sum;
            },
            sumTotal(){
              let sum = 0
                for(let tmp of this.items) {
                    sum += tmp.sum;
                }
                return sum;  
            },

        },
        // 상태변수
        data(){
            return{
                items : [],
            }
        },
        // 메소드, 함수
        methods : {

            
            handleCheck(idx){
                console.log('Table1.vue => handleCheck', idx);
                if(this.items[idx].chk === true){
                    this.items[idx].sum =
                        this.items[idx].price * this.items[idx].cnt1;
                }
                else{
                    this.items[idx].sum = 0;
                }
            },

            async handleData(){
                this.items = [
                    { id:'a1', age: 23, price: 123, cnt: 25 },
                    { id:'a2', age: 43, price: 134, cnt: 25 },
                    { id:'a3', age: 34, price: 140, cnt: 25 },
                    { id:'a4', age: 36, price: 183, cnt: 25 },
                    { id:'a5', age: 53, price:111, cnt: 25 },
                ];

                //for 배열의 번호를 반복 0 1 2 3 4
                for(let i=0; i<this.items.length; i++){
                    this.items[i]['chk'] = false;
                    this.items[i]['sum'] = 0;
                    this.items[i]['cnt1'] = 1;
                }
                console.log(this.items)
            }
            
            //     //forEach 배열내의 내용을 1개씩 복사
            //     for(let tmp of this.items){
            //         tmp['chk'] =false;
            //     }

            //     // 벡엔드에서 받은 값 출력
                
            // }
        }
    }
</script>

<style scoped>

</style>