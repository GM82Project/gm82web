## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
room
- fixed hotkeys ignoring active textfields
- significantly optimized selection rectangles

test
 - [DFelipehDEV] new functions to iterate global variables
 - [DFelipehDEV] new benchmark_ functions
 - [DFelipehDEV] new function test_is_stub to detect the stub version
 
 ui
 - fixed hit detection for scaled uis
 - fixed forwarding of mouse held to custom handlers
 - fixed ui_draw treating the optional coordinates as offsets
 
 core
 - [DFelipehDEV] new type-checked dss_ data structure functions
   -> check the type of a safe data structure from its id
   -> recursively destroy nested safe data structures
 - new function move_towards_jump
 - new function range_collision
 - fixed crash when passing a normal dslist to a ds_bag function
 
 directx9
 - new function ds_grid_get_surface
   -> grab color and alpha data in a ds_grid for easy cpu processing of colors
   -> a little slow, but easier to use than the buffer method
   -> ideal for simple effects such as undertale death fade
 - new functions texture_set_stage(_vertex)_ext
 - [Thenadertwo] fixed a crash in surface_backup_discard
 - fixed a problem making d3d_project_vertex hard to use
 - fixed a bug in argb_get_color
```