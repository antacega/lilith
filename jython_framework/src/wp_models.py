class Post:
    def __init__(self, data):
        self.id = data.get('id')
        self.title = data.get('title', {}).get('rendered')
        self.content = data.get('content', {}).get('rendered')
        self.status = data.get('status')
        self.link = data.get('link')

    def __repr__(self):
        return "<Post id=%s title='%s' status='%s'>" % (self.id, self.title, self.status)

def parse_posts(json_data):
    if not json_data:
        return []
    return [Post(p) for p in json_data]
