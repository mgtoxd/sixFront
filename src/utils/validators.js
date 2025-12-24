/**
 * 表单验证器
 * 组织字段的验证工具
 */

/**
 * 验证域名格式
 * 接受: "example.com", "sub.example.co.uk"
 * @param {string} domain - 要验证的域名
 * @returns {boolean} 是否有效
 */
export function validateDomain(domain) {
  if (!domain || typeof domain !== 'string') {
    return false
  }

  // 域名正则：允许子域名、多级 TLD
  const domainRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/i
  return domainRegex.test(domain)
}

/**
 * 验证别名格式
 * 接受: 2-50 个字符，仅限字母数字和连字符
 * @param {string} alias - 要验证的别名
 * @returns {boolean} 是否有效
 */
export function validateAlias(alias) {
  if (!alias || typeof alias !== 'string') {
    return false
  }

  // 别名正则：字母数字和连字符，2-50 个字符
  const aliasRegex = /^[a-z0-9-]{2,50}$/i
  return aliasRegex.test(alias)
}

/**
 * 验证组织名称
 * 接受: 1-255 个字符，非空
 * @param {string} name - 要验证的名称
 * @returns {boolean} 是否有效
 */
export function validateName(name) {
  return (
    name &&
    typeof name === 'string' &&
    name.trim().length >= 1 &&
    name.trim().length <= 255
  )
}

/**
 * 验证所有组织表单字段
 * @param {Object} formData - 要验证的表单数据
 * @returns {Object} 验证结果 { isValid: boolean, errors: Object }
 */
export function validateOrganizationForm(formData) {
  const errors = {}

  // 验证英文名
  if (!validateName(formData.nameEn)) {
    errors.nameEn = '英文名必填（1-255个字符）'
  }

  // 验证中文名
  if (!validateName(formData.nameCn)) {
    errors.nameCn = '中文名必填（1-255个字符）'
  }

  // 验证别名
  if (!formData.alias || !formData.alias.trim()) {
    errors.alias = '别名必填'
  } else if (!validateAlias(formData.alias)) {
    errors.alias = '别名必须是2-50个字符，仅限字母数字和连字符'
  }

  // 验证域名
  if (!formData.domain || !formData.domain.trim()) {
    errors.domain = '域名必填'
  } else if (!validateDomain(formData.domain)) {
    errors.domain = '域名格式无效（例如：example.com）'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
