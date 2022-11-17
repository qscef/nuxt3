<template>
    <div>
        <div class="header">Default layout</div>
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    .header {
        position: sticky;
        top: 0;
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: rgb(100, 92, 121);
    }
</style>