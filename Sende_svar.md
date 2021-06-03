# Sende inn løsningsordet du kom frem til ved å løse oppgave på alle postene

## Steg 1 @unplugged

### Gratulerer!

Du har nå løst alle postene og skal ha fått et løsningsord. Dette skal vi sende over til micro:bot-orkesteret!

Hvis du har riktig løsningsord, vil orkesteret spille en samg for det! Hvis ikke... Kanskje du ikke har løst alle postene allikevel?


## Steg 2

### Sende løsningsord til micro:bot-orkesteret!

Sett opp ``||radio:Radio sett gruppe||`` nr. 8 i ``||basic: ved start||``.

Deretter skal du, ``||input: når knapp A trykkes||``, sende løsningsordet med ``||radio: radio send tekst||``. (Bruk bare store bokstaver.)

```blocks
radio.setGroup(8)
input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
```
