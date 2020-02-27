let  category = '0', level = '0'
    	let quantity = 1

    	let action ='<a  class="delete" onclick="doDelete(event)"><i class="fas fa-trash"></i>&nbsp;&nbsp;Delete</a>'
    	let cost = quantity * 10000
    	let total = 0
    $(document).ready(function(){
    	
    	$('.alert').hide()
    	$('.result').hide()

    	$('a.addTalent').click( function(event){
    		
    		event.preventDefault();

    		if(validateInput()){
	    		addTalent()
	    		updateTotal()
	    	}

    	});

    	$('a.delete').click( function(event){
    		alert('im here')
    		event.preventDefault();
    		console.log(this)

    	});
    $("select.category").change(function(){
         category = $(this).children("option:selected").val();
        // alert(category)
       
    });
    $("select.level").change(function(){
         level = $(this).children("option:selected").val();
       
    });
    $("select.quantity").change(function(){
         quantity = $(this).children("option:selected").val();
         cost = quantity * 10000

         $('#cost').html(cost)
       
    });
    $("select.cost").change(function(){
         cost = $(this).children("option:selected").val();
       
    });
});  
function addTalent()
{
	
		$('.alert').hide()
		$('.result').show()

		const newRow = "<tr><td>"+ category + '</td><td>'+level + '</td><td>'+quantity + '</td><td>'+cost + '</td><td>'+action + '</td></tr>'

   		$('#table').append(newRow)
    
}

function updateTotal(){
	total = cost + total
	$('.total').html(total)
}

function deleteRow(){
	//total  = total -
	return 'a'
}

function doDelete(e){
	console.log(e)
	
	let cost = e.target.parentNode.parentNode.cells[3].outerText
	console.log(cost)
	total = total - cost
	$('.total').html(total)
	e.target.parentNode.parentNode.remove()	

}

function validateInput()
{
	if(category != 0 && level != 0 && quantity != 0){
		return true
	}else{
		$('.alert').show()

		return false
	}
}