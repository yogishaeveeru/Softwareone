var form_fields = document.getElementsByTagName('input')
		form_fields[1].placeholder='Firstname..';
		form_fields[2].placeholder='Lastname..';
		form_fields[3].placeholder='* Email..';
		form_fields[4].placeholder='* Mobile..';
		for (var field in form_fields){	
			form_fields[field].className += ' form-control'
		}