# promptor

---

Simple web based teleprompter

## How to run

### Requirements

To run the code from this repo, you will need to have node.js installed and configured 

### Dependencies 

Simply run 

```npm install```

### Setup

Create a folder called `text` at the root and put all of your `.txt` files inside it

Then run ```npm run web```

### Access 

Go to your server's ip juste like this : `http://<your ip>:3000/`

---

## FAQ

> **How do I change the speed ?**

This feature is not **yet** implemented, for now, you have to change the speed you will have to 
change the value of the `wpm` variable in [text.ejs](https://github.com/vsahler/promptor/blob/main/text.ejs)

---

## TODO

 - Support for more text formatting like word
 - More customisation
 - Speed adjustment 
