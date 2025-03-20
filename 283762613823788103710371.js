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
      body: JSON.stringify({ ip }), // Send the IP in the body as JSON
    });

    // Parse and log the response
    const responseData = await response.json();
    console.log('Proxy response:', responseData);

    // Check if there's an error in the response
    if (responseData.status === 'error') {
      console.error('Error:', responseData.message);
    } else {
      console.log('Successfully sent IP to Discord!');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to fetch and send the IP
fetchAndSendIP();
