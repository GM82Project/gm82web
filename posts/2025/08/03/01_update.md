## Setup updated

We have a new update ready for download. You can get the new version in the Downloads tab.

```
The Network extension has received a lot of refactoring, and as such, we've decided to
rename it to the Buffer extension. Additionally, most GM82 extensions have been converted
to use Buffer instead of Network, with the notable exception of DirectX8 and Sound due
to their legacy support status.


changes between the Network extension and the new Buffer extension:

- http request support has been completely removed
- buffer_to_string and buffer_get_address_string were removed
- buffer_write_uint, write_int, read_uint and read_int were removed
- buffer_get_address lost its pointer type argument
- buffer_create now accepts an optional filename argument
- loading a buffer from a file now resets the caret position to the start
- md5 and sha1 functions are now stateless; they immediately return the result
- listeningsocket_is_listening was renamed to listener_is_active
- listeningsocket_start_listening was renamed to listener_start
- other listeningsocket_ functions have been renamed to listener_ functions
- socket state constants were renamed
- socket_shut_down was renamed to socket_close
- socket_get_read_data_length was renamed to socket_get_receiving_size
- socket_get_write_data_length was renamed to socket_get_sending_size
- socket_update_read was renamed to socket_receive
- socket_update_write was renamed to socket_send
- some function help signatures were cleaned up
- full johnny panel documentation is available for Buffer


Additionally, this update contains the following changes:

gm82:
- the Johnny Panel has received some aesthetic styling

dx9:
- the d3dx9_43 dependency is now included with the extension, so you don't need to
  download the june 2010 directx installer anymore

room:
- [Lovey01] fixed a crash when interacting with unset Font fields in preview fields
```