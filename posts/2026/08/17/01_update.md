## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
This update focuses on fixing up and upgrading the Room Editor.

New major Room Editor feature release: SMART TILER
- automatic tile selection algorithms tailored to common use cases
- select from a sleuth of templates such as pipes, 9slice, 47tile, etc.
- random, repeating, and variant modes available to mix things up
- easy grid painting with lines, rectangles, and full undo support
- save time and see results immediately when compared to run-time tools

room:
- [Antlion] added grid size hotkeys
- added smart tiler
- added a save button
- added grid offset settings
- added grid override fields
- added adaptive smoothing mode
- added zoom level to statusbar
- added a confirmation for deleting a tile layer
- added a new option to use non-precise sprite collision
- added error checking to reference image loading
- added the ability to center at grid boxes
- added new hotkey "C" for center, moved field highlight to "F"
- added new alternate flip, rotate, and center behavior when holding shift
- fixed path shift with negative offsets
- fixed duping a tile layer sometimes mixing it with an existing layer
- fixed a crash when a project has no backgrounds
- fixed autosave triggering while textfields are active
- fixed certain actions not correctly marking the project as modified
- fixed a crash when adding a path in a field when objects are hidden
- fixed a crash when undoing in the middle of an action
- fixed a missing color reset related to description fields
- fixed depth box not updating when it's changed in the field or on undo
- fixed F1 help information box updating really slowly
- fixed text cursor blinking at different rates
- fixed the shape of the crosshair when outside of the room
- fixed odd offsets when mirroring rotated instances
- cleaned up some error and info messages
- improved grid options on right click menu
- improved responsiveness when using live testing
- the size of the tile panel is now remembered

core:
- version bump v1.6.1 (161)
- added lerproach
- added object_nearest
- added string_token_real
- added datetime_format
- fixed pack_bools
- fixed instance_place_list
- fixed get_open/save_filename_ext
- fixed date_get_timestamp not having seconds
- renamed datetime_current_filename to datetime_get_filename
- renamed date_get_timestamp to datetime_get_readable

sound:
- added sound_get_instance_list
- added ability for sound_set_loop to modify playing instances
- fixed sound_get_frequency
- fixed sound_isplaying
- fixed a lot of typo-related crashes

dx9:
- added ability for surface_load to optionally create a surface to fit
- added an error when surface_to_buffer fails
- fixed surface_get/set not checking surface dimensions for reliability
- cleaned up the documentation a little

hub:
- can now store more than 8 recent projects
- recent files are now sorted by modified date
- fixed a timestamp-related crash

gm82:
- project version bumped to v6 for the new smart tiler
- fields documentation was revised

model viewer:
- fixed a crash when cancelling a file save dialog
- filename extension for exported models is now enforced correctly

test:
- [DFelipehDEV] added debug_log
- debug_log will print to an open gm82con console

anvil:
- the last directly you loaded a shader from is now remembered

UI:
- added full Johhny documentation
```