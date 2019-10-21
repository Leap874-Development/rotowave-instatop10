var help, loader, posts, button, user;

function show_loading() {
	$(help).hide()
	$(loader).show()
	$(posts).hide()
}

function show_error() {
	$(help).text(ERROR_TEXT)
	$(help).removeClass('alert-info alert-warning alert-danger')
	$(help).addClass('alert-danger')

	$(help).show()
	$(loader).hide()
	$(posts).hide()
}

function show_private() {
	$(help).text(PRIVATE_TEXT)
	$(help).removeClass('alert-info alert-warning alert-danger')
	$(help).addClass('alert-warning')

	$(help).show()
	$(loader).hide()
	$(posts).hide()
}

function show_not_found() {
	$(help).text(NOT_FOUND_TEXT)
	$(help).removeClass('alert-info alert-warning alert-danger')
	$(help).addClass('alert-danger')

	$(help).show()
	$(loader).hide()
	$(posts).hide()
}

function show_help() {
	$(help).text(HELP_TEXT)
	$(help).removeClass('alert-info alert-warning alert-danger')
	$(help).addClass('alert-info')

	$(help).show()
	$(loader).hide()
	$(posts).hide()
}

function get_posts() {
	$(button).blur()
    $(user).blur()

    if (!$(user).val()) {
        show_help()
        return
    }

	show_loading()

	$.ajax({
		url: POST_SITE,
		method: 'post',
		dataType: 'json',
		data: {'user': $(user).val()},
		success: (data) => {
			if (data.error == 'does not exist') {
				show_not_found()
            } else if (data.error == 'private') {
                show_private()
            } else if (data.error) {
                show_error()
            }  else {
				$(help).hide()
				$(loader).hide()

				postsData = data['data'].sort((a, b) => {
					if (a.likes > b.likes) return -1
					else if (a.likes < b.likes) return 1
					else return 0
				}).slice(0, 100);

				$(posts).empty()
				$(posts).show()

				postsData.forEach((p) => {
					$(posts).append(`
					<div class="card" style="width: 200px; display: inline-block">
						<img class="card-img-top post" src="${p.url}">
		
						<div class="card-img-overlay">
							<div style="background-color: #ffffffaf; padding: 5px; border-radius: 5px; display: inline-block">
								<img class="inline" src="${HEART_ICON}" height="15px"></img>
								<p class="card-text inline"><strong>${p.likes}</strong></p>
							</div>
						</div>
					</div>
					`)
				})

				// $(posts).text(data['data'])
			}
		}
	});
}

$(() => {
	help = $('#help')
	loader = $('#loader')
	posts = $('#posts')

	button = $('#go')
	user = $('#user')

	$(button).click(get_posts)
	$(user).on('keypress', (e) => {
		if (e.which == 13) get_posts()
	})
	

	$(loader).attr('hidden', false)
	$(loader).hide()
})