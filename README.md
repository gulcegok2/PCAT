# PCAT - Photo Catalog Project

PCAT is a dynamic photo catalog web application built with Node.js, Express.js, and MongoDB. It allows users to upload, display, edit, and delete photos with their descriptions.

## Features

- Photo upload with title and description
- Responsive photo gallery display
- Pagination support
- Photo detail view
- Edit photo information
- Delete photos
- Clean and modern UI

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
  
- **Frontend:**
  - EJS (Embedded JavaScript templates)
  - Bootstrap 4.4.1
  - Font Awesome
  
- **Other Tools:**
  - File Upload handling
  - RESTful API architecture
  - MVC pattern
 

## API Endpoints

- `GET /` - Home page with photo gallery
- `GET /photos/:id` - View single photo
- `POST /photos` - Add new photo
- `PUT /photos/:id` - Update photo
- `DELETE /photos/:id` - Delete photo
- `GET /about` - About page
- `GET /add` - Add photo page


## Project Structure

```
PCAT/
│
├── controllers/
│   ├── pageController.js
│   └── photoControllers.js
│
├── models/
│   └── Photo.js
│
├── views/
│   ├── partials/
│   │   ├── _footer.ejs
│   │   ├── _header.ejs
│   │   └── _navigation.ejs
│   │
│   ├── about.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   └── photo.ejs
│
├── public/
│   ├── uploads/
│   ├── css/
│   └── js/
│
└── app.js

