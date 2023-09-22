<script setup lang="ts">
import { heroDataType, articleDataType, PageData} from '../types/types'

type realDataFromApi = {
    dataHero: heroDataType
    articleData: articleDataType
}

const route = useRoute()

const {data, error} = await useFetch<PageData>(`/api/getPost/${route.params.id}`)
if(error.value) navigateTo('/error')

const getHeroData = computed(() => {
    return data ? data.value?.dataFromApi.data.pageCollection.items[0].postsCollection.items[0] : navigateTo('/error')
})

const getDataArticles = computed(() => {
    return data ? data.value?.dataFromApi.data.pageCollection : navigateTo('/error')
})

const getPosts = computed(() => {
    return data ? data.value?.dataFromApi.data.pageCollection.items[0].postsCollection.items.slice(1) : navigateTo('/error')
})
/* const {data, error} = await useFetch<realDataFromApi>(`/api/getPost/${route.params.id}`)
if(error.value) navigateTo('/error')

const getHeroData = computed(() => {
    return data ? data.value?.dataHero?.data?.postCollection?.items[0] : navigateTo('/error')
})

const getDataArticles = computed(() => {
    return data ? data.value?.articleData : navigateTo('/error')
})

const getPosts = computed(() => {
    return data ? data.value?.articleData.data.articolListCollection.items[0].postsCollection.items : navigateTo('/error')
}) */

</script>

<template>
     <section>
        <OrganismsHero :data="getHeroData" :reverse="true" />
        <div class=" max-w-864px mx-auto flex flex-col items-center">
            <OrganismsSectionPage :data="getDataArticles" />
        </div>
        <OrganismsCardWrapper title="Related articles" :data="getPosts" :default-wrapper="true"/>
    </section>
</template>