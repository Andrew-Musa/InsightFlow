# Data models for backend
from datetime import datetime
from typing import List, Dict

class Comment:
    def __init__(self, user: str, context: str, text: str):
        self.id = None  # Will be set when added
        self.user = user
        self.context = context  # e.g., visualization id or type
        self.text = text
        self.timestamp = datetime.utcnow().isoformat()

comments_store: List[Dict] = []  # Simple in-memory store
comment_id_counter = 1
