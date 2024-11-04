# Problem 1 - onclick
- The function below does not work because onclick is assigned a string instead of the function. Fix the
function by changing input parameter or by changing function itself.
```javascript
function suggestionElementPreperation(
  suggestionElemClass,
  suggestionClickEvent
) {
  const suggestionElem = document.getElementById("mf-suggestion-event" );
  suggestionElem.onclick = suggestionClickEvent;
}
```

- Example how this function is called:
```javascript
suggestionElementPreparation("mf-web-suggestionicon-text-mobile", "webURLPreparation(true, false )");
```