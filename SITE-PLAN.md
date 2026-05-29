# Site Plan — 个人学术主页

## 技术方案
- **框架：** Material for MkDocs
- **部署：** GitHub Pages（可一键迁移至 Netlify / Cloudflare Pages / 自建服务器）
- **内容源：** Markdown 文件，Git 版本管理
- **语言：** 中英双语，Material i18n 插件切换

## Markdown → 静态网站 的可移植性
所有内容存为纯 `.md` 文件，不依赖特定工具格式。
- 切换到其他工具（如 Hugo、Astro、Next.js）仅需更换主题层，内容文件可直接复用
- 无数据库、无专有格式锁定

## 设计
- **配色：** 深靛蓝 (#1a237e) 主色 + 青绿 (#00897b) 强调色，明暗双模式
- **配图：** 第一阶段不用，内容优先
- **风格：** 干净、留白、阅读友好

## 功能优先级

### Phase 1（本次实现）
- [x] 主页（中/英）
- [x] 发表列表（publications）
- [x] 关于页（about）
- [x] 中英切换（i18n 插件）
- [x] Material 主题配置 + 配色（深靛蓝/青绿，明暗双模式）

### Phase 2（进行中）
- [x] Blog（手动 markdown 页，中英双语，blog 插件与 i18n 不兼容）
- [x] 研究项目展示（5 个项目独立页 + 总览，中英双语）
- [x] 交互地图（Leaflet.js + OpenStreetMap，中英双语，标注崇礼/北京/杭州/深圳）
- [ ] 自定义域名

## 目录结构
```
docs/
  en/
    index.md              # 英文主页
    publications.md       # 英文发表
    about.md              # 英文关于
    map.md                # 英文田野地图
    blog/
      index.md            # 英文 Blog 列表
      building-with-claude-code.md
    projects/
      index.md            # 英文研究项目总览
      chongli-extended-urbanization.md
      beijing2022-cultural-heritage.md
      live-music-urban-spaces.md
      danwei-spatial-transformation.md
      grand-canal-heritage.md
  zh/
    index.md              # 中文主页
    publications.md       # 中文发表
    about.md              # 中文关于
    map.md                # 中文田野地图
    blog/
      index.md            # 中文 Blog 列表
      building-with-claude-code.md
    projects/
      index.md            # 中文研究项目总览
      chongli-extended-urbanization.md
      beijing2022-cultural-heritage.md
      live-music-urban-spaces.md
      danwei-spatial-transformation.md
      grand-canal-heritage.md
  assets/
    stylesheets/
      extra.css           # 自定义配色与样式
mkdocs.yml                # 主配置
SITE-PLAN.md              # 本文件
```

## 发布记录
- 2026-05-29: 项目启动，确定技术方案，创建站点骨架
- 2026-05-29: Phase 1 完成 — 主页/发表/关于（中英），i18n 切换，Material 主题配色，本地 dev server 运行
- 2026-05-29: Phase 2 推进 — Blog（手动 markdown）、5 个研究项目页、Leaflet.js 交互地图；对照 CV-English.md 修正全部英文页面专用词（Lab → Research Group, Architecture and Urban Sciences → Architecture and Sciences of the City, MPhil → MA 等）
- 2026-05-29: 准备部署 — site_url 设为 zjuzmk.github.io（mengkezhang 已被占用），Blog 更新至当前项目状态，简历下载功能取消（用户不需要）

## 部署
- **地址：** `https://zjuzmk.github.io/`
- **方法：** `mkdocs gh-deploy` 构建并推送到 GitHub Pages（gh-pages 分支）
- **仓库：** `zjuzmk/zjuzmk.github.io`（GitHub 用户名：zjuzmk）
