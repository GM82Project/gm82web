## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
This update fixes some very old bugs, and resolves some common UI grievances
with the IDE and Room Editor.

gm82:
- added a new field that tracks the total amount of time spent in a project
  -> can be found in Game Settings and is saved to the hub metafile in the cache
- added a checkbox to revert the DPI scaling change from last update
- added alt-0 and shift-alt-0 to expand and collapse the resource tree
- added shift-esc to close all windows
- fixed an old bug where the child object menu appeared misplaced
- search results in object actions will now open to the exact places
- reworked the Add Event window to move up some commonly used submenu events

hub:
- made the project timestamps easier to read
- added a new field for the time spent in a project

room:
- WE ADDED PATH UNDO
- I REPEAT WE ADDED PATH UNDO
- added the ability to undo room resizes and shifts
- added a checkbox to revert the eyedropper behavior from last update
- added the ability to move selected path points with the mouse
- added arrows from instance path fields to the paths in the room
- added the ability to select path points without moving them
- added pressing N to select the nearest path point
- fixed uninteractable tile panel textfields
- fixed crash when pressing f to display field handles
- fixed alignment of path inspector panel
- paths added from the room editor are now placed in a subfolder

dx9:
- fixed consistent floating point exceptions at game start in specific pcs
- made each function that produces a 3d-vector return the x coordinate
  -> this allows you to inline them in function calls.
- made the postdraw script receive the application surface as argument[0]

joystick:
- added option to fire legacy object joystick events

core:
- new function path_get_nearest
```