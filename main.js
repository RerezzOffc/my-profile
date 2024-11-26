function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open'); // Tutup sidebar
      overlay.style.display = 'none'; // Sembunyikan overlay
    } else {
      sidebar.classList.add('open'); // Buka sidebar
      overlay.style.display = 'block'; // Tampilkan overlay
    }
  }
  
  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    sidebar.classList.remove('open'); // Hapus kelas "open"
    overlay.style.display = 'none'; // Sembunyikan overlay
  }
  
