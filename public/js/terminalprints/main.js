var term,
    protocol,
    socketURL,
    socket,
    pid,
    charWidth,
    charHeight;
var asciTitleEnabled = true;
var loadingBar = false;
var clicks = 0;
var commandHistory = [];
var cur =  0;
var command = "";

// var catASCI = "";
//     catASCI+=("                   _____\n")
//     catASCI+=("                  /  __  \\\n")
//     catASCI+=(" / \\ ----/ \\     / /    \\ \\\n")
//     catASCI+=("|           |    \\/      \\ \\\n")
//     catASCI+=("  < >   < >              | |\n")
//     catASCI+=("\\     ^     /------------| |\n")
//     catASCI+=("  \\  -^-  /        ____    |\n")
//     catASCI+=(" |   ---          /    \\   |\n")
//     catASCI+=(" |                      |  |\n")
//     catASCI+=("  \\--  \\         /------|  /\n")
//     catASCI+=("   --------------_________/\n")

$('.jquery-particule-emitter').pburst({
  partoffset: 300,
  duration: 1000,
  frequency: 100,
  particle: 'img/terminalprints/star.png'
});

var catASCI = "";

catASCI+=("    _________________________                                       \n")
catASCI+=("   |                         |                          _____       \n")
catASCI+=("   |  pls type help          |                         /  __  \\     \n")
catASCI+=("   |  and hit enter          |        / \\ ----/ \\     / /    \\ \\    \n")
catASCI+=("   |  for a list of commands |       |           |    \\/      \\ \\   \n")
catASCI+=("   |   that i know, thx <3    \\      | < >   < > |            | |   \n")
catASCI+=("   |___________________________\\     \\     ^     /------------| |   \n")
catASCI+=("                                      \\   -^-   /      ____    |   \n")
catASCI+=("                                      |   ---          /    \\   |   \n")
catASCI+=("                                      |                      |  |   \n")
catASCI+=("                                       \\--  \\         /------|  /   \n")
catASCI+=("                                        --------------_________/   \n")



function closepopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
function countClicks() {
  clicks += 1;

  if (clicks > 5) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.innerHTML = catASCI;
    var button = document.createElement('BUTTON');
    var buttonArrow = document.createTextNode('x');
    button.appendChild(buttonArrow);
    button.id = "exitbutton";
    button.onclick = closepopup;
    popup.appendChild(button);
    clicks = 0;
  }
}
var terminalContainer = document.getElementById('terminal-container');
terminalContainer.onclick= countClicks;

function setTerminalSize () {
  var cols = parseInt(window.innerWidth / charWidth);
  var rows = parseInt(window.innerHeight / charHeight);
  var width = window.innerWidth.toString() + 'px';
  var height = window.innerHeight.toString() + 'px';
  if (cols < 86){
    //use other title
    asciTitleEnabled = false;
  }
  else {
    asciTitleEnabled = true;
  }

  terminalContainer.style.width = width;
  terminalContainer.style.height = height;

  term.resize(cols, rows);
}

createTerminal();

window.addEventListener('resize', function(event){
  setTerminalSize();
});


function createTerminal() {
  // Clean terminal
  command = "";
  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }
  term = new Terminal({
    cursorBlink: "block",
    scrollback: 1000,
    tabStopWidth: 8
  });


  term.open(terminalContainer);
  term.fit();

  var initialGeometry = term.proposeGeometry(),
      cols = initialGeometry.cols,
      rows = initialGeometry.rows;

      charWidth = Math.ceil(term.element.offsetWidth / cols);
      charHeight = Math.ceil(term.element.offsetHeight / rows);
      runFakeTerminal();
}

function runFakeTerminal() {
  setTerminalSize ();

  var shellprompt = '\033[0;36mcoder@cat:~$ \033[0m';

  term.prompt = function () {
    term.write('\r\n' + shellprompt);
  };
  if (asciTitleEnabled){
  term.writeln('\033[0;34m                           /$$                                                 /$$')
  term.writeln('\033[0;34m                          | $$                                                | $$ ')
  term.writeln('\033[0;34m  /$$$$$$$  /$$$$$$   /$$$$$$$  /$$$$$$   /$$$$$$         /$$$$$$$  /$$$$$$  /$$$$$$ ')
  term.writeln('\033[0;36m /$$_____/ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$       /$$_____/ |____  $$|_  $$_/ ')
  term.writeln('\033[0;36m| $$      | $$  \\ $$| $$  | $$| $$$$$$$$| $$  \\__/      | $$        /$$$$$$$  | $$ ')
  term.writeln('\033[0;93m| $$      | $$  | $$| $$  | $$| $$_____/| $$            | $$       /$$__  $$  | $$ /$$')
  term.writeln('\033[0;93m|  $$$$$$$|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$            |  $$$$$$$|  $$$$$$$  |  $$$$/')
  term.writeln('\033[0;37m \\_______/ \\______/  \\_______/ \\_______/|__/             \\_______/ \\_______/   \\___/\033[0m\n')
  }
  term.writeln('Welcome to the coder cat prints terminal!');
  term.writeln('We mix \033[0;34mtechnology\033[0m, \033[0;36mfashion\033[0m, and \033[0;93mfeminism\033[0m to create a unique genre of graphic products as a platform of social awareness and community')
  // term.writeln('We mix technology, fashion, and feminism to create a unique genre of products, as a platform of social awareness and building a community of the coolest coder cats.\n');
  // term.writeln('We create original coder cat slogans, and print them onto tees, mugs, stickers, notebooks, etc. using redbubble for hosting and ease of production.');
  // term.writeln('Use the coder cat prints terminal to:');
  // term.writeln('\t-view our available slogans');
  // term.writeln('\t-redirect to our redbubble site to view');
  // term.writeln('\t-and browse around the codercat community');
  // term.writeln('All while your manager thinks you are hard at work on your terminal:) \n');

  term.writeln('\033[0;33m----------------------------------------------------------------------\033[0m\n')
  term.writeln('\033[0;34mtype "ls" and hit enter to view available designs\033[0m\n')

  term.writeln(shellprompt+'ls')
  term.writeln('listing available executable codercat slogans:\n');
  term.writeln('\033[0;93m[0]\033[0m\trm -rf patriarchy\n');
  term.writeln('\033[0;34mthis is a list of available designs that can be printed on tees, mugs, stickers, notebooks, etc.');
  term.writeln('you can view them by typing "view <number>"');
  term.writeln('For example to view design number 0 type "view 0"\033[0m\n')
  term.writeln(shellprompt+'view 0');
  term.writeln('-----> redirecting you to a magical place ----->\n')

  term.writeln('\033[0;93m----------------------------------------------------------------------\033[0m\n')
  term.writeln('You can type \033[0;93mhelp\033[0m and hit enter to see all coder cat commands.');
  term.writeln('FYI: site supports discrete procrastination habits');
  term.writeln(String.fromCharCode(9792));
  term.writeln('');
  term.prompt();

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    );
    if (loadingBar) return;
    if(ev.keyCode == 37 || ev.keyCode == 39) {
      return;
    }
    if (ev.keyCode == 13) {
      if (command === "ls"){
        term.writeln('');
        term.writeln('listing available executable codercat slogans:\n');
        term.writeln('\033[0;93m[0]\033[0m\trm -rf patriarchy');
        term.writeln('\033[0;93m[1]\033[0m\tapt-get install feminism');
        term.writeln('\033[0;93m[2]\033[0m\tassert(woman == man);');
        term.writeln('\033[0;93m[3]\033[0m\tdef wakeup(self): return "flawless"');
        term.writeln('\033[0;93m[4]\033[0m\tfrom feminism import *');
        term.writeln('\033[0;93m[5]\033[0m\tnastywoman.smash(patriarchy)\n');
        term.writeln('To view merch with a desired slogan listed above, type "view <number>"');
        term.writeln('For example to view design number 0 type "view 0"')
              }
      else if (command === "help"){
        term.writeln('');
        term.writeln('\033[0;93mls\033[0m\t\tlist available executable codercat slogans');
        term.writeln('\033[0;93mview <#>\033[0m\tredirect to view desired slogan');
        term.writeln('\033[0;93mabout\033[0m\t\twho/what/when/why/where is a codercat');
        term.writeln('\033[0;93mcontact\033[0m\t\tcontact a codercat today');
        term.writeln('\033[0;93mclear\033[0m\t\tclear command history\n');
        term.writeln('type a command and hit enter!');
        }

      else if (command ==="whois codercat" || command ==="about") {
        term.writeln('');
        term.writeln('We mix \033[0;34mtechnology\033[0m, \033[0;36mfashion\033[0m, and \033[0;93mfeminism\033[0m to create a unique genre of graphic products as a platform of social awareness and building a community of the coolest coder cats.')
        term.writeln('All products are currently hosted on redbubble for ease of production, billing, and shipping.\n');
        term.writeln('Check out the rebubble store @ \033[0;34mhttps://www.redbubble.com/people/kif11/shop?asc=u\033[0m')
        term.writeln('And other codercat projects @ \033[0;34mhttps://codercat.club\033[0m');
        }
      else if (command === "view 0"){
        term.writeln('');
        term.writeln('remove the patriarchy from your machine forever. theres no turning back now.');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open("https://www.redbubble.com/people/kif11/works/26267725-remove-patriarchy?asc=u&grid_pos=2&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
        }, 1000);
      }
      else if (command === "view 1"){
        term.writeln('');
        term.writeln('package to make your linux environment a little less user-hostile.');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open("https://www.redbubble.com/people/kif11/works/26271212-apt-get-install-feminism?asc=u&grid_pos=5&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
        }, 1000);
      }
      else if (command === "view 2"){
        term.writeln('');
        term.writeln('the world cannot continue otherwise!');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open("https://www.redbubble.com/people/kif11/works/26239233-asset-woman-equal-man?asc=u&grid_pos=3&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens")
        }, 1000);
      }
      else if (command === "view 3"){
        term.writeln('');
        term.writeln('my home directory wakes up flawless.');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open("https://www.redbubble.com/people/kif11/works/26267648-wakeup-flawless?asc=u&grid_pos=1&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens");
        }, 1000);
      }
      else if (command === "view 4"){
        term.writeln('');
        term.writeln('please just import the whole library.');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open('https://www.redbubble.com/people/kif11/works/26267547-from-feminist-import?asc=u&grid_pos=6&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens');
        }, 1000);
      }
      else if (command === "view 5"){
        term.writeln('');
        term.writeln('one of the many functions of a nasty woman.');
        term.writeln('\033[0;34mredirecting...\033[0m');
        setTimeout(function() {
          window.open('https://www.redbubble.com/people/kif11/works/26271237-nasty-woman-smash-patriarchy?asc=u&grid_pos=4&p=t-shirt&rbs=9fdb5a5b-114d-4fb2-a697-60fde5aa8f46&ref=artist_shop_grid&style=womens')
        }, 1000);
      }
      else if (command === "contact"){
        term.writeln('');
        term.writeln('Send us an email at codercat@gmail.com to place a custom slogan order! Be sure to include');
        term.writeln('\t-text for slogan');
        term.writeln('\t-desired products (tee, mug, sticker, custom, etc.)');
        term.writeln('\t-your contact info');
        term.writeln('thank ya');
      }
      else if (command === "clear"){
        createTerminal();
        return;
      }
      else if (command.indexOf("cd") == 0){
        term.writeln('');
        term.writeln(String.fromCharCode(9793));
        //show animation
      }
      else if (command == "rm -rf patriarchy"){
        $('.jquery-particule-emitter').pburst('burst_part', 50);
        $('.jquery-particule-emitter').pburst('create_part');
        term.writeln('');
        term.writeln('\033[0;93mCONGRATULATIONS!\033[0m, you have truly made the world a better place.');
      }
      else if (command === "apt-get install feminism") {
        loadingBar = true;
        command = "";
         term.writeln('');
         term.writeln('\033[0;95mReading package lists... Done\033[0m ')
         term.writeln('\033[0;34mOnly dependency is your mind\033[0m ')
         function termprompt(i){
           console.log(i)
           if (i==24) {
             term.write(' 100% Complete')
             term.writeln(' ')
             term.writeln('Thank you for making your Linux environment a little less user-hostile :) ')
             loadingBar = false;
             term.prompt();
             commandHistory.push("apt-get install feminism");
             cur = commandHistory.length;
           }
         }
         for(var i=0; i<25; i++){
           let j = i;
           setTimeout( function() {
             term.write(String.fromCharCode(9813) + ' ')
             termprompt(j);
           }, 50*i);
         }
         //show animation..
      }
      else{
        term.writeln('');
        //have a cat show this
        term.writeln('coder cat does not understand, pls try another command');
      }
      //if they type a command that doesnt exist, show a pop up
      //if they start clicking around alot, show a cat helper pop up
      //cd to chagne the bacground
      //pwd to a cat?
      //executable commands
      //make a codercat homepage
      if (!loadingBar){
        term.prompt();
        commandHistory.push(command);
        cur = commandHistory.length;
        command = "";
      }

    } else if (ev.keyCode == 38) {
      if (commandHistory.length > 0){
        cur = Math.max(0, cur-1);
        var i = 0;
        while ( i < command.length ){
          term.write('\b \b');
          i++;
        }
        term.write(commandHistory[cur])
        command = commandHistory[cur]
      }
    } else if (ev.keyCode == 40) {
      if (commandHistory.length > 0) {
        cur = Math.min(commandHistory.length, cur+1);
        var i = 0;
        while ( i < command.length ){
          term.write('\b \b');
          i++;
        }
        if (cur == commandHistory.length){
          term.write("")
          command = ""
        }
        else {
          term.write(commandHistory[cur])
          command = commandHistory[cur]
        }
      }
    } else if (ev.keyCode == 8) {
     // Do not delete the prompt
      if (command.length > 0) {
        term.write('\b \b');
        command = command.substring(0,command.length-1)
      }
    } else if (printable) {
      term.write(key);
      command += key;
    }
  });

  term.on('paste', function (data, ev) {
    term.write(data);
    command += data;
  });
}
