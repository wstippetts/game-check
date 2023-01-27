
let commander = {
  money: 0,
  supportSpeed: 3000,
  payPerClick: 1,
  support1: 0,
  support2: 0,
  weapon1: 0,
  weapon2: 0,

}

let weapon1Cost = 20
let weapon2Cost = 1000
let support1Cost = 750
let support2Cost = 5000
let pewpewpew = 20000





function attackEnemy() {

  commander.money += commander.payPerClick;
  drawMoney()
}

function supportAttack() {
  commander.money += ((commander.support1 * 500) + (commander.support2 * 7500))
  commander.money
}

function updatePay() {
  commander.payPerClick = ((commander.weapon1 * 5) + (commander.weapon2 * 20) + 1)
  commander.payPerClick
  drawMoney()
}

function drawMoney() {
  let moneyElem = document.getElementById('money')
  let supportSpeedSeconds = commander.supportSpeed / 1000
  let supportTotal = (commander.support1 * 500) + (commander.support2 * 7500)
  let printMoney = `
  
<p>
<b>🪙 CREDITS: </b> ${commander.money.toFixed(0)} <br>
</p>
<p>
<b>CREDIT per click</b> ${commander.payPerClick.toFixed(0)} <br>
</p>
<p>
<b>CREDITS FROM SUPPORT: ${supportTotal.toFixed(0)}  /  ${supportSpeedSeconds.toFixed(2)}  SEC</b>
</p>


  
  `
  moneyElem.innerHTML = printMoney

}

function drawConsole() {
  let consoleElem = document.getElementById('console')
  let printConsole = `

  <div class="row text-light">
  <div class="col-12">
    
      <div class="row bottomSplash align-items-center">
        <div class="col-6 text-center">
        <h3><button onclick="fireRate()">☄️☄️☄️ INCREASE FIRE RATE</button></h3>
        <h3>COST TO INCREASE FIRE RATE: ${pewpewpew}</h3>
          
        </div>
        <div class="col-6">
          <div class="row">
            <div class="col-3 d-flex align-items-center flex-wrap ">
              <h3> 
              BUY: 🪙${weapon1Cost.toFixed()} 
              </h3>
              <h3> 
              BUY: 🪙${weapon2Cost.toFixed()}
              </h3>
              <h3> 
              BUY: 🪙${support1Cost.toFixed()}
              </h3>
              <h3> 
              BUY: 🪙${support2Cost.toFixed()}
              </h3>
            </div>
            <div class="col-3 d-flex flex-column align-items-end flex-wrap">
              <h3>${commander.weapon1}<button class="m-1" onclick="addWeapon1()"> 🔫</button> </h3>
              <h3>${commander.weapon2}<button class="m-1" onclick="addWeapon2()"> 💣</button> </h3>
              <h3>${commander.support1}<button class="m-1" onclick="addSupport1()"> 🚀</button> </h3>
              <h3>${commander.support2}<button class="m-1" onclick="addSupport2()"> ☄️</button> </h3>
              </div>
            </div> 
          </div>        
        </div>
      
    </div>
  

`
  consoleElem.innerHTML = printConsole

}


// #region - weapons and support 
function addWeapon1() {
  if (commander.money >= weapon1Cost) {
    commander.money -= weapon1Cost
    commander.weapon1 += 1
    weapon1Cost *= 1.05
    updatePay()
    drawConsole()
  } else {
    noMoney()
  }
}

function addWeapon2() {
  if (commander.money >= weapon2Cost) {
    commander.money -= weapon2Cost
    commander.weapon2 += 1
    weapon2Cost *= 1.10
    updatePay()
    drawConsole()
  } else {
    noMoney()
  }
}

function addSupport1() {
  if (commander.money >= support1Cost) {
    commander.money -= support1Cost
    commander.support1 += 1
    support1Cost *= 1.05
    drawConsole()
    drawMoney()
  } else {
    noMoney()
  }
}

function addSupport2() {
  if (commander.money >= support2Cost) {
    commander.money -= support2Cost
    commander.support2 += 1
    support2Cost *= 1.15
    drawConsole()
    drawMoney()
  } else {
    noMoney()
  }


}
//#endregion

function noMoney() {
  window.alert("Go earn some more money!")
}

function fireRate() {
  if (commander.money >= pewpewpew) {
    commander.money -= pewpewpew
    commander.supportSpeed *= .95
    pewpewpew *= 2
  } else {
    noMoney()
  }
  drawConsole()
  drawMoney()
}



setInterval(supportAttack, commander.supportSpeed)
setInterval(drawMoney, commander.supportSpeed)
setInterval(drawConsole, commander.supportSpeed)




drawConsole()
drawMoney()