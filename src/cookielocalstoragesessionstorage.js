// Feature	Cookie	Local storage	Session storage
// Accessed on client or server side	Both server-side & client-side	client-side only	client-side only
// Lifetime	As configured using Expires option	until deleted	until tab is closed
// SSL support	Supported	Not supported	Not supported
// Maximum data size	4KB	5 MB	5MB


document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
localStorage.setItem('logo', document.getElementById('logo').value);
localStorage.getItem('logo');


// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();
