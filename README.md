# Simple-Speaker-Timer
A timer for public speakers using a simple web page as both the controller and display.

The intended setup is simply a laptop next to the timer control person - moderator, host, chair, or whomever - and a large external monitor or projection in view of the speaker. Thus, both can see the countdown and the person controlling the timer can easily start and reset it.

HTML, CSS, and JavaScript powered, the timer is a single HTML file that can be edited directly - in the HTML portion - to change the timer. Or if it is preferrable, the file can be copied and edited so there are several preset timers of different durations. (A separate `index.html` file is also provided to allow hosting in a folder on any website, but it is not required for use. It also contains directions.)

To use the file (`speakerTimer.html`), open it in any web browser, maximize the browser window - F11 on windows - and click the button in the lower left to start and reset the timer. Open the file in a text editor and change the time display where indicated at the bottom of the file to change the time allotment.

---

### Compiling / Combining
Since each release should result in *one* `speakerTimer.html` file AND it's easier to work on and test if the JavaScript, CSS, and HTML code are in separate files, it's important to combine them into one file for each release. Currently that is a manual process, but I'm interested in making that an automated task. (Please let me know if you have a good suggestion for that.)

### Unit Testing
Simply open the `index.html` file in the `/test` folder to see the unit tests. Refresh the page after changes to either the `speakerTimer.js` file in the `/src` folder or `tests.js` in the `/test` folder to update the tests.
