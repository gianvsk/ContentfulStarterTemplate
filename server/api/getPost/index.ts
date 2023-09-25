
export default defineEventHandler(async(event) => {

    const config = useRuntimeConfig().contenfulApiToken

    try {

    const postData : any = await $fetch('https://graphql.contentful.com/content/v1/spaces/yqj1oyq7i4yc/environments/master',
    {
    method: 'POST',
    body: {query: "query{postCollection(order:date_ASC,skip:1){items{title,images{url},author{name,picture{url}},date,id}}}"},
    headers: { Authorization: `Bearer ${config}`}
    })

    const heroData : any = await $fetch('https://graphql.contentful.com/content/v1/spaces/yqj1oyq7i4yc/environments/master',
    {
    method: 'POST',
    body: {query: "query{postCollection(order:date_ASC,limit:1){items{title,text,images{url},author{name,picture{url}},date,id}}}"},
    headers: { Authorization: `Bearer ${config}`}
    })

    if(!postData.data && !heroData.data) return createError({status: 404, message: "Data not found"}) 

    return {
        postData,
        heroData
        }
    } catch(event) {
        createError({status: 404, message: "Data not found"})
    }

})