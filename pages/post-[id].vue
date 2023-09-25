<script setup lang="ts">
import { PageData } from '../types/types'

const route = useRoute()

const { data, error } = await useFetch<PageData>(`/api/getPost/${route.params.id}`)
if (error.value) navigateTo('/error')

const getHeroData = computed(() => {
    return data.value !== null ? data.value?.dataFromApi.data.pageCollection.items[0].postsCollection.items[0] : navigateTo('/error')
})

const getDataArticles = computed(() => {
    return data.value !== null ? data.value?.dataFromApi.data.pageCollection : navigateTo('/error')
})

const getPosts = computed(() => {
    return data.value !== null ? data.value?.dataFromApi.data.pageCollection.items[0].postsCollection.items.slice(1) : navigateTo('/error')
})

</script>

<template>
    <div>
        <MoleculesSectionHeader title="Blog" />
        <section v-if="data">
            <OrganismsHero :data="getHeroData" :reverse="true" />
            <div class=" max-w-864px mx-auto flex flex-col items-center">
                <OrganismsSectionPage :data="getDataArticles" />
            </div>
            <OrganismsCardWrapper title="Related articles" :data="getPosts" :default-wrapper="true" />
        </section>
    </div>
</template>