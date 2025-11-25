## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
gm82:
- fixed an access violation when games use custom resolutions
- loading a gmspr file will now correctly populate sprite properties
- fixed a crash caused by pushing a primitive with no vertices on AMD

setup:
- documentation is now installed to the program directory
- re-added the Network extension in legacy support mode

hub:
- [DFelipehDEV] double click on recent project to open it for editing
- holding Ctrl while clicking a project action button will now also close Hub

room:
- autosaves are delayed for as long as a field ui is open
- added a question to allow attempting to paste across different projects

core:
- [DFelipehDEV] new function ds_map_write_ini_string
- [DFelipehDEV] new ds_list function-set based on GMLv2 arrays
- new function window_set_close_enabled
- string_wrap no longer justifies the last line of a paragraph
- fixed a bug in ds_map_write_ini when using multiple sections

dx9:
- new Bundle model format
    - Combines multiple d3d models and textures into one convenient file format
    - Bundles can be created in code, or with the Model Viewer
    - Support is currently very basic, can be expanded in the future

ui:
- made layout debug markings a toggleable settings flag instead of "hold f8"

sound:
- updated to Buffer to further allow us to deprecate the old Network extension

network:
- extension moved to DEPRECATED non-support; please use Buffer moving forward
- added fatal error when trying to combine Buffer and Network
```