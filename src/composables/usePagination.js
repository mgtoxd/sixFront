/**
 * usePagination - 分页逻辑可组合函数
 * 提供分页状态和控制
 */

import { ref, computed } from 'vue'

export function usePagination(totalItems = ref(0), itemsPerPage = 12) {
  const currentPage = ref(1)
  const pageSize = ref(itemsPerPage)

  /**
   * 总页数
   */
  const totalPages = computed(() => {
    return Math.ceil(totalItems.value / pageSize.value) || 1
  })

  /**
   * 是否有下一页
   */
  const hasNextPage = computed(() => {
    return currentPage.value < totalPages.value
  })

  /**
   * 是否有上一页
   */
  const hasPrevPage = computed(() => {
    return currentPage.value > 1
  })

  /**
   * 跳转到下一页
   */
  const nextPage = () => {
    if (hasNextPage.value) {
      currentPage.value++
    }
  }

  /**
   * 跳转到上一页
   */
  const prevPage = () => {
    if (hasPrevPage.value) {
      currentPage.value--
    }
  }

  /**
   * 跳转到指定页
   * @param {number} page - 页码
   */
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  /**
   * 重置到第一页
   */
  const reset = () => {
    currentPage.value = 1
  }

  return {
    currentPage,
    pageSize,
    totalPages,
    hasNextPage,
    hasPrevPage,
    nextPage,
    prevPage,
    goToPage,
    reset
  }
}
