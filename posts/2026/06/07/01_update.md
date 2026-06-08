## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
gm82:
- fixed a rare crash when duplicating assets in the resource tree

buffer:
- vastly reduced memory consumption of large buffers

room:
- added a button to clear unused objects from the object palette

core:
- new function datetime_current_filename()

ui:
- implemented minimum and maximum element size constraints

sound:
- extension moved out of deprecation status
- added Johnny documentation
- fixed variable name conflicts with single-letter resources
- new optional argument for sound_get_count() to get a specific sound

joystick:
- fixed crashes when getting out of bounds joystick ids
- rumble is now automatically stopped on game end
```