# NoteCode - Code Sharing App

NoteCode is a simple code-sharing application that allows users to store and share coding snippets easily. This project was developed as a fullstack challenge to test and demonstrate basic skills in front-end and back-end development. The application enables users to create, save, and share code snippets with unique IDs.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [User Stories](#user-stories)  
- [License](#license)  
- [Live Demo](#live-demo)  


---

## Features

- Users can create and update code snippets via REST APIs  
- RESTful endpoints implemented using Express.js  
- MongoDB used for storing and managing code snippets securely  

---

## Tech Stack

- **Front-end:** React, TailwindCSS, React Router  
- **Back-end:** Node.js, Express  
- **Database:** MongoDB, Mongoose 

## Installation

Clone the repository:

```bash
git clone https://github.com/gadimahendra/note-code-backend.git
cd note-code-backend

npm install


## Usage

- Open the application in your web browser.
- By default, an HTML snippet will be displayed.
- Edit the snippet and choose your preferred language and theme.
- Click the Share button to generate a unique ID for your snippet.
- Use the generated URL to share your code snippet with others.
- The Share button will be disabled until you make further edits to the code.

---

## User Stories

- Create a Coding Sharing App - NoteCode following given design.
- By default, users should see an HTML given snippet. See Code Guide for default HTML code.
- When users select the Share button, a new ID should be generated, and users can access the saved code with the generated ID. See Code Guide for more details.
- After code is saved and shared, Share button should be disabled until users make an edit.
- Users can choose the language and theme they want to save and share.
- The application should be responsive on all devices.



## 🚀 Live Demo

Check out the live demo of the application 👉 [Click Here](https://note-code-gadimahendras-projects.vercel.app/)




