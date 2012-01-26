
e = document.getElementsByTagName('textarea');

if(e.length) {
	var ignore;
	
	for(i = 0; i < e.length; i++) {
		t = e[i];
		
		t.addEventListener('keypress', function(event) {
			c = String.fromCharCode(event.keyCode);
			s = t.selectionStart;

			i = ignore;
			ignore = null;

			if(
				s != i && 
				(
					s == 0 || 
					s > 2 && t.value[s-1] == ' ' && ".?!".indexOf(t.value[s-2]) != -1
				)
			) {
				t.value = t.value.substring(0, s) + c.toUpperCase() + t.value.substring(s);
				t.selectionStart = s + 1;
				t.selectionEnd = s + 1;
				event.preventDefault();
				return true;
			}
		});
		
		t.addEventListener('keydown', function(k) {
			k = k.keyCode;
			if(k == 8) {
				ignore = t.selectionStart - 1;
			} else if(k == 46) {
				ignore = t.selectionStart;
			}
		});
	}
}
