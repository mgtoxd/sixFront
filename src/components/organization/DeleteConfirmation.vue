<template>
  <Dialog
    :visible="visible"
    :modal="true"
    header="确认删除"
    :style="{ width: '450px' }"
    @update:visible="$emit('update:visible', $event)"
    @hide="handleCancel"
  >
    <div class="delete-confirmation">
      <div class="warning-icon">⚠️</div>
      <p class="warning-text">
        确定要删除 <strong>{{ organization?.nameEn }}</strong
        >吗？
      </p>
      <p class="subtext">{{ organization?.nameCn }}</p>
      <p class="warning-subtext">此操作无法撤销。</p>

      <div class="confirmation-actions">
        <Button label="取消" severity="secondary" @click="handleCancel" />
        <Button label="删除" severity="danger" @click="handleConfirm" />
      </div>
    </div>
  </Dialog>
</template>

<script setup>
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  organization: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:visible', 'confirm', 'cancel'])

function handleConfirm() {
  emit('confirm', props.organization)
}

function handleCancel() {
  emit('update:visible', false)
  emit('cancel')
}
</script>

<style scoped>
.delete-confirmation {
  text-align: center;
}

.warning-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.warning-text {
  font-size: 1.1rem;
  color: #213547;
  margin-bottom: 0.5rem;
}

.warning-text strong {
  color: #ef4444;
}

.subtext {
  color: #6b7280;
  margin-bottom: 1rem;
}

.warning-subtext {
  color: #ef4444;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.confirmation-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .confirmation-actions {
    flex-direction: column-reverse;
  }

  .confirmation-actions button {
    width: 100%;
  }
}
</style>
