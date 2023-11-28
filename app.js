new Vue({
    el: "#app",
    data: {
        greenActive: true,
        redActive: true,
        yellowActive: true,
        blueActive: true,
        roudActive: true,
        randColor:[],
        userColor:[],
        lightDelay: 500,
        lightTime: 2000,
        blockDisibled: false,
        level: 2,
        levelClick: 2,
        sound: new Audio("button/knopka-v-prostranstve-korotkii-zvonkii-yarkii.mp3"),
        soundNone: new Audio("button/knopka-jeskaya-yarkii-blizkii.mp3"),
        soundYeap: new Audio("button//knopka-v-prostranstve-zvonkii-blizkii-mimoletnyii.mp3"),

    },
    methods: {
    //    активировать рандом зелен
        greenHow: function(){
            setTimeout(() => {
                this.greenActive = false 
                this.sound.play()
            }, this.lightDelay);
            setTimeout(() => {
                this.greenActive = true
                this.quantity--;
                this.startRound()
            }, this.lightTime);
            
            
        }, 

        // выбор пользователем цвета, пушится массив пользовательских цветов 
        greenTab: function(){
            if(this.blockDisibled){
                setTimeout(() => {
                this.greenActive = false 
               
            }, 200);
            setTimeout(() => {
                this.userColor.push(0)
                this.greenActive = true
                this.checkColor()
            }, 600);
                
            }
        },
//    активировать рандом крас
        redHow: function(){
            setTimeout(() => {
                this.sound.play()
                this.redActive = false 
              
            }, this.lightDelay);
            setTimeout(() => {
                this.redActive = true
                this.quantity--;
                this.startRound()
            }, this.lightTime);
        },
        // выбор пользователем цвета, пушится массив пользовательских цветов 
        redTab: function(){
            if(this.blockDisibled){
                    setTimeout(() => {
                        this.redActive = false 
                
                }, 200);
                setTimeout(() => {
                    this.userColor.push(1)
                    this.redActive = true
                    this.checkColor()
                }, 600)
            }
           
        },
//    активировать рандом желт
        yellowHow: function(){
            setTimeout(() => {
                this.sound.play()
                this.yellowActive = false 
               
            }, this.lightDelay);
            setTimeout(() => {
                
                this.yellowActive = true
                this.quantity--;
                this.startRound()
            }, this.lightTime);
        },
        // выбор пользователем цвета , пушится массив пользовательских цветов
        yellowTab: function(){
            if(this.blockDisibled){
                setTimeout(() => {
                    this.yellowActive = false 
            
            }, 200);
            setTimeout(() => {
                this.userColor.push(2)
                this.yellowActive = true
                this.checkColor()
            }, 600)
        }
        },
//    активировать рандом син
        blueHow: function(){
            setTimeout(() => {
                this.blueActive = false 
                this.sound.play()
               
            }, this.lightDelay);
            setTimeout(() => {
                this.blueActive = true
                this.quantity--;
                this.startRound()
            }, this.lightTime);
        },
        // выбор пользователем цвета, пушится массив пользовательских цветов
        blueTab: function(){
            if(this.blockDisibled){
                setTimeout(() => {
                    this.blueActive = false 
                
                }, 200);
                setTimeout(() => {
                    this.blueActive = true
                    this.userColor.push(3)
                    this.checkColor()
                }, 600)
            }
        },
//    кнопка активация 
       roudHow: function(){
            this.roudActive = !this.roudActive
            
            return this.roudActive
        },
        roudNone: function(){
            this.roudActive = !this.roudActive
            return this.roudActive
        },
        // первый этап игры: загорание рандомного цвета пушится, массив рандомных цветов в зависимости от уровня, начиная чс первого
        startRound: function(){
            
            if(this.levelClick!=0){
                let randomColor = Math.floor(Math. random() * 4)
                this.randColor.push(randomColor)
                this.roudActive = false
                switch(randomColor){
                    case 0:
                        this.greenHow()
                        this.levelClick--
                        
                    break;
                    case 1:
                        this.redHow()
                        this.levelClick--
                    break;
                    case 2:
                       this.yellowHow() 
                       this.levelClick--
                    break;
                    case 3:
                        this.blueHow()
                        this.levelClick--
                    break;
                }
                
            }
                else{
                    this.userColor=[]
                    this.blockDisibled=true;
                    
                }
            
        },

        //второй этап: выключение всей активности на кнопке старта и прослушивание нажатого цвета
        checkColor: function(){
            // не удачный выбор - перезагрузка и начать заново
            for (let index = 0; index < this.userColor.length; index++) {
                if(this.randColor[index] != this.userColor[index]){
                    this.soundNone.play()
                    alert("Вы ошиблись! Придется начать заново!")
                    
                location.reload();
                    
                }
                else{
                   this.soundYeap.play() 
                }
            }
            // при удаче - повышение уровня, очистка массивов, увеличение времени, увеличение уровня = увеличение колва цветов, вызов рандома
            if(this.userColor.length == this.randColor.length){
               
               //setTimeout(() => {
                this.randColor=[];
                this.userColor=[];
                this.lightDelay-=166,666667;
                this.lightTime-=666,666667;
                
                    
                this.blockDisibled=true
               
               // }, 0);
                setTimeout(() => {
                    this.level++
                   this.levelClick = this.level
                    if(this.level -1<= 3){
                    
                        this.startRound()
                        
                    }
                    else{
                        alert('Вы выиграли!')
                    location.reload();}
                    
                }, 1000);

                
            }  
        } 
    }
})
