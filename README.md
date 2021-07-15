# tomagotchigame

<img width="591" alt="Screen Shot 2021-07-13 at 10 19 20 PM" src="https://user-images.githubusercontent.com/5798861/125550389-0eaeb617-2928-4ee6-8aaa-dc23aaed3453.png">

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
