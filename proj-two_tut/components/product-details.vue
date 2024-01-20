
import type productCardVue from './product-card.vue';
<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="product.image" alt="product image" class="mx-auto my-7 ">
            </div>
            <div class="p-7">
                <h2 class="font-bold text-4xl">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="flex btn">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    // accept & decostruct the product prop 
    const { product } = defineProps(['product'])
</script>

<style scoped>
    img {
        max-width: 400px;
    }
</style>