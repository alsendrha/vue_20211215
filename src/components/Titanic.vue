<template>
    <div>
        <h3>타이타닉 생존자</h3>
        <table border="1">
            <thead>
                <tr>
                    <td v-for="tmp in fields" v-bind:key="tmp">
                        {{tmp.name}}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                </tr>
            </tbody>
        </table>

       
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        created(){
            this.handeData();
        },

        data(){
            return{
                items : [],
                fields : [],

            }
        },

        methods:{
            async handeData(){
                const url = "https://raw.githubusercontent.com/IBM/taxinomitis/master/resources/datasets/numbers/titanic.json";
                const hearders = { 'Content-type':'application/json'}
                const response = await axios.get(url, hearders);
                console.log(response);
                if(response.status === 200){
                    this.items = response.data;
                    this.fields = response.data.metadata.fields;
                    console.log(this.items)
                    console.log(this.items.metadata.fields)
                }

                
            }
        }
        
    }
</script>

<style scoped>

</style>