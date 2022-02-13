let card = document.getElementById("dynamic_Card");
function createCard({ id, profileimg, username, location, post_image }) {
  let code = `
			<div class="card-wrapper">
			<div class="wrapper_top">
				<a href="" class="profile_img_a"
				><img src="${profileimg}" class="profile_img" />
				</a>

				<div class="profile_desc">
				<a href=""><h4>${username}</h4></a>
				<a href=""><h5>${location}</h5></a>
				</div>
				<a href="" class="ellipsis_img_a"
				><img src="img/ellipsis_h.png" class="ellipsis_img" />
				</a>
			</div>

			<div class="wrapper_center">
				<img src="${post_image}" />
			</div>

			<div class="wrapper_bottom">
				<div class="reaction_wrapper">
				<a href=""><img src="img/heart.png" /></a>
				<a href=""><img src="img/messagereaction.png" /></a>
				<a href=""><img src="img/message.png" /></a>
				<img src="img/save.png" id="bookmark-${id}" onclick="changeImage('bookmark-${id}')" />
				</div>
			</div>
			<div class="line"></div>
			<div class="wrapper_last">
				<div class="last_container">
				<div>
					<a href="" class="last_container_a"
					><img src="img/smiley.png"
					/></a>
				</div>
				<div class="input_section">
					<input type="text" name="" placeholder="Add a comment..." />
				</div>
				<div class="button_section">
					<button>Post</button>
				</div>
				</div>
			</div>
			</div>
 		`;

  card.innerHTML += code;
}

const itemData = [
  {
	id: 1,
    profileimg: "img/izzy2.jpg",
    username: "Gilbertsize",
    location: "PH",
    post_image: "img/izzy2.jpg",
  },
  {
	id: 2,
    profileimg: "img/moonomens28.jpg",
    username: "Kelechi",
    location: "PH",
    post_image: "img/moonomens28.jpg",
  },
  {
	id: 3,
    profileimg: "img/profilepix.jpg",
    username: "Hilary",
    location: "PH",
    post_image: "img/profilepix.jpg",
  },
];