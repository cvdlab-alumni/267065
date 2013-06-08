/**
 * @author Alessio Ciccarelli
 * Exercise5.js - lar to obj
 */


function export_lar_to_obj(v,fv) {
	
	var result ="# List of Vertices \n";
	
	v.forEach(function(item, index, array){
    if(item.length===2){
    	
    	result +="v "+item[0]+" "+item[1]+" 0 \n";
    }
    
    else{
    	result +="v "+item[0]+" "+item[1]+" "+item[2]+"\n";
    }
});
	result+="\n # Faces \n";
	
		fv.forEach(function(item, index, array){
			result +="f ";
   			item.forEach(function(item, index, array){
   				result +=item+" ";
   				});
   				result +="\n";
});
	return result;
}


