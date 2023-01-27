
let commander = {
  money: 0,
  supportSpeed: 3000,
  payPerClick: 1,
  support1: 0,
  support2: 0,
  weapon1: 100,
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
  commander.money += (commander.support1 * 500) + (commander.support2 * 7500)
}

function updatePay() {
  commander.payPerClick = (commander.weapon1 * 5) + (commander.weapon2 * 20) + 1

  drawMoney()
}

function drawMoney() {
  let moneyElem = document.getElementById('money')
  let supportSpeedSeconds = commander.supportSpeed / 1000
  let supportTotal = (commander.support1 * 20) + (commander.support2 * 100)
  let printMoney = `
  
  <b>🪙 CREDITS: </b> ${commander.money} <br>
  <b>CREDIT per click</b> ${commander.payPerClick} <br>
  <b>CREDITS FROM SUPPORT ${supportTotal} PER ${supportSpeedSeconds} SEC</b>
  
  `
  moneyElem.innerHTML = printMoney

}

function drawConsole() {
  let consoleElem = document.getElementById('console')
  let printConsole = `

  <div class="row text-light flex-end">
  <div class="col-12">
    <div class="bottomSplash">
      <div class="row">
        <div class="col-6 text-wrap text-center">
        <h3><button onclick="fireRate()">☄️☄️☄️ INCREASE FIRE RATE</button></h3>
          
        </div>
        <div class="col-6">
          <h3>BUY: 🪙${weapon1Cost} <button onclick="addWeapon1()">       🔫</button> ${commander.weapon1}</h3>
          <h3>BUY: 🪙${weapon2Cost} <button onclick="addWeapon2()">     💣</button> ${commander.weapon2}</h3>
          <h3>BUY: 🪙${support1Cost} <button onclick="addSupport1()">     🚀</button> ${commander.support1}</h3>
          <h3>BUY: 🪙${support2Cost} <button onclick="addSupport2()">    ☄️</button> ${commander.support2}</h3>
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
    updatePay()
    drawConsole()
    weapon1Cost *= 1.05
  } else {
    noMoney()
  }
}

function addWeapon2() {
  if (commander.money >= weapon2Cost) {
    commander.money -= weapon2Cost
    commander.weapon2 += 1
    updatePay()
    drawConsole()
    weapon2Cost *= 1.10
  } else {
    noMoney()
  }
}

function addSupport1() {
  if (commander.money >= support1Cost) {
    commander.money -= support1Cost
    commander.support1 += 1
    drawConsole()
    drawMoney()
    support1Cost *= 1.05
  } else {
    noMoney()
  }
}

function addSupport2() {
  if (commander.money >= support2Cost) {
    commander.money -= support2Cost
    commander.support2 += 1
    drawConsole()
    drawMoney()
    support2Cost *= 1.15
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
  }
}



setInterval(supportAttack, commander.supportSpeed)
setInterval(drawMoney, commander.supportSpeed)
setInterval(drawConsole, commander.supportSpeed)




drawConsole()
drawMoney()