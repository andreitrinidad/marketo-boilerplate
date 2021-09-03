# Marketo Email Template Boilerplate
This boilerplate converts Marketo syntax variables into browser-friendly code\
v1 by [Andrei Trinidad](https://github.com/andreitrinidad)
## Prerequisites
- Node.js (v12)
- VS Code or any IDE of your choice
- [Live Server VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional)

## Quick start
Run ` npm install && npm start `. This will combine all your components and wrap it with global component.

## The Basics
### Output.html
> Output.html is your Marketo-ready code that can be pasted in Marketo Email Template editor

### Index.html
> The index.html in the root folder is the browser-friendly code that is generated by the script

### src/global/index.html
> This component wraps other components inside `src/components`. This file can be modified to add Marketo variables and other CSS stylings.
### src/js/combine.js
> This script combines all components inside the `src` folder
### src/js/generate.js
> This script fills up all Marketo variables in the template with the default values for faster email template develeopment
## Adding a component
Components can be created inside `src/components` folder and should be added in `combine.js`


## Watch and Live Reload
Saving a file inside the `src` folder will automatically rebuild the `output.html` and `index.html` files. Use VS Code Live Server extension for live reload

## Future Roadmap
- Make everything zero config, running `npm start` should do it all
- Fetch all html files in `src/components` without declaring it in `combine.js`
- Add support for external style sheet
- Add support for MJML
- Configure `.vsconfig ` for auto VSCode extension installs


---
## PRs are always welcome 😉
