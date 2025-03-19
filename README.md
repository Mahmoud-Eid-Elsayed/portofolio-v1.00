
# Portfolio Website

Welcome to my professional portfolio website! This project showcases my skills, projects, and experience as a Full Stack Developer. It is built using modern web technologies and designed to be responsive, user-friendly, and visually appealing.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, and mobile).
- **Dynamic Content**: Typed.js for animated text effects.
- **Project Filtering**: Filter projects by category (e.g., web development, cloud solutions).
- **Contact Form**: Integrated with EmailJS for sending emails.
- **Progress Bars**: Animated skill progress bars.
- **Dark Mode**: Toggle between light and dark themes.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Email Integration**: EmailJS
- **Version Control**: Git

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mahmoud-Eid-Elsayed/portofolio-v1.00.git
   cd portofolio-v1.00
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     EMAILJS_SERVICE_ID=your_service_id
     EMAILJS_TEMPLATE_ID=your_template_id
     EMAILJS_PUBLIC_KEY=your_public_key
     PORT=3000
     ```

4. **Run the server**:
   ```bash
   npm start
   ```

5. **Open the project**:
   - Visit `http://localhost:3000` in your browser.

## Project Structure

```
project-root/
├── src/                  # Source files
│   ├── assets/           # Static assets (images, CV, etc.)
│   ├── public/           # Publicly accessible files
│   ├── static/           # Static files (CSS, JS, HTML)
│   │   ├── css/          # Stylesheets
│   │   ├── js/           # JavaScript files
│   │   └── index.html    # Main HTML file
├── server.js             # Backend server
├── .env                  # Environment variables
├── .gitignore            # Files to ignore in Git
├── package.json          # Project dependencies
├── README.md             # Project documentation
```

## Usage

- **View Projects**: Navigate to the "Projects" section to see my work.
- **Contact Me**: Use the contact form to send me a message.
- **Toggle Dark Mode**: Switch between light and dark themes using the toggle button.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
Thank you for visiting my portfolio! If you have any questions or would like to connect, feel free to reach out via the contact form or my social media links.
