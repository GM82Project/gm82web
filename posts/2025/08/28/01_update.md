## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
New extension: Game Maker 8.2 UI
- create and manage hierarchical user interfaces
- default styler that looks like other gm82 components
- fully customizable appearance and behavior
- rotate, scale and move interface groups
- automatic layout engine that positions and wraps components for you
- fully event-driven input system, with builtin mouse and keyboard support

gm82:
- initial resource tree size is slightly wider
- added some more extension documentation
- ide is now correctly focused when closing the room editor
- fixed external sound player support
- you can no longer use invalid resource names like "con" or "nul"

hub
- added support for dropping projects on hub
- added support for the basic GIT Gui

audio:
- added mp3 support!
- fixed loading of 8bit wavs
- fixed sound being too quiet
- fixed panning formula
- some functions have been renamed for consistency
- new functions audio_load(_buffer)_raw for playing pcm audio
- new function audio_pack_unload
- re-added loop point getters that were removed by mistake

room:
- fixed broken font fields
- added preference to hide description fields
- added clipboard support
- highlight paths when scrolling through them
- shift/ctrl no longer required to delete path points
- resizing a room now correctly repositions any paths in it

core:
- new function angle_mean
- new function code_exists
- new function get_cpu_usage
- new function extension_detect
- new functions path_get_width/height
- new functions pack_bools, unpack_bool
- new functions error_is_enabled, error_set_enabled
- new globalvar current_frame
- code_compile will now catch errors

video:
- improved appearance of player program
- new rav4 format with seeking support
- new function video_seek

buf:
- renamed the base64 functions to fix confusion
- new functions buffer_read/write_variable

dx9:
- saving a g3z model now fixes the decimal separator
    -> this fixes a bug when loading files with comma separators
- fixed 0x0 surfaces and projections causing unrelated math functions to crash

gltf:
- drawing scenes with loads of nodes is much faster when using lighting

test:
- Live Room extension has been finally renamed to Test
- new functions assert, trycatch

mv:
- added support for exporting g3z models
```