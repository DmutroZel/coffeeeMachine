function CoffeeMachine(power) {
    this.waterAmount = 0;
    let timerID;

    const WATER_HEAT_CAPACITY = 4200;

    let getBoilTime = function () {
        let t = this.waterAmount * WATER_HEAT_CAPACITY * 80 / 1000;
        console.log(t);
        return t;
    }.bind(this);

    function onReady() {
        alert('Кава готова!');
    }
    this.run = function () {
        timerID = setTimeout(onReady, getBoilTime());
    }

    this.stop = function () {
        clearTimeout(timerID);
        alert('Готування кави призупинено');
    }
}

let coffeeMachine = new CoffeeMachine(1500);

coffeeMachine.waterAmount = 300;

console.log(coffeeMachine.waterAmount);

$('#run').click(function () {
    coffeeMachine.run();
})
$('#stop').click(function () {
    coffeeMachine.stop();
})

const PERCENT_TO_ML = 100;

$('#addWater').click(function () {
    if (coffeeMachine.waterAmount < 1000) {
        coffeeMachine.waterAmount += PERCENT_TO_ML;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount / 10 + '%');
        $('.water').text(coffeeMachine.waterAmount + 'ml');
    }
})

$('#removeWater').click(function () {
    if (coffeeMachine.waterAmount > 0) {
        coffeeMachine.waterAmount -= PERCENT_TO_ML;
        console.log(coffeeMachine.waterAmount);
        $('.water').css('height', coffeeMachine.waterAmount / 10 + '%');
        $('.water').text(coffeeMachine.waterAmount + 'ml');
    }
})
$('#coffeeBtn').click(function () {
        $('#menu').css('display', 'flex');
        $('#menu').html(
            '<button id="100ml"><h3>Mini</h3> <h4>100ml</h4></button>' +
            '<button id="150ml"><h3>Medium</h3> <h4>150ml</h4></button>' +
            '<button id="200ml"><h3>Large</h3> <h4>200ml</h4></button>')
        $('#100ml').click(function () {
            if (coffeeMachine.waterAmount >= 100) {
                coffeeMachine.waterAmount -= 100;
                $('.water').css('height', coffeeMachine.waterAmount / 10 + '%');
                $('.water').text(coffeeMachine.waterAmount + 'ml');
                $('#menu').css('display', 'none');
                let audio = new Audio('./audio/cofe.mp3');
                audio.play();
                $('.cofe').animate({
                    top: '+=75px'
                }, 3000, function () {
                    $(this).css('top', '0px');
                    alert('Кава готова!');
                })
            } else {
                alert('Додайте воду!')
            }
        })
        $('#150ml').click(function () {
            if (coffeeMachine.waterAmount >= 150) {
                coffeeMachine.waterAmount -= 150;
                $('.water').css('height', coffeeMachine.waterAmount / 10 + '%');
                $('.water').text(coffeeMachine.waterAmount + 'ml');
                $('#menu').css('display', 'none');
                let audio = new Audio('./audio/cofe.mp3');
                audio.play();
                $('.cofe').animate({
                    top: '+=75px'
                }, 3000, function () {
                    $(this).css('top', '0px');
                    alert('Кава готова!');
                })
            } else {
                alert('Додайте воду!')
            }
        })
        $('#200ml').click(function () {
            if (coffeeMachine.waterAmount >= 200) {
                coffeeMachine.waterAmount -= 200;
                $('.water').css('height', coffeeMachine.waterAmount / 10 + '%');
                $('.water').text(coffeeMachine.waterAmount + 'ml');
                $('#menu').css('display', 'none');
                let audio = new Audio('./audio/cofe.mp3');
                audio.play();
                $('.cofe').animate({
                    top: '+=75px'
                }, 3000, function () {
                    $(this).css('top', '0px');
                    alert('Кава готова!');
                })
            } else {
                alert('Додайте воду!')
            }
        })
})

