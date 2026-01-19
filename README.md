# BookShelf Management 書架管理系統

> _A modern, elegant bookshelf management web app </br>
> with FastAPI backend and React (Vite) frontend._</br>

</br>
現代化、優雅的書架管理系統
</br>
採用 FastAPI 後端與 React (Vite) 前端

---

**VIEW PREVIEW**
</br>
- **Backend**: Deploy to [Render](https://render.com/)
[FRONTEND](https://codechris1009.github.io/Py-Bookshelf0/) (github page)
</br>

## Features 功能特色

- **Neon UI & Card Layout**</br>
  時尚霓虹風格與卡片式排版，視覺大氣現代
- **Animated Button & Input**</br>
  動態按鈕與輸入框，互動流暢
- **Custom Checkbox & Star Rating**</br>
  自訂勾選框與星級評分，提升用戶體驗
- **Horizontal Year Selector**</br>
  橫向年份選擇器，操作直覺
- **Responsive Design**</br>
  響應式設計，手機/桌機皆適用
- **FastAPI RESTful API**</br>
  高效能後端 API，資料即時同步
- **Easy Deployment**</br>
  前端支援 GitHub Pages，後端支援 Render 雲端部署

---

## Operation Mode 運作模式

- **Backend (FastAPI)**: Provides RESTful API for book CRUD.</br>
  後端 FastAPI 提供書籍資料的增查功能

- **Frontend (React + Vite)**: Modern SPA,</br>
  fetches data from backend, displays and manages books.</br>
  前端 React SPA，串接後端 API，顯示與管理書籍。

---

## UI/UX Design 介面美工

- **Neon Theme**: Deep background, glowing titles, card-style panels.</br>
  霓虹主題，深色背景、發光標題、卡片式面板。
- **Animated Inputs**: Nebula-style animated input fields.</br>
  星雲動畫輸入框，提升互動感。
- **Custom Button**: Animated, styled-components button.</br>
  動畫自訂按鈕，使用 styled-components 實現。
- **Book Card**: Each book shown as a glowing card with details.</br>
  書籍以發光卡片顯示，資訊一目了然。
- **Custom Checkbox & Star**: Unique checkbox and Rate Start</br>
  自訂勾選框與星級評分，操作直觀。
- **Responsive Layout**: Adapts to mobile and desktop.</br>
  響應式排版，手機桌機皆適用。

---

## Tech Stack 技術棧

- **Backend**: FastAPI, Uvicorn, Pydantic
- **Frontend**: React, Vite, styled-components, Axios
- **Deployment**: Render (backend), GitHub Pages (frontend)

---

## Directory Structure 目錄結構

```text
AdvImplement/
├── backend/
│   ├── main.py                # FastAPI 主程式
│   ├── requirements.txt       # Python 套件需求
│   └── ...                    # 其他後端檔案
├── frontend/
│   ├── src/
│   │   ├── App.jsx               # React 主程式
│   │   ├── App.css               # 霓虹/卡片/動畫樣式
│   │   ├── api.js                # Axios API 設定
│   │   └── components/
│   │       ├── AddBookForm.jsx      # 書籍表單 (動畫/自訂 UI)
│   │       ├── Book.jsx             # 書籍卡片列表
│   │       ├── ButtonStyled.jsx     # 動畫按鈕 (styled-components)
│   │       └── YearSelect.jsx       # 橫向年份選擇器
│   ├── index.html               # 標題、favicon
│   └── package.json             # 前端相依套件
└── ...                        # 其他專案檔案
```

---

## Local Development 本地開發

### 1. Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

- API URL: http://localhost:8000

### 2. Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

- App URL: http://localhost:5173

---

## Deployment 部署

- **Backend**: Deploy to [Render](https://render.com/)
- **Frontend**: Deploy to [GitHub Pages](https://pages.github.com/) (Vite build)

---

## Screenshots 畫面預覽

> ![screenshot](/frontend/public/display1.png)

---

## Credits 致謝

- UI inspired by modern neon and card design.
- Built with ❤️ using FastAPI, React, styled-components.
- https://uiverse.io/
- https://youtu.be/aSdVU9-SxH4?si=boxOMjRnQKtTDEWy

---

## License 授權

MIT License

---

> Last updated: 2025-08-28
