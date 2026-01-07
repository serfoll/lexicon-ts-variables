# Workshop: Grunderna i TypeScript

**Mål:** Att praktiskt använda variabler, datatyper, operatorer och scope.  
**Instruktion:** Vi kommer att skriva all kod i **en och samma fil**. Använd kommentarer (`//`) för att hålla isär de olika delarna.

---

## Förberedelser

1. Skapa en ny mapp på din dator för dagens workshop.
2. Öppna mappen i **VS Code**.
3. Skapa en fil som heter `index.ts`.

---

## Steg 1: Variabler och Typsäkerhet
*Vi börjar med att deklarera variabler och testa hur TypeScript skyddar oss.*

1. I din `index.ts`, skriv en kommentar högst upp: `// Steg 1: Variabler`.
2. Deklarera tre variabler:
   - `firstName` (datatyp: **string**) – Sätt ditt förnamn. Använd `const` (eftersom du inte byter namn idag).
   - `age` (datatyp: **number**) – Sätt din ålder. Använd `let` (eftersom åldern ändras i framtiden).
   - `isStudent` (datatyp: **boolean**) – Sätt till `true` eller `false`.
3. **Skriv ut:** Använd `console.log()` för att skriva ut en mening i terminalen som använder alla tre variabler.
   - *Exempel:* `"Jag heter Anna, är 30 år och det är true att jag är student."*
4. **Testa skyddet:** På en ny rad, försök att ge variabeln `age` värdet `"Tjugo"` (en textsträng).
   - Ser du det röda strecket? Håll musen över det för att läsa felet. Det är TypeScript som skyddar koden.
   - **Åtgärd:** Kommentera ut den felaktiga raden med `//` så att programmet fungerar igen.

---

## Steg 2: Aritmetiska Operatorer
*Nu ska vi räkna lite matte med koden.*

1. Gör en ny rad och skriv kommentaren: `// Steg 2: Aritmetik`.
2. Deklarera två variabler:
   - `a` med värdet **15**.
   - `b` med värdet **4**.
3. Skapa nya variabler för att räkna ut:
   - `sum` (a plus b).
   - `product` (a gånger b).
4. **Modulo (Resten):** Vi vill veta vad som blir över (resten) om vi delar 15 med 4.
   - Använd `%`-tecknet.
   - Spara resultatet i en variabel som heter `remainder`.
   - Logga resultatet med `console.log`. (Borde bli 3).

---

## Steg 3: Tilldelningsoperatorer
*Att uppdatera värden effektivt.*

1. Gör en ny rad och skriv kommentaren: `// Steg 3: Uppdateringar`.
2. Skapa en variabel `score` och sätt den till **10**. (Måste vara `let`).
3. Du hittar en bonussvamp! Öka `score` med **5** genom att använda `+=`.
4. Du trillar ner i ett hål! 🕳 Minska `score` med **2** genom att använda `-=`.
5. Logga variabeln `score` för att se vad slutpoängen blev.

---

## Steg 4: Slutuppgiften "Biograf-Kassan"
*Här knyter vi ihop allt i ett scenario längst ner i filen.*

1. Skriv kommentaren: `// Steg 4: Biografen`.
2. **Setup:**
   - Deklarera ett fast pris för en biljett: `ticketPrice` = 120.
   - Deklarera en variabel för kassan: `cashRegister` = 0.
3. **Köp:**
   - En kund vill köpa **3 biljetter**.
   - Räkna ut summan (pris * antal) och spara i en variabel som heter `totalCost`.
   - Kunden köper även **popcorn** för 59 kr. Lägg till detta på `totalCost` genom att använda `+=`.
4. **Betalning:**
   - Kunden betalar. Lägg till hela `totalCost` i din `cashRegister` (använd `+=`).
   - Logga ett kvitto: *"Det blir [totalCost] kr. I kassan finns nu: [cashRegister] kr"*.
5. **Scope-testet:**
   - Kunden frågar: *"Vad hade det kostat med VIP-rabatt?"*
   - Skapa ett kodblock med måsvingar `{ }`.
   - **Inuti blocket:**
     - Skapa variabeln `discount` = 20.
     - Räkna ut `vipPrice` (`totalCost` minus `discount`).
     - Logga: *"Med VIP-rabatt: [vipPrice] kr"*.
   - **Utanför blocket:**
     - Försök logga variabeln `discount`.
     - Får du rött streck? Bra! Det bevisar att variabeln stannade i "rummet" (blocket) och inte skräpar ner resten av koden.
     - Kommentera bort den felaktiga raden så koden blir grön igen.

---
