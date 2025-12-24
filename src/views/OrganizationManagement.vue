<template>
  <div class="organization-management">
    <header class="page-header">
      <div class="header-content">
        <h1>组织管理</h1>
        <p>管理您的组织，查看详情并维护记录</p>
      </div>
      <Button label="添加组织" icon="pi pi-plus" @click="openAddModal" />
    </header>

    <OrganizationSearch
      v-model="searchQuery"
      v-model:sort-by="sortBy"
      v-model:sort-order="sortOrder"
    />

    <OrganizationGrid
      :organizations="displayOrganizations"
      :loading="loading"
      @edit="openEditModal"
      @delete="openDeleteDialog"
    />

    <div
      v-if="!loading && displayOrganizations.length > 0"
      class="pagination"
    >
      <Button
        :disabled="currentPage === 1"
        @click="goToPrevPage"
        severity="secondary"
        label="← 上一页"
      />
      <span class="page-info">
        第 {{ currentPage }} / {{ totalPages }} 页
      </span>
      <Button
        :disabled="currentPage >= totalPages"
        @click="goToNextPage"
        severity="secondary"
        label="下一页 →"
      />
    </div>

    <OrganizationModal
      v-model:visible="modalVisible"
      :mode="modalMode"
      :organization="selectedOrganization"
      @save="handleSave"
      @cancel="handleModalCancel"
    />

    <DeleteConfirmation
      v-model:visible="deleteDialogVisible"
      :organization="selectedOrganization"
      @confirm="handleDeleteConfirm"
      @cancel="handleDeleteCancel"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useOrganizationApi } from '@/composables/useOrganizationApi.js'
import { usePagination } from '@/composables/usePagination.js'

import OrganizationGrid from '@/components/organization/OrganizationGrid.vue'
import OrganizationSearch from '@/components/organization/OrganizationSearch.vue'
import OrganizationModal from '@/components/organization/OrganizationModal.vue'
import DeleteConfirmation from '@/components/organization/DeleteConfirmation.vue'
import Button from 'primevue/button'

// State
const searchQuery = ref('')
const sortBy = ref('nameEn')
const sortOrder = ref('asc')
const modalVisible = ref(false)
const modalMode = ref('add')
const selectedOrganization = ref(null)
const deleteDialogVisible = ref(false)

// API integration
const { fetchAll, create, update, remove, loading } = useOrganizationApi()

// Data
const allOrganizations = ref([])
const totalItems = ref(0)

// Pagination
const currentPage = ref(1)
const pageSize = 12

// Computed
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize))

// Display organizations (after filtering and sorting)
const displayOrganizations = computed(() => {
  let filtered = [...allOrganizations.value]

  // Apply search
  if (searchQuery.value) {
    const searchLower = searchQuery.value.toLowerCase()
    filtered = filtered.filter((org) => {
      return (
        org.nameEn.toLowerCase().includes(searchLower) ||
        org.nameCn.includes(searchQuery.value) ||
        org.alias.toLowerCase().includes(searchLower) ||
        org.domain.toLowerCase().includes(searchLower)
      )
    })
  }

  // Apply sorting
  filtered.sort((a, b) => {
    const aVal = a[sortBy.value]
    const bVal = b[sortBy.value]
    const modifier = sortOrder.value === 'desc' ? -1 : 1
    return aVal.localeCompare(bVal) * modifier
  })

  // Apply pagination
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = startIndex + pageSize
  return filtered.slice(startIndex, endIndex)
})

// Watch for filter changes to reset page
watch([searchQuery, sortBy, sortOrder], () => {
  currentPage.value = 1
})

// Fetch data
async function loadData() {
  try {
    const response = await fetchAll({
      search: searchQuery.value,
      sortBy: sortBy.value,
      sortOrder: sortOrder.value,
      page: currentPage.value,
      limit: pageSize
    })

    // Note: We're storing all data locally for search/sort
    // In a real app with large datasets, do this on the server
    allOrganizations.value = response.data

    // Update total items for pagination
    // For mock data, we'll use the filtered count
    totalItems.value = response.pagination.totalItems
  } catch (err) {
    console.error('Failed to load organizations:', err)
  }
}

// Pagination controls
function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

function goToPrevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// CRUD operations
function openAddModal() {
  modalMode.value = 'add'
  selectedOrganization.value = null
  modalVisible.value = true
}

function openEditModal(organization) {
  modalMode.value = 'edit'
  selectedOrganization.value = organization
  modalVisible.value = true
}

function openDeleteDialog(organization) {
  selectedOrganization.value = organization
  deleteDialogVisible.value = true
}

async function handleSave(orgData) {
  try {
    if (modalMode.value === 'add') {
      await create(orgData)
    } else {
      await update(selectedOrganization.value.id, orgData)
    }

    modalVisible.value = false
    await loadData()
  } catch (err) {
    console.error('Failed to save organization:', err)
    // Handle error (show toast notification in production)
    alert(err.message || 'Failed to save organization')
  }
}

async function handleDeleteConfirm() {
  try {
    await remove(selectedOrganization.value.id)
    deleteDialogVisible.value = false
    await loadData()
  } catch (err) {
    console.error('Failed to delete organization:', err)
    alert(err.message || 'Failed to delete organization')
  }
}

function handleModalCancel() {
  modalVisible.value = false
}

function handleDeleteCancel() {
  deleteDialogVisible.value = false
}

// Load data on mount
onMounted(() => {
  loadData()
})
</script>

<style scoped>
.organization-management {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-content h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: #213547;
  line-height: 1.1;
}

.header-content p {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  padding: 2rem 0;
}

.page-info {
  color: #6b7280;
  font-weight: 500;
}

@media (max-width: 768px) {
  .organization-management {
    padding: 1rem;
  }

  .page-header {
    flex-direction: column;
    gap: 1rem;
  }

  .header-content h1 {
    font-size: 2rem;
  }

  .pagination {
    flex-direction: column;
    gap: 0.5rem;
  }

  .pagination button {
    width: 100%;
  }
}
</style>
