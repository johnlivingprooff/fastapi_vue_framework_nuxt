export default defineEventHandler(async (event)=> {    
    // it turns out useQuery() isn't working or it's no longer supported

    // handles query params with getQuery instead
    // const { name } = getQuery(event)

    // handles post data with readBody instead
    // const { age } = await readBody(event)

    let uri = "https://api.currencyapi.com/v3/latest?apikey=cur_live_kGx88xyuDhGeOBl81i1iVHYgcJY6Ghbcmr8aJGFu"
    const { data } = await $fetch(uri)

    return data
})