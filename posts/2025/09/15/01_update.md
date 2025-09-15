## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
gm82:
- changing a path's room now marks it as modified
- fixed a weird situation where the Alt key would get stuck pressed
- no longer asks to delete old temp folders when invoked for headless --build

room:
- fixed broken menu icons
- better integration with Test extension
- fixed deleting paths not removing them from the path index
- fixed replacing text in selected textfields with character limits

hub:
- added git client preference

model viewer:
- fixed saving both g3d and g3z when picking g3z
- added basic support for loading g3d/g3z
- default texture is now pink checkerboard
- added support for model file association

core:
- fixed a typo in ds_list_add_many
- [Verve] new functions variable_instance_count,variable_instance_get[...]
- new function move_towards_fixed that doesn't jitter on top of the target

dx9:
- d3d_model_load_g3z and d3d_model_create_and_load check if the file exists

buffer:
- buffer_read_hex and buffer_write_hex had their documentation backwards
- [EthGaming101] added CRC32, fixed hash function results

ui:
- default buttons and icons are included
- new function to reload the builtin theme
```