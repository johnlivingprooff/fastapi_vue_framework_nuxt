<template>
    <div>
        <h4>Product details for {{ id }}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <b>{{ id }}</b> Eligendi, temporibus harum dolores quod obcaecati assumenda.</p>
    </div>
</template>

<script setup>
    const { id } = useRoute().params

    definePageMeta({
        layout: 'prod'
    })
</script>

<style scoped>

</style>