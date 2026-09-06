function pesan() {
    let nomor = "6281917214640";

    let pesan = "Halo, saya ingin memesan telur ayam.";

    let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
}