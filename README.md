-------SETUP INSTRUCTION------


1. Download the Zip Folder and extract the CryptoTracker Folder from that / Clone the Repository
2. Open that folder in VS Code and in terminal open the folder "2-actual-backend" using cd command.
3. IN terminal, Start the server using "npm start" command.
4. Now go to the browser and write "localhost:8080/items" and the server is started.
5. Now go to VS Code and open the folder "1-UI".
6. Install Dependencies (using "npm install" command)
7. Start the Development Server (Write "npm run dev" command on the terminal of VS Code if you are using VS Code)
8. The app will be available at localhost port address.


---------TECH STACK---------

Layer-	Technology
Frontend-	React.js, Vite, HTML5, CSS3, JavaScript
Styling-	Bootstrap / CSS
Icons-	React Icons
State-	React useState, useEffect
API / Data-	Dummy JSON / Fetch API
Versioning-	Git & GitHub


--------Project Architecture-------

CryptoTracker/
├── 1.UI/
│   ├── node_modules/
│   ├── public/
│   │   └── graph.webp
│   ├── src/
│   │   ├── components/
│   │   │   ├── Display.jsx
│   │   │   ├── DisplayItem.jsx
│   │   │   ├── FetchItems.jsx
│   │   │   ├── Header.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   ├── store/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── 2-actual-backend/
│   ├── Data/
│   │   ├── items.js
│   ├── app.js
│   ├── items.json
│   ├── node_modules/
│   ├── package.json
│   └── package-lock.json
│
├── .gitattributes
└── README.md


