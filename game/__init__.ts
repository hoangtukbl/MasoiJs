const Bodyguard = require('./role/bodyguard');
const Seer = require('./role/seer');
const Villager = require('./role/villagers');
const Witch = require('./role/witch');
const Wolf = require('./role/wolf');
const {ActionRowBuilder, Events, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");

export class Init {
    private listAttend = [];
    private listRole: string[] = ["bodyguard", "witch", "wolf", "wolf", "village", "village",
        "cursed", "hunter", "mayor", "wolf", "diviner", "village"];
    private listPlayer: any[] = [];
    private queueKill: any[] = [];
    private queueRev: any[] = [];
    bot: any;
    private protect: any;
    client: any;

    constructor(listPlayer: any, bot: any, client: any) {
        this.setListPlayer(listPlayer);
        this.bot = bot;
        this.client = client
    }

    setListPlayer(listAttend: any) {
        this.listAttend = listAttend;
    }

    command = async () => {
        await this.bot.reply("Hello, tui gửi từ ma sói");
    }

    getListPlayer() {
        return this.listPlayer;
    }

    getPlayerLife() {
        const data = this.listPlayer.filter((each: any) => each.getState())
        return data;
    }

    addToQueueKill(idPlayer: string) {
        this.queueKill.push(idPlayer);
    }

    addToQueueRev(idPlayer: string) {
        this.queueRev.push(idPlayer);
    }

    setProtected(protect: string) {
        console.log("Convert");
        this.protect = protect;
    }

    getProtected() {
        return this.protect;
    }

    handleKill() {
        this.queueKill.forEach((j: any) => {
            this.listPlayer.forEach((k: any) => {
                if (j.getId() === k.getId()) {
                    k.setState(false);
                }
            })
        })
    }

    handleRev() {
        this.queueRev.forEach((j: any) => {
            this.listPlayer.forEach((k: any) => {
                if (j.getId() === k.getId()) {
                    k.setState(true);
                }
            })
        })
    }

    setRole = async () => {
        this.listAttend.sort(() => Math.random() - 0.5);
        for (let i = 0; i < this.listAttend.length; i++) {
            const each: any = this.listRole[i];
            const player: any = this.listAttend[i];
            switch (each) {
                case 'witch':
                    this.listPlayer.push(await new Witch(player.name, player.id));
                    break;
                case 'village':
                    this.listPlayer.push(await new Villager(player.name, player.id));
                    break;
                case "bodyguard":
                    this.listPlayer.push(await new Bodyguard(player.name, player.id));
                    break;
                case 'wolf':
                    this.listPlayer.push(await new Wolf(player.name, player.id));
                    break;
                case 'seer':
                    this.listPlayer.push(await new Seer(player.name, player.id));
                    break;
            }
        }
    }

    countGood() {
        let quan = 0;
        this.listPlayer.forEach(each => {
            if (each.getLegit()) {
                quan++;
            }
        })
        return quan;
    }

    getPlayerById(id: string): any[] {
        return this.listPlayer.filter(each => each.getId() === id);
    }

    countEvil() {
        let quan = 0;
        this.listPlayer.forEach(each => {
            if (!each.getLegit()) {
                quan++;
            }
        })
        return quan;
    }

    checkFinish() {
        return this.countEvil() >= this.countGood();
    }

    sleepTime(second = 0) {
        return new Promise(resolve => setTimeout(resolve, second));
    }

    async start() {
        while (true) {
            const players = this.listPlayer;
            const option: any[] = [];
            await this.listPlayer.forEach(each => {
                if (each.getState()) {
                    option.push({label: each.getName().username, value: each.getId()})
                }
            })
            const row = await new ActionRowBuilder()
                .addComponents(new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Choose Someone...')
                    .addOptions(
                        option
                    ),
                );
            await this.bot.channel.send({content: 'Bạn muốn chọn ai để bảo vệ đêm nay: ', components: [row]});
            await this.sleepTime(10000);
            const playerProtect = await this.getProtected();
            players[0].protect(playerProtect);

            await this.bot.channel.send({content: 'Choose who will die'});
            const wolfList = this.listPlayer.filter(each => each.getRole() === 'wolf');
            wolfList.forEach(each => {
                this.client.users.fetch(each.getId(), false).then(async (user:any) => await user.send("Hello"));
            })
            await this.sleepTime(10000);

            const buttonWitch = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('primary')
                        .setLabel('Kill')
                        .setStyle(ButtonStyle.Primary)
                );
            await this.bot.channel.send({
                content: `${this.getPlayerById(playerProtect)[0].getName().username} will die, choose 'Rev' or 'Kill Someone'`,
                components: [buttonWitch]
            });
            await this.sleepTime(10000);
        }
    }

    getListPlayerss = async () => {
        let a = '';
        this.listPlayer.forEach(each => {
            a += each.getName().username + ", role =" + each.getRole() + "\n";
        })
        this.bot.channel.send(a);
    }

}

