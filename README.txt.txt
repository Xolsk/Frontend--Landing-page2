To run the program open index.html in your most current web browser.
As a JS user I believed this was the most efficient and simple solution.
You will be able to upload any .txt file as required by the challenge.
-------------
Some assumptions I made, that could have been done differently.

1)If the initial coordinates for a rover are out of bounds they default to 0,0. The same goes if they contain unexpected characters.
2)If the .txt line contains irrelevant characters (other than the ones that mean orders for the rover) they are ignored.
3)If the rover goes out of bounds, you will get a message implying that the rover fell off the cliff.
4)Since you say that the rovers move one by one, I decided that if the route of a rover crosses the position of a previous
rover (hence, crashing into it), it will simply stop moving and skip all further orders.

Thanks for the opportunity.
C.