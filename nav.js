let navbar= document.getElementById("nav");
function createNav({avatar_img}){
let code= `
      <div class="container">
        <div class="logo_section">
          <a ><img src="img/instagram.png" /></a>
        </div>
        <div class="search_section">
          <div class="wrapper">
            <img src="img/search.png" />
            <input type="search" name="" placeholder="Search" />
          </div>
        </div>
        <div class="navigation_section">
          <div class="wrapper">
            <ul>
              <li>
                <a><img src="img/home.png" class="home_img" /></a>
              </li>
              <li>
                <a><img src="img/message.png" class="message_img" /></a>
              </li>
              <li>
                <a
                  ><img src="img/add_photo.png" class="add_photo_img"
                /></a>
              </li>
              <li>
                <a><img src="img/compass.png" class="compass_img" /></a>
              </li>
              <li>
                <a ><img src="img/heart.png" class="heart_img" /></a>
              </li>
              <li>
                <a 
                  ><img src="${avatar_img}" class="avatar_image_img"
                /></a>
              </li>
              <li>
                <a><img src="img/turnoff.png" class="avatar_image_img"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

`
		navbar.innerHTML +=code

}

const avatarData= [
	{
		avatar_img:"img/izzy2.jpg"
	}
]