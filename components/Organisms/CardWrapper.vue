<script setup lang="ts">

type CardWrapperProps = {
    data: any
    title?: string
    defaultWrapper?: boolean
}

const {data, title, defaultWrapper} = defineProps<CardWrapperProps>()

</script>

<template>
    <section :class="['mt-10 mx-auto flex flex-col gap-y-4 mb-10 lg:mx-auto', defaultWrapper ? 'lg:max-w-5xl lg:items-center' : '']">
        <span class=" self-start font-urbanist font-semibold text-xl text-gray-800">{{ title }}</span>
        <div :class="['grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 lg:gap-12 lg:items-center',
                       defaultWrapper? '' : 'lg:grid-cols-3']">
            <MoleculesCard v-for="post in data" :data="post" />
        </div>
    </section>
</template>