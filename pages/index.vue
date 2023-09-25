<script setup lang="ts">

import {heroPostData} from '../types/types'

const {data, error} : any = await useFetch<heroPostData>('/api/getPost')

if(error.value) navigateTo('/error')

const getData = computed(() => {
    return data.value.postData.data.postCollection.items.length > 0 ? data.value.postData.data.postCollection.items : ''
})

const getHeroData = computed(() => {
    return data.value.heroData.data.postCollection.items.length > 0 ? data.value.heroData.data.postCollection.items[0] : ''
})

</script>

<template>
    <section class="flex flex-col">
        <OrganismsHero :data="getHeroData" title="Blog"/>
        <OrganismsCardWrapper :data="getData" title="Lastest articles"/>
    </section>
</template>