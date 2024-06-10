Welcome to the Know Your Weather project! This React-based web application allows users to get weather updates either by entering a city name or by using their current location.

Features
Know Weather Update by City Name:

Enter the city name in the input field.
Fetch the weather data via the API.
A popup will appear to confirm the weather details.
Current Weather Update by Location:

Click the button to get the weather update based on your current location.
The application will use the browser's geolocation feature to fetch your location and then get the weather details for it.
Project Structure
java
Copy code
KnowYourWeather/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CityWeather.js
│   │   ├── CurrentLocationWeather.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
Getting Started
Prerequisites
Node.js and npm installed
A modern web browser
Internet connection
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/atulsharma101/KraftShala_FrontendIntern_AtulSharma.git
Navigate to the project directory:

sh
Copy code
cd KraftShala_FrontendIntern_AtulSharma
Install the dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
Open http://localhost:3000 in your web browser to view the application.

Usage
By City Name:

Enter the name of the city in the input field.
Click the "Get Weather" button.
A popup will display the weather information for the entered city.
By Current Location:

Click the "Get Current Location Weather" button.
Allow the browser to access your location.
A popup will display the weather information for your current location.
Deployment
The project is deployed on Netlify and can be accessed at Know Your Weather.

Screenshots

Description: Enter the city name to get weather updates.


Description: Get weather updates based on your current location.

Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.


Contact
Atul Sharma - GitHub

Project Link: https://github.com/atulsharma101/KraftShala_FrontendIntern_AtulSharma

Commands to Push to GitHub
sh
Copy code
git add .
git commit -m "Your commit message"
git push origin main
Thank you for using Know Your Weather! If you have any questions or feedback, feel free to reach out.
