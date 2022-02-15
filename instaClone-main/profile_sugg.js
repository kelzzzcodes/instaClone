let profile_sugg= document.getElementById("profile_sugg")
function createSugg({sugg_img,sugg_user_name,sugg_nick_name}){
	let code= `
		<div class="botttom_container">
            <div class="profile_follow_block">
              <img src="${sugg_img}" />
              <div class="follow_block_desc">
                <a><p>${sugg_user_name}</p></a>
                <h6>${sugg_nick_name}</h6>
              </div>
              <div class="follow">
                <a><span>follow</span></a>
              </div>
            </div>
        </div>

	`
	profile_sugg.innerHTML+=code
}

const suggData= [
   {
   		sugg_img:"img/profilepix.jpg" ,
   		sugg_user_name:"kelzzz_chukwu" ,
   		sugg_nick_name:"CEDRUS LIBANI" ,

   },
    {
   		sugg_img:"img/moonomens28.jpg" ,
   		sugg_user_name:"kelzzz_chukwu" ,
   		sugg_nick_name:"CEDRUS LIBANI" ,

   },
    {
   		sugg_img:"img/izzy2.jpg" ,
   		sugg_user_name:"kelzzz_chukwu" ,
   		sugg_nick_name:"CEDRUS LIBANI" ,

   }



]