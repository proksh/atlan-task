# A basic overview of your project.

This is Web based application capable of running SQL queries (CSV files) and displaying the results of said query

# Framework Used

This project is using [Create React App](https://github.com/facebook/create-react-app).

# Plugins/Packages used

In the project directory, I have used these packages

1. Tailwind - Tailwind is used for generatting classes for the ui of the application

2. Headlessui - Headless UI is used along with tailwind to create interactive components like dropdowns and popups

3. React Icons - React Icons is used to pick up already available icons. I have only used Remix icons for this project

4. Papaparse - Papa parse is being used to parse the CSV file to JSON so that we can easily work with javascript

5. Lodash - Lodash is being used to write clear shorthand functions, just to keep the code clean

6. React Querry - React Querry is being used to manage caching and fetching of querries efficiently

# For performance

1. Used React Querry to fetch and catch the apis.
2. One way performance can be improved is by rendering only the visible list of a large table by using something like this - [https://www.npmjs.com/package/react-window]. But the problem with that is as the list renders the table cell will change its width. For that, I will need to change the table to a grid layout and that will require some effort. So I have skipped this right now.

# Page Speed

Used [https://pagespeed.web.dev/] for speed test.

- Mobile

Performance: 98,
First Contentful Paint: 1.6 s,
Time to Interactive: 3.0 s,
Speed Index: 1.6 s,
Total Blocking Time: 80 ms,
Largest Contentful Paint: 2.1 s,
Cumulative Layout Shift: 0

- Desktop

Performance: 100,
First Contentful Paint: 0.5 s,
Time to Interactive: 0.5 s,
Speed Index: 0.5 s,
Total Blocking Time: 0,
Largest Contentful Paint: 0.5 s,
Cumulative Layout Shift: 0.004

# How to run the project

To run the project locally, use -

### `npm install`

This will install all the dependency and packages

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
