## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
gm82:
- updated zlib, smaller and faster png saving

room:
- new plugin system
- color picker now accepts pasting #rrggbb colors
- fixed some issues loading projects with broken resource names
- fixed a division by zero in backgrounds
- fixed a crash when setting range fields manually with parenthesis
- added a new option to skip recentering objects when transforming them
- fixed multiple issues when pressing both mouse buttons
- grid and crosshair are now drawn in all modes
- hold control or shift to set both grid fields at once with the right-click menu
- sorta fixed preferences modal breaking when the window is resized
- fixed weird selection behavior for object change and gigaknife tools
- added a new key N to select the next stacked object when clicking on a stack
- added new keys G to quickly Glue and K to quickly Gigaknife selected instances
- instance fields will no longer affect the room instance, or collide with builtin editor variables

video:
- added new option for output fps
- added Save As button
- encoder now properly gathers information from dropped files
- added new option for interframe interpolation for low-fps videos
    - this allows slow videos to smoothly blend between frames, at the cost of more cpu and memory usage

core:
- [DFelipehDEV] new function lerp_angle
- [TsukiruP] declared a stray variable in draw_sprite_tiled_extra
- string_better is now limited to float64 precision 15 decimal digits
- fixed some docs
- fixed clerp2 when range is backwards
- declared a stray variable in instance_create_moving
- new functions:
    - place_meetings
    - position_meetings
    - instance_places
    - instance_positions
    - instances_place
    - instances_position
    - instance_place_list
    - instance_position_list
    - window_set_dpiaware

sound:
- declared a stray variable in sound_delete

anvil:
- now retains user selection when re-pasting the same type of shader

gltf:
- fixed crash in gltf_destroy
```