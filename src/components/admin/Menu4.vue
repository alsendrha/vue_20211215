<template>
    <div>
        <h4>이미지 여러개 첨부</h4>

        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이미지</th>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>판매수량</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tmp, idx) in count" :key="tmp">
                    <td>{{tmp}}</td>
                    <td>
                        <input type="file" ref="file"  style="display:none;"
                         @change="handleImage($event, idx)" />
                        <img :src="imgsrc[idx]" @click="handleFile(idx)"
                        style="width:50px; cursor:pointer;"/>
                    </td>
                    <td><input type="text" v-model="itemname[idx]" placeholder="상품명" /></td>
                    <td><input type="text" v-model="itemprice[idx]" placeholder="가격" /></td>
                    <td><input type="text" v-model="itemqty[idx]" placeholder="수량" /></td>
                </tr>
            </tbody>
        </table>
        <input type="button" ref="btn1" value="항목추가" />
        <input type="button" value="항목삭제" />
        <input type="button" value="일괄등록" />
        
    </div>
</template>

<script>
    export default {

        created(){
            for(let i=0;i<this.count;i++){
                this.imgsrc.push(
                    require('../../assets/img/default.jpg'));
                

            }
        },
        data(){
            return{
                count : 5,
                /*default 이미지 설정 */
                imgsrc : [],
                /*v-model 설정 */
                itemname : [],
                itemprice : [],
                itemqty : [],
            }
        },
        methods:{
            handleImage(e, idx){
                console.log("Menu4.vue => handleImage", e, idx);

                let self = this;
                if(e.target.files[0]){//이미지 읽기
                    const reader = new FileReader();
                    reader.addEventListener('load', function(e1) {
                        self.imgsrc[idx] = e1.target.result;
                    });
                    reader.readAsDataURL(e.target.files[0]);
                }
            },
            handleFile(idx){
                console.log("Menu4.vue => handleFile", idx); 

                console.log(this.$refs.btn1);
                console.log(this.$refs.file);

                this.$refs.file[idx].click();
            },
            
        }
        
    }
</script>

<style scoped>

</style>