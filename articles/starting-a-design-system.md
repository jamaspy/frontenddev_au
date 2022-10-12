---
title: "Design System Series (Part 1) - Approach & Review"
date: "2021-09-12"
exerpt: "Design System Series (Part 1) - Approach & Review"
description: "Design System Series (Part 1) - Approach & Review"
tags:
  - design
  - design_system
  - storybook
  - figma
---

> "Design has always been largely about systems, and how to create products in a scalable and repeatable way… These systems enable us to manage the chaos and create better products… A unified design system is essential to building better and faster; better because a cohesive experience is more easily understood by our users, and faster because it gives us a common language to work with."

> AirBnB

## This is the first in a series of posts chronicling the approach, design, development and implementation of Agridigital’s Design System

## Introduction

Agridigital is a cloud-based commodity management platform based in Sydney with users across Australia and North America. We have both a web and mobile application; written in React & React Native. We use a combination of customised Material UI and TailwindCSS components.

Currently, we have a number of components in npm packages, a hosted Storybook library and the majority of these are also available as Figma Components. Throughout July 2020, we set about converting all of our components to TypeScript as well as implementing major updates to Material UI and TailwindCSS. During this process, it became clear that there was design debt across the application, and that a formalised design system would be important as the company continues to grow. Furthermore, we wanted to enable our product and growth team to quickly mock-up design ideas in Figma.

Throughout this series, I will document the steps we took to achieve each objective as well as highlight what we learnt throughout the process.

## Objectives

From the findings in July, we have put together 4 clear objectives to this project:

1. Complete an “Interface Inventory Assessment” (Brad Frost, Atomic Design Principles)

2. Establish and document components creation process

3. Solidify the links in the tooling across design, development & deployment process including:

   - Developing our Storybook Library
   - Creating a Figma Component Library

4. Educate and communicate usage and process across the business

## What Is A Design System & Why Do We Wanted One?

Firstly, what is a design system? Well, the internet is FULL of descriptions but I felt Audrey Hacq’s article on UXCollective resonated the closest to what I am hoping to achieve throughout this process.

> A Design System is the single source of truth which groups all the elements that will allow the teams to design, realise and develop a product

> UXCollective

If we unpack this quote a little, I can outline the drivers behind this project:

**A Single Source Of Truth:** drives consistency and removes ambiguity from the development process; increasing velocity and removing potential reworks. Inevitably leading to a better User Experience.

**Groups all the elements:** A centralised, formal repository that designers, developer and product owners all understand, can access and utilise. With formalised naming conventions, typography, colour palettes, patterns, layouts and usage guidelines.

**Realise and develop a product:** Bridging the gap between technical, product and growth teams. Allowing anyone to easily mockup a design or feature idea as well as communicate these ideas in a universal ‘Agridigital Design Language’.

Excellent resources for understanding design systems comes from Diana Mounter, Design Systems Manager at Github. You can check out her talk here. As well as Shaun Bent of Spotify, from his talk at Design Systems London in 2019

## First Step: Interface Inventory Assessment

As mentioned we currently have a library of components that are used throughout the application. During July’s upgrade discovered a number of things. Firstly, some of the components were not being used any more, some consisted of a collection of smaller components and finally, there appeared to be uncertainty across the engineering to as to where and when to use certain components.

In his book, Atomic Design, Brad Frost talks about an Interface Inventory Assessment. A business-wide review of the current component inventory. To kick this process off, I will be assessing our current library against these criteria, qualifying any assumptions with both the wider engineering team, product team and growth team. The questions I will be asking are:

- Why was it made/By Who
- Why is it not used (Do people know it exists/where it should be used)?
- Was it part of a larger component
- Was it started and not finished?
- Should it be completed?
- Can we delete it

## The Review Process

---

Following the completion of the Interface Inventory Assessment. I will individually assess their “health” - are they fit for purpose or could they be improved? This could be removing inline styles, breaking into smaller pieces or improving typing & linting. We have a Confluence wiki created to document the review process of each component. The line of questioning and peer review for each will follow the below structure:

**What should it do?**

- Where is it used?
- Does it change states? (disabled, hover etc)
- Can we break it down to smaller components?
- Can it be tested/Is it being tested?
- Current npm version
- Do people know where/how/when to use it?
- Do people like it, do they wish it did something else?
- Does it achieve its purpose?
- Does it contain other components?
- Does it contain any inline styles that can be replaced with Tailwind?
- Does it conform to linting standards?
- Does it receive props, are they correctly typed
- Is it a component in Figma
- Is it in Storybook

> “Understanding not only the what, but the why, behind the design of a system is critical to creating an exceptional user experience. Defining and adhering to standards is how we create that understanding.”

> Marco Suarez | InVision

## Conclusion

This first post outlined our initial step in our Design System journey, where we will be conducting a review of our current components and documenting our findings. Based on these we will move on to the Design stage of the process, which will form the second part of this series. Here I will look at Brad Frosts, Atomic Design principles that we will be applying, you can read about it here.
