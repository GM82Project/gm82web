## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
Starting with this update, you will notice that large games no longer spend quite a while between when the loading bar hides, and when the game actually pops up. This is because Floogle researched what was taking so long, and replaced horribly unoptimized code in the game runner.

When the game starts, the runner builds a list of all collision events between objects. This process is O(n^2), which means that for a large game like MKF with 5000 objects, it performs 25.000.000 comparisons, which can hog the fastest modern cpus for upwards of 20 seconds. Moreover, these checks were repeated every time a new event was added to an object at runtime, which made its use as a modding API impractical.

Now, Game Maker 8.2 will pre-compile collision lists when building an exe. This causes newly compiled games to finish their loading process effectively instantly. As a bonus, adding events that aren't collisions is now relatively instant as well.

Additionally, due to the release of an 8.2 port of the real GMLive extension by community legend YellowAfterlife, 8.2 Live has been renamed to 8.2 Live Room and its nonfunctional Rust-based code reloader has been deleted. This restores Windows XP compatibility for the extension. Projects that used Live need to be fixed to use the new Live Room function names, and the old Live and Live Stub extensions will no longer be bundled with the setup.

Unrelated to that, the documentation bundled with the installer has been updated.

gm82:
- redid the extension dialog to fit longer extension names and descriptions

core:
- new function unpick()
- new function game_get_state()

video:
- fixed problems with surface mixups

dx9:
- made surface shim stronger against id collisions

room:
- the hotbar is gone, replaced by a 'favorite' system using the digit keys.
- drawing a lot of grid cells is now considerably faster.
- new tool for dividing the room grid into larger, view-sized blocks for level planning.
```