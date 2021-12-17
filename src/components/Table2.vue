<template>
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인률</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp, idx) in items" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk" /></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                        <select v-model="tmp.selcount" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
            </tbody>
        </table>

        <div style="margin-top:20px; margin-bottum:20px">
            <input type="button" value="삭제" @click="handleDelete()"/>
            <input type="button" value="복사" @click="handleCopy()"/>
            <input type="button" value="이동" @click="handleMove()"/>
        </div>

        <table border="1">
            <thead>
                <tr>
                    <th>체크</th>
                    <th>아이디</th>
                    <th>가격</th>
                    <th>수량</th>
                    <th>할인률</th>
                    <th>합계</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp, idx) in items1" v-bind:key="tmp">
                    <td><input type="checkbox" v-model="tmp.chk" /></td>
                    <td>{{tmp.id}}</td>
                    <td>{{tmp.price}}</td>
                    <td>
                        <select v-model="tmp.selcount" @change="handleCheck(idx)">
                            <option v-for="tmp1 in tmp.count" v-bind:key="tmp1">
                                {{tmp1}}
                            </option>
                        </select>
                    </td>
                    <td>{{tmp.discountrate}}</td>
                    <td>{{tmp.total}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        // 생명주기
        created(){
            this.handleData();
        },
        // 리턴값이 있는 계산
        computed:{

        },
        // 상태변수
        data(){
            return{
                items: [],
                items1: [],
            }

        },
        // 메소드
        methods:{

            handleDelete(){
                // 기존에 3개인것 중에서 false인것 찾아서
                // itemTemp로 복사함
                // itemTemp값을 items로 변경
                let itemTemp = [];
                for(let tmp of this.items){
                    if(tmp.chk === false){
                        itemTemp.push(tmp);
                    }
                }
                console.log(itemTemp);
                this.items = itemTemp;
            },

            handleCopy(){
                let itemTemp = [];
                for(let tmp of this.items){
                    if(tmp.chk === true){
                        itemTemp.push(Object.create(tmp));
                    }
                }
                console.log(itemTemp);
                this.items1 = itemTemp;
            },

            handleMove(){
                let itemTemp = [];

                for(let tmp of this.items){
                    //밑에 테이블에 추가하기
                    if(tmp.chk === true){
                        this.items1.push(Object.create(tmp));
                    }
                    else{
                        itemTemp.push(Object.create(tmp));
                    }
                }
                this.items = itemTemp;

            },


            //벡엔드에서 데이터받기
            //items 상태 변수에 저장
            handleData(){
                this.items =[
                    {id:'a1', price:90, count:10, discountrate:10},
                    {id:'a2', price:1322, count:6, discountrate:12},
                    {id:'a3', price:4555, count:7, discountrate:18},
                ];

                for(let tmp of this.items){
                    tmp.chk = false
                    
                    tmp.selcount = 1;

                    tmp['total'] = tmp.selcount * tmp.price
                        * (100 - tmp.discountrate)/100;
                    
                    tmp.total = Math.round(tmp.total);
                }
                //{id, price, count, discountrate, selcount, total chk}의 키가 생김
            },

            handleCheck(idx){
               console.log('Table2.vue => handleCheck', idx);

                this.items[idx].total
                   = this.items[idx].selcount
                       * this.items[idx].price
                       * (100-this.items[idx].discountrate)/100; 
            
                this.items[idx].total = Math.round(this.items[idx].total);
            },


            // 테이블로 화면 만들기
            // count select으로
            // select이 선택되면 total = price * 선택된수량 * (100-discountrate)/100;
        }
        

    }
</script>

<style scoped>

</style>