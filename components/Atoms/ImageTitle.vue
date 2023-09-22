<script setup lang="ts">

    type ImageTitleProps = {
        title: string,
        image: string
    }

    const {title, image} = defineProps<ImageTitleProps>()

</script>

<template>

    <figure>
        <img :src="image" class="mt-0 mb-0 rounded-2xl border border-gray-300 shadow-lg" />
        <figcaption class="mt-4 font-urbanist font-normal">{{ title }}</figcaption>
    </figure>

</template>