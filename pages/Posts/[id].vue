<template>
    <div>
        <Button text="Загрзуить комменты" @btnClick="loadInfo()" v-if="!comments.length"/>

        <div class="comment" v-for="comment in comments" :key="comment.id">
            <h3>{{ comment.email }}</h3>
            <div>{{ comment.body }}</div>
        </div>
        <div class="additional-info">
            post page with id {{ id }}
            user name = {{ user?.name }}
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import Button from '~~/components/ui/Button.vue';

    const route = useRoute()
    const id = ref(route.params.id)

    definePageMeta({
        layout: 'post',
        middleware: 'auth'
    })


    let comments = reactive([])
    const loadInfo = async () => {        
        const data = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id.value}/comments`)         
        comments.push(...data.data.value)
    }

</script>

<style lang="scss" scoped>
.additional-info {
    color: grey;
    margin-top: 20px;
}
</style>