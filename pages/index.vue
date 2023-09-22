<script setup lang="ts">

const {data, pending, error} : any = await useFetch('https://graphql.contentful.com/content/v1/spaces/yqj1oyq7i4yc/environments/master',
  {
  method: 'POST',
  body: {query: "query{postCollection(order:date_ASC,skip:1){items{title,images{url},author{name,picture{url}},date,id}}}"},
  headers: { Authorization: `Bearer ${useRuntimeConfig().contenfulApiToken}`}
})

const heroData : any = await useFetch('https://graphql.contentful.com/content/v1/spaces/yqj1oyq7i4yc/environments/master',
  {
  method: 'POST',
  body: {query: "query{postCollection(order:date_ASC,limit:1){items{title,text,images{url},author{name,picture{url}},date,id}}}"},
  headers: { Authorization: `Bearer ${useRuntimeConfig().contenfulApiToken}`}
})

const getData = computed(() => {
    return data.value.data.postCollection.items.length > 0 ? data.value.data.postCollection.items : ''
})

const getHeroData = computed(() => {
    return heroData.data.value.data.postCollection.items.length > 0 ? heroData.data.value.data.postCollection.items[0] : ''
})

</script>

<template>
    <section class="flex flex-col">
        <OrganismsHero :data="getHeroData" title="Blog"/>
        <OrganismsCardWrapper :data="getData" title="Lastest articles"/>
    </section>
</template>