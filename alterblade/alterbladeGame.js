class AlterbladeGame
{
    isOver = false;
    channel;
    constructor(channel, player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.channel = channel;
        /*
        while (!this.isOver)
        */
        this.sayHi();
    }
    sayHi() {
        
            this.channel.send('Uwugaboogaloo');
        
    }
}

module.exports = { AlterbladeGame };