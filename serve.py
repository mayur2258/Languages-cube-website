import http.server
import socketserver
import os

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

PORT = 8000
Handler = NoCacheHTTPRequestHandler

# Ensure server starts inside the correct workspace directory
os.chdir('/Users/mayuralaspure/D Drive/Projects/Languages Cube/Languages Cube Website')

socketserver.TCPServer.allow_reuse_address = True
try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving on http://localhost:{PORT} with caching disabled...")
        httpd.serve_forever()
except Exception as e:
    print(f"Error starting server: {e}")
