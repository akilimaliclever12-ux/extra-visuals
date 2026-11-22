import functools
import http.server

DIRECTORY = "/Users/cleverakilimali/Downloads/event-studio-prototype"
PORT = 8743

handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)
http.server.ThreadingHTTPServer(("0.0.0.0", PORT), handler).serve_forever()
