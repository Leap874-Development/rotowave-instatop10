from flask import Flask, render_template, request
from instaloader import Instaloader, Profile, exceptions

import json

app = Flask(__name__)

with open('config.json', 'r') as f:
    config = json.load(f)

def get_posts(username):
    loader = Instaloader()
    profile = Profile.from_username(loader.context, username)
    posts = profile.get_posts()

    return [ {
        'likes': a.likes,
        'url': a.url,
        'is_video': a.is_video,
        'caption': a.caption,
    } for a in posts ], profile

@app.route('/')
def index():
    return render_template('index.html', **config)

@app.route('/posts', methods=['POST'])
def posts():
    try:
        user = request.form['user']
        posts, prof = get_posts(user)

        if prof.is_private:
            return json.dumps({
                'error': 'private'
            })
        return json.dumps({
            'error': False,
            'user': user,
            'data': posts
        })
    except exceptions.ProfileNotExistsException:
        return json.dumps({'error': 'does not exist'})
    except Exception as e:
        return json.dumps({'error': str(e)})

app.run(host=config['ip'], port=config['port'], debug=config['debug_mode'])
