document.addEventListener("DOMContentLoaded", () => {
    const kpiProductos = document.getElementById("kpi-productos");
    const kpiEntradas = document.getElementById("kpi-entradas");
    const kpiBajoStock = document.getElementById("kpi-bajo-stock");
    const kpiNovedades = document.getElementById("kpi-novedades");

    // Helper functions to get and set numbers
    const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const parseNumber = (str) => parseInt(str.replace(/,/g, ''), 10);

    // State
    let productos = 1248;
    let entradas = 37;
    let bajoStock = 5;
    let novedades = 12;

    // Simulation loop
    setInterval(() => {
        // Randomly decide which KPI to update
        const changeType = Math.random();

        if (changeType < 0.4) {
            // 40% chance: Product enters stock, entradas and productos go up
            const amount = Math.floor(Math.random() * 3) + 1;
            entradas += amount;
            productos += amount;
            
            // Highlight effect for the change
            highlightChange(kpiEntradas, 'var(--color-success)');
            highlightChange(kpiProductos, 'var(--color-success)');
            
            // Randomly resolve a low stock issue
            if (bajoStock > 0 && Math.random() < 0.3) {
                bajoStock -= 1;
                highlightChange(kpiBajoStock, 'var(--color-success)');
            }
        } 
        else if (changeType < 0.7) {
            // 30% chance: Products leave stock (sales), productos goes down
            const amount = Math.floor(Math.random() * 4) + 1;
            productos = Math.max(0, productos - amount);
            
            // Highlight effect
            highlightChange(kpiProductos, 'var(--color-error)');
            
            // Randomly create a low stock issue
            if (Math.random() < 0.2) {
                bajoStock += 1;
                highlightChange(kpiBajoStock, 'var(--color-warning)');
            }
        } 
        else if (changeType < 0.85) {
            // 15% chance: New novelty reported
            novedades += 1;
            highlightChange(kpiNovedades, 'var(--color-warning)');
        }
        else {
            // 15% chance: Novelty resolved
            if (novedades > 0) {
                novedades -= 1;
                highlightChange(kpiNovedades, 'var(--color-success)');
            }
        }

        // Update the DOM
        if (kpiProductos) kpiProductos.textContent = formatNumber(productos);
        if (kpiEntradas) kpiEntradas.textContent = formatNumber(entradas);
        if (kpiBajoStock) kpiBajoStock.textContent = formatNumber(bajoStock);
        if (kpiNovedades) kpiNovedades.textContent = formatNumber(novedades);

    }, 2500); // Run simulation every 2.5 seconds

    // Function to add a subtle flash of color when a value changes
    function highlightChange(element, color) {
        if (!element) return;
        const originalColor = element.style.color;
        element.style.color = color;
        element.style.textShadow = `0 0 10px ${color}`;
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            element.style.color = originalColor;
            element.style.textShadow = 'none';
            element.style.transform = 'scale(1)';
        }, 600);
    }
});
