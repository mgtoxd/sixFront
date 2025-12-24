<template>
  <div class="loading-spinner">
    <div class="spinner"></div>
    <p>加载中...</p>
  </div>
</template>

<script setup>
// Loading component - no props or logic needed
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(100, 108, 255, 0.2);
  border-top-color: #646cff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-spinner p {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .loading-spinner {
    padding: 3rem 1rem;
  }

  .spinner {
    width: 32px;
    height: 32px;
  }
}
</style>
