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
radio.setGroup(1)
```

## Steg 3

### Sett opp hvis-betingelse som sjekker lysnivået

