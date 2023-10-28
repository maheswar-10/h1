self.__BUILD_MANIFEST = function(s, c, e, t, i) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/robots.txt",
                destination: "/api/robots"
            }, {
                source: "/sitemap",
                destination: "/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-05b27410f3eae19c.js"],
        "/_error": ["static/chunks/pages/_error-b2067a01cc62b3fe.js"],
        "/blog": [s, t, c, e, "static/chunks/pages/blog-a34a5c0e97901f40.js"],
        "/blog/[slug]": [s, t, c, e, "static/chunks/pages/blog/[slug]-77cb9cf997d806c9.js"],
        "/checkout/[...idInvoice]": [s, t, c, i, e, "static/chunks/pages/checkout/[...idInvoice]-c711bcd9aca22dfd.js"],
        "/contact-form": [s, t, "static/chunks/9198-189c9ea729df928e.js", "static/chunks/7333-34cd0b2f6075c93f.js", "static/css/b44e452a9b15cc82.css", "static/chunks/4853-5e0e70b113a27978.js", c, e, "static/chunks/pages/contact-form-2de7f6ac9ffad4ce.js"],
        "/error/404": [s, c, e, "static/chunks/pages/error/404-9fa8faf225fbfa95.js"],
        "/error/500": [s, c, e, "static/chunks/pages/error/500-c7e9843829177be8.js"],
        "/invoice/print/[idInvoice]": ["static/chunks/65291039-4f3f6955e28c2474.js", "static/chunks/1b8dab7b-31f3d25e51dea378.js", "static/chunks/228771e0-1847fb34b4287f6e.js", "static/chunks/c9184924-889d510402c9534a.js", s, t, "static/chunks/2648-7bebc0e130efedcc.js", c, e, "static/chunks/pages/invoice/print/[idInvoice]-05a5818d903383db.js"],
        "/invoice/[idInvoice]": [s, t, c, e, "static/chunks/pages/invoice/[idInvoice]-408db6b345675da5.js"],
        "/[[...slug]]": [s, c, i, e, "static/chunks/pages/[[...slug]]-b6649e74fdac9366.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/[[...slug]]"]
    }
}("static/chunks/879-85d7ccaa5dc0ee29.js", "static/chunks/1996-a5227a4d5df4b417.js", "static/css/c2c4e2b9bf1b95af.css", "static/chunks/120-9aa0e12b8112f0af.js", "static/chunks/3391-9cc3199b88e4e34e.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();