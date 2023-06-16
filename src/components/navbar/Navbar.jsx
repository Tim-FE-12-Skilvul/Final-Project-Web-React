import './Navbar.css'

function Navbar () {
    return(
        <body>
       
    <nav>
        <div id="logoNav">
            <h4>Stunt Free</h4>
        </div>
        
        <div id="menuNav">
            <ul>
                <li><a href="./../index.html">Beranda</a></li>
                <li class="dropdown">
                    <a href="#" class="active">Kategori</a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Cek Kesehatan</a></li>
                        <li><a href="#">Konsultasi</a></li>
                    </ul>
                </li>
                <li><a href="./../articles/berita.html">Berita</a></li>
            </ul>
        </div>
        <div id="pencarianNav">
            <div class="search-container">
                <form>
                    <input type="text" placeholder="Cari..." />
                    <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
                </form>
            </div>
            <div class="profile-container">
                <a href="./../Login/login.html">
                    <i class="fa-solid fa-circle-user"></i>
                </a>
            </div>
        </div>
        <div id="hamburger-container">
            <i class="fa-solid fa-bars"></i>
        </div>
    </nav>
    </body>
    

    )
}

export default Navbar;
