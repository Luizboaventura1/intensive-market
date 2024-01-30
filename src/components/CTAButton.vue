<template>
  <button class="font-medium px-5 py-3 rounded w-full text-white-text bg-third-color">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  transition: .3s;
  &:hover {
    box-shadow: 0 0 20px #724ff0ac;
  }
}
</style>