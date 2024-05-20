let copy = document.getElementById("copy");
let newurl = document.getElementById("shorturl");
let stat = document.getElementById("stat");

copy.onclick = () => {
    newurl.select();
    console.log(newurl.value);
    if (stat.classList.contains('stat-anim')) {
        stat.classList.remove('stat-anim');
        
        // Force reflow
        void stat.offsetWidth;
    }
    stat.classList.toggle('stat-anim');
    window.navigator.clipboard.writeText(newurl.value);
}