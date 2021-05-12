# Skru på lyset i byen til togbanen


## Steg 1 @unplugged

### Skru på lyset i byen

På denne posten skal vi starte 

## Steg 2

### Ved start

For å kunne snakke med byen, må vi sett opp en egen ``||radio:Radio sett gruppe||``. Radiogruppen skal være den samme som posten du er på (6). 

Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(4)
```

## Steg 3

### Sette opp styring av lys

Inni blokken ``||basic: gjenta for alltid||`` skal vi kjøre en sekvens som vi skru lysene i byen på og av. 

Sekvensen skal kun kjøres hvis ``||input: knapp A trykkes||``. Vi finne blokken ``||logic: hvis||`` som vi henter fra ``||logic: Logikk||``.

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    }
})
```

## Steg 4

### Styre lysene

For å sende beskjed til byen om at lysene skal skrus på, må ``||radio: radio sende tekst||`` "Lys på". 

Mellom hver gang du gir beskjed om å skru på lyset i byen, må vi legge inn en ``||basic: pause||`` på 500-1000 ms.

Lag en egendefinert sekvens der lysene i byen blir skrudd av og på.

(Hint: Et eksempel på hvordan koden kan se ut.)

```blocks
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("Lys på")
        basic.pause(500)
        radio.sendString("Lys på")
        basic.pause(500)
        radio.sendString("Lys på")
        basic.pause(1000)
        radio.sendString("Lys på")
    }
})
```


## Step 5

### Når radio mottar svaret på oppgaven

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 6

### Last ned koden

Last ned koden til din micro:bit og send den avgårde ved å trykke på knapp A på din micro:bit. 

Lykke til!