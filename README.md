# Practice - Common Web APIs for Events

## Overview

This practice lesson will help you understand the concepts surrounding Common Web APIs for Events.

Flatdango wants to improve its application to allow its admin users to upload images for new movies playing at the Flatiron Movie Theater using a file chooser and it also wants to use a drag-and-drop feature to drag and drop the name of a movie from a list of displayed movie names to display the details for the dragged movie name.

## Tools and Resources

It is recommended that you use the Visual Studio Code (VSCode) IDE for this practice lesson.

Useful considerations and terminology:

**HTML Form**: A form for user input that is created by a `<form>` element that consists of opening and closing `<form>` tags that enclose one or more `<input>` elements where users can enter information, and a way to submit the form.

**Event**: Something a user does on a web page or something that happens on a web page.

**Event handler**: A callback function that executes code in response to an event.

**submit event**: An event that occurs when a user clicks on a `<button>` element or an `<input>` element whose `type` attribute is set to `submit` within a `<form>` to submit a form on a web page.

**load event**: An event that occurs once all contents of a file have loaded (in the case of a `FileReader` object that is listening for the `load` event).

**dragstart event**: An event that occurs when a user starts dragging an element or text selection.

**dragover event**: An event that occurs when an element or text selection is being dragged over a valid drop target.

**drop event**: An event that occurs when an element or text selection is dropped on a valid drop target.

Here are some other useful resources:
- MDN
  - [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
    - [HTMLElement: dragstart event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event)
    - [HTMLElement: dragover event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event)
    - [HTMLElement: drop event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event)
  - [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
    - [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
    - [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
  - [File](https://developer.mozilla.org/en-US/docs/Web/API/File)
  - [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
  - [DataTransfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)

## Instructions

**Fork and clone** this practice lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

Then, open the `index.html` file on your browser to run the application.

Write your code in the `index.js` file. There is some starter code provided in `index.js`.

These are your tasks:

1. Add an event listener to the `<form>` element with the id of `new-movie-form` that will allow the `<form>` element to listen for the `submit` event and will call the `handleSubmit()` function in response to the `submit` event.
2. `handleSubmit(event)`: The `handleSubmit()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `event` whose value should be a `SubmitEvent` object when the correct value is passed as an argument into the function (Hint: You can check the value of a parameter or variable using `console.log()`). When the `handleSubmit()` function is called, the following actions should take place:
    - The `preventDefault()` method is called on the `SubmitEvent` object to prevent the page from refreshing.
    - The `File` object for the first file chosen from the file `<input>` element with the id of `poster-input` is stored into a variable named `file`.
    - A new `FileReader` object is created and stored into a variable named `fileReader`.
    - An event listener is added to the `FileReader` object, referenced by the `fileReader` variable, that will allow the `FileReader` object to listen for a `load` event and will call the `handleLoad()` function in response to the `load` event.
    - The `readAsDataURL()` method is called on the `FileReader` object, referenced by the `fileReader` variable. The `File` object, referenced by the `file` variable, is passed in as an argument to the `readAsDataURL()` method.
3. `handleLoad(event)`: The `handleLoad()` function has been declared for you, but you will need to write the code that should go inside of this function. It has 1 parameter named `event` whose value should be a `ProgressEvent` object when the correct value is passed as an argument into the function (Hint: You can check the value of a parameter or variable using `console.log()`). When the `handleLoad()` function is called, the following actions should take place:
    - An `object` is created and stored into a variable named `newMovie`. The `object` contains the following key and value pairs:
      - A key of `title` whose value is set to the value of the `value` attribute of the `<input>` element with the id of `title-input`.
      - A key of `runtime` whose value is set to the value of the `value` attribute of the `<input>` element with the id of `runtime-input`.
      - A key of `showtime` whose value is set to the value of the `value` attribute of the `<input>` element with the id of `showtime-input`.
      - A key of `description` whose value is set to the value of the `value` attribute of the `<textarea>` element with the id of `description-textarea`.
      - A key of `poster` whose value is set to the value of the `result` key of the `FileReader` object (Hint: You should be able to access the `FileReader` object from `event.target`, if the `event` parameter has the correct value).
    - The `addMovieToList()` function is called and the `object` referenced by the `newMovie` variable is passed in as an argument to the `addMovieToList()` function.
4. `addMovieToList(movie)`: The `addMovieToList()` function has been declared for you and most of the code for this function has been written for you. It has 1 parameter named `movie` whose value is an `object` that contains the following keys: `title`, `runtime`, `showtime`, `description`, and `poster`. Write the code to add the following functionality to the `addMovieToList()` function:
    - Set the value of the `draggable` attribute of the `<li>` element, referenced by the `liElement` variable, to `true`.
    - Add an event listener to the `<li>` element, referenced by the `liElement` variable, that will allow the `<li>` element to listen for a `dragstart` event. When the event handler (callback function) for the event listener is called, the value of the `draggedMovie` variable is set to the value of the `movie` parameter from the `addMovieToList()` function. The `draggedMovie` variable has been declared for you in global scope.
5. Add an event listener to the `<div>` element with the id of `title` that will allow the `<div>` element to listen for the `dragover` event. When the event handler (callback function) for the event listener is called, the `preventDefault()` method is called on the `DragEvent` object to allow for the `drop` event to occur on the `<div>` element.
6. Add an event listener to the `<div>` element with the id of `title` that will allow the `<div>` element to listen for the `drop` event. When the event handler (callback function) for the event listener is called, the `displayMovieDetails()` function is called and the `object` referenced by the `draggedMovie` variable is passed in as an argument to the `displayMovieDetails()` function.

## Solution

```javascript
function addMovieToList(movie){
    const liElement = document.createElement('li');
    liElement.className = "film item";
    liElement.textContent = movie.title;

    const filmsListElement = document.getElementById('films');
    filmsListElement.appendChild(liElement);

    // Task # 4 solution code
    liElement.draggable = 'true';
    liElement.addEventListener('dragstart', () => {
        draggedMovie = movie;
    });
}

// Task # 2 solution code
function handleSubmit(event){
    event.preventDefault();

    const posterInput = document.getElementById('poster-input');
    const file = posterInput.files['0'];

    const fileReader = new FileReader();
    fileReader.addEventListener('load', handleLoad);
    fileReader.readAsDataURL(file);
}

// Task # 3 solution code
function handleLoad(event){
    const titleInput = document.getElementById('title-input');
    const runtimeInput = document.getElementById('runtime-input');
    const showtimeInput = document.getElementById('showtime-input');
    const descriptionTextarea = document.getElementById('description-textarea');

    const newMovie = {
        title: titleInput.value,
        runtime: runtimeInput.value,
        showtime: showtimeInput.value,
        description: descriptionTextarea.value,
        poster: event.target.result
    };

    addMovieToList(newMovie);
}

// Task # 1 solution code
const newMovieForm = document.getElementById('new-movie-form');
newMovieForm.addEventListener('submit', handleSubmit);

// Task # 5 solution code
const titleDiv = document.getElementById('title');
titleDiv.addEventListener('dragover', (event) => {
    event.preventDefault();
});

// Task # 6 solution code
titleDiv.addEventListener('drop', () => {
    displayMovieDetails(draggedMovie);
});
```