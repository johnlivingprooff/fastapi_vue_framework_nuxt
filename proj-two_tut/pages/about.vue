<template>
    <Head>
        <Title>About | Clothes</Title>
        <Meta name="description" content="Lorem ipsum dolor sit amet consectetur." />
    </Head>
    <div>
        <h2>About!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dignissimos autem quis delectus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni dignissimos autem quis delectus.</p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>

</style>