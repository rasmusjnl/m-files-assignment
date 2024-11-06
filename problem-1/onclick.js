function suggestionElementPreparation(
  suggestionElemClass,
  suggestionClickEvent
) {
  const suggestionElem = document.getElementById("mf-suggestion-event");

  if (suggestionElem) {
    // Do something with suggestionElemClass here?
    suggestionElem.onclick = suggestionClickEvent;
  }
}

// Pass the function parameter as an arrow function to prevent it from firing immediately when calling "suggestionElementPreparation"
suggestionElementPreparation("mf-web-suggestionicon-text-mobile", () =>
  webURLPreparation(true, false)
);
