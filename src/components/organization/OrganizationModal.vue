<template>
  <Dialog
    :visible="visible"
    :modal="true"
    :header="modalTitle"
    :style="{ width: '500px' }"
    @update:visible="$emit('update:visible', $event)"
    @hide="handleCancel"
  >
    <form @submit.prevent="handleSave" class="organization-form">
      <div class="form-group">
        <label for="nameEn">英文名 * </label>
        <InputText
          id="nameEn"
          v-model="formData.nameEn"
          :class="{ 'p-invalid': errors.nameEn }"
          placeholder="阿科姆公司"
          :disabled="isSubmitting"
          style="width: 100%"
        />
        <small v-if="errors.nameEn" class="error-message">{{ errors.nameEn }}</small>
      </div>

      <div class="form-group">
        <label for="nameCn">中文名 * </label>
        <InputText
          id="nameCn"
          v-model="formData.nameCn"
          :class="{ 'p-invalid': errors.nameCn }"
          placeholder="阿科姆公司"
          :disabled="isSubmitting"
          style="width: 100%"
        />
        <small v-if="errors.nameCn" class="error-message">{{ errors.nameCn }}</small>
      </div>

      <div class="form-group">
        <label for="alias">别名 * </label>
        <InputText
          id="alias"
          v-model="formData.alias"
          :class="{ 'p-invalid': errors.alias }"
          placeholder="acme"
          :disabled="isSubmitting"
          style="width: 100%"
        />
        <small v-if="errors.alias" class="error-message">{{ errors.alias }}</small>
        <small class="hint">2-50个字符，仅限字母数字和连字符</small>
      </div>

      <div class="form-group">
        <label for="domain">网站域名 * </label>
        <InputText
          id="domain"
          v-model="formData.domain"
          :class="{ 'p-invalid': errors.domain }"
          placeholder="acme.com"
          :disabled="isSubmitting"
          style="width: 100%"
        />
        <small v-if="errors.domain" class="error-message">{{ errors.domain }}</small>
      </div>

      <div class="form-actions">
        <Button
          type="button"
          label="取消"
          severity="secondary"
          @click="handleCancel"
          :disabled="isSubmitting"
        />
        <Button
          type="submit"
          :label="mode === 'add' ? '添加组织' : '保存更改'"
          :loading="isSubmitting"
        />
      </div>
    </form>
  </Dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { validateOrganizationForm } from '@/utils/validators.js'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'add',
    validator: (value) => ['add', 'edit'].includes(value)
  },
  organization: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['update:visible', 'save', 'cancel'])

const formData = ref({
  nameEn: '',
  nameCn: '',
  alias: '',
  domain: ''
})

const errors = ref({})
const isSubmitting = ref(false)

// Reset form when modal opens/closes or mode changes
watch(
  () => props.visible,
  (newVal) => {
    if (newVal) {
      if (props.mode === 'edit' && props.organization) {
        formData.value = {
          nameEn: props.organization.nameEn,
          nameCn: props.organization.nameCn,
          alias: props.organization.alias,
          domain: props.organization.domain
        }
      } else {
        formData.value = {
          nameEn: '',
          nameCn: '',
          alias: '',
          domain: ''
        }
      }
      errors.value = {}
    }
  }
)

const modalTitle = computed(() => {
  return props.mode === 'add' ? '添加组织' : '编辑组织'
})

function handleSave() {
  // Validate form
  const validation = validateOrganizationForm(formData.value)

  if (!validation.isValid) {
    errors.value = validation.errors
    return
  }

  isSubmitting.value = true
  emit('save', { ...formData.value })
  // Note: isSubmitting will be reset by parent component closing the modal
}

function handleCancel() {
  emit('update:visible', false)
  emit('cancel')
}

// Reset submitting state when modal closes
watch(() => props.visible, (newVal) => {
  if (!newVal) {
    isSubmitting.value = false
  }
})
</script>

<style scoped>
.organization-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #213547;
  font-size: 0.9rem;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
}

.hint {
  color: #6b7280;
  font-size: 0.8rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column-reverse;
  }

  .form-actions button {
    width: 100%;
  }
}
</style>
