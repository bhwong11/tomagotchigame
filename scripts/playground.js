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
        const newPet = new BabyPet(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id)
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
    const petFactory1 = new PetFactory('factory1',petsData,petsHardModeData)
        
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
                        if(!(this.age/this.intervalEvolution>2)){
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
                    console.log('dead');
                    clearInterval(this.timer);
                    $('.digital-pet-image').attr('src',this.passedOutImages[0]);
                    this.isDead = true;
                    $('.animate__animated').removeClass('animate__animated');
                    $('.death-flag').removeClass('no-display');
                    $('.death-flag').text(`Your Pet has Died! Click Below to Get a new Pet`);
                    $(`#${this.id}-make-new-hard-mode`).removeClass('no-display')
                    $(`#${this.id}-make-new-pet`).removeClass('no-display')
                    console.log(this.id)
                    break
                }
            }
            }
        }

        class BabyPet extends Pet {
            constructor(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id){
                super(name,intervalOfAging,intervalMetricsIncrease,intervalEvolution,evolutionImages,passedOutImages,id)
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
        
        const babypet1 = new BabyPet('pet1',10,1,3,[
            'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
            'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png" alt="Charmeleo','https://img.pokemondb.net/sprites/black-white/normal/charizard.png'
        ],['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],1)

        console.log(babypet1)


        petFactory1.makeNewPet();

    //     const pet1 = new Pet('pet1',10,1,3,[
    //         'https://img.pokemondb.net/sprites/black-white/normal/charmander.png',
    //         'https://img.pokemondb.net/sprites/black-white/normal/charmeleon.png" alt="Charmeleo','https://img.pokemondb.net/sprites/black-white/normal/charizard.png'
    //     ],['https://i.postimg.cc/g06jpbdt/1370010257183.jpg'],1)
     
    //     console.log(pet1)
    // $(`body`).eq(0).append(pet1.render());
    // pet1.addEventListeners()



//create game object that will create start screen, pet factory

