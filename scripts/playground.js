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

// // ===Pseudo Code===
// // - 1.create html for use input of name and digital pet display page, hided digital pet and metrics page - done





// // - 2. create game object that should have timer and time properties and start timer 
// //     - create timer  property
// //     - start timer methods and event handler for setInterval
//         /* 
//         const game
//         time: 0,
//         timer: null,
//         startTimer(){
//             setInterval(event handler,1000)
//         },
//         eventhandler(){
//             game.time++
//         }
        
//         */
//         const game = {
//             time: 0,
//             timer: null,
//             start(event){
//                 //- hide digital pet and metrics page on click of submit
//         /* 
//         $('submit-btn').on('click,$(submit info).addClass('no-display) and $(digital pet infor).removeClass(no-display))
        
//         */
//                 event.preventDefault();
//                 $('.name-input-screen').addClass('no-display');
//                 $('.digital-pet-screen').removeClass('no-display');
//                 digitalPet.displayMetrics();
//                 game.startTimer();
//                 $submitBtn.off('click',digitalPet.namePet);
//                 $submitBtn.off('click',game.start);
//             },
//             startTimer(){
//                 game.timer = setInterval(game.timerHandler,1000)
//             },
//             timerHandler(){
//                 //animate   
//                 game.time++;
//                 console.log(game.time);
//                 digitalPet.checkAge();
//                 digitalPet.checkMetrics();
//                 digitalPet.checkImageChange();
//                 digitalPet.checkIfDead();
        
        
//             },
//         }
            
//         // 3. create digital pet object, should have property of hunger, sleepiness, and bordom on it
//         //      - 
//         //      - add pet name, metrics to screen
//         const digitalPet = {
//             name: null,
//             hunger: 0,
//             sleepiness: 0,
//             bordem:0,
//             age:0,
//             intervalOfAging: 3,
//             intervalMetricsIncrease: 1,
//             intervalEvolution: 3,
//             isDead: false,
//             evolutionImages: [
//                 'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png',
//                 'https://i.pinimg.com/originals/f9/e7/a8/f9e7a8560adc31252b9b4d7f0906f0bf.png','https://www.nicepng.com/png/detail/902-9020336_umbreon-shiny-png-shiny-umbreon-umbreon.png'
//             ],
//             passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
//             namePet(event){
//                 event.preventDefault();
//                 this.name = $('#pet-name').val();
//                 $('.name-span').text(this.name)
//             },
//             displayMetrics(){
//                 $('.hunger-num').text(digitalPet.hunger);
//                 $('.sleepiness-num').text(digitalPet.sleepiness);
//                 $('.bordem-num').text(digitalPet.bordem);
//                 $('.age-num').text(digitalPet.age);
//             },
//             // 4. create methods to decrease each of the those properties
//         //     - descrease in pet object 
//         //     - decrease in display
        
//         /* 
//         feed(){
//             this.hunger--
//             digitalPet.displayMetrics
//         }
//         */
//             feed(){
//                 digitalPet.hunger--;
//                 digitalPet.displayMetrics();
//             },
//             turnOffLights(){
//                 digitalPet.sleepiness--;
//                 digitalPet.displayMetrics();
//             },
//             play(){
//                 digitalPet.bordem--;
//                 digitalPet.displayMetrics();
//             },
//             checkAge(){
//                 // - create methods to increase each of those properties based on timer intervals
//         /* 
//         digitalPet.checkTime{
//             if(time%3600===0){
//                 age++
//             }
//             if(time%1800){
//                 metrics++
//             }
//         }
//         */
//                 //check if add age is needed
//                 if(!digitalPet.isDead){
//                 if(game.time%(digitalPet.intervalOfAging)===0){
//                     if(game.time!==0){
//                         digitalPet.age++;
//                         digitalPet.displayMetrics();
//                     }
//                 }
//             }
//             },
//             checkMetrics(){
//                 //check if add metrics is need
//                 if(!digitalPet.isDead){
//                 if(game.time%(digitalPet.intervalMetricsIncrease)===0){
//                     if(game.time!==0){
//                         digitalPet.hunger++;
//                         digitalPet.sleepiness++;
//                         digitalPet.bordem++;
//                         digitalPet.displayMetrics();
//                     }
//                 }        
//             }
//             },
//             //add method to change image on age
//             checkImageChange(){
//                 if(!digitalPet.isDead){
//                 if(digitalPet.age%digitalPet.intervalEvolution===0){
//                     if(digitalPet.age!==0){
//                         if(!(digitalPet.age/digitalPet.intervalEvolution>2)){
//                         $('.digital-pet-image').attr('src',digitalPet.evolutionImages[Math.floor(digitalPet.age/digitalPet.intervalEvolution)])
//                         }
//                     }
//                 }
//             }
//             },
//             //add method to check if pet has died
//             checkIfDead(){
//                 const metricsArr = [digitalPet.hunger,digitalPet.sleepiness,digitalPet.bordem];
        
//                 for(let metric of metricsArr){
//                     if(metric>=10){
//                     console.log('dead')
// - display 'dead' pet image
//                     $('.digital-pet-image').attr('src',digitalPet.passedOutImages[0]);
//                     digitalPet.isDead = true;
//                     $('.animate__animated').removeClass('animate__animated');
        
//                     $('.death-flag').removeClass('no-display');
//                     $('.death-flag').text(`Your Pet has Died! reload to get another one`);
//                     clearInterval(game.timer);
//                 }
//             }
//             },
        
//         }
        
        
        
        
        
        
//         //event listener for submit btn and player interaction btn
//         const $submitBtn = $('#submit-name');
//         const $feedBtn = $('#feed-btn');
//         const $lightsBtn = $('#lights-btn');
//         const $playBtn = $('#play-btn');
        
        
//         $submitBtn.on('click', digitalPet.namePet);
//         $submitBtn.on('click', game.start);
        
//         // event listeners for the buttons(feed, turn off lights, play) that decrease display
//         $feedBtn.on('click',digitalPet.feed)
//         $lightsBtn.on('click',digitalPet.turnOffLights)
//         $playBtn.on('click',digitalPet.play)
        
        
        
//         


/* Updated with Classes verion */
const pokeData = [];
const pokeDataHardMode = [];

async function getPokemon(){

    const pokemonRawData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=18');
    
        const pokemon = await pokemonRawData.json();
    
    return pokemon
        
        }
    getPokemon().then(poke=>{
    poke.results.forEach(
        function(e,i){
            if(i%3===0){
                pokeData.push(
                    {
                        name:null,
                        evolutionNames:[poke.results[i].name,poke.results[i+1].name,poke.results[i+2].name],
                        intervalOfAging: 10,
                        intervalMetricsIncrease: 1,
                        intervalEvolution: 1,
                        evolutionImages: [
                            `https://img.pokemondb.net/sprites/black-white/normal/${poke.results[i].name}.png`,
                            `https://img.pokemondb.net/sprites/black-white/normal/${poke.results[i+1].name}.png`,`https://img.pokemondb.net/sprites/black-white/normal/${poke.results[i+2].name}.png`
                        ],
                        passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
                    }
                    
                    );
                    pokeDataHardMode.push(
                        {
                            name:null,
                            evolutionNames:[poke.results[i].name,poke.results[i+1].name,poke.results[i+2].name],
                            intervalOfAging: 10,
                            intervalMetricsIncrease: 1,
                            intervalEvolution: 1,
                            evolutionImages: [
                                `https://img.pokemondb.net/sprites/silver/normal/${poke.results[i].name}.png`,
                                `https://img.pokemondb.net/sprites/silver/normal/${poke.results[i+1].name}.png`,
                                `https://img.pokemondb.net/sprites/silver/normal/${poke.results[i+2].name}.png`,
                            ],
                            passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
                        }
                        
                        );
            }
        }
    )
    })
 console.log(pokeData)      

const petsData =[

{
    name:null,
    intervalOfAging: 10,
    intervalMetricsIncrease: 1,
    intervalEvolution: 1,
    evolutionImages: [
        'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
        'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png','https://img.pokemondb.net/sprites/black-white/normal/charizard.png'
    ],
    passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
},
{
    name:null,
    intervalOfAging: 10,
    intervalMetricsIncrease: 1,
    intervalEvolution: 1,
    evolutionImages: [
        'https://img.pokemondb.net/sprites/black-white/normal/bulbasaur.png',
        'https://img.pokemondb.net/sprites/black-white/normal/ivysaur.png','https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png'
    ],
    passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
},
{
    name:null,
    intervalOfAging: 10,
    intervalMetricsIncrease: 1,
    intervalEvolution: 1,
    evolutionImages: [
        'https://img.pokemondb.net/sprites/black-white/normal/squirtle.png',
        'https://img.pokemondb.net/sprites/black-white/normal/wartortle.png','https://img.pokemondb.net/sprites/black-white/normal/blastoise.png'
    ],
    passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
}
];


const petsHardModeData =[

    {
        name:null,
        intervalOfAging: 10,
        intervalMetricsIncrease: 1,
        intervalEvolution: 1,
        evolutionImages: [
            'https://img.pokemondb.net/sprites/silver/normal/charmander.png',
            'https://img.pokemondb.net/sprites/silver/normal/charmeleon.png','https://img.pokemondb.net/sprites/silver/normal/charizard.png'
        ],
        passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
    },
    {
        name:null,
        intervalOfAging: 10,
        intervalMetricsIncrease: 1,
        intervalEvolution: 1,
        evolutionImages: [
            'https://img.pokemondb.net/sprites/silver/normal/bulbasaur.png',
            'https://img.pokemondb.net/sprites/silver/normal/ivysaur.png','https://img.pokemondb.net/sprites/silver/normal/venusaur.png'
        ],
        passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
    },
    {
        name:null,
        intervalOfAging: 10,
        intervalMetricsIncrease: 1,
        intervalEvolution: 1,
        evolutionImages: [
            'https://img.pokemondb.net/sprites/silver/normal/squirtle.png',
            'https://img.pokemondb.net/sprites/silver/normal/wartortle.png','https://img.pokemondb.net/sprites/silver/normal/blastoise.png'
        ],
        passedOutImages: ['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],
    }
    ];




class PetFactory{
    constructor(name,data,dataHardMode){
        this.name = name;
        this.pets = [];
        this.hardModePets = [];
        this.currentIndex = 0;
        this.currentIndexhardMode = 0;
        this.inputData = data;
        this.inputHardModeData = dataHardMode;
    }
    createPet(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id=this.pets.length){
        const newPet = new Pet(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id)
         this.pets.push(newPet)
     }
     createHardModePet(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id=`HM-${this.hardModePets.length}`){
        const newPet = new HardModePet(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id)
         this.hardModePets.push(newPet)
     }
          
    makeNewPet=()=>{
        console.log(this);

        console.log(this.inputData);
        this.createPet(this.inputData[this.currentIndex].name,
        this.inputData[this.currentIndex].intervalOfAging,
        this.inputData[this.currentIndex].intervalMetricsIncrease,
        this.inputData[this.currentIndex].intervalEvolution,
        this.inputData[this.currentIndex].evolutionImages,
        this.inputData[this.currentIndex].passedOutImages)

         if(this.currentIndex === this.inputData.length-1){
            this.currentIndex = 0;
         }else{
             this.currentIndex++
         }
         $('body').empty();
         $('body').append(this.pets[this.pets.length-1].render());
        this.pets[this.pets.length-1].addEventListeners();
    }
    makeNewHardModePet=()=>{
        console.log(this);

        console.log(this.inputHardModeData);
        this.createHardModePet(this.inputHardModeData[this.currentIndex].name,
        this.inputHardModeData[this.currentIndexhardMode].intervalOfAging,
        this.inputHardModeData[this.currentIndexhardMode].intervalMetricsIncrease,
        this.inputHardModeData[this.currentIndexhardMode].intervalEvolution,
        this.inputHardModeData[this.currentIndexhardMode].evolutionImages,
        this.inputHardModeData[this.currentIndexhardMode].passedOutImages)

         if(this.currentIndexhardMode === this.inputData.length-1){
            this.currentIndexhardMode = 0;
         }else{
             this.currentIndexhardMode++
         }
         $('body').empty();
         $('body').append(this.hardModePets[this.hardModePets.length-1].render());
         this.hardModePets[this.hardModePets.length-1].addEventListeners();
    }
}

    //intialize pet factory
    const petFactory1 = new PetFactory('factory1',pokeData,pokeDataHardMode)
        
        class Pet{
            constructor(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id){
                this.name = name;
                this.intervalOfAging = intervalOfAging;
                this.intervalMetricsIncrease = intervalMetricsIncrease;
                this.intervalEvolution = intervalEvolution;
                this.evolutionImages = evolutionImages;
                this.passedOutImages = passedOutImages;
                this.hunger = 0;
                this.sleepiness = 0;
                this.bordem=0;
                this.age = 0;
                this.id = id;
                this.time = 0;
                this.timer = null
                
            }
            startTimer=()=>{
                this.timer = setInterval(this.timerHandler,1000)
            }
            timerHandler=()=>{
                //animate   
                this.time++;
                console.log(this.time);
                this.checkAge();
                this.checkMetrics();
                this.checkImageChange();
                this.checkIfDead();
        
        
            }
            render(){
                return `<div class="name-input-screen">
                <main>
                    <form action="#">
                        <label for="pet-name">Enter Your Pet Name</label>
                        <input id ="pet-name" name = "pet-name" type="text" placeholder>
                    <div class="button-div">
                        <button id="${this.id}-submit-name">Submit</button>
                    </div>
                    </form>
                </main>
               
                </div>
                <div class="digital-pet-screen no-display">
        <main>
            <section class="text-display">
                <div class= "name-display">
                    <div class="name-text">
                    name: <span class ="name-span"></span>
                </div>
                </div>
                <div class="metrics-display">
                    <div class="metric hunger-text">
                        age: <span class = 'metric-num age-num'>0</span>
                    </div>
                    <div class="metric hunger-text">
                        Hunger: <span class = 'metric-num hunger-num'>0</span>
                    </div>
                    <div class="metric sleepiness-text">
                        sleepiness <span class = 'metric-num sleepiness-num'>0</span>
                    </div>
                    <div class="metric bordem">
                        bordem <span class = 'metric-num bordem-num'>0</span>
                    </div>
                </div>
            </section>
            <section class="digital-pet-display animate__animated animate__bounce animate__infinite">
                <img class="digital-pet-image" src=${this.evolutionImages[0]} alt="digital pet image">
                <div>
            </div>
            </section>
            <h2 class="no-display death-flag">jadf</h2>
            <div class="new-button-container"><button class="no-display " id="${this.id}-make-new-pet">Make New Pet</button><button class="no-display " id="${this.id}-make-new-hard-mode">Make New Hard-Mode Pet</button></div>
            <section class="buttons-display">
                <button class = "player-buttons" id="${this.id}-feed-btn">
                    Feed
                </button>
                <button class = "player-buttons" id="${this.id}-lights-btn">
                    Turn Off Lights
                </button>
                <button class = "player-buttons" id="${this.id}-play-btn">
                    Play
                </button>
            </section>
        </main>
    </div>`;
            }
            start=(event)=>{
                //- hide digital pet and metrics page on click of submit
                event.preventDefault();
                console.log('hellooo')
                $('.name-input-screen').addClass('no-display');
                $('.digital-pet-screen').removeClass('no-display');
                this.displayMetrics();
                this.startTimer();
                $(`${this.id}-submit-name`).off('click',this.namePet);
                $(`${this.id}-submit-name`).off('click',this.start);
            }
            namePet=(event)=>{
                event.preventDefault();
                this.name = $('#pet-name').val();
                $('.name-span').text(this.name)
            }
            addEventListeners(){
                //console.log(this)
                $(`#${this.id}-submit-name`).on('click',this.start);
                $(`#${this.id}-submit-name`).on('click',this.namePet)
                $(`#${this.id}-feed-btn`).on('click',this.feed);
                $(`#${this.id}-lights-btn`).on('click',this.turnOffLights);
                $(`#${this.id}-play-btn`).on('click',this.play);
                $(`#${this.id}-make-new-pet`).on('click',petFactory1.makeNewPet)
                $(`#${this.id}-make-new-hard-mode`).on('click',petFactory1.makeNewHardModePet
                )
            }
            displayMetrics(){
                $('.hunger-num').text(this.hunger);
                $('.sleepiness-num').text(this.sleepiness);
                $('.bordem-num').text(this.bordem);
                $('.age-num').text(this.age);
            }
            feed=()=>{
                this.hunger--;
                this.displayMetrics();
            }
            turnOffLights=()=>{
                this.sleepiness--;
                this.displayMetrics();
            }
            play=()=>{
                this.bordem--;
                this.displayMetrics();
            }
            checkAge(){
                if(!this.isDead){
                if(this.time%(this.intervalOfAging)===0){
                    if(this.time!==0){
                        this.age++;
                        this.displayMetrics();
                    }
                }
            }
            }
            checkMetrics(){
                //check if add metrics is need
                if(!this.isDead){
                if(this.time%(this.intervalMetricsIncrease)===0){
                    if(this.time!==0){
                        this.hunger++;
                        this.sleepiness++;
                        this.bordem++;
                        this.displayMetrics();
                    }
                }        
            }
            }
            //add method to change image on age
            checkImageChange(){
                if(!this.isDead){
                if(this.age%this.intervalEvolution===0){
                    if(this.age!==0){
                        if(!(this.age/this.intervalEvolution>this.evolutionImages.length-1)){
                        $('.digital-pet-image').attr('src',this.evolutionImages[Math.floor(this.age/this.intervalEvolution)])
                        }
                    }
                }
            }
            }
            //add method to check if pet has died
            checkIfDead(){
                const metricsArr = [this.hunger,this.sleepiness,this.bordem];
        
                for(let metric of metricsArr){
                    if(metric>=10){
                    clearInterval(this.timer);
                    $('.digital-pet-image').attr('src',this.passedOutImages[0]);
                    this.isDead = true;
                    $('.animate__animated').removeClass('animate__animated');
                    $('.death-flag').removeClass('no-display');
                    $('.death-flag').text(`Your Pet has Died! Click Below to Get a new Pet`);
                    $(`#${this.id}-make-new-hard-mode`).removeClass('no-display')
                    $(`#${this.id}-make-new-pet`).removeClass('no-display')
                    $('.buttons-display').addClass('no-display')
                    console.log(this.id)
                    break
                }
            }
            }
        }

        class HardModePet extends Pet {
            constructor(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id){
                super(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id)
                this.intervalMetricsIncrease = this.intervalMetricsIncrease/2;
            }
            feed=()=>{
                this.hunger -=.5;
                this.displayMetrics();
            }
            turnOffLights=()=>{
                this.sleepiness -=.5;
                this.displayMetrics();
            }
            play=()=>{
                this.bordem -=.5;
                this.displayMetrics();
            }
        }
        



        //event listeners
        $('#make-new-pet-start').on('click',petFactory1.makeNewPet);
        $('#make-new-hard-mode-start').on('click',petFactory1.makeNewHardModePet);

        //petFactory1.makeNewHardModePet();


        const hardModePet1 = new HardModePet('pet1',10,1,3,[
            'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
            'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png" alt="Charmeleo','https://img.pokemondb.net/sprites/black-white/normal/charizard.png'
        ],['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],1)
        console.log(hardModePet1)
        
        
    //     const pet1 = new Pet('pet1',10,1,3,[
    //         'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
    //         'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png" alt="Charmeleo','https://img.pokemondb.net/sprites/black-white/normal/charizard.png'
    //     ],['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],1)
     
    //     console.log(pet1)
    // $(`body`).eq(0).append(pet1.render());
    // pet1.addEventListeners()



//create game object that will create start screen, pet factory

//adjust constructor and varible name to hardMode pet
//todo tree = vs code extension //better comments

//pokeapi.co

//use string concat on console.log
//use emojis in console.log
//on console.log reference function that they are called from

