<script setup>

</script>

<template>

    <div class="flex justify-around items-center bg-blue-custom md:hidden">
        <span class="text-sm text-white py-4">Content managed via</span>
        <AtomsButton text="Use template"/>
    </div>
    <div class="hidden md:flex md:justify-center md:items-center md:gap-3 md:bg-blue-custom">
        <span class="text-sm text-white py-4">The content on this template is managed via Contentful</span>
        <AtomsButton text="Start with this template"/>
    </div>

</template>