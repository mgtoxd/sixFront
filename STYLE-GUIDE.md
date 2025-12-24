# 样式指南 (Style Guide)

本文档详细描述了项目的样式系统，基于浅色主题设计语言。所有组件和页面应遵循本指南以确保视觉一致性。

---

## 概述（Overview）

本项目采用现代、简洁的浅色主题设计语言，注重可读性和用户体验。设计理念包括：

- **简洁优雅**: 使用充足的留白和清晰的层次结构
- **柔和色调**: 低饱和度的辅助色与鲜明的主题色形成对比
- **微交互**: 平滑的过渡动画和悬停效果增强用户体验
- **响应式优先**: 确保在各种设备上的一致体验
- **可访问性**: 高对比度文本和清晰的状态反馈

设计系统灵感来源于现代 SaaS 产品和开发者工具平台，强调内容优先和功能性的平衡。

---

## 色彩调色板（Color Palette）

### 主色调（Primary Colors）

```css
/* 主题色 - 用于品牌元素、链接、按钮、高亮 */
--color-primary: #646cff;
--color-primary-hover: #747bff;

/* 用于强调和悬停状态 */
--color-accent: #747bff;
```

**使用场景：**
- 链接文本
- 按钮背景
- Logo
- 交互元素的悬停状态
- 标签悬停背景

### 中性色（Neutral Colors）

```css
/* 文本颜色 */
--color-text-primary: #213547;      /* 主要文本 - 标题、正文 */
--color-text-secondary: #6b7280;    /* 次要文本 - 元信息、描述 */
--color-text-muted: #9ca3af;        /* 弱化文本 - 占位符、禁用状态 */

/* 背景颜色 */
--color-bg-primary: #ffffff;        /* 主背景 */
--color-bg-secondary: #f9f9f9;      /* 次要背景 - 卡片、侧边栏 */
--color-bg-tertiary: #f3f4f6;       /* 三级背景 - Hero 渐变起点 */

/* 边框颜色 */
--color-border-light: rgba(0, 0, 0, 0.05);   /* 轻微分割 */
--color-border-medium: rgba(0, 0, 0, 0.08);  /* 中等分割 */
--color-border-heavy: rgba(0, 0, 0, 0.1);    /* 明显分割 */
--color-border-input: rgba(0, 0, 0, 0.15);   /* 输入框边框 */
```

### 色彩映射表

| 用途 | 颜色值 | Hex | 备注 |
|------|--------|-----|------|
| 主要文本 | `--color-text-primary` | #213547 | 深蓝灰色，高对比度 |
| 次要文本 | `--color-text-secondary` | #6b7280 | 中灰色，可读性强 |
| 主题色 | `--color-primary` | #646cff | 鲜明的紫蓝色 |
| 主题悬停 | `--color-primary-hover` | #747bff | 更亮的紫蓝色 |
| 主背景 | `--color-bg-primary` | #ffffff | 纯白 |
| 次背景 | `--color-bg-secondary` | #f9f9f9 | 浅灰 |
| 卡片背景 | `--color-bg-secondary` | #f9f9f9 | 与次背景相同 |

### 色彩使用原则

1. **保持对比度**: 文本与背景对比度至少 4.5:1（WCAG AA 标准）
2. **有限使用主题色**: 避免过度使用，保留给重要的交互元素
3. **渐进式视觉层次**: 使用不同灰度值建立信息层次
4. **一致的边框透明度**: 根据分割重要程度选择透明度级别

---

## 排版（Typography）

### 字体家族（Font Family）

```css
/* 主字体 */
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

/* 字体加载 */
@import: url('https://rsms.me/inter/inter.css');
```

**Inter 字体特点：**
- 专为屏幕阅读优化
- 优秀的可读性
- 多种字重选择
- 良好的跨平台兼容性

### 字体渲染优化

```css
font-synthesis: none;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

### 字体大小（Font Sizes）

| 元素 | 字号 | 行高 | 字重 | 使用场景 |
|------|------|------|------|----------|
| H1 (Hero) | 3.2em (51.2px) | 1.1 | 700 | 页面主标题 |
| H1 (Mobile) | 2.5em (40px) | 1.1 | 700 | 移动端主标题 |
| H2 (Card) | 1.75rem (28px) | 1.3 | 继承 | 卡片标题 |
| H3 (Widget) | 1.1rem (17.6px) | 继承 | 继承 | 小节标题 |
| Body Large | 1.2em (19.2px) | 1.5 | 400 | Hero 描述 |
| Body Base | 1rem (16px) | 1.5 | 400 | 正文 |
| Body Small | 0.9rem (14.4px) | 继承 | 继承 | 侧边栏链接 |
| Meta | 0.875rem (14px) | 继承 | 继承 | 元信息 |
| Tag | 0.85rem (13.6px) | 继承 | 继承 | 标签 |

### 字重（Font Weights）

```css
/* 常规文本 */
font-weight: 400;  /* 正常 */

/* 强调文本 */
font-weight: 500;  /* 中等 - 链接、按钮文本、导航 */

/* 标题 */
font-weight: 700;  /* 粗体 - Logo、主标题 */
```

### 字体搭配原则

1. **标题**: 使用更大字号和更紧凑的行高（1.1-1.3）
2. **正文**: 基础字号 1rem，行高 1.5 确保可读性
3. **元信息**: 使用较小字号（0.875rem）和次要色
4. **交互元素**: 使用中等字重（500）区分可点击元素

### 行高（Line Height）

```css
/* 紧凑 - 标题 */
line-height: 1.1;   /* Hero 标题 */
line-height: 1.3;   /* 卡片标题 */

/* 标准 - 正文 */
line-height: 1.5;   /* 全局默认、正文段落 */

/* 继承 - 元素内联 */
line-height: inherit;  /* 大多数列表和小元素 */
```

---

## 间距系统（Spacing System）

### 基础间距单位

基于 `rem` 单位的间距系统，基准为 16px：

| 名称 | 值 | 像素 | 使用场景 |
|------|-----|------|----------|
| xs | 0.25rem | 4px | 紧凑间距（很少使用） |
| sm | 0.5rem | 8px | 小元素内边距、标签间距 |
| md | 0.75rem | 12px | 小部件分隔 |
| base | 1rem | 16px | 基础间距单位 |
| lg | 1.5rem | 24px | 组件内边距、章节间距 |
| xl | 2rem | 32px | 页面边距、卡片内边距 |
| 2xl | 3rem | 48px | 大区块间距 |
| 3xl | 4rem | 64px | 页面顶部内边距 |

### 实际应用

```css
/* 页面边距 */
padding: 2rem;           /* 页面左右边距 */

/* 组件内边距 */
padding: 1.5rem;         /* Widget 内边距 */
padding: 2rem;           /* Post Card 内边距 */
padding: 0.4rem 0.8rem;  /* Tag 内边距 */

/* 间距 */
gap: 0.5rem;             /* Tag 间距 */
gap: 2rem;               /* Post Card 间距 */
gap: 3rem;               /* Grid 列间距 */
margin-bottom: 0.5rem;   /* Meta 底部 */
margin-bottom: 0.75rem;  /* H2 底部 */
margin-bottom: 1rem;     /* 段落底部 */
margin-bottom: 1.5rem;   /* Widget 间距 */

/* 导航间距 */
gap: 2rem;               /* 桌面导航链接间距 */
gap: 1rem;               /* 移动导航链接间距 */
```

### 容器宽度

```css
/* 最大内容宽度 */
max-width: 1280px;       /* 主容器 */
max-width: 600px;        /* Hero 描述文本 */

/* 侧边栏宽度 */
300px                    /* 固定宽度侧边栏 */
```

---

## 组件样式（Component Styles）

### 导航栏（Header / Navigation）

```css
header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

nav {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #646cff;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-links a {
  font-weight: 500;
  transition: color 0.25s;
  color: #213547;
}

.nav-links a:hover {
  color: #646cff;
}
```

**关键样式：**
- 固定高度，底部边框分隔
- Logo 使用主题色和粗体
- 导航链接悬停变为主题色
- 平滑的颜色过渡动画

### Hero 区域

```css
.hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
}

.hero h1 {
  font-size: 3.2em;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: #213547;
}

.hero p {
  font-size: 1.2em;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero span {
  color: #646cff;
}
```

**关键样式：**
- 渐变背景（浅灰到白）
- 居中对齐
- 大号标题，限制文本宽度
- 主题色高亮关键词

### 博客卡片（Post Card）

```css
.post-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.post-card:hover {
  border-color: #646cff;
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.15);
  transform: translateY(-2px);
}

.post-meta {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.post-card h2 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  color: #213547;
}

.post-card p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #646cff;
}
```

**关键样式：**
- 浅灰背景，圆角 12px
- 悬停时边框变为主题色，阴影增强，向上移动 2px
- 层次化排版（meta > h2 > p > read-more）
- "Read More" 使用 flexbox 对齐图标

### 侧边栏 Widget

```css
aside {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.widget {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.widget h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #213547;
}

.widget ul {
  list-style: none;
}

.widget li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.widget li:last-child {
  border-bottom: none;
}

.widget li a {
  color: #6b7280;
  font-size: 0.9rem;
}

.widget li a:hover {
  color: #646cff;
}
```

**关键样式：**
- 粘性定位（sticky），距顶部 2rem
- 标题下方有边框分隔
- 列表项之间有细微边框
- 链接悬停变为主题色

### 标签（Tags）

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #ffffff;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  color: #6b7280;
  transition: all 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.tag:hover {
  background-color: #646cff;
  color: white;
  border-color: #646cff;
}
```

**关键样式：**
- 白色背景，小圆角（6px）
- 悬停时反转颜色（主题色背景，白色文字）
- Flexbox 布局，自动换行

### 按钮（Buttons）

```css
/* 主按钮 */
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  color: white;
  cursor: pointer;
  transition: all 0.25s;
}
```

**关键样式：**
- 圆角 8px
- 主题色背景
- 无边框
- 字重 500

### 输入框（Inputs）

```css
input[type="email"] {
  width: 100%;
  padding: 0.6rem;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #ffffff;
  color: #213547;
  font-family: inherit;
  margin-bottom: 0.5rem;
}
```

**关键样式：**
- 全宽
- 圆角 6px（略小于按钮）
- 中等透明度边框
- 继承字体

### Footer

```css
footer {
  margin-top: 4rem;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #6b7280;
  background-color: #f9f9f9;
}
```

**关键样式：**
- 浅灰背景
- 顶部边框
- 居中对齐
- 次要文本色

---

## 阴影与层级（Shadows & Elevation）

### 阴影系统

```css
/* 级别 1 - 轻微提升（卡片默认） */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

/* 级别 2 - 中等提升（卡片悬停） */
box-shadow: 0 4px 12px rgba(100, 108, 255, 0.15);
```

### 使用场景

| 级别 | 阴影值 | 应用场景 |
|------|--------|----------|
| 0 | none | 默认状态、嵌入元素 |
| 1 | `0 1px 3px rgba(0, 0, 0, 0.05)` | 卡片默认状态 |
| 2 | `0 4px 12px rgba(100, 108, 255, 0.15)` | 卡片悬停状态 |

### 层级原则

1. **静默状态**: 最小阴影或无阴影
2. **悬停状态**: 增强阴影，配合颜色变化
3. **主题色阴影**: 悬停时使用带主题色的阴影增强关联性

---

## 动画与过渡效果（Animations & Transitions）

### 过渡时长

```css
transition-duration: 0.25s;  /* 标准过渡 - 所有交互元素 */
```

### 过渡属性

```css
/* 全部属性 */
transition: all 0.25s;

/* 特定属性 */
transition: color 0.25s;           /* 链接、导航 */
transition: border-color 0.25s;    /* 输入框、边框 */
transition: background-color 0.25s; /* 标签、按钮 */
```

### 常用过渡场景

| 元素 | 过渡属性 | 时长 | 效果 |
|------|----------|------|------|
| 链接 | color | 0.25s | 平滑颜色变化 |
| 卡片 | all | 0.25s | 边框、阴影、位移 |
| 标签 | all | 0.25s | 背景、文字、边框颜色 |
| 按钮 | all | 0.25s | 背景颜色 |

### 变换效果

```css
/* 卡片悬停提升 */
.post-card:hover {
  transform: translateY(-2px);
}
```

### 动画原则

1. **快速响应**: 0.25s 过渡，感觉即时但不突兀
2. **缓动函数**: 使用默认 ease（无需指定）
3. **组合效果**: 悬停时同时改变多个属性（颜色、阴影、位移）
4. **性能考虑**: 只对 transform 和 opacity 做 GPU 加速

---

## 圆角（Border Radius）

### 圆角系统

```css
/* 小圆角 - 标签、输入框 */
border-radius: 6px;

/* 中圆角 - 按钮 */
border-radius: 8px;

/* 大圆角 - 卡片、Widget */
border-radius: 12px;
```

### 使用场景

| 圆角值 | 应用场景 |
|--------|----------|
| 6px | Tag、Input |
| 8px | Button |
| 12px | Post Card、Widget |

### 圆角原则

1. **小元素小圆角**: 标签和输入框使用最小圆角
2. **中元素中圆角**: 按钮使用中等圆角
3. **大元素大圆角**: 容器和卡片使用最大圆角
4. **保持一致性**: 同类型元素使用相同圆角

---

## 不透明度与透明效果（Opacity & Transparency）

### 边框透明度

```css
/* 轻微分隔 */
rgba(0, 0, 0, 0.05)

/* 中等分隔 */
rgba(0, 0, 0, 0.08)

/* 明显分隔 */
rgba(0, 0, 0, 0.1)

/* 输入框边框 */
rgba(0, 0, 0, 0.15)

/* 阴影透明度 */
rgba(0, 0, 0, 0.05)      /* 默认阴影 */
rgba(100, 108, 255, 0.15) /* 主题色阴影 */
```

### 透明度层级

| 值 | 使用场景 | 视觉强度 |
|----|----------|----------|
| 0.05 | 卡片默认阴影 | 极轻微 |
| 0.08 | 卡片边框 | 轻微 |
| 0.1 | 分隔线、Widget 标题边框 | 中等 |
| 0.15 | 输入框边框 | 较明显 |
| 0.15 (主题色) | 悬停阴影 | 明显 |

### 使用原则

1. **递增透明度**: 根据视觉重要性增加不透明度
2. **保持一致性**: 同类型的分割线使用相同透明度
3. **主题色特殊处理**: 悬停时使用主题色阴影增强关联

---

## 项目中常见的 Tailwind CSS 用法（Common Tailwind CSS Usage）

虽然当前项目使用原生 CSS，但以下是等效的 Tailwind CSS 类名映射：

### 布局

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `display: flex` | `flex` |
| `flex-direction: column` | `flex-col` |
| `justify-content: space-between` | `justify-between` |
| `align-items: center` | `items-center` |
| `display: grid` | `grid` |
| `grid-template-columns: 1fr 300px` | `grid-cols-[1fr_300px]` |
| `gap: 2rem` | `gap-8` |
| `position: sticky` | `sticky` |
| `top: 2rem` | `top-8` |

### 间距

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `padding: 2rem` | `p-8` |
| `padding: 1.5rem` | `p-6` |
| `padding: 0.4rem 0.8rem` | `px-3 py-1.5` |
| `margin: 0 auto` | `mx-auto` |
| `gap: 0.5rem` | `gap-2` |
| `gap: 3rem` | `gap-12` |

### 颜色

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `color: #646cff` | `text-[#646cff]` |
| `color: #213547` | `text-[#213547]` |
| `color: #6b7280` | `text-gray-500` |
| `background-color: #f9f9f9` | `bg-gray-50` |
| `background-color: #ffffff` | `bg-white` |

### 排版

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `font-size: 1.5rem` | `text-2xl` |
| `font-size: 1.75rem` | `text-3xl` |
| `font-size: 1.1rem` | `text-lg` |
| `font-weight: 500` | `font-medium` |
| `font-weight: 700` | `font-bold` |
| `text-align: center` | `text-center` |
| `line-height: 1.5` | `leading-relaxed` |

### 圆角

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `border-radius: 6px` | `rounded-md` |
| `border-radius: 8px` | `rounded-lg` |
| `border-radius: 12px` | `rounded-xl` |

### 阴影

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05)` | `shadow-sm` |
| `box-shadow: 0 4px 12px rgba(100, 108, 255, 0.15)` | 自定义 `shadow-[0_4px_12px_rgba(100,108,255,0.15)]` |

### 过渡

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `transition: all 0.25s` | `transition-all duration-250` |
| `transition: color 0.25s` | `transition-colors duration-250` |

### 其他

| 原生 CSS | Tailwind 类 |
|----------|-------------|
| `opacity: 1` | `opacity-100` |
| `cursor: pointer` | `cursor-pointer` |
| `list-style: none` | `list-none` |
| `max-width: 1280px` | `max-w-[1280px]` |
| `width: 100%` | `w-full` |

---

## 示例组件参考设计代码（Example Component Reference Design Code）

### 完整的博客卡片组件

```html
<!-- HTML 结构 -->
<article class="post-card">
  <div class="post-meta">December 24, 2024 · Vue.js</div>
  <h2><a href="#">Getting Started with Vue 3 and PrimeVue</a></h2>
  <p>Learn how to build modern web applications using Vue 3 and PrimeVue component library.</p>
  <a href="#" class="read-more">Read More →</a>
</article>

<!-- CSS 样式 -->
<style>
.post-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.post-card:hover {
  border-color: #646cff;
  box-shadow: 0 4px 12px rgba(100, 108, 255, 0.15);
  transform: translateY(-2px);
}

.post-meta {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.post-card h2 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  color: #213547;
}

.post-card h2 a {
  color: inherit;
}

.post-card h2 a:hover {
  color: #646cff;
}

.post-card p {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #646cff;
}

.read-more:hover {
  color: #747bff;
}
</style>
```

### 完整的 Widget 组件

```html
<!-- HTML 结构 -->
<div class="widget">
  <h3>Popular Tags</h3>
  <div class="tags">
    <a href="#" class="tag">vue</a>
    <a href="#" class="tag">react</a>
    <a href="#" class="tag">javascript</a>
    <a href="#" class="tag">css</a>
    <a href="#" class="tag">webdev</a>
  </div>
</div>

<!-- CSS 样式 -->
<style>
.widget {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.widget h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #213547;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #ffffff;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  color: #6b7280;
  transition: all 0.25s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.tag:hover {
  background-color: #646cff;
  color: white;
  border-color: #646cff;
}
</style>
```

### 按钮组件

```html
<!-- HTML 结构 -->
<button>Subscribe</button>

<!-- CSS 样式 -->
<style>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #646cff;
  color: white;
  cursor: pointer;
  transition: all 0.25s;
}

button:hover {
  background-color: #747bff;
}
</style>
```

---

## 其他重要细节（Additional Important Details）

### 响应式断点

```css
@media (max-width: 768px) {
  /* 移动端样式 */
  .container {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .nav-links {
    gap: 1rem;
  }
}
```

**断点策略：**
- 桌面优先设计
- 单一断点 768px（平板及以下）
- 移动端简化布局（单列）

### 全局重置

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}
```

### 链接样式

```css
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: none;
}

a:hover {
  color: #747bff;
}
```

**链接原则：**
- 始终使用中等字重（500）区分链接
- 无下划线（除非有特殊需求）
- 统一的悬停颜色

### 渐变使用

```css
/* Hero 区域渐变 */
background: linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%);
```

**渐变原则：**
- 仅用于特定区域（如 Hero）
- 使用相邻的颜色值
- 保持微妙，不喧宾夺主

### 全局字体优化

```css
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 设计资源（Design Resources）

### 字体
- **Inter**: https://rsms.me/inter/
- CDN: https://rsms.me/inter/inter.css

### 颜色参考

```
主题色: #646cff (RGB: 100, 108, 255)
主题悬停: #747bff (RGB: 116, 123, 255)

主要文本: #213547 (RGB: 33, 53, 71)
次要文本: #6b7280 (RGB: 107, 114, 128)

主背景: #ffffff (RGB: 255, 255, 255)
次背景: #f9f9f9 (RGB: 249, 249, 249)
```

---

## 维护与更新（Maintenance & Updates）

### 添加新组件时

1. 遵循现有颜色系统
2. 使用一致的间距和圆角
3. 添加 0.25s 过渡效果
4. 确保响应式兼容

### 更新样式时

1. 先更新本文档
2. 确保向后兼容
3. 测试所有使用场景
4. 更新示例代码

---

*本文档最后更新：2024年12月*
*版本：1.0.0*
