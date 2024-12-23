document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'TECHCON.zip';
    link.download = 'TECHCON.zip'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});