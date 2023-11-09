/**
 * Guess the number
 *
 * STEG 1
 * Sätt ett tal i en variabel. [X]
 * Be användaren att gissa talet med hjälp av `prompt()`. [X]
 * Om användarens gissning är fel, fråga efter en ny gissning.[X]
 * Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.[X]
 * Om användaren skriver in talet 0 så ska spelet avslutas.[X]
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta. [X]
 *
 * STEG 2
 * Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång. [X]
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt. [0]
 *
 */

// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}