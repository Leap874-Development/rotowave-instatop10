from instaloader import Instaloader, Profile

loader = Instaloader()

def get_posts(username):
	profile = Profile.from_username(loader.context, username)
	return profile.get_posts()