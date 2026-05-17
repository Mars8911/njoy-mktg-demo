# 享受創意整合行銷 頁面優化

此專案已提供**純 HTML / CSS / JavaScript** 版本，無需 React 或建置工具即可預覽。

## 純 HTML 版本（推薦）

直接在專案根目錄開啟或啟動靜態伺服器：

```bash
# 方式一：用瀏覽器開啟
open index.html

# 方式二：本機伺服器（建議，避免部分瀏覽器限制）
python3 -m http.server 8080
# 瀏覽 http://localhost:8080
```

檔案結構：

- `index.html` — 完整頁面
- `assets/css/styles.css` — 樣式與 CSS 動畫
- `assets/js/main.js` — 互動（選單、捲動動畫、輪播、視差）
- `src/imports/` — 圖片資源

動畫以 **CSS `@keyframes`** 與 **Intersection Observer** 實作，取代原本的 Framer Motion；合作品牌輪播以原生 JS 取代 react-slick。

## React 版本（選用）

原始 React 原始碼仍在 `src/app/App.tsx`。若需開發伺服器：

```bash
pnpm install
pnpm run dev
```

請將 Vite 的 `index` 改為 `react-index.html`（或還原 React 用的 `index.html`）後再執行。

設計稿：https://www.figma.com/design/zApa4SZ22OkmJSG6uzn8sg/
  # njoy-mktg-demo
