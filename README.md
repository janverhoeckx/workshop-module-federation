# Workshop Module Federation
Welcome to this workshop about Module Federation. Module Federation is a JavaScript architecture design pattern that
allows a JavaScript application to dynamically run code from another bundle/build. This is the foundation of Micro Frontends
and Microservices architecture, enabling different teams to work on different parts of an application and deploy their code independently.

In this workshop you will build and host your own micro frontend. When you are done, you will have a working micro frontend
that can be dynamically loaded into this host application.

This workshop uses Angular and the Module Federation plugin for Webpack.

## Prerequisites
- Node.js
- Angular CLI
- Ngrok to host your micro frontend from your dev machine (https://ngrok.com/download)

## Getting started
1. Clone the remote base project repository: (https://github.com/janverhoeckx/workshop-module-federation-remote)
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the remote application
4. Open your browser and navigate to `http://localhost:4200`. You should see the remote application running.

## Build your micro frontend!
1. Clone the [workshop-module-federation-remote](https://github.com/janverhoeckx/workshop-module-federation-remote) repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the remote application and check if it is working correctly in your browser 
5. Open your browser and navigate to `http://localhost:4200`. You should see the remote application running.
6. Add a new Angular module with the command `ng generate module <module-name>`
7. Add a new Angular component for your module with the command `ng generate component <component-name>`
8. Add your module to imports in the app.module.ts file
9. Add a route to your module in the app.module.ts file
10. Check if your module is working correctly in your browser
11. Add a child route to the imports of your module. For example:
```typescript
RouterModule.forChild([{
   path: 'hello-world',
   pathMatch: 'full',
   component: HelloWorldComponent
}])
 ```
12. Expose your module as a remote entry module in the webpack.config.js file
13. Restart your remote with `npm start`
14. Host your micro frontend with ngrok: `ngrok http 4201`
15. Check if your micro frontend is working correctly in your browser using the ngrok URL
16. Provide the following information of your remote application to the shell application owner
    - The ngrok URL
    - The name of the remote entry module
    - The name of the remote entry module's remote entry file
