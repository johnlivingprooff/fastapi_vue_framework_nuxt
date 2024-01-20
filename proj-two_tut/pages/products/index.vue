<template>
    <div>
        <div class="grid grid-cols-3 gap-5">
            <div v-for="p in products">
                <product-card :product="p" />
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

    // alter meta-data
    useHead({
        title: 'Buy Clothes | Store',
        meta: [
            {
                name: 'description',
                content: 'buy your clothes',
            }
        ]
    })
</script>

<style scoped>

</style>