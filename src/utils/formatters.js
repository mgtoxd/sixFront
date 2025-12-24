/**
 * 格式化工具
 * 文本和数据格式化工具函数
 */

/**
 * 将域名格式化为带 https:// 的 URL
 * @param {string} domain - 要格式化的域名
 * @returns {string} 格式化后的 URL
 */
export function formatDomainUrl(domain) {
  if (!domain) return '#'

  // 移除已有的协议（如果有）
  const cleanDomain = domain.replace(/^https?:\/\//, '')

  return `https://${cleanDomain}`
}

/**
 * 将 ISO 日期字符串格式化为本地化字符串
 * @param {string} dateString - ISO 日期字符串
 * @param {string} locale - 语言环境代码（默认：'zh-CN'）
 * @returns {string} 格式化后的日期
 */
export function formatDate(dateString, locale = 'zh-CN') {
  if (!dateString) return '-'

  try {
    const date = new Date(dateString)
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch (e) {
    return '-'
  }
}

/**
 * 将 ISO 日期字符串格式化为日期时间字符串
 * @param {string} dateString - ISO 日期字符串
 * @param {string} locale - 语言环境代码（默认：'zh-CN'）
 * @returns {string} 格式化后的日期时间
 */
export function formatDateTime(dateString, locale = 'zh-CN') {
  if (!dateString) return '-'

  try {
    const date = new Date(dateString)
    return date.toLocaleString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  } catch (e) {
    return '-'
  }
}

/**
 * 用省略号截断文本
 * @param {string} text - 要截断的文本
 * @param {number} maxLength - 最大长度
 * @returns {string} 截断后的文本
 */
export function truncate(text, maxLength = 50) {
  if (!text) return ''
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}

/**
 * 用逗号格式化数字
 * @param {number} num - 要格式化的数字
 * @returns {string} 格式化后的数字
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return '-'
  return num.toLocaleString('zh-CN')
}

/**
 * 将字符串的首字母大写
 * @param {string} str - 要大写的字符串
 * @returns {string} 大写后的字符串
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 将字符串转换为标题格式（每个单词首字母大写）
 * @param {string} str - 要转换的字符串
 * @returns {string} 标题格式的字符串
 */
export function toTitleCase(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map(word => capitalize(word))
    .join(' ')
}

/**
 * 格式化文件大小（字节）为人类可读格式
 * @param {number} bytes - 文件大小（字节）
 * @returns {string} 格式化后的文件大小
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 字节'

  const k = 1024
  const sizes = ['字节', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
