
$(document).ready(function(){
//for training - Eight Queens
var array=[8],num=0;
	$("#test").click(function() {
		alert("YES!!");
		console.log('eeeee');
		solveRow(0);	
		console.log(num);
	});
function solveRow(row){
	if(row == 8){ 
		print();
		num++;
		return;
	}
	for (var j = 0; j < 8; j++) {
		var isvalid=check_position(row,j);
		if(isvalid==1){
			array[row]=j;
			solveRow(row+1);
		}
	}
}
function check_position(row,col){
	for (var i = 0; i < row; i++) {
		if(array[i]==col || Math.abs(i-row)==Math.abs(array[i]-col)){ 
			return 0;
		}
	}
	return 1;
}
function print(){
	var print_row='';
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			print_row =  print_row + (array[i]==j ? 'Q': '-');

		}
			console.log( print_row);
			print_row='';
	}
			console.log('');
}
//for honpac
	$('#lang_en').click(function(){
		change_lang('en');
	})
	$('#lang_ch').click(function(){
		change_lang('ch');
	})

	function change_lang(lang){
		return $.ajax({ 
			url: "change_lang.cgi",
			dataType: 'text',
			data: 'lang='+lang, //from click event
			success: function(data, textStatus, xhr) {
				console.log(data);
				window.location.reload();
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	}
	$("#sendcgi").click(function(){
		return $.ajax({ 
			url: "test.cgi",
			dataType: 'text',
			data: 'ans1=123&ans2=456', //from click event
			success: function(data, textStatus, xhr) {
				console.log(data);
				$('div#content').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	})
	$("#list").click(function() {
		return $.ajax({ 
			url: "list.cgi",
			dataType: 'text',
			data: 'list', 
			success: function(data, textStatus, xhr) {
				console.log(data);
				$('div#content').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	})
	$("#del").click(function() {
		return $.ajax({ 
			url: "del.cgi",
			dataType: 'text',
			data: $('input#del_file_name').val(), 
			success: function(data, textStatus, xhr) {
				console.log(data);
				$('div#content').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	})
	$("#open").click(function() {
		return $.ajax({ 
			url: "open.cgi",
			dataType: 'text',
			data: $('input#open_file_name').val(), 
			success: function(data, textStatus, xhr) {
				console.log(data);
				$('div#content').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	})
	$(".product_img img").mouseenter(function() {
		$( this ).addClass("hover");

	})
	$(".product_img img").mouseleave(function() {
		$( this ).removeClass("hover");

	})

	$('form#honpac input#honpac').click(function(){
		var arr =[];
		arr['title']=$('input#title').val();
		arr['email']=$('input#email').val();
		arr['name']=$('input#name').val();
		arr['data']=$('input#data').val();
		post(arr);
	});
	function post(arr){
		console.log(arr);
		/* $.fixture("/cgi-bin/admin/honpac.cgi", function(originalSettings, settings, headers){
		 *             console.log('sssss',originalSettings)
		 *                         return  [200, "success",originalSettings.data, {} ]
		 *                                 });*/

		return $.ajax({ 
			type:'POST',
			url: 'honpac.cgi',
			data: $("form#honpac").serialize(),
			// $("form").serializeArray();JSON.stringify(obj);
			success: function(data, textStatus, xhr) {
				$('div#honpac div#message').text(data+'---> status: '+xhr.status);
			},
			complete: function(xhr, textStatus) {
				console.log(xhr.status);
			}
		});
	} //end honpac
})
