<script setup lang="ts">

    type IconTextDate = {
        name?: string,
        picture?: string,
        date?: string
    }

    const {name, picture, date} = defineProps<IconTextDate>()

</script>

<template>
    <div class="w-full flex justify-between items-center mt-auto">
        <div v-if="name && picture" class="flex items-center">
            <img :src="picture" class=" w-7 h-7 mr-1 object-cover" />
            <span class="font-urbanist font-extralight text-xs text-gray-600 md:text-sm">
                {{ name }}
            </span>
        </div>
        <span v-if="date" class="mt-2 font-urbanist font-regular text-xs text-gray-600 md:text-sm">
            {{ date }}
        </span>
    </div>
</template>