# Post 1 - bit:bot bilbane 

### @diffs true

## Steg 1 @unplugged

### Programmere fjernkontroll for å styre bit:bit

Deres oppgave er å styre bilen fra start til mål på banen. Bilen må kjøre over alle (3) sensorene på banen. Rekkefølgen har ingen betydning, men sensor i mål MÅ være den siste dere aktiverer.

Ringen med lys vil fylles opp når en sensor er blitt aktivert! Dere har 30 sekunder på å kjøre bilen gjennom hele løypa, og dere har så mange forsøk dere trenger!

Så følg instruksjonen videre for å programmere fjernkontrollen. 

Lykke til!

![Bitbot-bilbane-600px.png](https://i.postimg.cc/fTws5C6m/Bitbot-bilbane-600px.png)


## Steg 2

### Ved start

Sett opp egen ``||radio:Radio sett gruppe||``. Den skal være den samme som posten du er på. Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(3)
```

## Steg 3.1 @unplugged

### Bruke helningsvinklene til micro:bit

For å kunne kontrollere bit:bot-bilen skal vi bruke helningsvinklene til micro:bit. 

Vi skal sende:

- ``||input: pitch||`` for å styre hastigheten
- ``||input: roll||`` til å styre svingingen

![](https://cdn.sanity.io/images/ajwvhvgo/production/5da9fe1ca277f95cc2e7d1c1f1f8b68b32a747f7-622x625.png?w=435&q=80&fit=max&auto=format)

## Steg 3.2

### Bruke helningsvinklene til micro:bit

Lag to variabler: ``||variabel: Roll||`` og ``||variabel: Pitch||``.

Inni ``||basic: gjenta for alltid||``:

- Sett ``||variabel: Pitch||`` til å lese av ``||input: helningsvinkel forover-bakover||``
- Sett ``||variabel: Roll||`` til å lese av ``||input: helningsvinkel høyre-venstre||``

PS: Helningsvinkel hentes fra ``||input: Inndata --- mer||``

```blocks
let Pitch = 0
let Roll = 0
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
})
```

## Steg 4

### Skru bit:bot AV og PÅ

Vi trenger å lage en funksjon som gjør at vi kan skru av og på bit:bot med fjernkontrollen vår. Hver gang vi trykker inn ``||input: knapp A og B||`` skal bit:bot veksle mellom AV/PÅ.

Vi trenger derfor å lagre en nye variabel: ``||variabel: AvPå||``

Inn blokken ``||input: når knapp A+B trykkes ||``:

- Hent en ``||logic: hvis-betingelse||`` med ``||logic: ellers||``.
- Sett at hvis variabelen ``||variabel: AvPå||`` = 0, skal ``||variabel: AvPå||`` settes til 1. Ellers skal den settes til 0. 

Når vi sender 1 skrus bit:bot på, når vi sender 0 skrus den av.

```blocks
let AvPå = 0
input.onButtonPressed(Button.AB, function () {
    if (AvPå == 0) {
        AvPå = 1
    } else {
        AvPå = 0
    }
})
```

## Steg 5

### Sende informasjon fra fjernkontroll til bit:bot (Sende P.A.R.)

Informasjonen vi har lagret i variablene ``||variabel: Pitch||``, ``||variabel: Roll||`` og ``||variabel: AvPå||`` skal sendes til bit:bot.

Vi skal bruke blokken ``||radio: radio send verdi "navn" = 0||``, en for hver variabel.

Inni ``||basic: gjenta for alltid||``: Sende 

- "P" skal sende verdien til ``||variabel: Pitch||``
- "A" skal sende verdien til ``||variabel: AvPå||``
- "R" skal sende verdien til ``||variabel: Roll||``

```blocks
let Pitch = 0
let Roll = 0
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    radio.sendValue("P", Pitch)
    radio.sendValue("A", AvPå)
    radio.sendValue("R", Roll)
})
```

## Steg 6

### Motta svar hvis oppgaven er løst

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

Hver gang du mottar en melding skal du sette variabelen ``||variabel: AvPå||`` til 0.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    AvPå = 0
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit. Trykk på A+B for å starte bilen og bruk fjernkontrollen til å styre bilen. 

Lykke til!