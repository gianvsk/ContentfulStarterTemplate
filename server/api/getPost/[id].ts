
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig().contenfulApiToken;
  try {

    const dataFromApi : any = await $fetch("https://graphql.contentful.com/content/v1/spaces/yqj1oyq7i4yc/environments/master/", {
      method: "POST",
      body: {
        query: `query{pageCollection(where:{id:"${id}"},limit:1){items{image{url},paragraph,postsCollection(limit:3){items{title,text,author{name,picture{url}}date,id,images{url}}}
        articlesCollection(limit:2){items{tItle,text,image{url}}}}}}`,
      },
      headers: { Authorization: `Bearer ${config}` },
    })

    if(dataFromApi.data.pageCollection.items.length < 1) return createError({status: 404, message: "Page not found"})

    return {
      dataFromApi
    }
  } catch (event) {
    return createError({ status: 404, message: "Page not found" });
  }
});

//createError
