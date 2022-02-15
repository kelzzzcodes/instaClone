let figure = document.getElementById("dynamic_figure")
function createFigures({user_img,user_name}){

	let code= `
				<div>
            <ul>
              <li>
                <a>
                <img src="${user_img}" /><span>${user_name}
                </span>
                </a>
              </li>  
            </ul>
          </div>



	`
 figure.innerHTML +=code

}
const figureData= [
		{
			user_img: "img/izzy2.jpg" ,
			user_name:"KelechiHilary" ,
		},

		{	
			user_img: "img/moonomens28.jpg" ,
			user_name: "GilbertSize" ,
		},
		{
			user_img: "img/profilepix.jpg" ,
			user_name: "Izzy2" ,
		},
		{
			user_img: "img/moonomens28.jpg" ,
			user_name: "Izzy2" ,
		}
]