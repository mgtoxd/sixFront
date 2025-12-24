# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# answer

一定要使用中文回答。请始终使用简体中文与我对话，并在回答时保持专业、简洁，生成代码的注释，文档等一切非代码也一定要用简体中文，总之，能用中文的地方都用中文

## Project Overview

This is a Vue 3 application built with Vite and PrimeVue component library.

## Development Commands

- **Install dependencies**: `npm install`
- **Dev server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - Builds for production to `dist/` directory
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

- **Source location**: `src/` directory
- **Entry point**: `src/main.js` - App initialization with PrimeVue
- **Root component**: `src/App.vue`
- **Build output**: `dist/` directory
- **Module system**: ES modules (type: "module" in package.json)

## Tech Stack

- **Vue 3**: Progressive JavaScript framework
- **Vite**: Build tool and dev server
- **PrimeVue**: Vue 3 UI component library with Aura theme

## PrimeVue Configuration

PrimeVue is configured in `src/main.js` with the Aura theme preset. Components can be imported from `primevue/` package.

## Styling Guidelines

**IMPORTANT**: When generating web pages or HTML components, you MUST strictly follow the design system defined in `STYLE-GUIDE.md`.

The style guide defines:
- **Colors**: Primary `#646cff`, Text `#213547`, Secondary `#6b7280`, Background `#ffffff`/`#f9f9f9`
- **Typography**: Inter font, weights 400/500/700, specific font sizes and line heights
- **Spacing**: 8-level scale from 0.5rem to 4rem
- **Border Radius**: 6px (small), 8px (medium), 12px (large)
- **Shadows**: 2-level elevation system
- **Transitions**: Uniform 0.25s duration
- **Components**: Standardized Post Card, Widget, Tag, Button, Input, Footer styles

Reference `STYLE-GUIDE.md` for complete specifications, component examples, and Tailwind CSS mappings.

## 胶水开发要求（强依赖复用 / 生产级库直连模式）
### 角色设定你是一名**资深软件架构师与高级工程开发者**，擅长在复杂系统中通过强依赖复用成熟代码来构建稳定、可维护的工程。
### 总体开发原则本项目采用**强依赖复用的开发模式**。核心目标是：  **尽可能减少自行实现的底层与通用逻辑，优先、直接、完整地复用既有成熟仓库与库代码，仅在必要时编写最小业务层与调度代码。**---
### 依赖与仓库使用要求
#### 一、依赖来源与形式- 允许并支持以下依赖集成方式：  - 本地源码直连（`sys.path` / 本地路径）  - 包管理器安装（`pip` / `conda` / editable install）- 无论采用哪种方式，**实际加载与执行的必须是完整、生产级实现**，而非简化、裁剪或替代版本。---
#### 二、强制依赖路径与导入规范在代码中，必须遵循以下依赖结构与导入形式（示例）：```pythonsys.path.append('/home/lenovo/.projects/fate-engine/libs/external/github/*')from datas import * 完整数据模块，禁止子集封装 from sizi import summarys  # 完整算法实现，禁止简化逻辑```要求：* 指定路径必须真实存在并指向**完整仓库源码*** 禁止复制代码到当前项目后再修改使用* 禁止对依赖模块进行功能裁剪、逻辑重写或降级封装---
#### 三、功能完整性约束* 所有被调用的能力必须来自依赖库的**真实实现*** 不允许：  * Mock / Stub  * Demo / 示例代码替代  * “先占位、后实现”的空逻辑* 若依赖库已提供功能，**禁止自行重写同类逻辑**---
#### 四、当前项目的职责边界当前项目仅允许承担以下角色：* 业务流程编排（Orchestration）* 模块组合与调度* 参数配置与调用组织* 输入输出适配（不改变核心语义）明确禁止：* 重复实现算法* 重写已有数据结构* 将复杂逻辑从依赖库中“拆出来自己写”---## 工程一致性与可验证性
#### 五、执行与可验证要求* 所有导入模块必须在运行期真实参与执行* 禁止“只导入不用”的伪集成* 禁止因路径遮蔽、重名模块导致加载到非目标实现---
### 输出要求（对 AI 的约束）在生成代码时，你必须：1. 明确标注哪些功能来自外部依赖2. 不生成依赖库内部的实现代码3. 仅生成最小必要的胶水代码与业务逻辑4. 假设依赖库是权威且不可修改的黑箱实现**本项目评价标准不是“写了多少代码”，而是“是否正确、完整地站在成熟系统之上构建新系统”。