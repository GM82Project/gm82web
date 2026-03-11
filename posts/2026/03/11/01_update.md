## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
gm82:
- the included editor's forms now have a different name so OBS can avoid them
- ide no longer prompts a save-after-build if the open file type can't be saved
    -> this includes: .gmd, .gm6, .gmk, and .gb# backups.
- added new documentation artefact for command-line arguments

room:
- fixed text overlap on the status bar when many things are selected

core:
- new function keyboard_get_keyname
- new function room_goto_cancel
    -> advanced! use with care.
- [DFelipehDEV] new functions window_exists, process_exists
- fixed crash in sound_find when using Audio
- fixed bug in direction_to_object when object is self or other
- fixed multiple errors with instance_place_list and similar functions
- removed instance_places and instance_positions
    -> you can just use instances_place and instances_position
- [Verve] made return statements transparent for code compiler
- [Verve] fixed argument_count for nested code_execute calls
- [Verve] fixed code_execute when a room change is scheduled
- [DFelipehDEV] renamed get_cpu_usage to get_frametime_usage
- [DFelipehDEV] made get_cpu_usage return precise hardware statistics

sound:
- made the "sound replaced" error a debug warning instead

audio:
- fixed some stray undeclared variables

dx9:
- new set of surface_backup_ functions
    -> back up all your surfaces to memory without risk of loss
    -> surface backup can be saved and loaded from disk
- new function buffer_write_format_normal with correct w value of 0
- fixed incorrect w value of 1 for vertex buffer position type

ui:
- new function ui_hit_test
- fixed a layout bug when adding a break after a long element
```