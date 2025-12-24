/**
 * 组织类型定义
 * 注意：使用 .js 文件编写 JSDoc 类型（后续可迁移到 TypeScript）
 */

/**
 * @typedef {Object} Organization
 * @property {string} id - 唯一组织标识符
 * @property {string} nameEn - 英文名（必填，1-255个字符）
 * @property {string} nameCn - 中文名（必填，1-255个字符）
 * @property {string} alias - URL别名（必填，2-50个字符，字母数字+连字符）
 * @property {string} domain - 网站域名（必填，有效格式）
 * @property {string} createdAt - ISO 8601 时间戳
 * @property {string} updatedAt - ISO 8601 时间戳
 */

/**
 * @typedef {Object} OrganizationFormData
 * @property {string} nameEn
 * @property {string} nameCn
 * @property {string} alias
 * @property {string} domain
 */

/**
 * @typedef {Object} ApiError
 * @property {string} code - 错误代码（VALIDATION_ERROR, NOT_FOUND, CONFLICT 等）
 * @property {string} message - 人类可读的错误消息
 * @property {Object.<string, string[]>} [details] - 字段特定的错误消息
 * @property {string} [field] - 导致错误的字段
 */

/**
 * @typedef {Object} ApiResponse
 * @property {boolean} success - 请求是否成功
 * @property {*} [data] - 响应数据
 * @property {ApiError} [error] - 错误详情
 */

/**
 * @typedef {Object} PaginationParams
 * @property {number} [page] - 页码（默认：1）
 * @property {number} [limit] - 每页条数（默认：12，最大：100）
 * @property {string} [search] - 搜索查询
 * @property {string} [sortBy] - 排序字段（默认：'nameEn'）
 * @property {'asc'|'desc'} [sortOrder] - 排序顺序（默认：'asc'）
 */

/**
 * @typedef {Object} PaginationInfo
 * @property {number} currentPage - 当前页码
 * @property {number} pageSize - 每页条数
 * @property {number} totalItems - 总条目数
 * @property {number} totalPages - 总页数
 * @property {boolean} hasNextPage - 是否有下一页
 * @property {boolean} hasPrevPage - 是否有上一页
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Organization[]} data - 组织数组
 * @property {PaginationInfo} pagination - 分页元数据
 */
