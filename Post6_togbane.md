# Skru på lyset i byen til togbanen


## Steg 1 @unplugged

### Skru på lyset i byen

![Industrimodellen.jpg](https://i.postimg.cc/NMxGLSy8/Industrimodellen.jpg)

På denne posten skal vi skru lysene i byen av og på! Vi ønsker å bruke kun én knapp til å kunne gjøre dette.

For å gjøre dette skal vi bruke en ``||logic: hvis-betingelse||``!

## Steg 2

### Ved start

For å kunne snakke med byen, må vi sett opp en egen ``||radio:Radio sett gruppe||``. Radiogruppen skal være den samme som posten du er på (6). 

Sett den inn i ``||basic: ved start||``.

```blocks
radio.setGroup(6)
```

## Steg 3

### Sette opp styring av lys

Inni blokken ``||input: når knapp A trykkes||`` skal vi lage en funksjon for å skru lysene i byen på og av. 

Først må vi lage variabelen: ``||variable: Lys||``. Funksjonen skal sjekke om ``||variable: Lys||`` er ``||logic: sann||`` eller ``||logic: usann||``. 

- Så ``||logic: hvis||`` ``||variable: Lys||`` er ``||logic: sann||`` skal ``||variable: Lys||`` settes til ``||logic: usann||`` og ``||radio: radio send tekst||`` = "Lys av". 
- Ellers, sett ``||variable: Lys||`` til ``||logic: sann||`` og ``||radio: radio send tekst||`` = "Lys på". 

PS: Vi finne blokken ``||logic: hvis sann så||`` i menyen ``||logic: Logikk||``.

```blocks
input.onButtonPressed(Button.A, function () {
     
}
```

## Step 4

### Når radio mottar svaret på oppgaven

For å kunne motta bokstaven når oppgaven er løst, må se sette opp at ``||radio: når radio mottar||`` skal ``||basic: vise teksten||`` ``||variable: receivedString||``.

Trekk ``||variable: receivedString||`` ut fra ``||radio: når radio mottar||`` og sett den inn i en ``||basic: vis tekst||``.

```blocks
input.onButtonPressed(Button.A)
```

## Steg 5

### Last ned koden

``||math: Last ned||`` koden til din micro:bit og skru lyset i byen både på og av minst én gang hjelp av lyssensoren til micro:bi! 

Lykke til!