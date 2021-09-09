# Skru på lyset i byen til togbanen


## Steg 1 @unplugged

### Skru på lyset i byen

![Industrimodellen.jpg](https://i.postimg.cc/NMxGLSy8/Industrimodellen.jpg)

På denne posten skal vi skru lysene i byen av og på! Vi ønsker at lyset skal slå seg på når det er mørkt ute og av når det er lyst ute.

For å gjøre dette skal vi bruke den innebygde lyssensoren til micro:bit!

## Steg 2

### Ved start

For å kunne snakke med byen, må vi sett opp en egen ``||radio:Radio sett gruppe||``. Radiogruppen skal være den samme som posten du er på (6). 

Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(6)
```

## Steg 3

### Sette opp styring av lys

Inni blokken ``||basic: gjenta for alltid||`` skal vi kjøre lage en funksjon for å skru lysene i byen på og av. 

Funksjonen skal sjekke om lysnivået er over en viss verdi. 

- Så ``||logic: hvis||`` ``||input: lysnivå||`` er over 180 skal ``||radio: radio send tekst||`` = "Lys av". 
- Ellers, ``||radio: radio send tekst||`` = "Lys på". 

PS: Vi finne blokken ``||logic: hvis sann så||`` i menyen ``||logic: Logikk||``.

```blocks
basic.forever(function () {
    if (input.lightLevel() > 180) {
    	radio.sendString("Lys av")
    } else {
    	radio.sendString("Lys på")
    }
})
```

## Step 4

### Når radio mottar svaret på oppgaven

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit og skru lyset i byen både på og av minst én gang hjelp av lyssensoren til micro:bi! 

Lykke til!