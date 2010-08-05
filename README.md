# base64 #

This fork of the the base64 library in [express][1].  It's been
modified to support custom alphabets.

## Example ##

    var sys = require('sys'),
        base64 = require('base64');

    sys.puts(base64.encode64('Hello, world.'));

## API ##

**encode64(str)**
Return `str` encoded using a standard base64 alphabet.

**decode64(str)**
Return the standard base64 decoding of `str`.

**urlsafeEncode64(str)**
Like `encode64`, but uses `-_` instead of `+/` to make the result
url-safe.

**urlsafeDecode64(str)**
Like `decode64`, but assumes the encoding uses `-_` instead of `+/`.

[1]: http://github.com/visionmedia/express

