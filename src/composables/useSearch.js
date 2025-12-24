/**
 * useSearch - 搜索和排序可组合函数
 * 提供搜索过滤和排序逻辑
 */

import { ref, computed } from 'vue'

export function useSearch(items = ref([])) {
  const searchQuery = ref('')
  const sortBy = ref('nameEn')
  const sortOrder = ref('asc') // 'asc' 或 'desc'

  /**
   * 基于搜索查询过滤的项目
   */
  const filteredItems = computed(() => {
    if (!searchQuery.value) {
      return items.value
    }

    const searchLower = searchQuery.value.toLowerCase()

    return items.value.filter(item => {
      return (
        item.nameEn.toLowerCase().includes(searchLower) ||
        item.nameCn.includes(searchQuery.value) ||
        item.alias.toLowerCase().includes(searchLower) ||
        item.domain.toLowerCase().includes(searchLower)
      )
    })
  })

  /**
   * 基于 sortBy 和 sortOrder 排序的项目
   */
  const sortedItems = computed(() => {
    const sorted = [...filteredItems.value]

    sorted.sort((a, b) => {
      const aVal = a[sortBy.value]
      const bVal = b[sortBy.value]
      const modifier = sortOrder.value === 'desc' ? -1 : 1
      return aVal.localeCompare(bVal) * modifier
    })

    return sorted
  })

  /**
   * 切换排序顺序
   */
  const toggleSortOrder = () => {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  }

  /**
   * 设置排序字段
   * @param {string} field - 排序字段
   */
  const setSortBy = (field) => {
    sortBy.value = field
  }

  /**
   * 设置搜索查询
   * @param {string} query - 搜索查询
   */
  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  /**
   * 清除搜索
   */
  const clearSearch = () => {
    searchQuery.value = ''
  }

  /**
   * 重置所有搜索和排序状态
   */
  const reset = () => {
    searchQuery.value = ''
    sortBy.value = 'nameEn'
    sortOrder.value = 'asc'
  }

  return {
    searchQuery,
    sortBy,
    sortOrder,
    filteredItems,
    sortedItems,
    toggleSortOrder,
    setSortBy,
    setSearchQuery,
    clearSearch,
    reset
  }
}
