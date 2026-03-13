/* ============================================================
   AUTOSTOCK — API Terminal
   Controla el cambio de código en la sección de API.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.t-tab');
    const codeContainer = document.getElementById('terminalCode');
    const endpointText = document.getElementById('terminalEndpoint');

    const snippets = {
        bash: {
            endpoint: 'GET /api/v1/products/stock',
            code: `<pre><code><span class="code-comment">// Query stock level</span>
curl -X GET "https://api.autostock.online/v1/stock/AST-2024" \\
     -H "Authorization: Bearer YOUR_TOKEN"</code></pre>`
        },
        python: {
            endpoint: 'Python SDK',
            code: `<pre><code><span class="code-comment"># Install: pip install autostock-sdk</span>
import autostock

client = autostock.Client('YOUR_API_KEY')
stock = client.products.get_stock('AST-2024')
print(f"Stock: {stock.quantity}")</code></pre>`
        },
        js: {
            endpoint: 'Node.js / Browser',
            code: `<pre><code><span class="code-comment">// Using Fetch API</span>
const response = await fetch('https://api.autostock.online/v1/products', {
  headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
});

const data = await response.json();
console.log(data);</code></pre>`
        }
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const lang = tab.getAttribute('data-lang');

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Fade effect and update content
            codeContainer.style.opacity = 0.3;

            setTimeout(() => {
                if (endpointText) {
                    endpointText.textContent = snippets[lang].endpoint;
                }
                codeContainer.innerHTML = snippets[lang].code;
                codeContainer.style.opacity = 1;
            }, 150);
        });
    });
});
