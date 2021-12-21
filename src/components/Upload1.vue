<template>
    <div>
        <h5>upload1 예제</h5>
        <input type="text" v-model="userid" placeholder="아이디" />
        <hr />

        <img :src="imgsrc" style="width:100px" />
        <input type="file" @change="handleImage"/>
        <input type="submit" value="이미지업로드" />
    </div>
</template>

<script>
    //npm i axios --save
    import axios from 'axios';
    export default {
        //상태변수(state)
        data(){
            return{
                userid : '',
                userimg : '',
                imgsrc : require('../assets/img/default.jpg'),
            }
        },

        //메소드(함수)
        methods : {
            //<input type="file"은 v-model 사용불가
            //파일이 첨부되는 시점에 메소드를 통해
            //실제 파일정보를 읽어서 저장
            handleImage(e){
                console.log("upload1.vue => handleImage", e);
                this.userimg = e.target.files[0];

                let self = this; //this 안에 this 못들어가서 변수로 만듬
                if(e.target.files[0]){
                    // 파일 읽는 라이브러리

                    const reader = new FileReader();
                    
                    // 파일 읽기가 완료되는 시점
                    reader.addEventListener('load', function(e1) {

                        //여기가 완료되는 시점
                        self.imgsrc = e1.target.result;
                    });

                    // 파일 읽기 시작
                    reader.readAsDataURL(e.target.files[0]);

                    

                    //여기는 완료시점아님
                }
                else{
                    self.imgsrc = require('../assets/img/default.jpg');
                }
            },
            async handleSend(){
                const url      = "벡엔드의 주소";
                const headers  = {"Content-Type":"multipart/from-data"};

                const body     = new FormData();
                body.append("uid", this.userid); // 아이디 정보
                body.append("img", this.userimg); // 이미지 정보

                // get, post, put, delete 벡엔드 가져오는 방법 // 파일첨부는 post로 보냄
                const response = await axios.get(url, body, {headers:headers});
                console.log(response);
            }
        },

    }
</script>

<style scoped>

</style>