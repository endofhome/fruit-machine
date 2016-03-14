#Fruit machine

###About 
We are going to create a virtual fruit machine. To make things easier instead of symbols we are going to use colours: black, white, green, yellow.

Each time a player plays our fruit machine we display four 'slots' each with a randomly selected colour in each slot.

If the colours in each slot are the same then the player wins the jackpot which is all of the money that is currently in the machine.

Implement a basic machine, along with the concept of a player who has a fixed amount of money to play the machine.

####Floats and prizes

We are now going to add a "float" to our fruit machine, this is an initial sum of money that the machine has. In addition we are going to implement a prize system.

If each slot has a different colour then the machine should pay out half the current money in the machine.

If a given play results in two or more adjacent slots containing the same colour then the machine should pay out a prize of 5 times the cost of a single play.

If the machine does not have enought money to pay a prize it should credit the player with a number of free plays equal to the difference between the full prize and the amount of money available. This does not affect a jackpot win.


###Usage

Clone this repo.

At present there is no GUI so run the code via the Node REPL or the Chrome console.

More usage instructions coming soon.


###Tests

Install NodeJS and NPM.

Install the Jasmine module from npm:

``` npm install -g jasmine ```

Tests are written using Jasmine 2.4. 
Once the above dependencies are installed, you can run the tests using the ``` jasmine ``` command from the root directory via the command line.
