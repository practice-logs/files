///////////////////////////////////////////////////////////
// =========================================================
// SPIDER COMMAND REGISTRY
// =========================================================
//
// ui/command-registry.js
//
// RESPONSIBILITY:
// - Store the commands available to SPIDER
// - Organize commands by control type
// - Provide command metadata to command-selector.js
//
// DOES NOT:
// - Execute commands
// - Route commands
// - Use Firebase
// - Use Local Command
// - Use Windows
// - Modify the input box
//
// =========================================================


// =========================================================
// COMMAND REGISTRY
// =========================================================
//
// IMPORTANT:
// syntax must match the syntax understood by the
// corresponding existing parser.
//
// =========================================================

const COMMANDS = [

    // =====================================================
    // GENERAL
    // =====================================================

    {
        controlType: "General",
        name: "General",
        description: "Use SPIDER's intelligent general command routing.",
        syntax: ""
    },


    // =====================================================
    // RESEARCH
    // =====================================================

    {
        controlType: "Research",
        name: "Research",
        description: "Perform a research request.",
        syntax: ""
    },


    // =====================================================
    // MEMORY
    // =====================================================

    {
        controlType: "Memory",
        name: "Remember",
        description: "Save something to memory.",
        syntax: "r:"
    },

    {
        controlType: "Memory",
        name: "Ask",
        description: "Ask something from memory.",
        syntax: "a:"
    },

    {
        controlType: "Memory",
        name: "List",
        description: "List saved memories.",
        syntax: "l:"
    },

    {
        controlType: "Memory",
        name: "Count",
        description: "Count saved memories.",
        syntax: "c:"
    },

    {
        controlType: "Memory",
        name: "Clear",
        description: "Clear saved memories.",
        syntax: "clear memory"
    },


    // =====================================================
    // INSTAGRAM
    // =====================================================
    //
    // Instagram commands should be added here using the
    // EXACT syntax supported by the existing Instagram
    // command parser.
    //
    // =====================================================


      {
        controlType: "Instagram",
        name: "Send Message",
        description: "Send a direct message to an Instagram user.",
        syntax: "send "
    },

    {
        controlType: "Instagram",
        name: "Close Instagram",
        description: "Close the Instagram browser.",
        syntax: "close instagram"
    },


    // =====================================================
    // WHATSAPP
    // =====================================================
    //
    // WhatsApp commands should be added here using the
    // EXACT syntax supported by the existing WhatsApp
    // command parser.
    //
    // =====================================================


    // =====================================================
    // BROWSER
    // =====================================================


    // =====================================================
    // FILES
    // =====================================================


    // =====================================================
    // WINDOWS
    // =====================================================

     {
        controlType: "Windows",
        name: "Open Application",
        description: "Open a Windows application.",
        syntax: "open "
    },

    {
        controlType: "Windows",
        name: "Close Application",
        description: "Close a Windows application.",
        syntax: "close "
    },


    // =====================================================
    // SYSTEM
    // =====================================================
    



    // TASK
    {
    controlType: "Task",
    name: "Add Task",
    description: "Add a new task.",
    syntax: "add task "
},

{
    controlType: "Task",
    name: "Show Tasks",
    description: "Show all saved tasks.",
    syntax: "show tasks"
},

{
    controlType: "Task",
    name: "Complete Task",
    description: "Mark a task as completed.",
    syntax: "done "
},

{
    controlType: "Task",
    name: "Delete Task",
    description: "Delete a task by its number.",
    syntax: "delete task "
},

{
    controlType: "Task",
    name: "Clear Tasks",
    description: "Clear all saved tasks.",
    syntax: "clear tasks"
},



//  TIMER

{
    controlType: "Timer",
    name: "Set Reminder",
    description: "Set a reminder for a specific time or duration.",
    syntax: "remind me "
},

{
    controlType: "Timer",
    name: "Set Timer",
    description: "Set a countdown timer.",
    syntax: "timer "
},

// WEB

{
    controlType: "Web",
    name: "Open Site",
    description: "Open a website or saved site.",
    syntax: "open "
},

{
    controlType: "Web",
    name: "Launch Site",
    description: "Launch a website or saved site.",
    syntax: "launch "
},

{
    controlType: "Web",
    name: "Go To Site",
    description: "Navigate to a website or saved site.",
    syntax: "go to "
},

{
    controlType: "Web",
    name: "Google Search",
    description: "Search Google for information.",
    syntax: "search "
},

{
    controlType: "Web",
    name: "Google Search",
    description: "Search Google for information.",
    syntax: "google "
},

{
    controlType: "Web",
    name: "Look Up",
    description: "Look up information on Google.",
    syntax: "look up "
},

{
    controlType: "Web",
    name: "YouTube Search",
    description: "Search YouTube for a video.",
    syntax: "youtube "
},

{
    controlType: "Web",
    name: "Play YouTube",
    description: "Search YouTube for a video to play.",
    syntax: "play "
},


// TOOLS

{
    controlType: "Tools",
    name: "Convert Units",
    description: "Convert a value from one unit to another.",
    syntax: "convert "
},

{
    controlType: "Tools",
    name: "Flip Coin",
    description: "Flip a coin and return heads or tails.",
    syntax: "flip coin"
},

{
    controlType: "Tools",
    name: "Roll Dice",
    description: "Roll a six-sided die.",
    syntax: "roll dice"
},

{
    controlType: "Tools",
    name: "Random Number",
    description: "Generate a random number within a range.",
    syntax: "random "
},

{
    controlType: "Tools",
    name: "Generate Password",
    description: "Generate a secure random password.",
    syntax: "password"
},

{
    controlType: "Tools",
    name: "Tell Joke",
    description: "Tell a random joke.",
    syntax: "joke"
},

{
    controlType: "Tools",
    name: "Tell Joke",
    description: "Tell a funny joke.",
    syntax: "funny"
},

// SYSTEM

{
    controlType: "System",
    name: "System Status",
    description: "Show system information and diagnostic status.",
    syntax: "system"
},

{
    controlType: "System",
    name: "System Status",
    description: "Show system information and diagnostic status.",
    syntax: "status"
},

{
    controlType: "System",
    name: "System Diagnostic",
    description: "Run a system diagnostic and show system information.",
    syntax: "diagnostic"
},

{
    controlType: "System",
    name: "Change Theme",
    description: "Change the SPIDER interface theme.",
    syntax: "theme "
},

{
    controlType: "System",
    name: "Clear Chat",
    description: "Clear the SPIDER chat console.",
    syntax: "clear chat"
},

{
    controlType: "System",
    name: "Clear Chat",
    description: "Clear the SPIDER chat console.",
    syntax: "cls"
},

{
    controlType: "System",
    name: "Voice Off",
    description: "Disable voice replies.",
    syntax: "voice off"
},

{
    controlType: "System",
    name: "Mute Voice",
    description: "Disable voice replies.",
    syntax: "mute"
},

{
    controlType: "System",
    name: "Voice On",
    description: "Enable voice replies.",
    syntax: "voice on"
},

{
    controlType: "System",
    name: "Unmute Voice",
    description: "Enable voice replies.",
    syntax: "unmute"
},
// NOTE

{
    controlType: "Note",
    name: "Add Note",
    description: "Save a new note.",
    syntax: "note "
},

{
    controlType: "Note",
    name: "Remember",
    description: "Save information as a note.",
    syntax: "remember "
},

{
    controlType: "Note",
    name: "Show Notes",
    description: "Show all saved notes.",
    syntax: "show notes"
},

{
    controlType: "Note",
    name: "List Notes",
    description: "List all saved notes.",
    syntax: "list notes"
},

{
    controlType: "Note",
    name: "Clear Notes",
    description: "Delete all saved notes.",
    syntax: "clear notes"
},

  

    // =====================================================
    // MOBILE
    // =====================================================
    //
    // Mobile commands are sent to the selected Android
    // Spider device through the Mobile command handler.
    //
    // Syntax must match parsers/mobile.js
    //
    // =====================================================

    {
        controlType: "Mobile",
        name: "Screen On",
        description: "Turn the mobile screen on.",
        syntax: "screen on"
    },

    {
        controlType: "Mobile",
        name: "Screen Off",
        description: "Turn the mobile screen off.",
        syntax: "screen off"
    },

    {
        controlType: "Mobile",
        name: "Set Brightness",
        description: "Set mobile screen brightness.",
        syntax: "set brightness "
    },

    {
        controlType: "Mobile",
        name: "Auto Brightness",
        description: "Enable automatic screen brightness.",
        syntax: "auto brightness"
    },

    {
        controlType: "Mobile",
        name: "Device Active",
        description: "Check whether the mobile device is active.",
        syntax: "is device active"
    },

    {
        controlType: "Mobile",
        name: "Silent Mode",
        description: "Set the mobile to silent mode.",
        syntax: "silent mode"
    },

    {
        controlType: "Mobile",
        name: "Vibrate Mode",
        description: "Set the mobile to vibrate mode.",
        syntax: "vibrate mode"
    },

    {
        controlType: "Mobile",
        name: "Normal Mode",
        description: "Set the mobile to normal sound mode.",
        syntax: "normal mode"
    },

    {
        controlType: "Mobile",
        name: "Do Not Disturb",
        description: "Enable Do Not Disturb mode.",
        syntax: "do not disturb"
    },

    {
        controlType: "Mobile",
        name: "Set Media Volume",
        description: "Set the media volume.",
        syntax: "set media volume "
    },

    {
        controlType: "Mobile",
        name: "Set Alarm Volume",
        description: "Set the alarm volume.",
        syntax: "set alarm volume "
    },

    {
        controlType: "Mobile",
        name: "Set Ring Volume",
        description: "Set the ringtone volume.",
        syntax: "set ring volume "
    },

    {
        controlType: "Mobile",
        name: "Set Notification Volume",
        description: "Set notification volume.",
        syntax: "set notification volume "
    },

    {
        controlType: "Mobile",
        name: "Set Call Volume",
        description: "Set call volume.",
        syntax: "set call volume "
    },

    {
        controlType: "Mobile",
        name: "Set Volume",
        description: "Set the mobile volume.",
        syntax: "set volume "
    },

    {
        controlType: "Mobile",
        name: "Vibrate",
        description: "Make the mobile vibrate.",
        syntax: "vibrate"
    },

    {
        controlType: "Mobile",
        name: "Ring",
        description: "Make the mobile ring.",
        syntax: "ring"
    },

    {
        controlType: "Mobile",
        name: "Stop Ring",
        description: "Stop the mobile ringtone.",
        syntax: "stop ring"
    },

    {
        controlType: "Mobile",
        name: "Stop URL",
        description: "Stop currently playing URL media.",
        syntax: "stop url"
    },

    {
        controlType: "Mobile",
        name: "Play URL",
        description: "Play media from a URL.",
        syntax: "play url "
    },

    {
        controlType: "Mobile",
        name: "Play Sound",
        description: "Play a sound on the mobile.",
        syntax: "play sound"
    },

    {
        controlType: "Mobile",
        name: "Speak Text",
        description: "Make the mobile speak text.",
        syntax: "speak "
    },

    {
        controlType: "Mobile",
        name: "Torch On",
        description: "Turn the mobile flashlight on.",
        syntax: "torch on"
    },

    {
        controlType: "Mobile",
        name: "Torch Off",
        description: "Turn the mobile flashlight off.",
        syntax: "torch off"
    },

    {
        controlType: "Mobile",
        name: "Toast",
        description: "Show a toast message on the mobile.",
        syntax: "toast "
    },

    {
        controlType: "Mobile",
        name: "Notification",
        description: "Show a notification on the mobile.",
        syntax: "notify "
    },

    {
        controlType: "Mobile",
        name: "Open Link",
        description: "Open a web link on the mobile.",
        syntax: "open link "
    },

    {
        controlType: "Mobile",
        name: "Open URL",
        description: "Open a URL on the mobile.",
        syntax: "open url "
    },

    {
        controlType: "Mobile",
        name: "Open App",
        description: "Open an application on the mobile.",
        syntax: "open app "
    },

    {
        controlType: "Mobile",
        name: "Lock Device",
        description: "Lock the mobile device.",
        syntax: "lockDevice"
    },

    {
        controlType: "Mobile",
        name: "Disable Camera",
        description: "Disable the mobile camera.",
        syntax: "disableCamera"
    },

    {
        controlType: "Mobile",
        name: "Hide App",
        description: "Hide an application on the mobile.",
        syntax: "hide app "
    },

    {
        controlType: "Mobile",
        name: "Unhide App",
        description: "Unhide an application on the mobile.",
        syntax: "unhide app "
    },

    {
        controlType: "Mobile",
        name: "Set Dial Code",
        description: "Set the mobile dial code.",
        syntax: "set dial code "
    },

    {
        controlType: "Mobile",
        name: "Mobile Status",
        description: "Get the mobile device status.",
        syntax: "status"
    },

    {
        controlType: "Mobile",
        name: "Call Number",
        description: "Call a phone number from the mobile.",
        syntax: "call "
    },

    {
        controlType: "Mobile",
        name: "Answer Call",
        description: "Answer an incoming call.",
        syntax: "answer call"
    },

    {
        controlType: "Mobile",
        name: "End Call",
        description: "End the current phone call.",
        syntax: "end call"
    },

    {
        controlType: "Mobile",
        name: "Call Active",
        description: "Check whether a call is active.",
        syntax: "is call active"
    },

    {
        controlType: "Mobile",
        name: "Network Info",
        description: "Get mobile network information.",
        syntax: "network info"
    },

    {
        controlType: "Mobile",
        name: "Current App",
        description: "Get the currently active application.",
        syntax: "current app"
    },

    {
        controlType: "Mobile",
        name: "Screenshot",
        description: "Take a screenshot of the mobile.",
        syntax: "screenshot"
    },

    {
        controlType: "Mobile",
        name: "WiFi On",
        description: "Turn mobile WiFi on.",
        syntax: "wifi on"
    },

    {
        controlType: "Mobile",
        name: "WiFi Off",
        description: "Turn mobile WiFi off.",
        syntax: "wifi off"
    },

    {
        controlType: "Mobile",
        name: "WiFi Status",
        description: "Get mobile WiFi status.",
        syntax: "wifi status"
    },

    {
        controlType: "Mobile",
        name: "Get All Numbers",
        description: "Get all available phone numbers.",
        syntax: "get all numbers"
    },

    {
        controlType: "Mobile",
        name: "Portrait",
        description: "Set mobile orientation to portrait.",
        syntax: "portrait"
    },

    {
        controlType: "Mobile",
        name: "Landscape",
        description: "Set mobile orientation to landscape.",
        syntax: "landscape"
    },

    {
        controlType: "Mobile",
        name: "Auto Rotate",
        description: "Enable automatic mobile rotation.",
        syntax: "auto rotate"
    },

    {
        controlType: "Mobile",
        name: "Get Last Seen",
        description: "Get the mobile device last-seen information.",
        syntax: "get last seen"
    },


];


// =========================================================
// NORMALIZE
// =========================================================

function normalize(value) {

    return String(value ?? "")
        .trim()
        .toLowerCase();

}


// =========================================================
// GET ALL COMMANDS
// =========================================================

export function getCommands() {

    return [...COMMANDS];

}


// =========================================================
// GET COMMANDS BY CONTROL TYPE
// =========================================================

export function getCommandsByControlType(controlType) {

    const normalized = normalize(controlType);

    if (!normalized) {
        return getCommands();
    }

    return COMMANDS.filter(
        command =>
            normalize(command.controlType) === normalized
    );

}


// =========================================================
// FIND COMMAND
// =========================================================

export function findCommand(name, controlType = null) {

    const normalizedName = normalize(name);

    const commands = controlType
        ? getCommandsByControlType(controlType)
        : COMMANDS;

    return commands.find(
        command =>
            normalize(command.name) === normalizedName
    ) || null;

}


// =========================================================
// DEFAULT EXPORT
// =========================================================

export default {
    getCommands,
    getCommandsByControlType,
    findCommand
};