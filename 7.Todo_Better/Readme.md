## Övning - Better Todos
Gör en kopia av vår Simple Todos-app (24-simple-todos) och lägg till ett id-attribut på varje todo i todos. 
Alternativt ta hem 30-better-todos från branch:en pre/lesson-11.
 
Exempel:
```javascript
const todos = [
  { id: 1, title: "Learn basic JavaScript", completed: true },
  { id: 2, title: "Learn Array Methods", completed: false },
  { id: 3, title: "Take over the world", completed: false },
];
```
### Steg 1 - Två listor, en lista för ofärdiga todos och för färdiga todos [X]
Ändra så det finns två <ul> och vid renderingen av våra todos, skriv om koden så du renderar ut de ofärdiga todos till den ena av listorna och de färdiga todos till den andra listan.
 
Obs: Det ska fortfarande bara finnas en enda array med todos, inte två. Single Source of Truth 🙂
 
Tips! Använd en av de nya Higher Order Array Methods vi gått igenom.
 
### ⭐️ Steg 2 - Beräkna ID vid skapande av ny todo []
När en ny todo skapas, se om du kan räkna ut det högsta id bland befintliga todos (finns flera sätt att göra det på, ett sätt är att använda .map() följt av Math.max() och ett annat är att använda .reduce()). Ge den nya todon som skapas ett id som är det högsta id + 1.
 
Exempel: Om det högsta id som finns i array:en är 3 så ska den nya todon man skapar få id 4.
 
Tänk på att våra todos inte kommer vara sorterade efter id.
 
### 🌟 Steg 3 - Data attribut []
Med kunskapen från “Using data attributes” ovan, se om du kan skriva om 30-better-todos till att rendera ut todo:ns ID på <li>-elementet och när man klickar på en todo så hämta ut detta ID, använd .find() att hitta den aktuella todo:n och toggla den.
