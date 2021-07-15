# tomagotchigame

===Explanation===

This is a pet digital simulatator game. The object of the game is to keep the digital pet alive as long as possible by clicking buttons to lower "bad health" metrics.

This was made as project for JavaScript Objects, CSS, and html Practice.

===User story===

1. User loads page

   a. A set of buttons will appear with one reading "create pet" and the other "create Hard Mode" pet

2. User clicks one of the buttons

   b. a text input will appear in the center of the screen as well as a submit button

   c. the user is able to type within the box and click the submit button.

3. user clicks "submit" on starting page

   a. a image will render of the user's "digital pet"

   b. to the side 4 boxes will render displaying the metrics "hunger: 0", "sleepiness: 0", "bordem: 0" ,"age:0" respectively

   c. 3 buttons will render on the bottom of the page below the "digital pet" image with the text "turn off lights", the image will change based on which button was selected in step 2

   d. the text in the text input when the submit button was clicked from the previous screen will appear in a box above the "digital pet" image

   e. (Not displayed) a internal timer within the game will start counting by seconds(will start counting on page load)

4. after initial page load

   a. the internal timer will continue to count up by seconds, at each 3600 interval of the timer(3600 seconds after page load and each sequeceal 3600 second interval) the "age" metric displayed on the page will increase by 1;

   b. at 1800 seconds intervals after page load, the bordem, sleepiness, and hunger metric will increase by 1;

   c. when either the hunger, border, or sleepiness display reaches 10 an image of the pet laying in a "dead" position will be displayed and a message will appear below the "digital pet" image will appear saying the pet has passed. 2 Buttons will appear asking if the would like a new pet one, with one button for easy mode and one for hard mode; The user will go back to step 1 and once a name is submitted a different digital pet image from the prior image will appear.

   d. The digital pet image will move on screen either up and down or left and right(will move in some animated way)

   e. The image will change at each 3 age internal up to 2 times

5. The user clicks the feed, play, or turn off lights button
   a. if the user clicks the "feed" button the "hunger" metric displayed will decrease by 1

   b. if the user clicks the "turn off lights" button the "sleepiness" metric displayed will decrease by 1

   c. if the user clicks the "play" button the "bordem" metric displayed will decrease by 1

===Technologies Used/explanation===

1.  JavaScript - used for functionality of timer and use interaction functionality.

2.  HTML - used for rending elements on page.

3.  CSS - used for styling page

4.  JQuery (JavaScript Library) - used for DOM Manipulation in JavaScript.

5.  animate.css (css libary) - used for boucning anamation of the "Digital Pet" Image.

6.  Images from (https://pokemondb.net/) - used for "Digital Pet" image.

7.  normailize.css(https://cdnjs.cloudflare.com) - used for css browser compatability change

===Approach Taken===

The Approach taken was a object approch that was refactored into a class approch with added functionaility and scaling of the project in mind.

===Unsolved Problems===
One of the classes uses a method from it's Factory class and a factory has to be created and added to the class before it runs, which does hurt ablity to create more factories.

Ideally a different image of the "passed away" pet will show depending on what image was displayed before death, so each evolution image would have a unique "passed away" image.

There is no peristence of data on the page, and the game progress is lost once a user reloads

The data from the api was structured in a way that is returns a list of objects with one image and one state line per object. (Evolutions of pokemon were their own object).The classes were structured to take in an object with 3 images(each pokemon with and all it's evolutions are one object) so data had to be reformated from the api call to create one object with 3 images(all evolution images) included as an array property. All other stats from the 3 indivual object were lost and ideally they would have been used to adjust metrics displayed at each "evolution" of the pet.

===WireFrame===
<img width="591" alt="wireframe" src="https://i.imgur.com/ts8d2Aq.png">
