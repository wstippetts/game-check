
let commander = {
  money: 0,
  supportSpeed: 3000,
  payPerClick: 1,
  support1: 0,
  support2: 0,
  weapon1: 0,
  weapon2: 0,

}





function attackEnemy() {

  commander.money += commander.payPerClick;
  drawMoney()
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
        <div class="col-6 text-wrap">
          <h3>upgrade1</h3>
          <h3>upgrade2</h3>
          <h3>upgrade3</h3>
          <h3>upgrade4</h3>

        </div>
        <div class="col-6">
          <h3>BUY: 🪙20 <button onclick="addWeapon1()">       🔫</button> ${commander.weapon1}</h3>
          <h3>BUY: 🪙1000 <button onclick="addWeapon2()">     💣</button> ${commander.weapon2}</h3>
          <h3>BUY: 🪙750 <button onclick="addSupport1()">     🚀</button> ${commander.support1}</h3>
          <h3>BUY: 🪙5000 <button onclick="addSupport2()">    ☄️</button> ${commander.support2}</h3>
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
  if (commander.money >= 20) {
    commander.money -= 20
    commander.weapon1 += 1
    updatePay()
    drawConsole()
  } else {
    noMoney()
  }
}

function addWeapon2() {
  if (commander.money >= 1000) {
    commander.money -= 1000
    commander.weapon2 += 1
    updatePay()
    drawConsole()

  } else {
    noMoney()
  }
}

function addSupport1() {
  if (commander.money >= 750) {
    commander.money -= 750
    commander.support1 += 1
    drawConsole()
    drawMoney()
  } else {
    noMoney()
  }
}

function addSupport2() {
  if (commander.money >= 5000) {
    commander.money -= 5000
    commander.support2 += 1
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



















drawConsole()
drawMoney()