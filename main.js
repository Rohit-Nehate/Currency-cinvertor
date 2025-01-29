let URL = "https://v6.exchangerate-api.com/v6/ff1229ef61066ffb39f1b824/latest/"
let flagAPI = "https://flagsapi.com/US/flat/64.png"
let sels = document.querySelectorAll(".sel")
let rates;

let result = document.querySelector('.result')


let input= document.querySelector('.input')

let btn = document.querySelector('.btn')
//country data


let keys = Object.keys(Clist)


sels.forEach(sel=>{
	
	
	keys.forEach(key =>{
		
		let child = document.createElement("option")
		
		child.value = key
		child.innerText= key
		
		sel.appendChild(child)
		
		
	})

})


//api call 
let afuc= async()=>{
	
	let URLFINAL = `${URL}${sels[0].value}`
	



	let response= await fetch(URLFINAL)
let data = await response.json()

console.log(data)

rates= data.conversion_rates
	
	let rate = rates[sels[1].value]
	if(data.result=="success")
	{result.innerText= ` ${input.value} ${sels[0].value} =  ${input.value*rate} ${sels[1].value}`
	}
	
	else{alert('API IS DEAD SAAR')}

}



sels.forEach(sel=>{
	
	sel.addEventListener('change',(event)=>{
		
		let ans = event.target.value
		
		
		let image = sel.parentElement.querySelector('img')
		image.src= `https://flagsapi.com/${Clist[ans]}/flat/64.png`
	})
	
})

btn.addEventListener('click',afuc)