-------SETUP INSTRUCTION------


1. Download the Zip Folder and extract the CryptoTracker Folder from that or Just copy the folder inside that ZIP file and paste it on your path where you prefer to save it.
2. Open that folder in VS Code and open the folder in terminal using cd command "2-actual-backend" and write a command "npm install" to install web dependencies of "2-actual-backend".
3. IN terminal, Start the server using "npm start" command.
4. Now go to the browser and write "localhost:8080/items" and the server is started.
5. Now go to VS Code and open the folder "1-UI".
6. Install Dependencies (using "npm install" command) to install web dependencies of folder "1-UI".
7. Start the Development Server (Write "npm run dev" command on the terminal of VS Code if you are using VS Code).
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



  ---video link-----
  https://youtu.be/kHvZw08scQU?si=MCja8usjEbs62-mM   ---how you can run server
  https://youtu.be/2gkcaac_MXI?si=m3XDLpE4bbtJR4Gp     ---project overview

