<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold underline">Blog sub-page!</h1>
        <span>My ID is {{ route.params.id }}</span>
    </div>
</template>
