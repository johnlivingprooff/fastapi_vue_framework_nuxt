<template>
    <div class="card text-center">
        <img :src="product.image" :alt="`product ${product.id}`" class="thumb">
        <p class="font-bold truncate m-4 text-gray-500">{{ product.title }}</p>
        <nuxt-link :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </nuxt-link>
    </div>
</template>

<script setup>
    // deconstruct product
    const { product } = defineProps(['product'])
</script>

<style scoped>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>