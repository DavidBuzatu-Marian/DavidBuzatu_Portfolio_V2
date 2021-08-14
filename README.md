# Table of contents
- [Personal portfolio and blog](#personal-portfolio-and-blog)
  * [Background](#background)
  * [Using GitHub as a database](#using-github-as-a-database)
  * [Tech Stack](#tech-stack)

# Personal portfolio and blog

Created to showcase my latest work, start personal blog related to tech and writing, and providing a way of getting in touch easily.

*Available at: [link_to_portfolio](https://davidbuzatu-marian.github.io/DavidBuzatu_Portfolio_V2/#/)*

## Background
Personal websites have always been a thing I took pleasure in building. I found that they could provide great insights into someone's style, workflow, and interests.
However, with this portfolio I've wanted to take it to the next level. I wanted to have an automated platform that could showcase the latest repositories I've been working on, while also keeping a list of my latest blogs active and usable.

Initially, I was planning to keep my blogs in a MongoDB database used in another project (Datafy)[https://github.com/DavidBuzatu-Marian/Datafy]. However, I didn't want to set up an EC2 instance just to run the Datafy project for the blogs, especially because that contained end-points which are using personal tokens. The last thing I want is to have someone filling in my Google Calendar with random events.

## Using GitHub as a database
I knew GitHub was my best shot for hosting the static React app without the hurdle of setting up EC2 instances and deployment processes. Therefore, I realized I could use GitHub to store my blogs.

My blogs are written in Markdown, so displaying them in the React app would be as easy as using a library such as [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx). Once that was resolved, I figured out a pattern for the markdown I could use in order to perform a smart-preprocessing on it.

## Tech Stack
- Developed using [ReactJS](https://reactjs.org) in JavaScript
- Used plain SCSS to bring website to life. Have used no external styling tool besides [hamburger](https://hamburger-react.netlify.app)
- Created the design using [Figma](https://www.figma.com)
