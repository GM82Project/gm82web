## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
setup:
- added option to install the Extension and Library Makers

room:
- new Instance List panel!
    -> easily find and select instances in large rooms
    -> allows you to reorder instances within the same depth grouping
- pointing at instances will now focus the smallest instance
    -> this helps select smaller instances placed behind big ones
    -> clicking already did this, but pointing has been updated to reflect it
- massively optimized fps when editing a room with a large instance count
    -> this is 100% related to the change above this one
- it is now again possible to change the sprite of an instance thru preview fields
    -> when disabling preview fields, the sprite is reset to the object's default
- added object property getters for preview fields
    -> GM's builtin object_get_ functions will return useful values
    -> object name is passed as a string, like the other field functions
- multiline textfields now correctly break lines
- textfields in general are more stable, especially when the editor is laggy
- the textfields in the color picker are less jank and in-line with the others
- fixed some small visual bugs and typos
- fixed a crash when setting a background's scale to zero
- fixed weird spacing inconsistencies when selecting enum fields
- fixed usage of constants in enum and value fields
- fixed usage of commas in enum strings

core:
- default GM message boxes are now styled to match GM 8.2
- fixed a typo

video:
- removed a debug message from the encoder program
```