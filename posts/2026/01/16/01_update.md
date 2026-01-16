## Setup Update

We have a new update ready for download. You can get the new version in the Downloads tab.

```
In this version we've updated most of the extensions and demos to use Buffer instead of Network.

Additionally, a very old GM collision bug introduced in 2007 has been fixed:
Instances with zero-scale caused the runner to quickly skip frames until it crashed.
Now, they properly do not generate collision events.

gm82:
- fixed dnd action "target" changes not saving
- default save format has been changed to gm82
- a new help document referencing the command-line arguments has been added

hub:
- recent panel has been given a maximum width of 450 pixels
- [DFelipehDev] projects without a cache no longer display as last cleaned in 1899

room:
- fixed insta-crash on linux
- Sprite() no longer pulls from nonexisting frames leftover on disk
- fixed gigaknife creating zero-width instances
- added number of selected instances and tiles to the status bar
- fixed two crashes related to the instance-list
- fixed field strings not displaying # characters correctly

core:
- [DFelipehDev] collision_check_fast got an optional radius parameter
- [nkrapivin] new function string_replace_many
- new function message_default() to set the old "black boxes of death" styling
- improved default behavior of string_wrap with punctuation
- added optional breakable character list to string_wrap
- renamed draw_set1 to draw_setb(lend)
- renamed draw_set2 to draw_seta(lign)
- new function draw_setf(ont)
- new function unclerp() for clamped unlerp
- new function ds_bag_quick()
- new function string_truncate()

dx9:
- new function d3d_model_bundle_save_buffer()
- new function surface_get_count()
- new function surface_free_all()
```