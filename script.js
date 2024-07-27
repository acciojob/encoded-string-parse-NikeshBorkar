const parseCode = (str) => {
  // your code here
	let n=str.length
	let x=""
	let arr=[]
	for(let i=0;i<n;i++){
		if(str[i]==0){
			if(x==""){
				x=""
			}else{
				arr.push(x)
				x=""
			}
		}else{
			x+=str[i]
		}
	}
	arr.push(x)
	let obj={}
	obj.firstName=arr[0]
	obj.lastName=arr[1]
	obj.id=arr[2]
	return obj 
	
};

// Do not change the code below
 const str = prompt("Enter str: ");
 alert(JSON.stringify(parseCode(str)));  
