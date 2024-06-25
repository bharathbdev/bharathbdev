
debouncing and throtling

Debouncing and throttling are techniques in javascript to optimise the application and browser performance.
we will use these to limit the rate of making api calls or function calls

situation

user wants to clcik on button (shooting)
resizing browser
scroll

debouncing
if the differenec between 2 events is >500ms then make api call
throttling
irrespective of number of times user clicking the button, it will make api call after 500ms



Implemnetation of debouncing

create a setTimeOut(after 300)
clear that timeout if time interval differnece is <300 ms

Implemnetation of throttling
create a setTimeOut and use its timer id to check whetehr it is undefined and then assign


The main difference between throttling and debouncing is that throttling executes the function at a regular interval,
while debouncing executes the function only after some cooling period.


    Use of Debouncing and Throttling in Real Life

    We can throttle a button click event, if we do not want the user to spam by clicking the button frequently.

    In the case of window resize event, if we want to redraw the UI only when the user has fixed the size of the window, we can use debouncing.

    With Mouse move event, if we are displaying the location coordinates of the mouse pointer, it is much better to show the coordinates once the user reached the desired location. Here, we can use debouncing.
