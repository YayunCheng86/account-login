# Project Title
使用者登入頁面並儲存「登入狀態」。

## Features
- 使用者輸入 email & password
- 如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"
- 如果使用者成功登入，頁面上會顯示使用者的firstName。

## Installation
1. 從github下載此專案至本機電腦
  `git clone https://github.com/YayunCheng86/account-login.git`

2. 開啟Terminal，進入此專案
  `cd account_login.git`

3. 使用npm安裝所有相依套件
  `npm install`

4. 執行專案
  `npm run dev`

5. 開啟網址在本機端
  `http://localhost:3000`

## Testing accounts
名稱          | 信箱  | 密碼
--------------|:-----:|---------------------
Tony    | tony@stark.com | iamironman
Steve   | captain@hotmail.com | icandothisallday
Peter   | peter@parker.com | enajyram
Natasha | natasha@gamil.com | *parol#@$!
Nick    | nick@shield.com | password

## Environment
- Express

### packages
- body-parser
- express-handlebars
- express-session
