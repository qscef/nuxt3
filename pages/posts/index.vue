<template>
  <div class="posts">
    <Head>
      <Title>Posts</Title>
      <Meta name="description" content="posts" />
    </Head>
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="`/posts/${post.id}`"
      class="post"
    >
      {{ post.title }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "post",
  middleware: "auth",
});

const runtimeConfig = useRuntimeConfig();

let a = 10
// console.log(a)
// a = 'hi'
// console.log(a);

const data = await useFetch(runtimeConfig.public.apiBase + "/posts");
const posts = data.data;
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
  text-decoration: none;
  color: black;
}
</style>
