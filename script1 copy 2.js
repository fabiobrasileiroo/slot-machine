var firstRun = true;
var ganhou
// var clickVezes = 0;
// const apiUrl = 'https://node-api-videos-uka2.onrender.com/videos';
// var porcetagemApi
// async function getAllPosts() {
//   const response = await fetch(apiUrl)
//   console.log(response)
//   const data = await response.json()
//   console.log(data)
//   data.map((post) => {
//     console.log(post.duration)
//     porcetagemApi = post.duration
//   })
//   localStorage.setItem('porcetagem', porcetagemApi);
// }
// getAllPosts()
// var globalResult = null;
// localStorage.setItem.clickVezes;

var fps = 60;
window.raf = (function () {
  return (
    requestAnimationFrame ||
    webkitRequestAnimationFrame ||
    mozRequestAnimationFrame ||
    function (c) {
      setTimeout(c, 1000 / fps);
    }
  );
})();
// function resultadoShowWin(resultDados) {
//   var res = resultDados;
//   return res;
// }
// var clickVezes = 0
/*--------------=== Slot machine definition ===--------------*/

// fetch('https://node-api-videos-uka2.onrender.com/videos')
// .then(data => {
// return data.json();
// })
// .then(post => {
// console.log(post.duration);
// });
const gradientColors = [
  { offset: '0%', color: 'rgba(149, 21, 27, 1)' },
  { offset: '25%', color: 'rgba(248, 20, 32, 1)' },
  { offset: '79%', color: 'rgba(40, 0, 191, 1)' },
  { offset: '98%', color: 'rgba(40, 0, 85, 1)' }
];


(function () {
  var NAME = "SlotMachine",
    defaultSettings = {
      width: "200",
      height: "200",
      colNum: 3,
      rowNum: 9,
      winRate: 50,//localStorage.getItem('porcetagem'),
      autoPlay: false,
      autoSize: false,
      autoPlayTime: 100,
      layout: "compact",
      handleShow: true,
      handleWidth: 35,
      handleHeight: 30,
      machineBorder: 15,
      tentativa: 0,
      // machineColor    : 'rgba(120,60,30,1)',
      machineColor: "rgba(255,255,255,1)",
      names: [
        "zaplus-azul",
        "zaplus-vermelho",
        "santa-claudia",
        "dr-guarana",
        "caboclo-picole",
        "caprichoso-azul",
        "garantido-vermelho",
        "cracha-pix",
        "canvi",
      ],
    },
    completed = true,
    isShuffle = true,
    supportTouch = "ontouchstart" in window || navigator.msMaxTouchPoints,
    firstTime = true,
    nextLoop = null;
  SlotMachine = function (argument) {
    this.init = this.init.bind(this);
    this.run = this.run.bind(this);
    this.addListener = this.addListener.bind(this);
    this.beforeRun = this.beforeRun.bind(this);
    this.afterRun = this.afterRun.bind(this);
    this.showWin = this.showWin.bind(this);
    // this.estadoGame = this.estadoGame.bind(this);
    // this.showWin = this.showWin.bind(this);
    this.rotateHandle = this.rotateHandle.bind(this);
    this.colArr = [];
    this.options = {};
    // this.resultadoShowWin = this.
  };
  // SlotMachine.prototype.beforeRun = function () {
  //   document.getElementById("background-music").play();
  //   defaultSettings.tentativa++;
  //   document.getElementById("valor-tentativa").innerText =  defaultSettings.tentativa + "/3";

  //   // tentativa.value = defaultSettings.tentativa

  //   console.log("click", defaultSettings.tentativa);
  //   // console.log("win", defaultSettings.winRate);
  //   // clickVezes % 2 === 0
  //   //   ? (defaultSettings.winRate = 100)
  //   //   : (defaultSettings.winRate = 4);
  //   if (completed) {
  //     this.showWin(false);
  //     completed = false;
  //     var result = null;
  //     console.log(this.options.winRate)
  //     console.log(this.result)
  //     result =
  //       this.options.names[
  //       random((this.options.rowNum * 100) / this.options.winRate) | 0
  //       ]; //set winrate
  //     // console.log(result);
  //     // globalResult = result;
  //     // resultadoShowWin(result);
  //     var backDiv = document.querySelector(".back");
  //     // Altere o conteúdo da div para o valor desejado
  //     if (result === defaultSettings.names[0]) {
  //       backDiv.textContent = "Prêmio: 1 Pano Azul";
  //     } else if (result === defaultSettings.names[1]) {
  //       backDiv.textContent = "Prêmio: 1 Pano Vermelho"; //
  //     } else if (result === defaultSettings.names[2]) {
  //       backDiv.textContent = "Prêmio: 1 Refrigerante"; //
  //     } else if (result === defaultSettings.names[3]) {
  //       backDiv.textContent = "Prêmio: 1 Energy Shot"; //
  //     } else if (result === defaultSettings.names[4]) {
  //       backDiv.textContent = "Prêmio: 1 Picolé"; //
  //     } else if (result === defaultSettings.names[5]) {
  //       backDiv.textContent = "Prêmio: Caprichoso 1 Brinde Exclusivo"; //
  //     } else if (result === defaultSettings.names[6]) {
  //       backDiv.textContent = "Prêmio: Garantido 1 Brinde Exclusivo"; //
  //     } else if (result === defaultSettings.names[7]) {
  //       backDiv.textContent = "Prêmio: 1 Brinde Exclusivo"; //
  //     } else if (result === defaultSettings.names[8]) {
  //       backDiv.textContent = "Prêmio: 1 Brinde Exclusivo"; //
  //     }

  //     for (var i = 0; i < this.options.colNum; i++) {
  //       this.colArr[i].beforeRun(result);
  //     }
  //     this.rotateHandle();
  //     this.run();
  //   }
  //   if (this.options.autoPlay)
  //     nextLoop = setTimeout(
  //       function () {
  //         this.beforeRun();
  //       }.bind(this),
  //       this.options.autoPlayTime * 1000
  //     );
  // };
  SlotMachine.prototype.beforeRun = function () {
    document.getElementById("background-music").play();

    // if (firstRun) {
    //   firstRun = false;
    //   return; // Sai da função sem executar o jogo
    // }

    // Incrementa tentativa
    // this.showWin === true ? defaultSettings.tentativa++ : defaultSettings.tentativa;
    // if (ganhou) {
    defaultSettings.tentativa++;
    // }

    // Atualiza o texto na tela
    // document.getElementById("valor-tentativa").innerText = defaultSettings.tentativa + "/3";

    console.log("click", defaultSettings.tentativa);
    // console.log("click", defaultSettings.);

    if (completed) {
      this.showWin(false);
      completed = false;
      var result = null;

      result = this.options.names[
        random((this.options.rowNum * 100) / this.options.winRate) | 0
      ]; // Definindo o resultado com base no winRate

      var backDiv = document.querySelector(".back");

      // Flag para saber se ganhou ou não
      ganhou = false;
      console.log(result)
      console.log(this.options)
      if (result === defaultSettings.names[0]) {
        backDiv.textContent = "Prêmio: 1 Pano Azul";
        // ganhou = true;
      } else if (result === defaultSettings.names[1]) {
        backDiv.textContent = "Prêmio: 1 Pano Vermelho";
        // ganhou = true;
      } else if (result === defaultSettings.names[2]) {
        backDiv.textContent = "Prêmio: 1 Refrigerante";
        // ganhou = true;
      } else if (result === defaultSettings.names[3]) {
        backDiv.textContent = "Prêmio: 1 Energy Shot";
        // ganhou = true;
      } else if (result === defaultSettings.names[4]) {
        backDiv.textContent = "Prêmio: 1 Picolé";
        // ganhou = true;
      } else if (result === defaultSettings.names[5]) {
        backDiv.textContent = "Prêmio: Caprichoso 1 Brinde Exclusivo";
        // ganhou = true;
      } else if (result === defaultSettings.names[6]) {
        backDiv.textContent = "Prêmio: Garantido 1 Brinde Exclusivo";
        // ganhou = true;
      } else if (result === defaultSettings.names[7] || result === defaultSettings.names[8]) {
        backDiv.textContent = "Prêmio: 1 Brinde Exclusivo";
        // ganhou = true;
      }

      if ( // confere se caiu em algum prêmio
        defaultSettings.names.includes(result)
      ) {
        setTimeout(() => {
          ganhou = true;
        }, 7000); // 5 segundos
      }
      // Se ganhou → zerar tentativa
      if (ganhou) {
        defaultSettings.tentativa = 0;
        document.getElementById("valor-tentativa").innerText = defaultSettings.tentativa + "/3";
      }

      // Se passou de 3 tentativas → zerar também
      if (defaultSettings.tentativa >= 4) {
        defaultSettings.tentativa = 0;
        document.getElementById("valor-tentativa").innerText = defaultSettings.tentativa + "/3";
      }

      for (var i = 0; i < this.options.colNum; i++) {
        this.colArr[i].beforeRun(result);
      }
      // if (firstRun) {
      //   firstRun = false;
      //   return; // Sai da função sem executar o jogo
      // } else {
      this.rotateHandle();
      this.run();
      // }
    }

    if (this.options.autoPlay)
      nextLoop = setTimeout(
        function () {
          this.beforeRun();
        }.bind(this),
        this.options.autoPlayTime * 1000
      );
  };

  // SlotMachine.prototype.afterRun = function () {
  //   document.getElementById("background-music").pause();
  //   completed = true;
  //   var results = [],
  //     win = true;
  //   for (var i = 0; i < this.options.colNum; i++) {
  //     results.push(this.colArr[i].getResult());
  //     if (i > 0 && results[i] != results[i - 1]) {
  //       win = false;
  //       document.getElementById("background-music-faild").play();
  //       break;
  //     }
  //   }
  //   if (win) {
  //     document.getElementById("background-music-winner").play();
  //     this.showWin(true);
  //     setTimeout(
  //       function () {
  //         this.showWin(false);
  //       }.bind(this),
  //       this.options.autoPlayTime * 1000
  //     );
  //   }
  // };

  // function toggleSettingStyle() {
  //   var settingStyleTag = document.getElementById("setting");

  //   // If settingStyleTag exists, remove it. Otherwise, create and append it.
  //   if (settingStyleTag) {
  //     settingStyleTag.parentNode.removeChild(settingStyleTag);
  //   } else {
  //     var settingStyleTag = document.createElement("style");
  //     settingStyleTag.setAttribute("scope", "id");
  //     settingStyleTag.setAttribute("id", "setting");
  //     document.head.appendChild(settingStyleTag);
  //   }
  // }
  // if (defaultSettings.clickVezes % 2 === 0) {
  //   defaultSettings.winRate = 100;
  // } else {
  //   defaultSettings.winRate = 4;
  // }
  // console.log(defaultSettings.clickVezes);
  // console.log("win estar em ", defaultSettings.winRate);
  SlotMachine.prototype.afterRun = function () {
    // defaultSettings.clickVezes++;
    window.addEventListener("click", function () {
      if (!completed) {
        var containers = document.querySelectorAll(".container1");
        containers.forEach(function (container) {
          var card = container.querySelector(".card");
          card.classList.remove("flipped");
          card.classList.add("flipped1");
        });
      }
    });

    document.getElementById("background-music").pause();
    completed = true;
    var results = [],
      win = true;

    for (var i = 0; i < this.options.colNum; i++) {
      results.push(this.colArr[i].getResult());
      if (i > 0 && results[i] != results[i - 1]) {
        win = false;

        document.getElementById("background-music-faild").play();
        var gameover = document.querySelector(".gameover");

        // winner.className ="winner active";
        gameover.className = !firstRun ? "gameover" : "gameover active";
        if (firstRun) {
          console.log('desativo')
          firstRun = false;
          // return; // Sai da função sem executar o jogo
        }



        console.log('run? ', this.run)
        // Depois de 4 segundos, remove a classe 'active'
        setTimeout(() => {
          gameover.className = "gameover";
        }, 1000);
        // modal close
        // const modalOverlay = document.getElementById("modalOverlay");
        // document.querySelector(".container").classList.toggle("z-index-zero");
        // modalOverlay.style.display = "flex";
        // toggleSettingStyle();
        // var settingStyleTag = document.getElementById("setting");
        // if (settingStyleTag) {
        //   settingStyleTag.parentNode.removeChild(settingStyleTag);
        // }
        // Assuming modalOverlay is your modal overlay element

        // Remove the style tag with id "update"
        // var updateStyleTag = document.getElementById("update");
        // if (updateStyleTag) {
        //   updateStyleTag.parentNode.removeChild(updateStyleTag);
        // }

        // const openModalBtn = document.getElementById("openModal");
        // const closeModalBtn = document.getElementById("closeModal");
        // closeModalBtn.addEventListener("click", function () {
        //   modalOverlay.style.display = "none";
        // toggleSettingStyle();
        // document.querySelector(".container").classList.toggle("z-index-zero");

        // // Recreate the style tag with id "update"
        // var updateStyleTag = document.createElement("style");
        // updateStyleTag.setAttribute("scope", "id");
        // updateStyleTag.setAttribute("id", "setting");
        // document.head.appendChild(updateStyleTag);

        // var updateStyleTag = document.createElement("style");
        // updateStyleTag.setAttribute("scope", "id");
        // updateStyleTag.setAttribute("id", "update");
        // document.head.appendChild(updateStyleTag);
        // });

        break;
      }
    }
    if (win) {
      // Obtenha todas as divs com a classe 'container1'
      var containers = document.querySelectorAll(".container1");

      // Para cada div container
      containers.forEach(function (container) {
        // Encontre a div com a classe 'card' dentro desta div container
        var card = container.querySelector(".card");

        // Se winner for verdadeiro, vire a carta
        if (win) {
          card.classList.remove("flipped1");
          card.classList.add("flipped");
        }
      });

      document.getElementById("background-music-winner").play();
      this.showWin(true);
      setTimeout(
        function () {
          this.showWin(false);
        }.bind(this),
        this.options.autoPlayTime * 1000
      );
    }
  };

  SlotMachine.prototype.rotateHandle = function () {
    var handle = document.querySelector(".handle");
    if (handle) {
      handle.addClass("active");
      setTimeout(function () {
        handle.removeClass("active");
      }, 1000);
    }
  };
  SlotMachine.prototype.run = function () {
    var done = true;
    for (var i = 0; i < this.options.colNum; i++) {
      done &= this.colArr[i].run();
    }
    if (!done) raf(this.run);
    else this.afterRun();
    // this.showGameOver()
  };


  // SlotMachine.prototype.showGameOver = function () {
  //   const gameover = document.querySelector(".gameover");

  //   if (gameover) {
  //     gameover.className = "gameover";
  //   }
  // };


  // SlotMachine.prototype.showResult = function (isWin) {
  //   // var winner = document.querySelector(".winner");
  //   var gameover = document.querySelector(".gameover");

  //   // if (isWin) {
  //   //   if (winner) winner.className = "winner active";
  //   //   if (gameover) gameover.className = "gameover";
  //   //   document.getElementById("background-music-winner").play();
  //   // } else {
  //   if(!isWin) {
  //     if (gameover) gameover.className = "gameover active";
  //     // if (winner) winner.className = "winner";
  //     // document.getElementById("background-music-faild").play();
  //   }
  // };

  SlotMachine.prototype.showWin = function (show) {
    console.log(SlotMachine.prototype.showWin);
    console.log("🚀 ~ show:", show);

    var winner = document.querySelector(".winner");

    if (winner) winner.className = show ? "winner active" : "winner";

    // if (!show && gameover) {
    //   gameover.className = "gameover active";

    //   // Depois de 4 segundos, remove a classe 'active'
    //   setTimeout(() => {
    //     gameover.className = "gameover";
    //   }, 1000);
    // } else if (show && gameover) {
    //   gameover.className = "gameover"; // Garantir que não fique 'active' se venceu
    // }

    //aqui
    // console.log("chego showWin", resultadoShowWin);
    // console.log("winner de algo =>", winner);
    // console.log("show    =>", show);
    // console.log(globalResult);
  };
  SlotMachine.prototype.init = function () {
    //reset all
    completed = true;
    clearTimeout(nextLoop);
    //get settings
    var BannerFlow = arguments[0],
      settingStyle = "",
      machine = document.querySelector(".machine"),
      container = document.querySelector(".container");
    machine.style.opacity = 0;
    for (var key in defaultSettings) {
      this.options[key] = defaultSettings[key];
    }
    if (BannerFlow !== undefined) {
      var settings = BannerFlow.settings;
      this.options.winRate = settings.winRate
        ? settings.winRate
        : defaultSettings.winRate;
      this.options.autoPlay = settings.autoPlay;
      this.options.colNum = settings.numberColumn
        ? settings.numberColumn
        : defaultSettings.colNum;
      this.options.layout = settings.layout
        ? settings.layout
        : defaultSettings.layout;
      this.options.machineColor = settings.machineColor
        ? settings.machineColor
        : defaultSettings.machineColor;
      this.options.machineBorder =
        settings.machineBorder >= 0
          ? settings.machineBorder
          : defaultSettings.machineBorder;
      this.options.height = settings.height
        ? settings.height
        : defaultSettings.height;
      this.options.width = settings.width
        ? settings.width
        : defaultSettings.width;
      this.options.autoSize = settings.autoSize;
      if (this.options.autoSize) {
        this.options.height = window.innerHeight;
        this.options.width = window.innerWidth;
      }
      this.options.handleShow = settings.handleShow;
      this.options.handleWidth = this.options.handleShow
        ? defaultSettings.handleWidth
        : 0;
      this.options.autoPlayTime = settings.autoPlayTime
        ? settings.autoPlayTime
        : defaultSettings.autoPlayTime;
      this.options.customImage = settings.customImage;
    }
    // Check if window width is 1440px
    // if (window.innerWidth === 1440) {
    //   this.options.width = "900";
    //   this.options.height = "900";
    // }else if (window.innerWidth === 1024) {
    //   this.options.width = "600";
    //   this.options.height = "600";
    // } else if (window.innerWidth === 768) {
    //   this.options.width = "500";
    //   this.options.height = "500";
    // }else if (window.innerWidth === 425) {
    //   this.options.width = "300";
    //   this.options.height = "300";
    // } else if (window.innerWidth === 320) {
    //   this.options.width = "250";
    //   this.options.height = "250";
    // }

    // Adicione este código no início da função init do SlotMachine.prototype.init

    // Função para atualizar as configurações do slot machine com base na largura da janela
    var updateSlotMachineSize = function () {
      if (window.innerWidth >= 1440) {
        this.options.width = "550";
        this.options.height = "550";
      }
      //  else if(window.innerHeight <=1024 && window.innerWidth >= 1024) {
      //   this.options.widget = "550"
      //   this.options.height = "300"
      // }
      else if (window.innerWidth >= 1024) {
        this.options.width = "900"; // 550
        this.options.height = "600"; // 400
      } else if (window.innerHeight <= 768 && window.innerWidth >= 768) {
        this.options.widget = "900"; //500
        this.options.height = "500"; // 300
      } else if (window.innerWidth >= 768) {
        this.options.width = "600"; // 500
        this.options.height = "600"; // 500
      } else if (window.innerHeight >= 425 && window.innerWidth >= 425) {
        this.options.widget = "450";
        this.options.height = "300";
      } else if (window.innerWidth >= 425) {
        this.options.width = "450";
        this.options.height = "450";
      } else if (window.innerHeight <= 320 && window.innerWidth >= 320) {
        this.options.width = "300";
        this.options.height = "300";
      } else if (window.innerWidth >= 320) {
        this.options.width = "300";
        this.options.height = "350";
      } else if (window.innerWidth < 320) {
        this.options.width = "200";
        this.options.height = "200";
      }
    };

    updateSlotMachineSize.call(this);

    // // Ouvinte de evento de redimensionamento da janela
    // var resizeTimer;
    // window.addEventListener(
    //   "resize",
    //   function () {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(
    //       function () {
    //         // Atualize as configurações do slot machine quando a janela for redimensionada
    //         updateSlotMachineSize.call(this);
    //         // Reinicialize o slot machine para aplicar as novas configurações
    //         this.init();
    //       }.bind(this),
    //       250
    //     ); // Tempo de espera mínimo antes de reinicializar
    //   }.bind(this)
    // );
    // apply settings
    if (this.options.customImage) {
      var urls = BannerFlow.text.strip().split(",");
      this.options.names = [];
      for (var i = 0; i < urls.length; i++) {
        var name = "image-" + i;
        urls[i];
        this.options.names.push(name);
        settingStyle += getStyle("." + name + ":after", {
          "background-image": "url('" + urls[i] + "')",
        });
      }
    }
    settingStyle += getStyle(".machine", {
      "margin-top": (window.innerHeight - this.options.height) / 2 + "px",
      "margin-left": (window.innerWidth - this.options.width) / 2 + "px",
    });
    settingStyle += getStyle(".container", {
      height: this.options.height + "px",
      width: this.options.width - this.options.handleWidth + "px",
      "border-width": this.options.machineBorder + "px",
      "border-color":
        this.options.machineColor + " " + getLighter(this.options.machineColor),
    });
    var winnerSize = 1.2 * Math.max(this.options.height, this.options.width);

    settingStyle += getStyle(".winner:before,.winner:after", {
      height: winnerSize + "px",
      width: winnerSize + "px",
      top: (this.options.height - winnerSize) / 2 - 20 + "px",
      left:
        (this.options.width - winnerSize) / 2 - this.options.handleWidth + "px",
    });

    settingStyle += getStyle(".gameover:before,.gameover:after", {
      height: winnerSize + "px",
      width: winnerSize + "px",
      top: (this.options.height - winnerSize) / 2 - 20 + "px",
      left:
        (this.options.width - winnerSize) / 2 - this.options.handleWidth + "px",
    })

    settingStyle += getStyle(".handle", {
      "margin-top": this.options.height / 2 - this.options.handleHeight + "px",
    });
    document.querySelector("#setting").innerHTML = settingStyle;
    //remove old cols
    if (this.colArr && this.colArr.length > 0)
      for (var i = 0; i < this.colArr.length; i++) {
        container.removeChild(this.colArr[i].getDOM());
      }
    this.colArr = [];
    // add new cols
    for (var i = 0; i < this.options.colNum; i++) {
      var col = new SlotColumn();
      col.init(this.options.names.slice(0, this.options.rowNum), isShuffle);
      this.colArr.push(col);
      document.querySelector(".container").appendChild(col.getDOM());
    }
    machine.style.opacity = "1";
  };

  SlotMachine.prototype.addListener = function () {
    var BannerFlow = arguments[0],
      timer,
      that = this,
      container = document.querySelector(".container");
    if (typeof BannerFlow != "undefined") {
      // BannerFlow event
      BannerFlow.addEventListener(BannerFlow.RESIZE, function () {
        //clearTimeout(timer);
        // timer = setTimeout(function(){that.init(BannerFlow);that.beforeRun()},500);
      });
      BannerFlow.addEventListener(BannerFlow.CLICK, function () {
        that.beforeRun();
      });
    } else {
      // Window event
      window.addEventListener("resize", function () {
        //clearTimeout(timer);
        //timer = setTimeout(function(){that.init(BannerFlow);that.beforeRun()},500)
      });
      if (supportTouch) {
        window.addEventListener("touchstart", function () {
          that.beforeRun();
        });
      } else {
        window.addEventListener("click", function () {
          that.beforeRun();
        });
      }
    }
    var slotTrigger = document.querySelector("#slot-trigger");
    if (slotTrigger) {
      slotTrigger.addEventListener("click", function (e) {
        this.addClass("slot-triggerDown");
      });
    }
  };
  window[NAME] = SlotMachine;
})();
/*--------------=== Slot Column definition ===--------------*/
(function () {
  var NAME = "SlotColumn";
  SlotColumn = function () {

    this.col = document.createElement("div");
    this.col.className = "col";
    this.init = this.init.bind(this);
    this.run = this.run.bind(this);
    this.beforeRun = this.beforeRun.bind(this);
    this.getResult = this.getResult.bind(this);
    this.getDOM = this.getDOM.bind(this);
    this.arr = [];
    this.colHeight = this.rowHeight = 0;
    this.loop = 2;
    // console.log("this.before =>", this.beforeRun);
  };
  SlotColumn.prototype.init = function () {
    this.col.empty();
    this.arr = arguments[0];
    var isShuffle = arguments[1];
    if (isShuffle) shuffle(this.arr);
    for (var i = 0; i < this.arr.length * this.loop; i++) {
      var row = document.createElement("div");
      row.className = "row " + this.arr[i % this.arr.length];
      this.col.appendChild(row);
    }
    this.top = 0;
  };
  SlotColumn.prototype.beforeRun = function () {
    this.halfHeight = this.col.offsetHeight / this.loop;
    this.colHeight = this.col.scrollHeight / 2;
    this.rowHeight = this.colHeight / this.arr.length;
    this.nextResult = arguments[0];
    var next = this.arr.indexOf(this.nextResult);
    if (next == -1) next = random(0, this.arr.length - 1) | 0;

    var s =
      this.top +
      (random(2, 6) | 0) * this.colHeight +
      (((next + 0.5) * this.rowHeight) | 0) -
      this.halfHeight;
    var n = (random(2, 7) | 0) * fps;
    this.speed = (2 * s) / (n + 1);
    this.acceleration = this.speed / n;
  };
  SlotColumn.prototype.getResult = function () {
    var result =
      Math.ceil(
        ((this.halfHeight - this.top) % this.colHeight) / this.rowHeight
      ) - 1;
    //console.log(this.top,result,this.arr[result],this.halfHeight,this.colHeight,this.rowHeight);
    return this.arr[result];
  };
  SlotColumn.prototype.run = function () {
    if (this.speed <= 0) return true; //completed
    this.top = (this.top - this.speed) % this.colHeight;
    this.speed -= this.acceleration;
    this.top %= this.colHeight;
    this.col.style.transform = "translateY(" + this.top + "px)";
    return false; //not completed
  };
  SlotColumn.prototype.getDOM = function () {
    return this.col;
  };
  window[NAME] = SlotColumn;
})();
/*--------------=== Utils definition ===--------------*/
//random in range
var random = function () {
  var isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
    val = Math.random(),
    arg = arguments;
  return isNumeric(arg[0])
    ? isNumeric(arg[1])
      ? arg[0] + val * (arg[1] - arg[0])
      : val * arg[0]
    : val;
};
//shuffle an array
var shuffle = function (arr) {
  var j, tmp;
  for (var i = 0; i < arr.length; i++) {
    j = random(arr.length) | 0;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
};
//get CSS3 style
var setStyleCss3 = function (object, key, value) {
  object.style["-webkit-" + key] = value;
  object.style["-moz-" + key] = value;
  object.style["-ms-" + key] = value;
  object.style[key] = value;
};
//get name from url
var getNameFromUrl = function (url) {
  if (url) {
    var s = url.lastIndexOf("/") + 1,
      e = url.lastIndexOf(".");
    return s < e ? url.substring(s, e) : "";
  }
  return "";
};
//get style from object style
var getStyle = function (selector, styleObj) {
  var isAttribute = false;
  var newStyle = selector + "{";
  for (var attr in styleObj) {
    if (styleObj[attr]) {
      isAttribute = true;
      newStyle += attr + " : " + styleObj[attr] + ";";
    }
  }
  newStyle += "}";
  return isAttribute ? newStyle : "";
};
// get lighter color from rgba colors
var getLighter = function (rgba) {
  var o = /[^,]+(?=\))/g.exec(rgba)[0] * 0.75;
  return rgba.replace(/[^,]+(?=\))/g, o);
};
//remove html from text
if (!String.prototype.strip) {
  String.prototype.strip = function () {
    return this.replace(/(<[^>]+>)/gi, " ").trim();
  };
}
//remove all child node
if (!Node.prototype.empty) {
  Node.prototype.empty = function () {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
  };
}
if (!HTMLElement.prototype.hasClass) {
  Element.prototype.hasClass = function (c) {
    return (
      (" " + this.className + " ")
        .replace(/[\n\t]/g, " ")
        .indexOf(" " + c + " ") > -1
    );
  };
}
if (!HTMLElement.prototype.addClass) {
  HTMLElement.prototype.addClass = function (c) {
    if (!this.hasClass(c)) this.className += " " + c;
    return this;
  };
}
if (!HTMLElement.prototype.removeClass) {
  HTMLElement.prototype.removeClass = function (c) {
    if (this.hasClass(c))
      this.className = (" " + this.className + " ")
        .replace(" " + c + " ", " ")
        .trim();
    return this;
  };
}
/*--------------=== Main function ===--------------*/
var timer,
  widget = null;
if (typeof BannerFlow != "undefined") {
  BannerFlow.addEventListener(BannerFlow.SETTINGS_CHANGED, function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (widget == null) {
        widget = new SlotMachine();
        widget.addListener(BannerFlow);
      }
      widget.init(BannerFlow);
      widget.beforeRun();
    }, 500);
  });
} else {
  window.addEventListener("load", function (e) {
    if (widget == null) {
      widget = new SlotMachine();
      widget.addListener();
    }
    widget.init();
    widget.beforeRun();
  });
}
