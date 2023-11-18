## Guess the number - DOM Edition

### STEG 1 [X]

En input-fält där man kan gissa på ett tal. En knapp för att gissa.

### STEG 1.1 [X]

Visa resultatet i en alert.

### STEG 1.2 [X]

Visa om resultatet var rätt eller inte i ett HTML-element.
(T.ex. ”Du gissade rätt!” eller ”Du gissade fel!”)
Ska så klart uppdateras varje gång användaren gissar.

### STEG 2 [X]

Visa om det gissade talet var för högt eller lågt i ett HTML-element.

### STEG 3 [X]

Visa antalet gissningar hittills i ett HTML-element.
Ska så klart också uppdateras varje gång användaren gissar.

### STEG 4 [X]

Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
antalet gissningar ska nollställas).

```javascript
// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
  return Math.ceil(Math.random() * max);
};
```
