<template>
  <div class="layout-default">
    <Sidebar />
    <div class="layout-default__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Default Layout"
}
</script>
