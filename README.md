# File Overview

- `webapp.py` main webapp code, RUN THIS!
- `instagram.py` code that interacts with instagram
- `config.json` configuration file
- `requirements.txt` python3.7 requirements

- `templates/index.html` source HTML code for website

- `static/` content for the website
- `static/css/` css stylesheets
- `static/js/` javascript code
- `static/img/` image files

- `venv/` virtualenv folder (usage optional)

# Setup
To open a command prompt (windows), hold shift and right click in
root folder (where this file is), press open command window here

Once in a command prompt (windows or linux), run the following
command to install requirements...

```
python -m pip install -r requirements.txt
```

# To Run
Open a command prompt in this folder, then run the following
command...

```
python webapp.py
```

# Extra Info
Unless you really know what you're doing, the ip setting in
config doesn't need changing. Nor does debug mode (it is unsafe
to leave this as TRUE). The default port for all webapps is 80,
but this requires administrator privileges to run (google how to
open an admin console).

The 'name' variable and all the 'something_text' variables are just
strings used in the rendering of the website. Feel free to change
the wording as you please.

If you ran the app on your PC on port 8080, you would browse to
http://localhost:8080/ to see the application. To make it public
you will need port forwarding.

Python stuff: the app is written for 3.7, but any version 3+ will
probably be fine. You will need to install python from the python
website (https://www.python.org/) for your system. You may also need 
to use the command 'python3' or 'python3.7' instead of just 'python'
depending on the details of your installation.