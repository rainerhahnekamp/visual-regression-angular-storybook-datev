# Visual Regression with Storybook

This is the example application of the talk in German language: "Visuelle
Regressionstest in StoryBook". It was held at the DATEV Coding Festival on 29.
July 2021.

Slides are available
on: https://speakerdeck.com/rainerhahnekamp/visuelle-regressionstest-mit-storybook

---

In this application, we visually test components via a technique called visual
regression. Two technologies are used to showcase it. First one is Jest with
embedded Puppeteer, the second is Cypress with the cypress-plugin-snapshot.

## Jest + Puppeteer 🠖 Angular

`holidays.component.spec-vr.ts` access the running Angular application on port
4200:

1. `npm run start`
2. `npx jest --config jest.config-vr.js --testPathPattern holidays.component`

## Jest + Puppeteer 🠖 Storybook

`holiday-card.component.spec-vr.ts` runs visual regression against a built
Storybook instance:

1. `npm run storybook:build`
2. `npm run storybook:serve`
2. `npx jest --config jest.config-vr.js --testPathPattern holiday-card`

## Cypress 🠖 Storybook

`storybook.spec.ts` uses Cypress for Visual Regression:

1. `npm run storybook:build`
2. `npm run storybook:serve`
3. `npm run e2e:watch` (click on storybook.spec.ts after Cypress opened)
