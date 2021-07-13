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
    e. The image will change at each 3 age internal

4. The user clicks the feed, play, or turn off lights button
    a. if the user clicks the "feed" button the "hunger" metric displayed will decrease by 1
    b. if the user clicks the "turn off lights" button the "sleepiness" metric displayed will decrease by 1
    c. if the user clicks the "play" button the "bordem" metric displayed will decrease by 1

Milestones:
    - create html for use input of name and digital pet display page, 
    
    - hide digital pet and metrics page on click of submit
    - create game object that should have timer and time properties and start timer 
        - create timer  property
        - start timer methods and event handler for setInterval
    - create digital pet object, should have property of hunger, sleepiness, and bordom on it
        - decrease in pet object
        - decrease in display
    - create methods to decrease each of the those properties
        - descrease in pet object 
        - decrease in display
    - create methods to increase each of those properties based on timer intervals
    - add event listeners on the buttons(feed, turn off lights, play) that decrease display
    - animate the image on the screen(research how to do this)
    -change image based on age
    - display 'dead' pet image





//icebox
-the digital pet dies at a certain age, kinda sad, but going sell more pets, captialism is an endless cycle of growth and we're all gonna die anyway
-increase each metric at different time intervals
-make sure that the feed, hunger, sleepiness metric cannot go below zero
- make a new pet when the first one dies or add and option of getting a new pet
- make this a with express so you cna load pages
- refactor with classes
- create baby 
- exercise() method add on
- add display fo time in hours, mintues, seconds since game has started
- check age and display a different death image based on it's evultion
- stop way to revieved pet
- add a way to get a new pet


//control flow map/brain map/ annotate wire frames -annotate notes to wireframe



*/


// ===Pseudo Code===
// - 1.create html for use input of name and digital pet display page, hided digital pet and metrics page - done





// - 2. create game object that should have timer and time properties and start timer 
//     - create timer  property
//     - start timer methods and event handler for setInterval
        /* 
        const game
        time: 0,
        timer: null,
        startTimer(){
            setInterval(event handler,1000)
        },
        eventhandler(){
            game.time++
        }
        
        */
        const game = {
            time: 0,
            timer: null,
            start(event){
                //- hide digital pet and metrics page on click of submit
        /* 
        $('submit-btn').on('click,$(submit info).addClass('no-display) and $(digital pet infor).removeClass(no-display))
        
        */
                event.preventDefault();
                $('.name-input-screen').addClass('no-display');
                $('.digital-pet-screen').removeClass('no-display');
                digitalPet.displayMetrics();
                game.startTimer();
                $submitBtn.off('click',digitalPet.namePet);
                $submitBtn.off('click',game.start);
            },
            startTimer(){
                game.timer = setInterval(game.timerHandler,1000)
            },
            timerHandler(){
                //animate   
                game.time++;
                console.log(game.time);
                digitalPet.checkAge();
                digitalPet.checkMetrics();
                digitalPet.checkImageChange();
                digitalPet.checkIfDead();
        
        
            },
        }
            
        // 3. create digital pet object, should have property of hunger, sleepiness, and bordom on it
        //      - 
        //      - add pet name, metrics to screen
        const digitalPet = {
            name: null,
            hunger: 0,
            sleepiness: 0,
            bordem:0,
            age:0,
            intervalOfAging: 3,
            intervalMetricsIncrease: 1,
            intervalEvolution: 3,
            isDead: false,
            evolutionImages: [
                'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png',
                'https://i.pinimg.com/originals/f9/e7/a8/f9e7a8560adc31252b9b4d7f0906f0bf.png','https://www.nicepng.com/png/detail/902-9020336_umbreon-shiny-png-shiny-umbreon-umbreon.png'
            ],
            passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
            namePet(event){
                event.preventDefault();
                this.name = $('#pet-name').val();
                $('.name-span').text(this.name)
            },
            displayMetrics(){
                $('.hunger-num').text(digitalPet.hunger);
                $('.sleepiness-num').text(digitalPet.sleepiness);
                $('.bordem-num').text(digitalPet.bordem);
                $('.age-num').text(digitalPet.age);
            },
            // 4. create methods to decrease each of the those properties
        //     - descrease in pet object 
        //     - decrease in display
        
        /* 
        feed(){
            this.hunger--
            digitalPet.displayMetrics
        }
        */
            feed(){
                digitalPet.hunger--;
                digitalPet.displayMetrics();
            },
            turnOffLights(){
                digitalPet.sleepiness--;
                digitalPet.displayMetrics();
            },
            play(){
                digitalPet.bordem--;
                digitalPet.displayMetrics();
            },
            checkAge(){
                // - create methods to increase each of those properties based on timer intervals
        /* 
        digitalPet.checkTime{
            if(time%3600===0){
                age++
            }
            if(time%1800){
                metrics++
            }
        }
        */
                //check if add age is needed
                if(!digitalPet.isDead){
                if(game.time%(digitalPet.intervalOfAging)===0){
                    if(game.time!==0){
                        digitalPet.age++;
                        digitalPet.displayMetrics();
                    }
                }
            }
            },
            checkMetrics(){
                //check if add metrics is need
                if(!digitalPet.isDead){
                if(game.time%(digitalPet.intervalMetricsIncrease)===0){
                    if(game.time!==0){
                        digitalPet.hunger++;
                        digitalPet.sleepiness++;
                        digitalPet.bordem++;
                        digitalPet.displayMetrics();
                    }
                }        
            }
            },
            //add method to change image on age
            checkImageChange(){
                if(!digitalPet.isDead){
                if(digitalPet.age%digitalPet.intervalEvolution===0){
                    if(digitalPet.age!==0){
                        if(!(digitalPet.age/digitalPet.intervalEvolution>2)){
                        $('.digital-pet-image').attr('src',digitalPet.evolutionImages[Math.floor(digitalPet.age/digitalPet.intervalEvolution)])
                        }
                    }
                }
            }
            },
            //add method to check if pet has died
            checkIfDead(){
                const metricsArr = [digitalPet.hunger,digitalPet.sleepiness,digitalPet.bordem];
        
                for(let metric of metricsArr){
                    if(metric>=10){
                    console.log('dead')
                    $('.digital-pet-image').attr('src',digitalPet.passedOutImages[0]);
                    digitalPet.isDead = true;
                    $('.animate__animated').removeClass('animate__animated');
        
                    $('.death-flag').removeClass('no-display');
                    $('.death-flag').text(`Your Pet has Died! reload to get another one`);
                    clearInterval(game.timer);
                }
            }
            },
        
        }
        
        
        
        
        
        
        //event listener for submit btn and player interaction btn
        const $submitBtn = $('#submit-name');
        const $feedBtn = $('#feed-btn');
        const $lightsBtn = $('#lights-btn');
        const $playBtn = $('#play-btn');
        
        
        $submitBtn.on('click', digitalPet.namePet);
        $submitBtn.on('click', game.start);
        
        // event listeners for the buttons(feed, turn off lights, play) that decrease display
        $feedBtn.on('click',digitalPet.feed)
        $lightsBtn.on('click',digitalPet.turnOffLights)
        $playBtn.on('click',digitalPet.play)
        
        
        
        // - display 'dead' pet image
        
        
        class Pet{
            constructor(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages){
                this.hunger = 0;
                this.sleepiness = 0;
                this.bordem=0;
                this.age = 0;
            }

            intervalOfAging: 3,
            intervalMetricsIncrease: 1,
            intervalEvolution: 3,
            isDead: false,
            evolutionImages: [
                'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png',
                'https://i.pinimg.com/originals/f9/e7/a8/f9e7a8560adc31252b9b4d7f0906f0bf.png','https://www.nicepng.com/png/detail/902-9020336_umbreon-shiny-png-shiny-umbreon-umbreon.png'
            ],
            passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
            namePet(event){
                event.preventDefault();
                this.name = $('#pet-name').val();
                $('.name-span').text(this.name)
            },
            displayMetrics(){
                $('.hunger-num').text(digitalPet.hunger);
                $('.sleepiness-num').text(digitalPet.sleepiness);
                $('.bordem-num').text(digitalPet.bordem);
                $('.age-num').text(digitalPet.age);
            },
            // 4. create methods to decrease each of the those properties
        //     - descrease in pet object 
        //     - decrease in display
        
        /* 
        feed(){
            this.hunger--
            digitalPet.displayMetrics
        }
        */
            feed(){
                digitalPet.hunger--;
                digitalPet.displayMetrics();
            },
            turnOffLights(){
                digitalPet.sleepiness--;
                digitalPet.displayMetrics();
            },
            play(){
                digitalPet.bordem--;
                digitalPet.displayMetrics();
            },
            checkAge(){
                if(!digitalPet.isDead){
                if(game.time%(digitalPet.intervalOfAging)===0){
                    if(game.time!==0){
                        digitalPet.age++;
                        digitalPet.displayMetrics();
                    }
                }
            }
            },
            checkMetrics(){
                //check if add metrics is need
                if(!digitalPet.isDead){
                if(game.time%(digitalPet.intervalMetricsIncrease)===0){
                    if(game.time!==0){
                        digitalPet.hunger++;
                        digitalPet.sleepiness++;
                        digitalPet.bordem++;
                        digitalPet.displayMetrics();
                    }
                }        
            }
            },
            //add method to change image on age
            checkImageChange(){
                if(!digitalPet.isDead){
                if(digitalPet.age%digitalPet.intervalEvolution===0){
                    if(digitalPet.age!==0){
                        if(!(digitalPet.age/digitalPet.intervalEvolution>2)){
                        $('.digital-pet-image').attr('src',digitalPet.evolutionImages[Math.floor(digitalPet.age/digitalPet.intervalEvolution)])
                        }
                    }
                }
            }
            },
            //add method to check if pet has died
            checkIfDead(){
                const metricsArr = [digitalPet.hunger,digitalPet.sleepiness,digitalPet.bordem];
        
                for(let metric of metricsArr){
                    if(metric>=10){
                    console.log('dead')
                    $('.digital-pet-image').attr('src',digitalPet.passedOutImages[0]);
                    digitalPet.isDead = true;
                    $('.animate__animated').removeClass('animate__animated');
        
                    $('.death-flag').removeClass('no-display');
                    $('.death-flag').text(`Your Pet has Died! reload to get another one`);
                    clearInterval(game.timer);
                }
            }
            },
        }