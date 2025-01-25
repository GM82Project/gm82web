## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
core:
- new functions get_system_region, get_system_language
- new functions draw_self_blend, draw_self_ext
- new function file_create
- new function clerp2
- new functions for dealing with included files
- new function font_add_winui for using font files in like the show_message box
- new functions get_open/save_filename_ext for more control
- new functions string_justify,string_wrap
- new function ds_map_write_ini
- fixed the draw self variations crashing when the instance has no sprite
- fixed the battery level returned when you have no battery
- fixed dumb bug in move_wrap
- fixed the default font being broken when using core
- fixed crash when a string is given to string_better
- string_better now returns up to 16 decimal digits

room:
- fixed errors when misdetecting constants in creation code
- fixed misdetection of xy fields when arrays are used in fields
- fixed a crash in the object replace tool
- fixed test run button when using 'portable' gm82
- fixed unwanted zooming when typing digits
- added a preference for using pre-1.2 mouse controls
- added room centering buttons for instances
- added a new tool 'gigaknife'
- made right click actions more sensical
- merged the object tool buttons

dx9:
- fixed surface_reset when using an appsurf

live:
- added a stub extension that can be swapped to in release builds of your game

video:
- added support for using with the Audio extension
```