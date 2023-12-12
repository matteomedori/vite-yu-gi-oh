<script>
export default {
  name: "AppLoader",
};
</script>

<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style lang="scss">
.loader-container {
  display: flex;
  justify-content: center;

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
