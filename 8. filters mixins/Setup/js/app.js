new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for ${damage}`
            });
            this.checkWin();
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            this.checkWin();
            // let attackMe = 
        },
        specialAttack: function() {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits monster for ${damage}`
            });
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            this.checkWin();
        },
        heal: function() {
            if (this.playerHealth <= 10) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;    
            }
            // this.playerHealth += 10;
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: `Monster hits player for ${damage}`
            });
            this.turns.unshift({
                isPlayer: true,
                text: `Heal player for ${damage}`
            });
            this.checkWin();
        },
        giveUp: function() {
            this.gameIsRunning = false;
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You lose! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
            }
        }
    },
})