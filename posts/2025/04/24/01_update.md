## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
The Setup has been fixed to correctly set file associations for the Video Player and gmk/gm81/gm82 files.
However, this requires running the setup as Admin. Don't worry, if you don't have Admin access, you just have to manually associate them using the Windows dialog for opening unknown files.

core:
- new functions ds_list_find_first and _last
- new function date_is_easter
- new function envelerp
- the 'undefined' constant now uses a more unique value

audio:
- [Lovey847] fixed ogg decoder producing garbage on right ear

video:
- updated encoder's help document

room:
- saving now enforces 1 newline at the end of gml files
- Ctrl-G no longer activates instance gluer

dx9:
- new function surface_load to load a surface from an image file
```