<template>
  <article class="organization-card">
    <div class="card-header">
      <h3 class="card-title">{{ organization.nameEn }}</h3>
      <div class="card-actions">
        <button
          class="action-btn edit-btn"
          @click="$emit('edit', organization)"
          aria-label="Edit organization"
        >
          ✏️
        </button>
        <button
          class="action-btn delete-btn"
          @click="$emit('delete', organization)"
          aria-label="Delete organization"
        >
          🗑️
        </button>
      </div>
    </div>

    <p class="card-subtitle">{{ organization.nameCn }}</p>

    <div class="card-meta">
      <span class="meta-item">
        <span class="meta-label">别名:</span>
        <span class="meta-value">{{ organization.alias }}</span>
      </span>
      <span class="meta-item">
        <span class="meta-label">域名:</span>
        <a
          :href="domainUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="meta-link"
        >
          {{ organization.domain }}
        </a>
      </span>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  organization: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['edit', 'delete'])

const domainUrl = computed(() => `https://${props.organization.domain}`)
</script>

<style scoped>
.organization-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.organization-card:hover {
  border-color: #646cff;
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.15);
  transform: translateY(-2px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.card-title {
  font-size: 1.75rem;
  line-height: 1.3;
  margin: 0;
  color: #213547;
  flex: 1;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ffffff;
  cursor: pointer;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.action-btn:hover {
  transform: scale(1.1);
}

.edit-btn:hover {
  background-color: #646cff;
  border-color: #646cff;
}

.delete-btn:hover {
  background-color: #ef4444;
  border-color: #ef4444;
}

.card-subtitle {
  color: #6b7280;
  margin: 0;
  font-size: 1rem;
}

.card-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.meta-item {
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-label {
  font-weight: 500;
}

.meta-value {
  color: #213547;
}

.meta-link {
  color: #646cff;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s;
}

.meta-link:hover {
  color: #747bff;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .organization-card {
    padding: 1.5rem;
  }

  .card-title {
    font-size: 1.5rem;
  }
}
</style>
