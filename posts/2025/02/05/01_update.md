## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
setup:
- setup no longer attempts to install a font (it fails anyway)
- setup no longer bundles the visual c redist, has to be downloaded separately
- as a result of the above changes, the setup no longer requires admin provileges

joystick:
- [elpoep] fixed a bunch of documentation errors
- [elpoep] added rumble support

audio:
- [Zasus] error for preloading a sound now displays the sound name
- [Zasus] added loop point getters
- fixed pack creation requiring a backslash at the end of the path
- fixed pack loading crashing if the file doesn't exist
- fixed a mysterious crash that would happen in a project with zero sound resources

core:
- [TsukiruP] new function draw_sprite_tiled_extra
- [TsukiruP] rectangle_in_rectangle now works with flipped rectangles

room:
- right click grid size textfields to pick from common sizes
- added info/warning boxes to each object tool
- added a preference to remove such warning boxes
- fixed cleanup/replace tools only working on the current object rather than the selection
- fixed several actions not updating the object name textfield
- clarified the right click preferences
```