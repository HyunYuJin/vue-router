<template>
<v-layout row wrap pt-5 text-xs-center style="max-width: 500px; margin: 0 auto;">
    <!-- <p>이 유저는 현재 유저 번호가 {{ userId }} 입니다.</p>
    <p>{{ $route.params.name }}</p>
    <h1>Group: {{ $route.query.group }}</h1>
    <h1>Category: {{ $route.query.category }}</h1>
    <h1>Name: {{ $route.query.name }}</h1>
    <h1>Address: {{ $route.query.address }}</h1> -->
    <!-- 보안에 따라서 Paramenter를 쓸지, Query를 쓸지를 정해야 한다. -->
    <v-flex xs12>
        <h1>Users</h1>
        <p>유저를 검색해주세요.</p>
    </v-flex>
    <v-flex xs12>
        <v-text-field v-model="userId" label="유저 번호를 입력하세요."></v-text-field>
        <v-btn @click="$router.push({ name: 'users-detail', params: { id: userId } })">검색</v-btn>
    </v-flex>
    <v-flex xs12>
        <router-view></router-view>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    name: 'users',

    data:() => ({
        userId: null
    }),

    beforeRouteEnter(to, from, next) {
        console.log('before Enter')
        next()
    },

    created() {
        console.log('created')
        // new Rotuer들의 속성 및 옵션, 객체들..
        // console.log('router', this.$router)
        // 우리가 지정해준 파라미터, 쿼리, 현재 라우터의 path (현재 주소와 관련되어 있다.)
        // console.log('route', this.$route)
    },

    beforeRouteLeave(to, from, next) {
        console.log('before Leave')
        next()
    },

    destroyed() {
        console.log('destroyed')
    }
}
</script>

<style>

</style>
