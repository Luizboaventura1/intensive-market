<template>
  <input
    class="p-3 text-white-text mb-4 bg-secondary-color rounded-lg w-full outline-none border-2 border-transparent hover:border-third-color focus:border-third-color"
    :type="inputType"
    :placeholder="inputPlaceholder"
  />
</template>

<script setup>
defineProps({
  inputType: String,
  inputPlaceholder: String
})
</script>
