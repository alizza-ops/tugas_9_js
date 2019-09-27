function tryforIn(){

	var jeruk = {

		harga:5000,
		berat:'1 kg',
		warna: color(),
		jenis: {
			jenis1: "madu",
			jenis2: "florida",
			jenis3: "brastagi",		
		}
	}

	for(var x in jeruk){
		console.log(jeruk[x]);
	}

}

function color(){
	return "hijau dan orange";
}



tryforIn();