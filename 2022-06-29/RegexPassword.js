/*
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.


RESEARCHED ONLINE:
RegEx	Description
^	The password string will start this way
(?=.*[a-z])	The string must contain at least 1 lowercase alphabetical character
(?=.*[A-Z])	The string must contain at least 1 uppercase alphabetical character
(?=.*[0-9])	The string must contain at least 1 numeric character
(?=.*[!@#$%^&*])	The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
(?=.{8,})	The string must be eight characters or longer

Use the word character class. The following is equivalent to a ^[a-zA-Z0-9_]+$:
^\w+$
Explanation:

^ start of string
\w any word character (A-Z, a-z, 0-9, _).
$ end of string
*/
function validate(password) {
    //so all I did was research this one - I need to add this knowledge to my Anki!
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})(^\w+$)/.test(password);
  }