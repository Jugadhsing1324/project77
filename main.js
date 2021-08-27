
var images = [
  "My Snapshot_1.png",
  "https://media-exp1.licdn.com/dms/image/C5603AQEpEsGUWafj6w/profile-displayphoto-shrink_200_200/0/1610805588454?e=1635379200&v=beta&t=FNeERiUDGmCHS0M6sgyaSnxfFn5TIdbqeAt6-2ScNKY",
  "https://scontent.faip2-1.fna.fbcdn.net/v/t1.6435-9/87007526_1266166550254010_1902311001890488320_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NM4h7lIe3mcAX8Js3fz&_nc_ht=scontent.faip2-1.fna&oh=2855a2c5ed69ceed6768718b5fe434cb&oe=614D2B14",
  "https://scontent.faip2-1.fna.fbcdn.net/v/t31.18172-8/17492955_625606200976718_8472579754249596752_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_ohc=JjtAH-LZsfgAX8x-aKk&_nc_oc=AQkwsIEkgWjzpl1iKwZk_DtvJGcpE3HilcrlczFkikfBad5WD-1AvsEtwjtlJIKmnDo&_nc_ht=scontent.faip2-1.fna&oh=ad55fcd4dde8b4d176e4eef6fb04c8ca&oe=614FC2B6",
  "https://scontent.faip2-1.fna.fbcdn.net/v/l/t1.6435-9/49485912_958907177646617_7399746351950462976_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=BTcGcKUSv-EAX-X2Pfr&_nc_ht=scontent.faip2-1.fna&oh=2a7f03fe728ebbab36064f7f3a02b522&oe=614DC3AC"
];
var i = 0;

function flip() {
    if (i == 4) {
        i = 0;
    }
    document.getElementById("img1").src = images[i];
