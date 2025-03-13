document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainMenu = document.getElementById('main-menu');
    const playButton = document.getElementById('play-button');
    const quitButton = document.getElementById('quit-button');
    const soundButton = document.getElementById('sound-button');
    const settingsButton = document.getElementById('settings-button');
    const gameCanvas = document.getElementById('game-canvas');

    // Menampilkan splash screen selama 3 detik
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        mainMenu.classList.remove('hidden');
    }, 3000);

    // Event listener untuk tombol Play
    playButton.addEventListener('click', () => {
        mainMenu.classList.add('hidden');
        gameCanvas.classList.remove('hidden');
        // Pindah ke tampilan level di sini
    });

    // Event listener untuk tombol Quit
    quitButton.addEventListener('click', () => {
        window.close(); // Menutup jendela (hanya berfungsi di beberapa browser)
    });

    // Event listener untuk tombol Suara
    let soundOn = true;
    soundButton.addEventListener('click', () => {
        soundOn = !soundOn;
        soundButton.textContent = `Suara: ${soundOn ? 'ON' : 'OFF'}`;
        // Tambahkan logika untuk mengatur suara di sini
    });

    // Event listener untuk tombol Setting
    settingsButton.addEventListener('click', () => {
        // Tambahkan logika untuk pengaturan volume di sini
        alert('Pengaturan volume belum diimplementasikan.');
    });
});