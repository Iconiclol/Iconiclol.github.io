async function fetchAndSendIP() {
  try {
    // Fetch IP as text (ipify returns plain text by default)
    const ipResponse = await fetch('https://api.ipify.org?format=text');
    const ip = await ipResponse.text();
    console.log('IP:', ip); // Verify this logs correctly

    // Send IP to PHP proxy
    const response = await fetch('https://mirenmedia.com/discord-proxy.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ip })
    });

    // Check if the response is OK (status 2xx)
    if (!response.ok) {
      // Log the error response text to the console
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to send IP');
    }

    // Attempt to parse the response as JSON
    let responseData;
    try {
      responseData = await response.json();
      console.log('Proxy response:', responseData);
    } catch (error) {
      console.error('Error parsing response as JSON:', error);
      const text = await response.text();
      console.error('Response text:', text);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchAndSendIP();
