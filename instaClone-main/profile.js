let profile= document.getElementById("profile_section");


	

function createProfile({profile_img,profile_name,profile_nick_name}){

let code =
		 `<div class="container">
            <div class="profile_block">
              <img src="${profile_img}" />
              <div class="profile_block_desc">
                <a href=""><p>${profile_name}</p></a>
                <h5>${profile_nick_name}</h5>
              </div>
              <div class="switch">
                <a><span>switch</span></a>
              </div>
            </div>
          </div>
          `
 
	 profile.innerHTML +=code
}

const profileData= [

{
	profile_img: "img/profilepix.jpg",
profile_name: "kelzzz_chukwu",
profile_nick_name: "CEDRUS LIBANI",

}
]











