function openPdf(e, path, redirect) {
        // stop the browser from going to the href
        e = e || window.event; // for IE
        e.preventDefault(); 

        // launch a new window with your PDF
        window.open(path);

        // redirect current page to new location
        window.location = redirect;
}