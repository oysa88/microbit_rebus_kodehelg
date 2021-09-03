# Post 5: Kirurgirobot

## Steg 1 @unplugged

### Kirurgirobot

![Operasjonsrobot.png](https://i.postimg.cc/ydJ4CGmY/Operasjonsrobot.png)

Sykehuset har kjøpt inn en ny kirurgirobot som skal hjelpe til med å utføre hjerteoperasjoner. 

Så du har fått i oppgave å programmere den slik at kuttet den utfører skjer på riktig sted.

Følg instruksjonen for å gjennomføre operasjonen!


## Steg 2

### Ved start

For å kunne snakke med roboten, trenger vi å bruke radiokommunikasjon. 

Sett opp egen ``||radio:Radio sett gruppe||``. Den skal være den samme som posten du er på. Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(3)
```

## Steg 3

### Sett opp banen som roboten skal bevege seg i.

Robotarmen beveger seg rundt i et koordinatsystem som du kan se på operasjonsbordet. Hodet som beveger kniven, vil bevege seg med én og én rute av gangen.

Finn frem blokken: ``||input: Når ristes||``. Inni her skal vi bruke blokken ``||radio: radio send tekst||``.

I meldingen vi skal sende, må vi skrive inn alle bevegelsene vi vil at roboten ska utføre.

NB: Bruk bare store bokstaver! (Se eksempel i Hint-vinduet.)

```blocks
input.onGesture(Gesture.Shake, function () {
    radio.sendString("123456789KI")
})
```


## Step 4

### Når radio mottar

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal vi ``||basic: vise teksten||`` vi mottar i ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit og send den avgårde ved å riste på micro:biten din. 

Lykke til!