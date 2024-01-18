<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="flex container mx-auto p-4 justify-between">
                <nuxt-link to="/" class="font-bold">Clothes</nuxt-link>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>
        <div class="p-4 mx-auto container">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: aquamarine;
    }
</style>