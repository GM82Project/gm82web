## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
This update fixes an important bug where the Room Editor would delete some tiles
when loading a room.

gm82:
- ide is now dpi-aware to fix some scaling issues with very high zoom levels
- Johnny Panel: fixed messed up formatting for functions with lots of arguments

room:
- added a new plugin: Tile to Block by Ubersaw Medic
- added a new "int/integer" type field
- added the ability to edit tile uv coordinates
- made the autotiler templates less blurry
- hold the "F" field key to highlight path names and path points in path mode
- bugged 0x0 tiles are now resized on load to make them visible again
- tiles and objects are now automatically eyedropper'd when clicked normally
- fixed autotiler corrupting the first tile of every tileset on room load
- fixed tile panel looking a bit wonky
- fixed autotiler brush being weird with grid offsets larger than half a cell
- fixed occasional reordering of grid fields in the room.txt file
- fixed a problem with the icon caches becoming stale or broken
- fixed a potential crash with the mouse click priority sorting
- fixed a crash when cancelling the color picker
- fixed a crash when resizing the reference image
- fixed a crash when a project has no objects
- fixed some ui alignment problems and mistakes
- fixed initial selected tileset not being the first on the list
- fixed instance rotate handles jumping between two spots on centered sprites

audio:
- restored old buffer size as we received reports it was less broken before

dx9:
- added comprehensive error checking to all shader create functions
- fixed a surface mixup bug in surface_resize
- fixed surface_reset not applying the view projection when using an app surf

sound:
- added a fatal error when combined with the Audio extension
```