<template>
    <div class="main-text error-page">
        <p>
            {{ error.message }}
        </p>
        <p>
            -----------------
        </p>
        <p>
           IM... <button class="my-link" @click="handleError">SORRY</button>
        </p>
    </div>
</template>

<style scoped>
.error-page{
    margin: auto;
    text-align: center;
}
</style>

<script setup>
const props = defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>