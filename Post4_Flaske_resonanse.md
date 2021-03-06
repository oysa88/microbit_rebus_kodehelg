# Post 4: Spille på flaskene fra mørkeste til lyseste tone


## Steg 1 @unplugged

### Instruksjon

![output-Z9vas-C.gif](https://i.postimg.cc/SNb7fX24/output-Z9vas-C.gif)

På denne posten skal du sende en kommando som skal spille på flaskene, fra den mørkeste til den lyseste tonen.

Følg instruksjonen videre for å løse oppgaven!



## Steg 2

### Ved start

For å kunne "snakke" med flaskene, må vi sett opp en egen ``||radio:Radio sett gruppe||``. Radiogruppen skal være den samme som posten du er på (4). Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(4)
```

## Steg 3

### Når knapp A trykkes

Finn frem blokken: ``||input: Når knapp A trykkes||``.

Nå skal vi spille på flaskene i riktig rekkefølge. Bruk blokken``||radio: Send verdi||``. Endre ``||radio: navn||`` til ``||radio: spill||``. 

Send én blokk per flaske, og sett verdien til å være nummeret til flasken du vil spille på.

Sett blokkene inni en ``||input: Når knapp A trykkes||``.

```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendValue("spill", )
    radio.sendValue("spill", )
    radio.sendValue("spill", )
    radio.sendValue("spill", )
})
```


## Step 4

### Når radio mottar

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit og send den avgårde ved å trykke på knapp A på din micro:bit. 

Lykke til!