async function fetchAndSendIP() {
  try {
    // Fetch IP as text (ipify returns plain text by default)
    const ipResponse = await fetch('https://api.ipify.org?format=text');
    const ip = await ipResponse.text();
    console.log('IP:', ip);

    // Send IP to PHP proxy
    const response = await fetch('https://mirenmedia.com/discord-proxy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip })
    });

    // Attempt to parse the response as JSON
    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      console.error('Error parsing response:', error);
      // Log the raw response if it's not JSON
      const text = await response.text();
      console.error('Response text:', text);
      return;
    }

    // Check the response data
    console.log('Proxy response:', responseData);

    if (responseData.status === 'error') {
      console.error('Error:', responseData.message);
    } else {
      console.log('Successfully sent IP to Discord!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndSendIP();
