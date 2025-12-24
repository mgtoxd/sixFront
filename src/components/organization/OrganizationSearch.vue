<template>
  <div class="search-controls">
    <div class="search-main">
      <div class="search-input-wrapper">
        <span class="search-icon">🔍</span>
        <input
          type="text"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          placeholder="搜索组织..."
          class="search-input"
        />
      </div>
    </div>

    <div class="search-filters">
      <select
        :value="sortBy"
        @change="$emit('update:sortBy', $event.target.value)"
        class="sort-select"
      >
        <option value="nameEn">按英文名排序</option>
        <option value="nameCn">按中文名排序</option>
        <option value="alias">按别名排序</option>
        <option value="domain">按域名排序</option>
      </select>

      <button
        class="sort-order-btn"
        @click="$emit('update:sortOrder', sortOrder === 'asc' ? 'desc' : 'asc')"
        :aria-label="`Sort order: ${sortOrder}`"
      >
        {{ sortOrder === 'asc' ? '↑ Asc' : '↓ Desc' }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  sortBy: {
    type: String,
    default: 'nameEn'
  },
  sortOrder: {
    type: String,
    default: 'asc'
  }
})

const emit = defineEmits(['update:modelValue', 'update:sortBy', 'update:sortOrder'])
</script>

<style scoped>
.search-controls {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.search-main {
  margin-bottom: 1rem;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 1rem;
  font-size: 1.2rem;
  opacity: 0.5;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  color: #213547;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.25s;
}

.search-input:focus {
  outline: none;
  border-color: #646cff;
  box-shadow: 0 0 0 3px rgba(100, 108, 255, 0.1);
}

.search-filters {
  display: flex;
  gap: 1rem;
}

.sort-select {
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  color: #213547;
  font-family: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.25s;
}

.sort-select:focus {
  outline: none;
  border-color: #646cff;
}

.sort-order-btn {
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #646cff;
  color: white;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  white-space: nowrap;
}

.sort-order-btn:hover {
  background-color: #747bff;
}

@media (max-width: 768px) {
  .search-filters {
    flex-direction: column;
  }

  .sort-select {
    width: 100%;
  }

  .sort-order-btn {
    width: 100%;
  }
}
</style>
