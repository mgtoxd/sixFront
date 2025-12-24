<template>
  <div class="empty-state">
    <div class="empty-icon">📁</div>
    <h3>未找到组织</h3>
    <p>请尝试调整搜索条件或添加新组织</p>
  </div>
</template>

<script setup>
// Empty component - no props or logic needed
</script>

<style scoped>
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #6b7280;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #213547;
}

.empty-state p {
  font-size: 1rem;
  margin: 0;
}

@media (max-width: 768px) {
  .empty-state {
    padding: 3rem 1rem;
  }

  .empty-icon {
    font-size: 2.5rem;
  }

  .empty-state h3 {
    font-size: 1.25rem;
  }
}
</style>
