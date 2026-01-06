import base64
import json
from java.net import URL, HttpURLConnection
from java.io import BufferedReader, InputStreamReader, OutputStreamWriter
from java.nio.charset import StandardCharsets
import config

class WPClient:
    def __init__(self, base_url, username, password):
        self.base_url = base_url
        self.username = username
        self.password = password
        self.auth_header = self._get_auth_header()

    def _get_auth_header(self):
        creds = "%s:%s" % (self.username, self.password)
        encoded = base64.b64encode(creds.encode('utf-8'))
        return "Basic " + encoded

    def _make_request(self, endpoint, method="GET", data=None):
        url_str = self.base_url + "/wp-json/wp/v2/" + endpoint
        url = URL(url_str)
        conn = url.openConnection()
        conn.setRequestMethod(method)
        conn.setRequestProperty("Authorization", self.auth_header)
        conn.setRequestProperty("Content-Type", "application/json")
        conn.setRequestProperty("User-Agent", "JPressCore-Jython-Agent")
        conn.setConnectTimeout(config.TIMEOUT)
        conn.setReadTimeout(config.TIMEOUT)

        if data and method in ["POST", "PUT"]:
            conn.setDoOutput(True)
            writer = OutputStreamWriter(conn.getOutputStream(), StandardCharsets.UTF_8)
            writer.write(json.dumps(data))
            writer.flush()
            writer.close()

        status = conn.getResponseCode()

        if status >= 200 and status < 300:
            reader = BufferedReader(InputStreamReader(conn.getInputStream(), StandardCharsets.UTF_8))
            response = StringBuilder()
            line = reader.readLine()
            while line is not None:
                response.append(line)
                line = reader.readLine()
            reader.close()
            return json.loads(response.toString())
        else:
            # Simple error handling
            print("Error: " + str(status))
            try:
                reader = BufferedReader(InputStreamReader(conn.getErrorStream(), StandardCharsets.UTF_8))
                response = StringBuilder()
                line = reader.readLine()
                while line is not None:
                    response.append(line)
                    line = reader.readLine()
                reader.close()
                print("Details: " + response.toString())
            except:
                pass
            return None

    def get_posts(self):
        return self._make_request("posts")

    def create_post(self, title, content, status="draft"):
        data = {
            "title": title,
            "content": content,
            "status": status
        }
        return self._make_request("posts", "POST", data)

# Jython helper class for StringBuilder to look like Java's
from java.lang import StringBuilder
