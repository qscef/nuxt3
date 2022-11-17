<template>
    <div class="posts">
        <div class="post" v-for="post in posts">
            {{ post.title }}
        </div>
    </div>
</template>
  
<script setup lang="ts">
    definePageMeta({
        layout: 'post',
        middleware: 'auth'
    })
    const data = await useFetch('https://jsonplaceholder.typicode.com/posts') 
    const posts = data.data
    // console.log(posts); // posts появится еще при SSR соответственно console.log увидишь в терминале сборки
</script>

<style lang="scss" scoped>
.posts {
    display: grid;
    width: 80%;
    margin: 20px auto;
    grid-template-columns: calc(100% / 2 - 20px) calc(100% / 2 - 20px);
    gap: 40px;
}

.post {
    border-radius: 5px;
    border: 1px solid rgb(82, 82, 82);
    padding: 20px;
    cursor: pointer;
}
</style>