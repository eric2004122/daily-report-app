# 工地日報產生器

這是一個可部署到 GitHub Pages 的純前端工地日報工具。

## 功能

- 編輯基本資料、天氣、本日工作、明日工作
- 編輯本日出工數與本日進場材料
- 一鍵顯示或隱藏零工數
- 累計數量在報表輸出時自動加上本日數量
- 上傳施工照片並自動壓縮
- 下載 PDF
- 匯出與匯入 CSV 資料
- 日期欄位可用日曆選擇

## GitHub Pages 部署

1. 在 GitHub 建立一個新的 repository，例如 `daily-report-app`。
2. 將這個 `daily-report-app` 資料夾內容推上去。
3. 到 repository 的 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，資料夾選 `/root`。
6. 儲存後等待 GitHub 產生網址。

## 資料保存

資料會保存在使用者自己的瀏覽器 `localStorage`，不會上傳到伺服器。不同電腦之間請使用 CSV 匯出與匯入搬移資料。
