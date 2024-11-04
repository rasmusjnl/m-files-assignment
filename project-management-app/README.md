# SIMPLE APPLICATION FOR PROJECT MANAGEMENT

Create a simple React application for managing projects. Follow the requirements given in this page and the following page.

The app should provide ability to select one or several projects from the Project List and apply the action from Control Panel

## The application view represents

### Project List panel

- Project list shows projects' name and state
- Projects can be in states: Not Started, Launched, Finished

### Control Panel

- For actions to manage the projects
- Represented by two buttons "Launch" and "Finish"



### Application Data

Application data should be populated from the json object which contains some initial data with project states

```javascript
const projects = [
  {
    "id": 1,
    "name": "Travel to Mars",
    "state": "Launched"
  },
  {
    "id": 2,
    "name": "Launching satellite",
    "state": "Finished"
  },
  {
    "id": 3,
    "name": "Study: growing plants on Mars",
    "state": "Not started"
  },
  {
    "id": 4,
    "name": "Study: new human generation on Mars",
    "state": "Not started"
  }
]

```

## Requirements

### Functional

- Project state in Project List should be indicated with text and color (in the picture it is represented by the border color on the right)
- On hovering over a project item, user should understand if the item is selectable or not (change the background of the project item on hover to, for example, light blue if it is selectable)
- If the project has been finished, no action should be available for it (so it should not be possible to select it from the Project List). Note: only projects of the same state can be selected at the same time.
- When user selects a project by clicking it, the selected project item should be indicated with a background color change (for example, to change it to dark blue)
- After a project or projects have been selected, any action can be applied to those by clicking button "Launch" or "Finish"
- After the action has been executed, the state of the project in the Project List should be updated accordingly. Background color should change back to initial (no color/white background).

### Technical

- Application must be implemented using TypeScript