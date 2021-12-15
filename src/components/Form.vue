<template>
    <div class="container">
        <h3>form 실습</h3>
        <hr />
        <input type="checkbox" v-model="chk1" />약관동의
        <p v-text="chk1"></p>
        <hr />

        <input type="checkbox" value="html" v-model="chk2" />html
        <input type="checkbox" value="css" v-model="chk2" />css
        <input type="checkbox" value="javascript" v-model="chk2" />javascript
        <input type="checkbox" value="vue" v-model="chk2" />vue
        <p v-text="chk2"></p>

        <hr />

        <select v-model="sel1">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>z
        <p v-text="sel1"></p>
        <hr />

        <select v-model="sel2" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <p v-text="sel2"></p>
        <hr />

        <input type="radio" value="AA" v-model="rad1" /> 남
        <input type="radio" value="BB" v-model="rad1" /> 여
        <p v-text="rad1"></p>
        <hr />
    </div>
</template>

<script>
    export default {
        data() { //상태변수 설정
            return {
                rad1 : 'AA',  
                sel2 : ['A','C'],
                sel1 : 'A',
                chk1 : true,  //* 체크박스의 값은 true, false로 전환*
                chk2 : ["html", "css"] //* 체크박스가 여러개일 경우*
            }
        },

        watch : { //상태변수 값 변화 감지
            chk1 : {
                handler(e){
                    console.log('chk1', e);
                }
            },
            chk2 : {
                handler(e){
                    console.log('chk2', e);
                }
            }
        } 
    }
</script>

<style scoped>

</style>