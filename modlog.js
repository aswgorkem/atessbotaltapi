const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, params, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Kayıt kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let logkanali = message.mentions.channels.first();
     if (!logkanali) return message.channel.send(':no_entry: Log kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `!modlog #kanal`')
     db.set(`membermodChannel_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`:white_check_mark: Kayıt kanalı, <#${i}> olarak ayarlandı.`)    
    })         
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["logayarla","modlog","logkanalı"],
 permLevel: 0
};

exports.help = {
 name: 'modlog',
 description: 'neblm',
 usage: 'modlog'
};