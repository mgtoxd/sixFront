<template>
  <div class="organization-grid">
    <LoadingSpinner v-if="loading" />

    <div v-else-if="organizations.length === 0" class="grid-container">
      <EmptyState />
    </div>

    <div v-else class="grid-container">
      <OrganizationCard
        v-for="org in organizations"
        :key="org.id"
        :organization="org"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import OrganizationCard from './OrganizationCard.vue'
import EmptyState from '@/components/common/EmptyState.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

const props = defineProps({
  organizations: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'delete'])
</script>

<style scoped>
.organization-grid {
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  align-items: start;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
