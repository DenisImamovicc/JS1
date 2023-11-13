# DOM Hierarchy

- html
  - body
    - div.container
      - h1
      - h2#greetings
      - hr
      - ul
        - li
          - a#link-1
        - li
          - a
      - hr
      - div.content
        - p
        - p.error
          - strong
        - ul
          - li
          - li
      - div.alert.alert-danger.error
        - span.secret
      - p
      - hr
      - button
      - hr
      - img
    - script

    /**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * STEG 2
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 */