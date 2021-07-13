/* 

===User story===
1. User loads page
    a. a text input will appear in the center of the screen as well as a submit button
    b. the user is able to type within the box and click the submit button.

2. user clicks "submit" on starting page
    a. a image will render of the user's "digital pet"
    b. to the side 4 boxes will render displaying the metrics "hunger: 0", "sleepiness: 0", "bordem: 0" ,"age:0" respectively
    c. 3 buttons will render on the bottom of the page below the "digital pet" image with the text "turn off lights"
    d. the text in the text input when the submit button was clicked from the previous screen will appear in a box above the "digital pet" image
    e. *Not displayed* a internal timer within the game will start counting by seconds(will start counting on page load)

3. after initial page load
    a. the internal timer will continue to count up by seconds, at each 3600 interval of the timer(3600 seconds after page load and each sequeceal 3600 second interval) the "age" metric displayed on the page will increase by 1;
    b. at 1800 seconds intervals after page load, the bordem, sleepiness, and hunger metric will increase by 1;
    c. when either the hunger, border, or sleepiness display reaches 10 an image of the pet laying in a "dead" position will be displayed and a message will appear below the "digital pet" image will appear saying the pet has passed and reload the page to get another pet;
    d. The digital pet image will move on screen either up and down or left and right(will move in some animated way)
4. The user clicks the feed, play, or turn off lights button
    a. if the user clicks the "feed" button the "hunger" metric displayed will decrease by 1
    b. if the user clicks the "turn off lights" button the "sleepiness" metric displayed will decrease by 1
    c. if the user clicks the "play" button the "bordem" metric displayed will decrease by 1





//icebox
-the digital pet dies at a certain age, kinda sad, but going sell more pets, captialism is an endless cycle of growth and we're all gonna die anyway
-increase each metric at different time intervals
-make sure that the feed, hunger, sleepiness metric cannot go below zero
- make a new pet when the first one dies or add and option of getting a new pet
- make this a with express so you cna load pages


//control flow map/brain map/ annotate wire frames -annotate notes to wireframe



*/


// ===Pseudo Code===
// 1. User loads page
//     a. a text input will appear in the center of the screen as well as a submit button
//     b. the user is able to type within the box and click the submit button.

//--start with html page with input and submit button centered on page with flexbox align-items center

// 2. user clicks "submit" on starting page
//     a. a image will render of the user's "digital pet"
//     b. to the side 4 boxes will render displaying the metrics "hunger: 0", "sleepiness: 0", "bordem: 0" ,"age:0" respectively
//     c. 3 buttons will render on the bottom of the page below the "digital pet" image with the text "turn off lights"
//     d. the text in the text input when the submit button was clicked from the previous screen will appear in a box above the "digital pet" image
//     e. *Not displayed* a internal timer within the game will start counting by seconds(will start counting on page load)

// 3. after initial page load
//     a. the internal timer will continue to count up by seconds, at each 3600 interval of the timer(3600 seconds after page load and each sequeceal 3600 second interval) the "age" metric displayed on the page will increase by 1;
//     b. at 1800 seconds intervals after page load, the bordem, sleepiness, and hunger metric will increase by 1;
//     c. when either the hunger, border, or sleepiness display reaches 10 an image of the pet laying in a "dead" position will be displayed and a message will appear below the "digital pet" image will appear saying the pet has passed and reload the page to get another pet;
//     d. The digital pet image will move on screen either up and down or left and right(will move in some animated way)
// 4. The user clicks the feed, play, or turn off lights button
//     a. if the user clicks the "feed" button the "hunger" metric displayed will decrease by 1
//     b. if the user clicks the "turn off lights" button the "sleepiness" metric displayed will decrease by 1
//     c. if the user clicks the "play" button the "bordem" metric displayed will decrease by 1 