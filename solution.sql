/* Question LInk of Hackerrank : https://www.hackerrank.com/challenges/weather-observation-station-6/problem?isFullScreen=true
 Question based on : Regular expression (REGEXP)
 MYSQL SYNTAX: column_name REGEXP 'pattern'
Useful Regular Expression Patterns in MySQL
^ - Matches the start of the string.
$ - Matches the end of the string.
. - Matches any single character.
[abc] - Matches any character in the set a, b, or c.
[a-z] - Matches any lowercase letter.
[0-9] - Matches any digit.
* - Matches 0 or more occurrences of the preceding character.
+ - Matches 1 or more occurrences of the preceding character.
{n} - Matches exactly n occurrences of the preceding character.
{n,} - Matches n or more occurrences.
{n,m} - Matches between n and m occurrences.


*/
Solution : Select City from Station where City REGEXP '^[AEIOUaeiou]';

