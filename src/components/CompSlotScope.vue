<template>
    <div>
        <h4>부모 : CompSlotScope.vue</h4>

        <comp-4 :data ="title">
            <template #tag1="slotProps">
                {{slotProps.user.firstname}}<br />
                {{slotProps.user.lastname}}<br />
                
                <span>***전달되어 표시되는 태그들***</span>
                <br />
            </template>
        </comp-4>

    </div>
</template>

<script>
    // 1. import 하기
    import Comp4 from './comp/Comp4.vue';
    export default {
        components:{
            Comp4,
        },
        //상태변수
        data() {
            return{
                title : '컴포넌트실습',
            }
        }
    }
</script>

<style scoped>

</style>