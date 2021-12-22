<template>
    <div>    

    </div>    
</template>

<script>
    // 이쪽 컴포넌트로 와서 주문처리 후 
    // 다시 다른페이지로 이동
    // 화면이 없음
    export default {
        created(){
            console.log( this.$route.params.code );
            console.log( this.$route.params.count );

            // 결제처리
            alert('결제 되었습니다.');

            // 쇼핑몰 메인으로 이동
            this.$router.push({path:'/shop'});
        }
    }
</script>

<style scoped>

</style>