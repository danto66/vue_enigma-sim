<template>
	<div class="prose">
		<h3>Persiapan</h3>
		<ul>
			<li>Pilih menu <em>Configuration</em></li>
			<li>Pilih konfigurasi <em>Rotor Type</em> dan <em>Reflector Type</em></li>
			<li>Pilih huruf yang akan ditukar melalui <em>Plugboard</em></li>
			<blockquote>
				Huruf yang ditambahkan di <em>Plugboard</em> akan ditukar saat sebelum dan sesudah proses enkripsi
			</blockquote>
			<li>Atur posisi <em>Rotor</em> dengan meng-klik tombol panah atas / bawah</li>
		</ul>

		<h3>Cara Enkripsi</h3>
		<ul>
			<li>Masukkan pesan pada bagian <em>Input Message</em></li>
			<li>Klik tombol <em>Encrypt</em></li>
			<li>Pesan yang sudah dienkripsi akan muncul di bagian <em>Encrypted Message</em></li>
			<blockquote>Saat proses enkripsi berlangsung posisi <em>Rotor</em> akan berubah</blockquote>
		</ul>

		<h3>Cara Dekripsi</h3>
		<ul>
			<li>
				Posisi <em>Rotor</em> dan konfigurasi <em>Rotor Type</em>, <em>Reflector Type</em>, dan <em>Plugboard</em> harus
				sama persis seperti saat mengenkripsi pesan
			</li>
			<li>Masukkan pesan yang akan didekripsi pada bagian <em>Input Message</em></li>
			<li>Klik tombol <em>Encrypt</em></li>
			<li>Pesan yang sudah didekripsi akan muncul di bagian <em>Encrypted Message</em></li>
		</ul>

		<h3>Cara Kerja</h3>
		<blockquote>Silahkan Googling cara kerja mesin enigma **Teehee~!</blockquote>
	</div>
</template>

<script>
export default {
	name: 'Help'
};
</script>

<style scoped>
em {
	padding: 2px 8px;
	background-color: #e5e7eb;
	border-radius: 4px;
	font-size: 14px;
	white-space: nowrap;
}
</style>
