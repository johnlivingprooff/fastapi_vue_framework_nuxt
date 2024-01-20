<template>
    <div>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="p in products">
                <nuxt-link :to="`/products/${p.id}`">{{ p.title }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    // this script also fires in the browser
    definePageMeta({
        layout: 'prod'
    })

    // fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>