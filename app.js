const notes = require("./notes");
const yargs = require("yargs");

//Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
    command: "add",
    describe: "Adding a note",
    builder : {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body : {
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

//Create remove command
yargs.command({
    command: "remove",
    describe: "Removing a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);       
    }
});

//Create list command
yargs.command({
    command: "list",
    describe: "Listing notes",
    handler() {
        notes.listNotes();     
    }
});

//Create read command
yargs.command({
    command: "read",
    describe: "Reading notes",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title); 
    }
});

yargs.parse();



