/**
 * useOrganizationApi - API 集成可组合函数
 * 提供组织的 CRUD 操作
 */

import { ref } from 'vue'
import organizationService from '@/services/organizationService.js'

export function useOrganizationApi() {
  const loading = ref(false)
  const error = ref(null)

  /**
   * 获取所有组织
   * @param {Object} params - 查询参数
   * @returns {Promise<Object>} 包含数据和分页的响应
   */
  const fetchAll = async (params = {}) => {
    loading.value = true
    error.value = null

    try {
      const response = await organizationService.getAll(params)
      return response
    } catch (err) {
      error.value = err.message || '获取组织列表失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * 获取单个组织
   * @param {string} id - 组织 ID
   * @returns {Promise<Object>} 组织对象
   */
  const getById = async (id) => {
    loading.value = true
    error.value = null

    try {
      const response = await organizationService.getById(id)
      return response
    } catch (err) {
      error.value = err.message || '获取组织失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * 创建新组织
   * @param {Object} orgData - 组织数据
   * @returns {Promise<Object>} 创建的组织
   */
  const create = async (orgData) => {
    loading.value = true
    error.value = null

    try {
      const response = await organizationService.create(orgData)
      return response
    } catch (err) {
      error.value = err.message || '创建组织失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * 更新组织
   * @param {string} id - 组织 ID
   * @param {Object} orgData - 更新的数据
   * @returns {Promise<Object>} 更新后的组织
   */
  const update = async (id, orgData) => {
    loading.value = true
    error.value = null

    try {
      const response = await organizationService.update(id, orgData)
      return response
    } catch (err) {
      error.value = err.message || '更新组织失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * 删除组织
   * @param {string} id - 组织 ID
   * @returns {Promise<Object>} 已删除的组织 ID
   */
  const remove = async (id) => {
    loading.value = true
    error.value = null

    try {
      const response = await organizationService.delete(id)
      return response
    } catch (err) {
      error.value = err.message || '删除组织失败'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    fetchAll,
    getById,
    create,
    update,
    remove,
    loading,
    error
  }
}
