// WebXR requires HTTPS, so the site doesn't work if someone manually enters
// the URL and ends up using HTTP. To work around this, force redirect from
// http to https for non-localhost addresses.
if (window.location.protocol == "http:" &&
    window.location.hostname != "localhost" && 
    window.location.hostname != "127.0.0.1" &&
    window.location.hostname != "[::1]") {
    window.location = window.location.href.replace('http:', 'https:');        
}