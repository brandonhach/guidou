<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img align="center" src="https://github.com/user-attachments/assets/e28ab259-e743-43cf-9a01-333ef9fb9e33"></>
</div>
<br>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#breakdown">Breakdown</a>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
Guidou is a web app that lets users explore curated guides based on the cities they pinpoint using the autocomplete address input bar powered by Google's Map API. Users can sign up to create their guide for others to read. I made this project in Angular to expand my front-end capabilities. This project is pretty simple and was made in a week with no prior knowledge of Angular & Supabase. After this project was completed, I learned how to develop an Angular project & how to use Supabase as a backend.

### Built With
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Language used

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Breakdown 
* Supabase handles the authentications, and database entirely. I defined a few schemas for tables and configured each OAuth provider I used i.e. Discord, Google, etc.
* To use Supabase API, Accuweather, etc, I had to create services in Angular for separation of concerns & reusability. Angular is designed to use dependency injections, so I had to use services to inject into components to use them.
* I opt out of the traditional module approach to building an angular application for a newer feature called standalone.
  * Standalone components allow me to create components without needing a `NgModule`.
  * It made developing simpler because of faster prototyping & similarity to how I was developing with ** React/Next**.
* I implemented **Google Maps** & **Google Autocomplete** via Google's cloud console with the help of packages installed like `@angular/google-maps`.
  
<!-- GETTING STARTED -->
### Screenshots
![image](https://github.com/user-attachments/assets/2a753d44-384e-42a6-aff5-400fd6873777)

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.
