export const DOM = {
    get: (selector) => document.querySelector(selector),
    
    render: (container, html) => {
        if (container) container.innerHTML = html;
    },

    getValue: (selector) => document.querySelector(selector)?.value || '',
    
    clear: (...selectors) => {
        selectors.forEach(s => { const el = document.querySelector(s); if(el) el.value = ''; });
    }
};