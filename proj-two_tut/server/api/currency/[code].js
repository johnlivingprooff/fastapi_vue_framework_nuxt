export default defineEventHandler( async (event) => {
    
    // deconstruct [code] route
    const { code } = event.context.params

    // collect the env varable for apikey
    const { currencyKey } = useRuntimeConfig()

    // construct the uri
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    // fetch the currency data
    const { data } = await $fetch(uri)

    return data
})