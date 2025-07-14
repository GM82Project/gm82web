## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
GitHub has recently retired the Windows Server 2019 CI images. This means that we are
no longer able to automate the ancient versions of Microsoft's Build Tools that were
required for building Windows XP-compatible binaries of our extensions.

Note that this problem only affects compiled games utilising the 8.2 extensions; the IDE
has never been able to start on XP, and games that do not use any extensions continue
to run without any problems.

Therefore, we are sunsetting support for Windows XP and Vista. We will continue to
actively support Windows 7 and newer versions.

gm82:
- fixed silent crash when loading invalid sprite assets
- added an option to use the system media player for testing sounds
- added an option to autosave the project after building/testing
- added an option to create 8.1-compatible exes which are compatible with
  tools designed for 8.1

website:
- added a faq section

audio:
- added an audio instance iterator

room:
- fixed fields with comments being skewered
- fixed visual issues with the creation code field
- added new depth field
- path keys now repeat
- room size is now a grid preset
- it is now possible to name new paths when creating them
- fonts are now loaded on demand, massively speeding up loading of
  projects with a large amount of fonts
- added parity for removing instances outside the room on close

anvil:
- better autodetection of ps3 shaders when they use VPOS semantics

core:
- new function window_set_fixed()
- more explicitly blocks game_restart()
- new function file_text_writelf()
- new function tile_add_ext()
- new constant vk_menu for that right click key next to right ctrl

dx9:
- extension now fully initializes dx9 lighting data for shaders

video:
- slightly improved user interface
```