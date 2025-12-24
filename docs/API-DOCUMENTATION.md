# 组织管理 API 文档

## 概述

用于管理组织的 RESTful API。所有端点返回 JSON 响应。

**基础 URL**: `http://localhost:3000/api`

**Content-Type**: `application/json`

---

## 身份验证

> **注意**: 身份验证尚未实现。后续可添加 JWT/API 密钥。

---

## 端点

### 1. 获取组织列表

**GET** `/api/organizations`

获取组织的分页列表，支持可选的过滤和排序。

#### 查询参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| page | number | 1 | 页码（从1开始） |
| limit | number | 12 | 每页条数（最大：100） |
| search | string | - | 搜索 nameEn、nameCn、alias、domain |
| sortBy | string | nameEn | 排序字段 |
| sortOrder | string | asc | 排序顺序：'asc' 或 'desc' |

#### 响应 (200 OK)

```json
{
  "success": true,
  "data": [
    {
      "id": "org_12345",
      "nameEn": "Acme Corporation",
      "nameCn": "阿科姆公司",
      "alias": "acme",
      "domain": "acme.com",
      "createdAt": "2025-01-15T10:30:00Z",
      "updatedAt": "2025-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 1,
    "pageSize": 12,
    "totalItems": 45,
    "totalPages": 4,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

#### 示例请求

```bash
curl -X GET "http://localhost:3000/api/organizations?page=1&limit=12&search=acme&sortBy=nameEn&sortOrder=asc"
```

---

### 2. 获取单个组织

**GET** `/api/organizations/:id`

获取特定组织的详细信息。

#### URL 参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | string | 是 | 组织 ID |

#### 响应 (200 OK)

```json
{
  "success": true,
  "data": {
    "id": "org_12345",
    "nameEn": "Acme Corporation",
    "nameCn": "阿科姆公司",
    "alias": "acme",
    "domain": "acme.com",
    "createdAt": "2025-01-15T10:30:00Z",
    "updatedAt": "2025-01-15T10:30:00Z"
  }
}
```

#### 错误响应 (404 Not Found)

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "组织不存在"
  }
}
```

---

### 3. 创建组织

**POST** `/api/organizations`

创建新组织。

#### 请求体

```json
{
  "nameEn": "Acme Corporation",
  "nameCn": "阿科姆公司",
  "alias": "acme",
  "domain": "acme.com"
}
```

#### 验证规则

| 字段 | 规则 |
|------|------|
| nameEn | 必填，1-255 个字符，唯一 |
| nameCn | 必填，1-255 个字符 |
| alias | 必填，2-50 个字符，字母数字+连字符，唯一 |
| domain | 必填，有效域名格式，唯一 |

#### 响应 (201 Created)

```json
{
  "success": true,
  "data": {
    "id": "org_12345",
    "nameEn": "Acme Corporation",
    "nameCn": "阿科姆公司",
    "alias": "acme",
    "domain": "acme.com",
    "createdAt": "2025-01-15T10:30:00Z",
    "updatedAt": "2025-01-15T10:30:00Z"
  }
}
```

#### 错误响应 (400 Bad Request)

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "验证失败",
    "details": {
      "alias": ["别名至少需要 2 个字符"],
      "domain": ["无效的域名格式"]
    }
  }
}
```

#### 错误响应 (409 Conflict)

```json
{
  "success": false,
  "error": {
    "code": "CONFLICT",
    "message": "该别名已存在",
    "field": "alias"
  }
}
```

---

### 4. 更新组织

**PUT** `/api/organizations/:id`

更新现有组织。

#### URL 参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | string | 是 | 组织 ID |

#### 请求体

```json
{
  "nameEn": "Acme Corporation Updated",
  "nameCn": "阿科姆公司更新",
  "alias": "acme-updated",
  "domain": "acme-updated.com"
}
```

#### 响应 (200 OK)

```json
{
  "success": true,
  "data": {
    "id": "org_12345",
    "nameEn": "Acme Corporation Updated",
    "nameCn": "阿科姆公司更新",
    "alias": "acme-updated",
    "domain": "acme-updated.com",
    "createdAt": "2025-01-15T10:30:00Z",
    "updatedAt": "2025-01-15T11:00:00Z"
  }
}
```

#### 错误响应

参见创建端点的错误响应格式 (400, 404, 409)。

---

### 5. 删除组织

**DELETE** `/api/organizations/:id`

删除组织。

#### URL 参数

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| id | string | 是 | 组织 ID |

#### 响应 (200 OK)

```json
{
  "success": true,
  "message": "组织删除成功",
  "data": {
    "id": "org_12345"
  }
}
```

#### 错误响应 (404 Not Found)

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "组织不存在"
  }
}
```

#### 错误响应 (409 Conflict)

```json
{
  "success": false,
  "error": {
    "code": "CONFLICT",
    "message": "无法删除包含活跃用户的组织"
  }
}
```

---

## 错误代码

| 代码 | HTTP 状态 | 描述 |
|------|----------|------|
| VALIDATION_ERROR | 400 | 请求验证失败 |
| INVALID_PARAMS | 400 | 无效的查询参数 |
| NOT_FOUND | 404 | 资源不存在 |
| CONFLICT | 409 | 资源冲突（重复） |
| INTERNAL_ERROR | 500 | 服务器错误 |

---

## 数据模型

### 组织

```typescript
{
  id: string              // 自动生成的唯一标识符
  nameEn: string          // 英文名（必填，1-255 个字符）
  nameCn: string          // 中文名（必填，1-255 个字符）
  alias: string           // URL 别名（必填，2-50 个字符，字母数字 + 连字符）
  domain: string          // 网站域名（必填，有效格式）
  createdAt: string       // ISO 8601 时间戳（自动生成）
  updatedAt: string       // ISO 8601 时间戳（自动更新）
}
```

### 分页信息

```typescript
{
  currentPage: number     // 当前页码（从 1 开始）
  pageSize: number        // 每页条数
  totalItems: number      // 总条目数
  totalPages: number      // 总页数
  hasNextPage: boolean    // 是否有下一页
  hasPrevPage: boolean    // 是否有上一页
}
```

---

## 集成示例

### JavaScript (Fetch)

```javascript
// 获取组织列表
const response = await fetch('http://localhost:3000/api/organizations?page=1&limit=12')
const data = await response.json()
console.log(data)

// 创建组织
const newOrg = await fetch('http://localhost:3000/api/organizations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nameEn: 'Acme Corporation',
    nameCn: '阿科姆公司',
    alias: 'acme',
    domain: 'acme.com'
  })
})
const result = await newOrg.json()
console.log(result)
```

### Axios

```javascript
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { 'Content-Type': 'application/json' }
})

// 获取组织列表
const { data } = await api.get('/organizations', {
  params: { page: 1, limit: 12, search: 'acme' }
})

// 创建组织
const { data: newOrg } = await api.post('/organizations', {
  nameEn: 'Acme Corporation',
  nameCn: '阿科姆公司',
  alias: 'acme',
  domain: 'acme.com'
})

// 更新组织
const { data: updatedOrg } = await api.put('/organizations/org_12345', {
  nameEn: 'Acme Corporation Updated'
})

// 删除组织
await api.delete('/organizations/org_12345')
```

---

## 速率限制

> **注意**: 速率限制尚未实现。建议：每个 IP 每分钟 100 次请求。

---

## 更新日志

| 版本 | 日期 | 更改内容 |
|---------|------|---------|
| 1.0.0 | 2025-01-15 | 初始 API 规范 |
