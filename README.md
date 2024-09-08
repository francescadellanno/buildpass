# BuildPass Coding Test | Francesca Dell'Anno

## Running the project

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Overview

This project is a simple construction site diary application built with React, TypeScript and Supabase. It allows users to view and add diary entries. Each diary entry can contain various details such as the title, date, description, weather conditions, incidents, visitors, instructions, resources and site photos. Given the importance on mobile use, I took a mobile first approach to building the application.

## Set Up Process

1. Set up the project with Create React App and TypeScript. I also used Styled Components for styling.
2. Set up Supabase for the database.
3. Set up my environment. I used the Cursor (IDE with AI) as my code editor with Prettier, I updated my formatting preferences to my liking and setup syntax highlighting.
4. Decided on a palette of colours which I generated on coolors.co.
5. Set up my folder structure i.e. src, components, pages, hooks etc.
6. I used custom hooks whenever suitable because I find these are a great way of structuring complex code.

# AI tools

## Cursor IDE

I used the Cursor IDE to help me with code generation, debugging and documentation. This was my first time using Cursor and I found it to be an extremely useful tool. The tab autocomplete feature is ridiculously useful and saved me so much time. I also really liked the "fix with AI" feature where you can use inline AI suggested corrections in your code. This was particularly useful for errors. I really loved how Cursor would autocomplete my TypeScript types and if doing a repetitive task Cursor would predict what I wanted to do next. I felt like I was writing half of my code just by clicking the tab button.

## Chat GPT

I heavily relied on Chat GPT for this test, I was determined to see how much I could do with AI assistance and that turned out to be a lot. It's memory of the code I've written before is extremely useful when following up with clarifying questions.

I did so many things with Chat GPT however largely code generation as for most of my de-bugging I used the AI built into Cursor. Here are some examples of how I used Chat GPT (to name a few):

- It provided me with mock data for my diary entries including a json and a csv file.
- It provided me with a comparison of different types of databases. I specified that I wanted one which was very simple to implement and Supabase was the clear winner.
- It provided me with the code for my form, I specified the fields needed and the field input types. I then asked it to make the form a bit prettier. I also asked it to refactor the code into different files as the main form file was huge.
- It re-wrote my components using TypeScript.
- It refactored my code into custom hooks.
- It provided me with animations for my nav links, back button, cards.
- It provided file name suggestions for my components.
- It provided me with boilerplate code to fetch / upload data from / to Supabase.
- It provided me with code to do caching.
- It provided me with code for my responsive images

..etc.

## Future Considerations

- I would hire a designer to make the UI look nicer.
- I would create a component to handle the loading / error states for my fetch requests.
- Add caching to getDiaryEntryById as it currently only applies to getDiaryEntries.
- I would add 'delete' functionality for my diary entries.
- I would improve the security of my Supabase setup, utilise RLS and put my sensitive keys in environment variables.
- Make the code more accessible e.g. for screen readers, check contrast issues, improve semantic HTML etc.
- Add more unit / integration tests.
