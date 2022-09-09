const workshopcard = [{
    workshopname: 'Whats App Groups',
    workshopimg: 'whatsapp.jpg',
    workshoplink: '#'
}, {
    workshopname: 'OPS Manager',
    workshopimg: 'web.jpg',
    workshoplink: '#'
}, {
    workshopname: 'Community Manager',
    workshopimg: 'stamp.jpg',
    workshoplink: '#'
}, {
    workshopname: 'Discord Alternatives',
    workshopimg: 'discord.jpg',
    workshoplink: '#'
}, ];

var workRow = document.querySelectorAll('.workrow')[0];
for (let i = 0; i < workshopcard.length; i++) {
    let work = document.createElement('div');
    work.className = 'workcolums';
    let imgurl;

    imgurl = 'images/' + workshopcard[i].workshopimg;
    work.innerHTML = '<a href="' + workshopcard[i].workshoplink + '" class="sess_card"><div class="sesscardstext">' + workshopcard[i].workshopname + '</div><div class="sesscardsimg"><img class="sess_img" src="' + imgurl + '" alt="' + workshopcard[i].workshopname + '"></div></a>';

    workRow.append(work);
}