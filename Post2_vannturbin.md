# Post 2 - Starte vannturbinen

## Steg 1 @unplugged

### Starte vannturbin for strømproduksjon

![20201015-114623.jpg](https://i.postimg.cc/SKbKGyJg/20201015-114623.jpg)

Vi trenger å produsere strøm til byen vår, så for å gjøre det skal vi starte opp vannkraftverket. 

**Vi skal sette i gang en testproduksjon som skal vare i 10 sekunder.**

## Steg 2

### Ved start

Sett opp egen ``||radio:Radio sett gruppe||``. Den skal være den samme som posten du er på. Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(2)
```

## Steg 3

### Bruke knappene for å starte produksjonen

**Vi skal starte testen ``||input: når knapp A trykkes||``.** 

- For å starte testen skal vi sende en ``||radio: radio send tekst||`` = "Start produksjon".
- Så skal vi sette inn en ``||basic: pause||`` på 10000 millisekunder (10 sek).
- Til slutt skal vi sende en ``||radio: radio send tekst||`` = "Stopp produksjon".

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("Start produksjon")
    basic.pause(10000)
    radio.sendString("Stopp produksjon")
})
```

## Steg 4

### Motta svar hvis oppgaven er løst

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal vi ``||basic: vise teksten||`` vi mottar i ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit. Trykk på knapp A og se om du klarer å starte å produsere strøm.

Lykke til!