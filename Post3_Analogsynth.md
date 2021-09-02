# Post 3: Spill melodien som vises på analog synth


## Steg 1 @unplugged

### Instruksjon

![output-mtu-Sij.gif](https://i.postimg.cc/0QqYc2P6/output-mtu-Sij.gif)

Du skal spille den samme melodien som den analoge synthen spiller. Trykk på knappen ved synthen for å høre melodien. 

Følg instruksjonen for å løse oppgaven!

## Steg 2

### Ved start

Sett opp egen ``||radio:Radio sett gruppe||``. Den skal være den samme som posten du er på. Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(3)
```

## Steg 3

### Start testen med A+B

Finn frem blokken: ``||input: Når knapp A+B trykkes||``.

Nå skal vi spille på flaskene i riktig rekkefølge. Bruk blokken``||radio: radio send tekst||``.

Send én blokk der dere skriver inn alle tonene dere skal spille, i riktig rekkefølge.

```blocks
input.onGesture(Gesture.Shake, function () {
    radio.sendString("CDEFGAHC")
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

``||math: Last ned||`` koden til micro:biten og send den avgårde ved å riste på micro:biten. 

Lykke til!