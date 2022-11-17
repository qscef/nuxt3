<template>
    <div>
        <div class="modal">
            <h2>Авторизуйтесь</h2>
            <Input @changeValue="user = $event"/>
            <Button text="Запомнить меня" @btnClick="authorization()"/>
        </div>
        <div class="links">
            <NuxtLink to="/posts">Posts</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Button from '~~/components/ui/Button.vue';
import Input from '~~/components/ui/Input.vue';

let user = ref('')

const authorization = (e) => {
    console.log(user);
}
</script>

<style lang="scss" scoped>
.modal {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
    gap: 20px;
}
.links {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 40px;
}
</style>

<style lang="scss">
// стили для перехода между страницами
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>