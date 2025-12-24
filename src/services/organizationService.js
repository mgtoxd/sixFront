/**
 * 组织服务 - 模拟 API 层
 * 模拟 API 调用并添加延迟，结构化以便于后端替换
 */

import { mockOrganizations } from '@/data/mockOrganizations.js'

// 模拟 API 延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class OrganizationService {
  constructor() {
    // 克隆模拟数据以避免修改原数据
    this.organizations = [...mockOrganizations]
  }

  /**
   * 获取所有组织，支持分页、搜索和排序
   * @param {Object} params - 查询参数
   * @returns {Promise<Object>} 分页响应
   */
  async getAll(params = {}) {
    await delay(500) // 模拟网络延迟

    let filtered = [...this.organizations]

    // 应用搜索过滤
    if (params.search) {
      const searchLower = params.search.toLowerCase()
      filtered = filtered.filter(org =>
        org.nameEn.toLowerCase().includes(searchLower) ||
        org.nameCn.includes(params.search) ||
        org.alias.toLowerCase().includes(searchLower) ||
        org.domain.toLowerCase().includes(searchLower)
      )
    }

    // 应用排序
    if (params.sortBy) {
      filtered.sort((a, b) => {
        const aVal = a[params.sortBy]
        const bVal = b[params.sortBy]
        const modifier = params.sortOrder === 'desc' ? -1 : 1
        return aVal.localeCompare(bVal) * modifier
      })
    }

    // 应用分页
    const page = params.page || 1
    const limit = params.limit || 12
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginated = filtered.slice(startIndex, endIndex)

    return {
      data: paginated,
      pagination: {
        currentPage: page,
        pageSize: limit,
        totalItems: filtered.length,
        totalPages: Math.ceil(filtered.length / limit),
        hasNextPage: endIndex < filtered.length,
        hasPrevPage: page > 1
      }
    }
  }

  /**
   * 根据 ID 获取单个组织
   * @param {string} id - 组织 ID
   * @returns {Promise<Object|null>} 组织对象或 null
   */
  async getById(id) {
    await delay(300)
    return this.organizations.find(org => org.id === id) || null
  }

  /**
   * 创建新组织
   * @param {Object} orgData - 组织数据
   * @returns {Promise<Object>} 创建的组织
   */
  async create(orgData) {
    await delay(500)

    // 检查别名是否重复
    const existingByAlias = this.organizations.find(
      org => org.alias === orgData.alias
    )
    if (existingByAlias) {
      const error = new Error('Organization with this alias already exists')
      error.code = 'CONFLICT'
      error.field = 'alias'
      throw error
    }

    // 检查域名是否重复
    const existingByDomain = this.organizations.find(
      org => org.domain === orgData.domain
    )
    if (existingByDomain) {
      const error = new Error('Organization with this domain already exists')
      error.code = 'CONFLICT'
      error.field = 'domain'
      throw error
    }

    const newOrg = {
      id: `org_${Date.now()}`,
      ...orgData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    this.organizations.push(newOrg)
    return newOrg
  }

  /**
   * 更新现有组织
   * @param {string} id - 组织 ID
   * @param {Object} orgData - 更新的数据
   * @returns {Promise<Object>} 更新后的组织
   */
  async update(id, orgData) {
    await delay(500)

    const index = this.organizations.findIndex(org => org.id === id)
    if (index === -1) {
      const error = new Error('Organization not found')
      error.code = 'NOT_FOUND'
      throw error
    }

    // 检查别名是否重复（排除当前）
    if (orgData.alias) {
      const existingByAlias = this.organizations.find(
        org => org.alias === orgData.alias && org.id !== id
      )
      if (existingByAlias) {
        const error = new Error('Organization with this alias already exists')
        error.code = 'CONFLICT'
        error.field = 'alias'
        throw error
      }
    }

    // 检查域名是否重复（排除当前）
    if (orgData.domain) {
      const existingByDomain = this.organizations.find(
        org => org.domain === orgData.domain && org.id !== id
      )
      if (existingByDomain) {
        const error = new Error('Organization with this domain already exists')
        error.code = 'CONFLICT'
        error.field = 'domain'
        throw error
      }
    }

    this.organizations[index] = {
      ...this.organizations[index],
      ...orgData,
      updatedAt: new Date().toISOString()
    }

    return this.organizations[index]
  }

  /**
   * 删除组织
   * @param {string} id - 组织 ID
   * @returns {Promise<Object>} 已删除的组织 ID
   */
  async delete(id) {
    await delay(500)

    const index = this.organizations.findIndex(org => org.id === id)
    if (index === -1) {
      const error = new Error('Organization not found')
      error.code = 'NOT_FOUND'
      throw error
    }

    this.organizations.splice(index, 1)
    return { id }
  }
}

// 导出单例实例
export default new OrganizationService()
