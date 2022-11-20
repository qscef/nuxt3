<template>
  <div>
    <Head>
      <Title>{{ `Post ${id}` }}</Title>
      <Meta name="description" content="post" />
    </Head>

    <Button
      v-if="!comments.length"
      text="Загрзуить комменты"
      @btn-click="loadInfo()"
    />

    <div v-for="comment in comments" :key="comment.id" class="comment">
      <h3>{{ comment.email }}</h3>
      <div>{{ comment.body }}</div>
    </div>
    <div class="additional-info">
      post page with id {{ id }} user name = {{ user?.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "~~/components/ui/UIButton.vue";

const route = useRoute();
const id = ref(route.params.id);

definePageMeta({
  layout: "post",
  middleware: "auth",
});

const runtimeConfig = useRuntimeConfig();

const comments = reactive([]);
const loadInfo = async () => {
  const data = await useFetch(
    runtimeConfig.public.apiBase + `/posts/${id.value}/comments`
  );
  comments.push(...data.data.value);
};
</script>

<style lang="scss" scoped>
.additional-info {
  color: grey;
  margin-top: 20px;
}
</style>
