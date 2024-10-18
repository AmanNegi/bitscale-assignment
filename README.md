## BitScale Internship Assesment
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

This assignment was quite easy and fun to work on. To me minor details,
in the interface and code matters a lot, I hope that shows up in my
work. I hope you like it! Here are a few things, I'd like to highlight:
<ul>
    <li>TypeSafe code with types where required</li>
    <li>CSS Variables to ensure, consistency and reusability in design</li>
    <li>Follows Clean Architecture, increasing testability and scalability</li>
    <li>Dark mode, primarily for developers (I can't stand Light Mode)</li>
    <li>Well documented codebase, with comments and proper naming conventions</li>
    <li> Utilizes Tailwind CSS and Framer Motion for a user-friendly UI</li>
</ul>


## Screenshots 

### Pricing Page (/pricing)
<div style="display: flex; justify-content: space-around;">
  <img src="./docs/assets/img_light.png" alt="Light Mode" style="width: 45%;"/>
  <img src="./docs/assets/img_dark.png" alt="Dark Mode" style="width: 45%;"/>
</div>

### Home Page (/)

<div style="display: flex; justify-content: space-around;">
  <img src="./docs/assets/home_light.png" alt="Light Mode" style="width: 45%;"/>
  <img src="./docs/assets/home_dark.png" alt="Dark Mode" style="width: 45%;"/>
</div>

## Project Structure 

```
src/
│ 
├── pages/
│   ├── pricing/
│   │   ├── presentation/
│   │   │   └── Pricing.tsx #Root layout for pricing page
│   │   │   └── components/
│   │   │        ├── pricingCard.tsx #Component for pricing card
│   │   │        └── tabBar.tsx #The montly/annually tabbar
│   │   └── application/ 
│   │       └── data.ts #Contains pricing cards data
│   ├── home/
│   │   └── presentation/ 
│   │        └── Home.tsx #Basic landing layout & action buttons
├── types/
│   └── pages/
│       └── pricing.ts #Types for Pricing component
├──  lib/
│   └── utils.ts #Entails utils (currenlty cn())
├── App.tsx
├── index.css 
├── main.tsx
└── ...
```