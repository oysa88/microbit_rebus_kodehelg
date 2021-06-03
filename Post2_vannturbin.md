# Post 2 - Starte vannturbinen

## Steg 1 @unplugged

### Starte vannturbin for strømproduksjon

Vi trenger å produsere strøm til byen vår, men ønsker kun å produsere om dagen. For å sjekke om det dag etter natt skal vi lage en funksjon som sjekker om lysnivået i rommet er høyere enn en gitt verdi.

Vi skal derfor bruke lyssensoren som er innebygd i vår micro:bit.

Lyssensoren går mellom 0-255, der 0 er mørkt og 255 er lyst. Vi skal bruke verdien 180 som terskelverdi, dvs. at vi må minst ha en lysstyrke på 180 i rommet for å starte å produsere strøm.


## Steg 2

### Ved start

Sett opp egen ``||radio:Radio sett gruppe||``. Den skal være den samme som posten du er på. Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(2)
```

## Steg 3

### Sett opp hvis-betingelse som sjekker lysnivået

Inni en ``||input: gjenta for alltid||`` skal vi sette opp en ``||logic: hvis-betingelse||``. En ``||logic: hvis-betingelse||`` sjekker om betingelse er oppfylt. Hvis den er det, vil koden inni ble utført.

- Hvis lysnivået er over 180 skal ``||radio: radio send tekst||`` = "Start produksjon". 
- Ellers skal ``||radio: radio send tekst||`` = "Stopp produksjon".

```blocks
basic.forever(function () {
    if (input.lightLevel() < 200) {
        radio.sendString("Start produksjon")
    } else {
        radio.sendString("Stopp produksjon")
    }
})
```

## Steg 4

### Motta svar hvis oppgaven er løst

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit. Hold micro:biten opp mot lyset og se om du klarer å starte å produsere strøm. Hva skjer hvis du legger micro:biten et mørkt sted?

Lykke til!