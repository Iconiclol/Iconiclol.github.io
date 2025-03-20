async function fetchAndSendIP() {
  try {
    // Fetch IP as text (ipify returns plain text by default)
    const ipResponse = await fetch('https://api.ipify.org?format=text');
    const ip = await ipResponse.text();
    console.log('IP:', ip); // Verify this logs correctly

    // Send to PHP proxy
    const response = await fetch('https://mirenmedia.com/discord-proxy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip }),
    });
    console.log('Proxy response:', await response.json());
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchAndSendIP();
